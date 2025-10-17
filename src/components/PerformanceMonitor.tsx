'use client';

import { useEffect } from 'react';

// ✅ PERFORMANCE: Performance monitoring component
export function PerformanceMonitor() {
  useEffect(() => {
    // Only run performance monitoring in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      try {
        // Web Vitals measurements
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');

        const metrics = {
          // Core Web Vitals
          fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          lcp: 0, // Will be measured by observer
          cls: 0, // Will be measured by observer
          fid: 0, // Will be measured by observer

          // Navigation timing
          domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart || 0,
          loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart || 0,

          // Resource timing
          totalLoadTime: navigation?.loadEventEnd - navigation?.fetchStart || 0,
          dnsLookup: navigation?.domainLookupEnd - navigation?.domainLookupStart || 0,
          tcpConnection: navigation?.connectEnd - navigation?.connectStart || 0,
          serverResponse: navigation?.responseEnd - navigation?.requestStart || 0,

          // Memory usage (if available)
          usedJSHeapSize: (performance as any).memory?.usedJSHeapSize || 0,
          totalJSHeapSize: (performance as any).memory?.totalJSHeapSize || 0,

          // Connection info
          effectiveType: (navigator as any).connection?.effectiveType || 'unknown',
          downlink: (navigator as any).connection?.downlink || 0,
          rtt: (navigator as any).connection?.rtt || 0,

          // Device info
          devicePixelRatio: window.devicePixelRatio || 1,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          userAgent: navigator.userAgent.substring(0, 100), // Truncated for privacy

          // Timestamp
          timestamp: Date.now(),
          url: window.location.pathname
        };

        // Send metrics to service worker
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'PERFORMANCE_METRICS',
            metrics
          });
        }

        // Log in development for debugging
        if (process.env.NODE_ENV === 'development') {
          console.group('🚀 Performance Metrics');
          console.log('First Contentful Paint:', `${metrics.fcp.toFixed(2)}ms`);
          console.log('DOM Content Loaded:', `${metrics.domContentLoaded.toFixed(2)}ms`);
          console.log('Total Load Time:', `${metrics.totalLoadTime.toFixed(2)}ms`);
          console.log('Connection Type:', metrics.effectiveType);
          console.log('Downlink Speed:', `${metrics.downlink} Mbps`);
          console.groupEnd();
        }

        // Store metrics for analytics (you can integrate with your analytics service)
        sessionStorage.setItem('performance-metrics', JSON.stringify(metrics));

      } catch (error) {
        console.warn('Performance monitoring error:', error);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measurePerformance, 100);
      });
    }

    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];

          console.log('LCP:', `${lastEntry.startTime.toFixed(2)}ms`);

          // Update metrics
          const storedMetrics = sessionStorage.getItem('performance-metrics');
          if (storedMetrics) {
            const metrics = JSON.parse(storedMetrics);
            metrics.lcp = lastEntry.startTime;
            sessionStorage.setItem('performance-metrics', JSON.stringify(metrics));
          }
        });

        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }

          console.log('CLS:', clsValue.toFixed(4));

          // Update metrics
          const storedMetrics = sessionStorage.getItem('performance-metrics');
          if (storedMetrics) {
            const metrics = JSON.parse(storedMetrics);
            metrics.cls = clsValue;
            sessionStorage.setItem('performance-metrics', JSON.stringify(metrics));
          }
        });

        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Measure First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fid = (entry as any).processingStart - entry.startTime;
            console.log('FID:', `${fid.toFixed(2)}ms`);

            // Update metrics
            const storedMetrics = sessionStorage.getItem('performance-metrics');
            if (storedMetrics) {
              const metrics = JSON.parse(storedMetrics);
              metrics.fid = fid;
              sessionStorage.setItem('performance-metrics', JSON.stringify(metrics));
            }
          }
        });

        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor long tasks
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn('Long task detected:', `${entry.duration.toFixed(2)}ms`);
            }
          }
        });

        longTaskObserver.observe({ entryTypes: ['longtask'] });

        // Cleanup observers on unmount
        return () => {
          lcpObserver.disconnect();
          clsObserver.disconnect();
          fidObserver.disconnect();
          longTaskObserver.disconnect();
        };

      } catch (error) {
        console.warn('Performance observer error:', error);
      }
    }

    // Monitor resource loading performance
    const resourceObserver = new PerformanceObserver((list) => {
      const resources = list.getEntries();

      resources.forEach((resource) => {
        // Flag slow-loading resources
        if (resource.duration > 1000) {
          console.warn('Slow resource:', resource.name, `${resource.duration.toFixed(2)}ms`);
        }

        // Flag large resources
        if ((resource as any).transferSize > 100000) { // > 100KB
          console.warn('Large resource:', resource.name, `${((resource as any).transferSize / 1024).toFixed(2)}KB`);
        }
      });
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => {
      resourceObserver.disconnect();
    };

  }, []);

  return null; // This component doesn't render anything
}

// ✅ PERFORMANCE: Performance budget checker
export function checkPerformanceBudget() {
  const metrics = sessionStorage.getItem('performance-metrics');
  if (!metrics) return;

  const data = JSON.parse(metrics);
  const budget = {
    fcp: 1800, // 1.8s
    lcp: 2500, // 2.5s
    fid: 100,  // 100ms
    cls: 0.1,  // 0.1
    totalLoadTime: 3000 // 3s
  };

  const warnings = [];

  if (data.fcp > budget.fcp) {
    warnings.push(`FCP exceeded budget: ${data.fcp.toFixed(2)}ms > ${budget.fcp}ms`);
  }

  if (data.lcp > budget.lcp) {
    warnings.push(`LCP exceeded budget: ${data.lcp.toFixed(2)}ms > ${budget.lcp}ms`);
  }

  if (data.fid > budget.fid) {
    warnings.push(`FID exceeded budget: ${data.fid.toFixed(2)}ms > ${budget.fid}ms`);
  }

  if (data.cls > budget.cls) {
    warnings.push(`CLS exceeded budget: ${data.cls.toFixed(4)} > ${budget.cls}`);
  }

  if (data.totalLoadTime > budget.totalLoadTime) {
    warnings.push(`Total load time exceeded budget: ${data.totalLoadTime.toFixed(2)}ms > ${budget.totalLoadTime}ms`);
  }

  if (warnings.length > 0 && process.env.NODE_ENV === 'development') {
    console.group('⚠️ Performance Budget Warnings');
    warnings.forEach(warning => console.warn(warning));
    console.groupEnd();
  }

  return warnings;
}
