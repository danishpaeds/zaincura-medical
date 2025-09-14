/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ["*.preview.same-app.com"],

  // ✅ PERFORMANCE: Enable image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },

  // ✅ PERFORMANCE: Enable compression and optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // ✅ PERFORMANCE: Output optimization
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // ✅ PERFORMANCE: Advanced experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-slot', 'clsx', 'tailwind-merge'],
    optimizeServerReact: true,
    serverMinification: true,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // ✅ PERFORMANCE: Advanced webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              name: 'vendor',
            },
            common: {
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
              name: 'common',
            },
            lucideReact: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              chunks: 'all',
              priority: 15,
              name: 'lucide-react',
              reuseExistingChunk: true,
            },
            radixUi: {
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              chunks: 'all',
              priority: 15,
              name: 'radix-ui',
              reuseExistingChunk: true,
            },
          },
        },
        usedExports: true,
        sideEffects: false,
      }
    }

    // Tree shaking optimization
    config.optimization.providedExports = true;
    config.optimization.usedExports = true;

    // Optimize imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    }

    // Bundle analyzer in development
    if (dev && process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          openAnalyzer: true,
        })
      );
    }

    return config
  },

  // ✅ PERFORMANCE: Enhanced headers for caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
      {
        source: '/brand/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Note: Regex-based headers removed due to conflict with output: 'export'
      // These cache headers will be handled by Netlify's _headers file instead
    ]
  },

  // ✅ PERFORMANCE: Redirects optimization
  async redirects() {
    return [
      // Add any permanent redirects here for SEO
    ]
  },

  // ✅ PERFORMANCE: Rewrites for better routing
  async rewrites() {
    return [
      // Add any rewrites here if needed
    ]
  },
};

module.exports = nextConfig;
