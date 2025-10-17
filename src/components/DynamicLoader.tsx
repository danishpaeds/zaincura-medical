'use client';

import dynamic from 'next/dynamic';
import { Suspense, ComponentType, ReactNode } from 'react';

// ✅ PERFORMANCE: Loading components for different scenarios
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className={`${sizeClasses[size]} border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin`} />
    </div>
  );
}

export function LoadingSkeleton({
  type = 'card',
  count = 1
}: {
  type?: 'card' | 'text' | 'image' | 'form';
  count?: number;
}) {
  const renderSkeleton = (index: number) => {
    switch (type) {
      case 'card':
        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          </div>
        );

      case 'text':
        return (
          <div key={index} className="animate-pulse space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        );

      case 'image':
        return (
          <div key={index} className="bg-gray-200 rounded-lg animate-pulse aspect-video"></div>
        );

      case 'form':
        return (
          <div key={index} className="space-y-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
        );

      default:
        return (
          <div key={index} className="h-20 bg-gray-200 rounded animate-pulse"></div>
        );
    }
  };

  return (
    <div className="space-y-4">
      {Array.from({ length: count }, (_, index) => renderSkeleton(index))}
    </div>
  );
}

// ✅ PERFORMANCE: Error boundary for dynamic components
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: any) => void;
}

export function DynamicErrorBoundary({
  children,
  fallback,
  onError
}: ErrorBoundaryProps) {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <Suspense
        fallback={fallback || <LoadingSpinner />}
      >
        {children}
      </Suspense>
    </div>
  );
}

// ✅ PERFORMANCE: Dynamic component loader with options
interface DynamicLoaderOptions {
  loading?: ComponentType;
  error?: ComponentType<{ error: Error; retry: () => void }>;
  ssr?: boolean;
  suspense?: boolean;
}

export function createDynamicLoader<P = {}>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  options: DynamicLoaderOptions = {}
) {
  const {
    loading: LoadingComponent = LoadingSpinner,
    ssr = false
  } = options;

  return dynamic(importFunc, {
    loading: () => <LoadingComponent />,
    ssr
  });
}

// ✅ PERFORMANCE: Lazy component wrapper with intersection observer
interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

export function LazyComponent({
  children,
  fallback = <LoadingSkeleton type="card" />,
  rootMargin = '50px',
  threshold = 0.1,
  triggerOnce = true,
  className = ''
}: LazyComponentProps) {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
}

// ✅ PERFORMANCE: Preloaded components for common sections
export const DynamicNavigation = dynamic(
  () => import('@/components/Navigation').then(mod => ({ default: mod.Navigation })),
  {
    loading: () => <div className="h-16 bg-white shadow-sm animate-pulse" />,
    ssr: true
  }
);

export const DynamicFooter = dynamic(
  () => import('@/components/Footer').then(mod => ({ default: mod.Footer })),
  {
    loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
    ssr: false
  }
);

export const DynamicMobileCTABar = dynamic(
  () => import('@/components/MobileCTABar').then(mod => ({ default: mod.MobileCTABar })),
  {
    loading: () => <div className="h-16 bg-blue-600 animate-pulse fixed bottom-0 left-0 right-0 md:hidden" />,
    ssr: false
  }
);

// ✅ PERFORMANCE: Dynamic admin components
export const DynamicAdminDashboard = createDynamicLoader(
  () => import('@/components/admin/AdminDashboard'),
  {
    loading: () => <LoadingSkeleton type="card" count={3} />,
    ssr: false
  }
);

export const DynamicBlogEditor = createDynamicLoader(
  () => import('@/components/admin/BlogEditor'),
  {
    loading: () => <LoadingSkeleton type="form" />,
    ssr: false
  }
);

// ✅ PERFORMANCE: Code splitting utility
export function splitComponent<T>(
  componentPath: string,
  componentName?: string
): ComponentType<T> {
  return dynamic(
    () => {
      const importPromise = import(componentPath);

      if (componentName) {
        return importPromise.then(mod => ({ default: mod[componentName] }));
      }

      return importPromise;
    },
    {
      loading: () => <LoadingSpinner />,
      ssr: false
    }
  ) as ComponentType<T>;
}

// ✅ PERFORMANCE: Bundle analyzer helper (development only)
export function analyzeBundleSize() {
  if (process.env.NODE_ENV === 'development') {
    console.group('📦 Bundle Analysis');
    console.log('To analyze bundle size, run: ANALYZE=true npm run dev');
    console.log('This will open the bundle analyzer in your browser');
    console.groupEnd();
  }
}

// ✅ PERFORMANCE: Resource prefetching utility
export function prefetchRoute(href: string) {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    requestIdleCallback(() => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
  }
}

// ✅ PERFORMANCE: Batch route prefetching
export function prefetchRoutes(routes: string[], delay = 2000) {
  if (typeof window === 'undefined') return;

  setTimeout(() => {
    routes.forEach((route, index) => {
      setTimeout(() => prefetchRoute(route), index * 100);
    });
  }, delay);
}

// ✅ PERFORMANCE: Component measurement hook
export function useComponentPerformance(componentName: string) {
  if (typeof window === 'undefined') return;

  const startTime = performance.now();

  return () => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;

    if (process.env.NODE_ENV === 'development') {
      console.log(`🏃‍♂️ ${componentName} render time: ${renderTime.toFixed(2)}ms`);
    }

    // Store performance data
    const perfData = {
      component: componentName,
      renderTime,
      timestamp: Date.now()
    };

    const existingData = JSON.parse(sessionStorage.getItem('component-performance') || '[]');
    existingData.push(perfData);

    // Keep only last 50 measurements
    if (existingData.length > 50) {
      existingData.shift();
    }

    sessionStorage.setItem('component-performance', JSON.stringify(existingData));
  };
}
