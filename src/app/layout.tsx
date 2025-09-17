import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { GoogleTagManager, GTMNoscript } from "@/components/GoogleTagManager";

// ✅ PERFORMANCE: Optimized font loading with single font
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Prevent FOIT (Flash of Invisible Text)
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
  adjustFontFallback: true, // Reduce layout shift
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "GP, Lab & Home Care | Zain Cura – Al Ghurair, Deira",
  description: "Same-day GP & lab, wellness checks with smart reports, STD testing, IV drips, and home & hotel visits in Al Murraqabat, Deira. Cash-friendly. Book now.",
  keywords: "GP clinic Dubai, Deira medical center, home doctor Dubai, lab tests Dubai, STD testing Dubai, IV drip therapy Dubai, Al Ghurair medical center",
  authors: [{ name: "Zain Cura Medical Center" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/favicon.png", type: "image/png", sizes: "180x180" }
    ]
  },
  openGraph: {
    title: "GP, Lab & Home Care | Zain Cura – Al Ghurair, Deira",
    description: "Same-day GP & lab, wellness checks with smart reports, STD testing, IV drips, and home & hotel visits in Al Murraqabat, Deira. Cash-friendly. Book now.",
    url: "https://www.zaincura.com",
    siteName: "Zain Cura Medical Center",
    locale: "en_AE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "GP, Lab & Home Care | Zain Cura – Al Ghurair, Deira",
    description: "Same-day GP & lab, wellness checks with smart reports, STD testing, IV drips, and home & hotel visits in Al Murraqabat, Deira. Cash-friendly. Book now."
  },
  alternates: {
    canonical: 'https://www.zaincura.com'
  }
};

// Site-wide Organization and WebSite Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "https://www.zaincura.com/#organization",
  name: "Zain Cura Medical Center",
  alternateName: "Zain Cura",
  description: "Leading medical center in Deira, Dubai offering GP services, laboratory tests, home care, and specialized medical treatments with same-day appointments and 24/7 home visits.",
  url: "https://www.zaincura.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.zaincura.com/brand/logo.png",
    width: 200,
    height: 60
  },
  image: "https://www.zaincura.com/brand/logo.png",
  telephone: "+971-45703423",
  email: "info@zaincura.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Ghurair Centre, 6th Floor",
    addressLocality: "Deira",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2699,
    longitude: 55.3181
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00"
    }
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971-45703423",
      contactType: "customer service",
      availableLanguage: ["en", "ar"],
      areaServed: "AE"
    },
    {
      "@type": "ContactPoint",
      telephone: "+971-523011150",
      contactType: "customer service",
      contactOption: "WhatsApp",
      availableLanguage: ["en", "ar"],
      areaServed: "AE"
    }
  ],
  medicalSpecialty: [
    "General Practice",
    "Family Medicine",
    "Laboratory Medicine",
    "Gynecology",
    "Clinical Nutrition",
    "Preventive Medicine"
  ],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "General Practice Consultation"
    },
    {
      "@type": "MedicalTest",
      name: "Laboratory Testing"
    },
    {
      "@type": "MedicalTherapy",
      name: "Home Medical Visits"
    },
    {
      "@type": "MedicalTherapy",
      name: "IV Drip Therapy"
    },
    {
      "@type": "MedicalTest",
      name: "Wellness Health Checks"
    }
  ],
  areaServed: {
    "@type": "City",
    name: "Dubai",
    addressCountry: "AE"
  },
  currenciesAccepted: ["AED", "USD"],
  paymentAccepted: ["Cash", "Credit Card"],
  priceRange: "$$"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.zaincura.com/#website",
  url: "https://www.zaincura.com",
  name: "Zain Cura Medical Center",
  description: "Dubai's premier medical center offering GP services, lab tests, home care and specialized treatments in Deira Al Ghurair Centre.",
  publisher: {
    "@id": "https://www.zaincura.com/#organization"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.zaincura.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  inLanguage: "en-AE"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* ✅ PERFORMANCE: Critical resource preloading */}
        <link rel="preload" href="/brand/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/favicon.png" as="image" type="image/png" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="qzbt_PeRPWlYp-OsxNgR5sVUmqe7gnOHeVuimf6_jp0" />

        {/* ✅ PERFORMANCE: DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//source.unsplash.com" />

        {/* ✅ PERFORMANCE: Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ✅ PERFORMANCE: Module preload for critical JavaScript */}
        <link rel="modulepreload" href="/_next/static/chunks/main-app.js" />
        <link rel="modulepreload" href="/_next/static/chunks/polyfills.js" />

        {/* ✅ PERFORMANCE: Prefetch important pages */}
        <link rel="prefetch" href="/services/" />
        <link rel="prefetch" href="/about/" />
        <link rel="prefetch" href="/contact/" />
        <link rel="prefetch" href="/book/" />

        {/* ✅ PERFORMANCE: Resource hints for better loading */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* ✅ PERFORMANCE: Critical CSS inline styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            .loading body {
              opacity: 0.8;
            }
            .loading body::before {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 3px;
              background: linear-gradient(90deg, #3b82f6, #06b6d4);
              animation: loading-bar 2s ease-in-out infinite;
              z-index: 9999;
            }
            @keyframes loading-bar {
              0%, 100% { transform: scaleX(0); }
              50% { transform: scaleX(1); }
            }
            /* Prevent layout shift */
            .navigation-placeholder {
              height: 64px;
              background: white;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }
            .footer-placeholder {
              height: 256px;
              background: #f9fafb;
            }
            .mobile-cta-placeholder {
              height: 64px;
              background: #3b82f6;
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 50;
            }
            @media (min-width: 768px) {
              .mobile-cta-placeholder {
                display: none;
              }
            }
          `
        }} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-KF4F5XSX" />

        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BVW33FDV5G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BVW33FDV5G');
            `,
          }}
        />

        {/* ✅ PERFORMANCE: Preload critical images */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preload critical images
              const criticalImages = [
                '/brand/logo.png',
                '/favicon.png'
              ];

              if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  criticalImages.forEach(src => {
                    const img = new Image();
                    img.src = src;
                  });
                });
              } else {
                setTimeout(() => {
                  criticalImages.forEach(src => {
                    const img = new Image();
                    img.src = src;
                  });
                }, 100);
              }

              // Progressive enhancement for route prefetching
              setTimeout(() => {
                const importantRoutes = ['/services/', '/about/', '/contact/', '/book/'];
                importantRoutes.forEach((route, index) => {
                  setTimeout(() => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = route;
                    document.head.appendChild(link);
                  }, index * 200);
                });
              }, 3000);
            `
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <GTMNoscript gtmId="GTM-KF4F5XSX" />

        {/* ✅ PERFORMANCE: Critical loading indicator */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Show loading indicator for slow connections
              if (navigator.connection && navigator.connection.effectiveType &&
                  ['slow-2g', '2g'].includes(navigator.connection.effectiveType)) {
                document.body.classList.add('loading');
              }

              // Remove loading class when page is fully loaded
              window.addEventListener('load', () => {
                document.body.classList.remove('loading');
              });
            `
          }}
        />

        {/* Skip Navigation Links */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0
                     bg-primary text-white p-3 z-50 rounded-br-md transition-all
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-40
                     bg-primary text-white p-3 z-50 rounded-br-md transition-all
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Skip to navigation
        </a>

        <ClientBody>
          <div className="min-h-screen flex flex-col">
            <div id="navigation">
              <Navigation />
            </div>
            <main id="main-content" role="main" className="flex-1">{children}</main>
            <Footer />
            <MobileCTABar />
          </div>
        </ClientBody>

        {/* Screen reader announcements */}
        <div
          id="sr-announcements"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />
        <div
          id="sr-alerts"
          aria-live="assertive"
          aria-atomic="true"
          className="sr-only"
        />

        {/* ✅ PERFORMANCE: Performance monitoring */}
        <PerformanceMonitor />

        {/* ✅ PERFORMANCE: Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && 'caches' in window) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                      console.log('SW registered: ', registration);

                      // Check for updates
                      registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                          newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed') {
                              console.log('New content available, refresh to update');
                            }
                          });
                        }
                      });
                    })
                    .catch(registrationError => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }

              // Performance observer for real user monitoring
              if ('PerformanceObserver' in window) {
                // Monitor resource loading
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.duration > 2000) {
                      console.warn('Slow resource detected:', entry.name, entry.duration + 'ms');
                    }
                  }
                });

                try {
                  observer.observe({ entryTypes: ['resource'] });
                } catch (e) {
                  console.warn('Performance observer not supported');
                }
              }
            `
          }}
        />
      </body>
    </html>
  );
}
