'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  unoptimized?: boolean;
}

// ✅ PERFORMANCE: Optimized Image Component with advanced features
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  style,
  onLoad,
  onError,
  loading = 'lazy',
  unoptimized = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || (
    fill ? '100vw' :
    width ? `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${width}px` :
    '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  );

  // Generate placeholder blur data URL
  const generateBlurDataURL = (w: number = 10, h: number = 10) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, w, h);
    }
    return canvas.toDataURL();
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Error fallback
  if (hasError) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center text-gray-400 text-sm ${className}`}
        style={{ width, height, ...style }}
      >
        <span>Image unavailable</span>
      </div>
    );
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={fill ? undefined : { width, height, ...style }}
    >
      {(isInView || priority) && (
        <>
          {/* Loading placeholder */}
          {!isLoaded && (
            <div
              className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center"
              style={{ width, height }}
            >
              <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            </div>
          )}

          <Image
            src={src}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            priority={priority}
            quality={quality}
            placeholder={placeholder}
            blurDataURL={blurDataURL || (placeholder === 'blur' ? generateBlurDataURL() : undefined)}
            sizes={responsiveSizes}
            className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleLoad}
            onError={handleError}
            loading={loading}
            unoptimized={unoptimized}
            {...props}
          />
        </>
      )}
    </div>
  );
}

// ✅ PERFORMANCE: Background Image Component with optimization
interface OptimizedBackgroundImageProps {
  src: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  priority?: boolean;
  quality?: number;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function OptimizedBackgroundImage({
  src,
  alt = '',
  children,
  className = '',
  priority = false,
  quality = 75,
  overlay = false,
  overlayOpacity = 0.5,
}: OptimizedBackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const bgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (bgRef.current) {
      observer.observe(bgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  return (
    <div ref={bgRef} className={`relative ${className}`}>
      {(isInView || priority) && (
        <>
          <OptimizedImage
            src={src}
            alt={alt}
            fill
            priority={priority}
            quality={quality}
            className="object-cover"
            sizes="100vw"
            onLoad={() => setIsLoaded(true)}
          />

          {overlay && (
            <div
              className="absolute inset-0 bg-black transition-opacity duration-300"
              style={{
                opacity: isLoaded ? overlayOpacity : 0
              }}
            />
          )}
        </>
      )}

      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}

// ✅ PERFORMANCE: Image Gallery with progressive loading
interface OptimizedGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  className?: string;
  priority?: number; // Number of images to load with priority
}

export function OptimizedGallery({
  images,
  className = '',
  priority = 2
}: OptimizedGalleryProps) {
  return (
    <div className={`grid gap-4 ${className}`}>
      {images.map((image, index) => (
        <OptimizedImage
          key={`${image.src}-${index}`}
          src={image.src}
          alt={image.alt}
          width={image.width || 300}
          height={image.height || 200}
          priority={index < priority}
          quality={index < priority ? 90 : 75}
          className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}
    </div>
  );
}

// ✅ PERFORMANCE: Utility function to preload critical images
export function preloadImages(imageUrls: string[]) {
  if (typeof window === 'undefined') return Promise.allSettled([]);

  const preloadPromises = imageUrls.map((url) => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  });

  return Promise.allSettled(preloadPromises);
}

// ✅ PERFORMANCE: Hook for image preloading
export function useImagePreload(imageUrls: string[]) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadImages = async () => {
      const results = await preloadImages(imageUrls);
      const loaded = new Set<string>();

      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          loaded.add(imageUrls[index]);
        }
      });

      setLoadedImages(loaded);
    };

    loadImages();
  }, [imageUrls]);

  return loadedImages;
}
