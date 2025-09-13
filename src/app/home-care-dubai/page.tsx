import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Home Doctor Dubai | Medical Care at Your Location',
  description: 'Professional home doctor services in Dubai available 24/7. GP consultations, nursing care, medical treatments at your home, office or hotel. Same-day bookings across all Dubai areas.',
  keywords: [
    'home doctor Dubai', '24/7 medical care Dubai', 'home nurse Dubai', 'home medical services',
    'doctor home visit Dubai', 'mobile clinic Dubai', 'home healthcare Dubai',
    'medical care at home', 'nurse home visit Dubai', 'home GP consultation',
    'hotel doctor visit Dubai', 'emergency home care Dubai', 'bedside medical care'
  ],
  openGraph: {
    title: '24/7 Home Doctor Dubai | Medical Care at Your Location',
    description: 'Professional home medical services across Dubai. GP consultations, nursing care, and medical treatments available 24/7 at your location.',
    url: 'https://zaincura.com/home-care-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/home-doctor-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Doctor Services in Dubai by Zain Cura Medical Center'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Home Doctor Dubai | Medical Care',
    description: 'Professional home medical services across Dubai available 24/7.',
    images: ['https://zaincura.com/images/home-doctor-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/home-care-dubai'
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
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://zaincura.com/home-care-dubai',
  name: 'Zain Cura Home Care Services Dubai',
  description: '24/7 home medical care services including doctor visits, nursing care, and medical treatments at your location across Dubai.',
  provider: {
    '@type': 'MedicalClinic',
    name: 'Zain Cura Medical Center',
    telephone: '+971-45703423',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al Ghurair Centre, 6th Floor',
      addressLocality: 'Deira',
      addressRegion: 'Dubai',
      addressCountry: 'AE'
    }
  },
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Home Doctor Consultations',
      description: 'Qualified doctors provide medical consultations at your home, office, or hotel'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Home Nursing Care',
      description: 'Professional nursing services including wound care, medication administration, and patient monitoring'
    },
    {
      '@type': 'MedicalTest',
      name: 'Home Blood Collection',
      description: 'Laboratory sample collection at your location with same-day processing'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'IV Drip Therapy at Home',
      description: 'Vitamin therapy and hydration treatments administered at your location'
    }
  ],
  offers: [
    {
      '@type': 'Offer',
      name: '24/7 Availability',
      description: 'Medical care available round the clock, including weekends and holidays'
    },
    {
      '@type': 'Offer',
      name: 'All Dubai Areas',
      description: 'Service coverage across all emirates and areas in Dubai'
    }
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Dubai',
      addressCountry: 'AE'
    }
  ]
};

export default function HomCareDubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Home Care Dubai</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                24/7 Home Doctor Dubai
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional medical care at your doorstep. Our qualified doctors and nurses provide
                comprehensive healthcare services at your home, office, or hotel across Dubai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+97145703423"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Home Doctor: +971-45703423
                </a>
                <a
                  href="https://wa.me/971523011150"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  WhatsApp for Home Visit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Complete Home Medical Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Doctor Consultations</h3>
                <p className="text-gray-600 mb-4">Qualified GP doctors provide comprehensive medical consultations at your convenient location.</p>
                <div className="text-sm text-blue-600 font-medium">Available 24/7</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Nursing Care</h3>
                <p className="text-gray-600 mb-4">Professional nursing services including wound care, medication administration, and patient monitoring.</p>
                <div className="text-sm text-blue-600 font-medium">Certified nurses</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Blood Collection</h3>
                <p className="text-gray-600 mb-4">Laboratory sample collection at your location with same-day processing and digital reports.</p>
                <div className="text-sm text-blue-600 font-medium">Same-day results</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IV Drip Therapy</h3>
                <p className="text-gray-600 mb-4">Vitamin therapy, hydration treatments, and IV medications administered at your home.</p>
                <div className="text-sm text-blue-600 font-medium">Professional administration</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Elderly Care</h3>
                <p className="text-gray-600 mb-4">Specialized medical care for elderly patients including chronic disease management and health monitoring.</p>
                <div className="text-sm text-blue-600 font-medium">Compassionate care</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Home Care</h3>
                <p className="text-gray-600 mb-4">Urgent medical care at your location for non-life-threatening emergencies and acute conditions.</p>
                <div className="text-sm text-blue-600 font-medium">Rapid response</div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Service Coverage Across Dubai</h2>
              <p className="text-lg text-gray-600 mt-4">
                We provide home medical services to all areas in Dubai
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Deira</h3>
                <p className="text-gray-600 text-sm">Al Rigga, Port Saeed, Naif</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Bur Dubai</h3>
                <p className="text-gray-600 text-sm">Downtown, Al Fahidi, Karama</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Jumeirah</h3>
                <p className="text-gray-600 text-sm">JBR, Marina, Jumeirah Beach</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Business Bay</h3>
                <p className="text-gray-600 text-sm">DIFC, Downtown Dubai</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Dubai Hills</h3>
                <p className="text-gray-600 text-sm">Emirates Hills, Springs</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">International City</h3>
                <p className="text-gray-600 text-sm">Dubai South, Al Warqa</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Hotels & Resorts</h3>
                <p className="text-gray-600 text-sm">All major hotels covered</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Airport Area</h3>
                <p className="text-gray-600 text-sm">DXB, Terminal hotels</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              How Our Home Care Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Book Your Visit</h3>
                <p className="text-gray-600">Call or WhatsApp to schedule your home medical service. Available 24/7.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispatch Team</h3>
                <p className="text-gray-600">Our qualified medical professional is dispatched to your location with required equipment.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Receive Care</h3>
                <p className="text-gray-600">Comprehensive medical care provided at your convenient location with full privacy.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow-up</h3>
                <p className="text-gray-600">Digital reports and follow-up care instructions provided for continuity of care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Home Care?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comfort of Home</h3>
                <p className="text-gray-600">Receive medical care in familiar surroundings without travel stress</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🩺</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualified Professionals</h3>
                <p className="text-gray-600">DHA licensed doctors and certified nurses with extensive experience</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Round-the-clock medical care including weekends and holidays</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Privacy</h3>
                <p className="text-gray-600">Confidential medical care with full respect for your privacy</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Home Care FAQ
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What areas in Dubai do you cover for home visits?
                </h3>
                <p className="text-gray-600">
                  We provide home medical services across all areas of Dubai including Deira, Bur Dubai, Jumeirah,
                  Business Bay, Dubai Hills, International City, and all major hotels and resorts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How quickly can a doctor reach my location?
                </h3>
                <p className="text-gray-600">
                  Our response time varies by location and time of day, typically 30-90 minutes. For urgent cases,
                  we prioritize dispatch and aim for the fastest possible response.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What equipment do your doctors bring for home visits?
                </h3>
                <p className="text-gray-600">
                  Our medical teams come equipped with essential diagnostic tools, basic medications, wound care supplies,
                  and equipment for blood collection and vital signs monitoring.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you provide home care for chronic conditions?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide ongoing home care for chronic conditions like diabetes, hypertension, and elderly care.
                  Regular monitoring and medication management can be arranged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Medical Care at Your Location?
            </h2>
            <p className="text-xl mb-8">
              Our qualified medical professionals are ready to provide comprehensive healthcare
              services at your home, office, or hotel across Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+97145703423"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Home Doctor: +971-45703423
              </a>
              <a
                href="https://wa.me/971523011150"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors border-2 border-green-600"
              >
                WhatsApp for Home Visit
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
