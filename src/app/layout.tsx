import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Zain Cura Medical Center - GP, Lab & Home Care in Deira, Dubai",
    template: "%s | Zain Cura Medical Center"
  },
  description: "Premier medical center in Deira offering same-day GP consultations, lab tests, wellness checks, STD testing, IV drips, and 24/7 home care services. Located at Al Ghurair Centre with transparent pricing and no insurance required.",
  keywords: [
    "GP clinic Dubai", "medical center Deira", "home doctor Dubai", "lab tests Dubai",
    "STD testing Dubai", "IV drip therapy Dubai", "Al Ghurair medical center",
    "same day doctor appointment", "walk-in clinic Dubai", "wellness health checks",
    "gynecologist Dubai", "clinical dietician", "corporate wellness Dubai"
  ],
  authors: [{ name: "Zain Cura Medical Center" }],
  creator: "Zain Cura Medical Center",
  publisher: "Zain Cura Medical Center",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://zaincura.com",
    siteName: "Zain Cura Medical Center",
    title: "Zain Cura Medical Center - Premier Healthcare in Deira, Dubai",
    description: "Same-day GP consultations, lab tests, wellness checks, and 24/7 home care services at Al Ghurair Centre, Deira. Transparent pricing, no insurance required.",
    images: [
      {
        url: "https://zaincura.com/images/zain-cura-medical-center.jpg",
        width: 1200,
        height: 630,
        alt: "Zain Cura Medical Center - Healthcare Services in Dubai"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Cura Medical Center - Healthcare in Dubai",
    description: "Same-day GP, lab tests, wellness checks & 24/7 home care in Deira. No insurance required.",
    images: ["https://zaincura.com/images/zain-cura-medical-center.jpg"]
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://zaincura.com",
    languages: {
      'en-AE': 'https://zaincura.com',
      'ar-AE': 'https://zaincura.com/ar'
    }
  },
  category: "Healthcare",
};

// Add JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Zain Cura Medical Center',
  description: 'Premier medical center in Deira offering comprehensive healthcare services including GP consultations, lab tests, and home care.',
  url: 'https://zaincura.com',
  logo: 'https://zaincura.com/brand/logo.png',
  image: 'https://zaincura.com/images/zain-cura-medical-center.jpg',
  telephone: '+971-45703423',
  email: 'info@zaincura.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Ghurair Centre, 6th Floor',
    addressLocality: 'Deira',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2699,
    longitude: 55.3181
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00'
    }
  ],
  medicalSpecialty: [
    'General Practice',
    'Family Medicine',
    'Laboratory Medicine',
    'Preventive Medicine',
    'Occupational Medicine'
  ],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'General Practice Consultation',
      description: 'Same-day GP consultations with experienced doctors'
    },
    {
      '@type': 'MedicalTest',
      name: 'Laboratory Tests',
      description: 'Comprehensive lab testing with same-day results'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Home Doctor Visits',
      description: '24/7 home and hotel medical visits across Dubai'
    },
    {
      '@type': 'MedicalTest',
      name: 'Wellness Health Checks',
      description: 'Comprehensive health screenings with digital reports'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: ['AED', 'USD'],
  paymentAccepted: ['Cash', 'Credit Card'],
  hasMap: 'https://maps.google.com/?q=Al+Ghurair+Centre+Dubai',
  areaServed: [
    {
      '@type': 'City',
      name: 'Dubai',
      addressCountry: 'AE'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Deira',
      addressCountry: 'AE'
    }
  ],
  sameAs: [
    'https://www.facebook.com/zaincuramedical',
    'https://www.instagram.com/zaincuramedical',
    'https://www.linkedin.com/company/zaincuramedical'
  ]
};

// Enhanced sitelinks navigation schema for search engines
const siteNavigationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: 'Zain Cura Medical Center Navigation',
  url: 'https://zaincura.com',
  hasPart: [
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#gp-services',
      name: 'GP Doctor Services',
      description: 'Same-day GP consultations and family medicine in Deira Dubai',
      url: 'https://zaincura.com/gp-doctor-deira-dubai'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#lab-tests',
      name: 'Lab Tests Dubai',
      description: 'Same-day lab results and comprehensive diagnostic testing',
      url: 'https://zaincura.com/lab-tests-dubai'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#wellness-checks',
      name: 'Wellness Health Checks',
      description: 'AI-powered smart reports and comprehensive health screenings',
      url: 'https://zaincura.com/wellness-health-checks-dubai'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#home-care',
      name: 'Home Doctor Services',
      description: '24/7 medical care at your home, office or hotel across Dubai',
      url: 'https://zaincura.com/home-care-dubai'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#gynecologist',
      name: 'Female Gynecologist',
      description: 'Experienced female gynecologist for women\'s health and prenatal care',
      url: 'https://zaincura.com/gynecologist-dubai-female-doctor'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#dietician',
      name: 'Clinical Dietician',
      description: 'Professional nutrition consultations and therapeutic diets',
      url: 'https://zaincura.com/clinical-dietician-dubai'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#iv-drips',
      name: 'IV Drip Therapy',
      description: 'Vitamin therapy and hydration treatments at clinic or home',
      url: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#std-testing',
      name: 'STD Testing',
      description: 'Confidential STD testing with complete privacy and discretion',
      url: 'https://zaincura.com/std-testing-dubai-confidential'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#corporate-wellness',
      name: 'Corporate Wellness',
      description: 'AI-powered employee health programs for businesses',
      url: 'https://zaincura.com/corporate-wellness-dubai'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#book-appointment',
      name: 'Book Appointment',
      description: 'Schedule your medical appointment online or call for same-day booking',
      url: 'https://zaincura.com/book'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#contact',
      name: 'Contact Us',
      description: 'Get in touch with Zain Cura Medical Center for appointments and inquiries',
      url: 'https://zaincura.com/contact'
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://zaincura.com#location',
      name: 'Our Location',
      description: 'Visit us at Al Ghurair Centre, 6th Floor, Deira, Dubai',
      url: 'https://zaincura.com/location/al-ghurair-centre-deira'
    }
  ]
};

// Organization schema for enhanced search presence
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://zaincura.com#organization',
  name: 'Zain Cura Medical Center',
  alternateName: 'Zain Cura',
  url: 'https://zaincura.com',
  logo: 'https://zaincura.com/brand/logo.png',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971-45703423',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'Dubai'
    },
    {
      '@type': 'ContactPoint',
      telephone: '+971-523011150',
      contactType: 'customer service',
      contactOption: 'WhatsApp',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'Dubai'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Ghurair Centre, 6th Floor',
    addressLocality: 'Deira',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE'
  },
  sameAs: [
    'https://www.facebook.com/zaincuramedical',
    'https://www.instagram.com/zaincuramedical',
    'https://www.linkedin.com/company/zaincuramedical'
  ],
  knowsAbout: [
    'General Practice',
    'Family Medicine',
    'Laboratory Testing',
    'Home Healthcare',
    'Preventive Medicine',
    'Women\'s Health',
    'Clinical Nutrition',
    'Corporate Wellness'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="canonical" href="https://zaincura.com" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2699;55.3181" />
        <meta name="ICBM" content="25.2699, 55.3181" />

        {/* Enhanced meta tags for sitelinks */}
        <meta name="apple-mobile-web-app-title" content="Zain Cura Medical" />
        <meta name="application-name" content="Zain Cura Medical Center" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-navbutton-color" content="#2563eb" />

        {/* Structured data for better crawling */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zain Cura Medical Center" />
        <meta name="twitter:site" content="@zaincuramedical" />
        <meta name="twitter:creator" content="@zaincuramedical" />

        {/* Additional search engine hints */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
