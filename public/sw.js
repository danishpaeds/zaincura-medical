// ✅ PERFORMANCE: Advanced Service Worker for Caching and Performance
const CACHE_NAME = 'zaincura-v1';
const STATIC_CACHE_NAME = 'zaincura-static-v1';
const DYNAMIC_CACHE_NAME = 'zaincura-dynamic-v1';
const IMAGE_CACHE_NAME = 'zaincura-images-v1';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/services/',
  '/about/',
  '/contact/',
  '/book/',
  '/brand/logo.png',
  '/favicon.png',
  '/favicon.ico',
  '/_next/static/css/',
  '/_next/static/chunks/main-app.js',
  '/_next/static/chunks/polyfills.js'
];

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  NETWORK_ONLY: 'network-only',
  CACHE_ONLY: 'cache-only'
};

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');

  event.waitUntil(
    Promise.all([
      // Cache critical static resources
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(CRITICAL_RESOURCES.filter(url => !url.includes('_next')));
      }),

      // Cache Next.js static assets
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CRITICAL_RESOURCES.filter(url => url.includes('_next')));
      })
    ]).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');

  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME &&
                cacheName !== STATIC_CACHE_NAME &&
                cacheName !== DYNAMIC_CACHE_NAME &&
                cacheName !== IMAGE_CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),

      // Take control of all clients
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other protocols
  if (!request.url.startsWith('http')) {
    return;
  }

  event.respondWith(handleRequest(request, url));
});

async function handleRequest(request, url) {
  try {
    // Different strategies for different resource types
    if (isStaticAsset(url)) {
      return await cacheFirstStrategy(request, STATIC_CACHE_NAME);
    }

    if (isImage(url)) {
      return await cacheFirstStrategy(request, IMAGE_CACHE_NAME);
    }

    if (isNextJSAsset(url)) {
      return await cacheFirstStrategy(request, CACHE_NAME);
    }

    if (isAPIRequest(url)) {
      return await networkFirstStrategy(request, DYNAMIC_CACHE_NAME);
    }

    if (isPageRequest(url)) {
      return await staleWhileRevalidateStrategy(request, DYNAMIC_CACHE_NAME);
    }

    // Default to network first for everything else
    return await networkFirstStrategy(request, DYNAMIC_CACHE_NAME);

  } catch (error) {
    console.error('Service Worker fetch error:', error);
    return await handleOffline(request);
  }
}

// Cache-first strategy (for static assets)
async function cacheFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return await handleOffline(request);
  }
}

// Network-first strategy (for API calls)
async function networkFirstStrategy(request, cacheName) {
  try {
    const networkResponse = await fetch(request);

    if (networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    return await handleOffline(request);
  }
}

// Stale-while-revalidate strategy (for pages)
async function staleWhileRevalidateStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  // Fetch in background to update cache
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => null);

  // Return cached version immediately if available
  if (cachedResponse) {
    fetchPromise; // Update cache in background
    return cachedResponse;
  }

  // If no cache, wait for network
  try {
    return await fetchPromise;
  } catch (error) {
    return await handleOffline(request);
  }
}

// Utility functions to determine resource types
function isStaticAsset(url) {
  const staticExtensions = ['.css', '.js', '.woff', '.woff2', '.ttf', '.eot'];
  return staticExtensions.some(ext => url.pathname.endsWith(ext)) ||
         url.pathname.includes('/brand/') ||
         url.pathname.includes('/favicon');
}

function isImage(url) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
  return imageExtensions.some(ext => url.pathname.endsWith(ext)) ||
         url.hostname.includes('unsplash.com') ||
         url.hostname.includes('same-assets.com');
}

function isNextJSAsset(url) {
  return url.pathname.startsWith('/_next/');
}

function isAPIRequest(url) {
  return url.pathname.startsWith('/api/');
}

function isPageRequest(url) {
  return url.origin === self.location.origin &&
         !isStaticAsset(url) &&
         !isImage(url) &&
         !isNextJSAsset(url) &&
         !isAPIRequest(url);
}

// Handle offline scenarios
async function handleOffline(request) {
  const url = new URL(request.url);

  if (isPageRequest(url)) {
    // Return cached homepage or offline page
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    const cachedHomepage = await cache.match('/');

    if (cachedHomepage) {
      return cachedHomepage;
    }
  }

  if (isImage(url)) {
    // Return placeholder image for failed image loads
    return new Response(
      `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#666" text-anchor="middle" dy=".3em">
          Image unavailable
        </text>
      </svg>`,
      {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }

  // Return generic network error
  return new Response('Network error', {
    status: 408,
    statusText: 'Network timeout'
  });
}

// Background sync for failed requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Retry failed requests when connection is restored
  console.log('Performing background sync...');
}

// Push notifications support
self.addEventListener('push', (event) => {
  if (!event.data) return;

  const options = {
    body: event.data.text(),
    icon: '/favicon.png',
    badge: '/favicon.png',
    tag: 'zaincura-notification'
  };

  event.waitUntil(
    self.registration.showNotification('Zain Cura Medical Center', options)
  );
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    console.log('Performance metrics:', event.data.metrics);
  }
});

console.log('Service Worker loaded successfully');
