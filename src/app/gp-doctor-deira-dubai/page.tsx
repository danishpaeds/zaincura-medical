import Link from 'next/link';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Best GP Doctor in Deira Dubai | Same-Day Family Medicine Appointments',
  description: 'Experienced GP doctors in Deira, Dubai at Al Ghurair Centre. Same-day appointments, walk-ins welcome, comprehensive family medicine services. Call +971-45703423 or book online.',
  keywords: [
    'GP doctor Dubai', 'family medicine Deira', 'general practitioner Dubai',
    'Al Ghurair clinic', 'same day doctor appointment Dubai', 'walk-in clinic Deira',
    'home doctor visits Dubai', 'family doctor near me', 'medical consultation Dubai',
    'GP clinic Al Rigga', 'doctor consultation Deira', 'family physician Dubai'
  ],
  openGraph: {
    title: 'Best GP Doctor in Deira Dubai | Zain Cura Medical Center',
    description: 'Experienced GP doctors providing same-day appointments and comprehensive family medicine services in Deira, Dubai.',
    url: 'https://zaincura.com/gp-doctor-deira-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/gp-doctor-consultation-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'GP Doctor Consultation at Zain Cura Medical Center Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best GP Doctor in Deira Dubai | Same-Day Appointments',
    description: 'Experienced GP doctors in Deira, Dubai. Same-day appointments, walk-ins welcome, comprehensive family medicine.',
    images: ['https://zaincura.com/images/gp-doctor-consultation-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/gp-doctor-deira-dubai'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

// Service-specific JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': 'https://zaincura.com/gp-doctor-deira-dubai',
  name: 'Zain Cura Medical Center - GP & Family Medicine',
  description: 'General practitioner and family medicine services in Deira, Dubai offering same-day appointments and comprehensive healthcare.',
  url: 'https://zaincura.com/gp-doctor-deira-dubai',
  telephone: '+971-45703423',
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
  medicalSpecialty: ['General Practice', 'Family Medicine', 'Preventive Medicine'],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'General Practice Consultation',
      description: 'Comprehensive medical consultation for common health issues',
      category: 'Primary Care'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Family Medicine',
      description: 'Healthcare for patients of all ages from infancy to elderly',
      category: 'Family Medicine'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Health Checkups',
      description: 'Regular health screenings and preventive care',
      category: 'Preventive Medicine'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Home Doctor Visits',
      description: 'GP consultations at your home or hotel across Dubai',
      category: 'Home Care'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: ['AED', 'USD'],
  paymentAccepted: ['Cash', 'Credit Card'],
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  }
};

export default function GPDoctorDeiraPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zaincura.com' },
    { name: 'Services', url: 'https://zaincura.com/services' },
    { name: 'GP Doctor in Deira Dubai', url: 'https://zaincura.com/gp-doctor-deira-dubai' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">GP Doctor in Deira Dubai</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Best GP Doctor in Deira Dubai
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experienced general practitioners providing same-day appointments, comprehensive family medicine,
                and 24/7 home visits at Al Ghurair Centre, Deira. Walk-ins welcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+97145703423"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call GP Now: +971-45703423
                </a>
                <a
                  href="https://wa.me/971523011150"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  WhatsApp GP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Comprehensive GP Services in Deira
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Appointments</h3>
                <p className="text-gray-600">Get medical care when you need it with our same-day GP appointments. No long waiting times.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Medicine</h3>
                <p className="text-gray-600">Comprehensive healthcare for patients of all ages, from pediatric care to elderly medicine.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Home Visits</h3>
                <p className="text-gray-600">Our experienced GP doctors visit your home, office, or hotel anywhere in Dubai, 24/7.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Checkups</h3>
                <p className="text-gray-600">Regular health screenings and preventive care to maintain your optimal health.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Chronic Disease Management</h3>
                <p className="text-gray-600">Ongoing care for diabetes, hypertension, and other chronic conditions.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Certificates</h3>
                <p className="text-gray-600">Employment, fitness, and travel medical certificates issued by licensed doctors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Visit Our GP Clinic in Deira</h2>
              <p className="text-lg text-gray-600 mt-4">
                Conveniently located at Al Ghurair Centre, easily accessible by metro and car
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Clinic Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Address:</h4>
                    <p className="text-gray-600">Al Ghurair Centre, 6th Floor, Deira, Dubai, UAE</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone:</h4>
                    <p className="text-gray-600">+971-45703423</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">WhatsApp:</h4>
                    <p className="text-gray-600">+971-523011150</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Hours:</h4>
                    <p className="text-gray-600">Daily: 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-600">Home Visits: 24/7 Available</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Our GP?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>DHA licensed and experienced doctors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Same-day appointments available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Walk-in patients welcome</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Transparent pricing, no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>24/7 home visit services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do I need an appointment to see a GP doctor?
                </h3>
                <p className="text-gray-600">
                  While we encourage booking appointments for guaranteed time slots, we welcome walk-in patients
                  throughout our operating hours (9:00 AM - 9:00 PM daily). Same-day appointments are usually available.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What conditions do your GP doctors treat?
                </h3>
                <p className="text-gray-600">
                  Our GP doctors treat a wide range of conditions including common cold, flu, infections, chronic diseases
                  like diabetes and hypertension, minor injuries, skin conditions, and provide preventive care and health screenings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you provide home doctor visits?
                </h3>
                <p className="text-gray-600">
                  Yes, our experienced GP doctors provide 24/7 home visits across Dubai. We visit homes, offices,
                  and hotels. Contact us to schedule a home consultation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you accept insurance?
                </h3>
                <p className="text-gray-600">
                  We are primarily cash-friendly with transparent pricing. While we don't directly bill insurance companies,
                  we provide detailed invoices that you can submit to your insurance provider for potential reimbursement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need to See a GP Doctor Today?
            </h2>
            <p className="text-xl mb-8">
              Don't wait for days to see a doctor. Our experienced GP doctors in Deira are available
              for same-day appointments and 24/7 home visits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+97145703423"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now: +971-45703423
              </a>
              <a
                href="https://wa.me/971523011150"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors border-2 border-green-600"
              >
                WhatsApp Doctor
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
