import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab Tests Dubai | Same-Day Results | Home Collection Available',
  description: 'Comprehensive lab tests in Dubai with same-day results. Blood tests, urine tests, STD screening, wellness panels. Home collection available across Dubai. Book at Zain Cura Medical Center.',
  keywords: [
    'lab tests Dubai', 'blood test Dubai', 'medical lab Deira', 'same day lab results',
    'home blood collection Dubai', 'medical testing Dubai', 'laboratory services Dubai',
    'health screening Dubai', 'diagnostic tests Dubai', 'pathology lab Dubai',
    'comprehensive health panel', 'executive health checkup', 'annual health screening'
  ],
  openGraph: {
    title: 'Lab Tests Dubai | Same-Day Results | Zain Cura Medical Center',
    description: 'Comprehensive laboratory testing services in Dubai with same-day results and home collection available.',
    url: 'https://zaincura.com/lab-tests-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/lab-tests-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Laboratory Testing Services at Zain Cura Medical Center Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab Tests Dubai | Same-Day Results',
    description: 'Comprehensive lab testing with same-day results and home collection in Dubai.',
    images: ['https://zaincura.com/images/lab-tests-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/lab-tests-dubai'
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
  '@type': 'MedicalTest',
  '@id': 'https://zaincura.com/lab-tests-dubai',
  name: 'Laboratory Testing Services Dubai',
  description: 'Comprehensive laboratory testing services including blood tests, urine analysis, and health screenings with same-day results.',
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
      '@type': 'MedicalTest',
      name: 'Complete Blood Count (CBC)',
      description: 'Comprehensive blood analysis including white blood cells, red blood cells, and platelets'
    },
    {
      '@type': 'MedicalTest',
      name: 'Lipid Profile',
      description: 'Cholesterol and triglyceride levels assessment for cardiovascular health'
    },
    {
      '@type': 'MedicalTest',
      name: 'Diabetes Screening',
      description: 'Blood glucose and HbA1c testing for diabetes diagnosis and monitoring'
    },
    {
      '@type': 'MedicalTest',
      name: 'Liver Function Tests',
      description: 'Assessment of liver health through enzyme and protein level testing'
    },
    {
      '@type': 'MedicalTest',
      name: 'Kidney Function Tests',
      description: 'Evaluation of kidney health through creatinine and urea testing'
    },
    {
      '@type': 'MedicalTest',
      name: 'Thyroid Function Tests',
      description: 'TSH, T3, T4 testing for thyroid gland function assessment'
    }
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'Same-Day Results',
      description: 'Most lab tests processed with results available within 6-8 hours'
    },
    {
      '@type': 'Offer',
      name: 'Home Collection',
      description: 'Blood and sample collection available at your home or office across Dubai'
    }
  ],
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  }
};

export default function LabTestsDubaiPage() {
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
              <li className="text-gray-900 font-medium">Lab Tests Dubai</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Lab Tests Dubai - Same Day Results
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive laboratory testing services with same-day results. Blood tests, health screenings,
                and diagnostic tests available at our Deira clinic or through home collection across Dubai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+97145703423"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Book Lab Test: +971-45703423
                </a>
                <a
                  href="https://wa.me/971523011150"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  WhatsApp for Home Collection
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tests */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Popular Lab Tests in Dubai
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Blood Count (CBC)</h3>
                <p className="text-gray-600 mb-4">Comprehensive blood analysis including white blood cells, red blood cells, platelets, and hemoglobin levels.</p>
                <div className="text-sm text-green-600 font-medium">Same-day results available</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lipid Profile</h3>
                <p className="text-gray-600 mb-4">Cholesterol and triglyceride testing to assess cardiovascular health and heart disease risk.</p>
                <div className="text-sm text-green-600 font-medium">Same-day results available</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Diabetes Screening</h3>
                <p className="text-gray-600 mb-4">Blood glucose and HbA1c testing for diabetes diagnosis and monitoring blood sugar control.</p>
                <div className="text-sm text-green-600 font-medium">Same-day results available</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Liver Function Tests</h3>
                <p className="text-gray-600 mb-4">Assessment of liver health through ALT, AST, bilirubin, and protein level testing.</p>
                <div className="text-sm text-green-600 font-medium">Same-day results available</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Thyroid Function</h3>
                <p className="text-gray-600 mb-4">TSH, T3, T4 testing to evaluate thyroid gland function and metabolism.</p>
                <div className="text-sm text-green-600 font-medium">Same-day results available</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Health Panel</h3>
                <p className="text-gray-600 mb-4">Complete health screening including CBC, lipids, liver, kidney, and diabetes tests.</p>
                <div className="text-sm text-green-600 font-medium">Same-day results available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Lab Services?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Results</h3>
                <p className="text-gray-600">Most tests processed within 6-8 hours with digital reports</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Home Collection</h3>
                <p className="text-gray-600">Blood collection at your home or office across Dubai</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                <p className="text-gray-600">State-of-the-art laboratory equipment for accurate results</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Clear pricing with no hidden fees or extra charges</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Your Test</h3>
                <p className="text-gray-600">Call us or WhatsApp to schedule your lab test. Choose clinic visit or home collection.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sample Collection</h3>
                <p className="text-gray-600">Visit our clinic or have our trained phlebotomist collect samples at your location.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Results</h3>
                <p className="text-gray-600">Receive your results digitally via WhatsApp or email within 6-8 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Lab Tests FAQ
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How quickly can I get my lab results?
                </h3>
                <p className="text-gray-600">
                  Most routine lab tests are processed within 6-8 hours and you'll receive digital reports
                  via WhatsApp or email the same day. Some specialized tests may take 24-48 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you offer home blood collection?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide home blood collection services across Dubai. Our trained phlebotomists
                  will visit your home, office, or hotel at your convenient time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do I need to fast before blood tests?
                </h3>
                <p className="text-gray-600">
                  Fasting requirements depend on the specific tests. For lipid profiles and glucose tests,
                  12-hour fasting is typically required. We'll inform you of any preparation needed when you book.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Are your lab tests accurate and reliable?
                </h3>
                <p className="text-gray-600">
                  Yes, we use advanced laboratory equipment and follow international quality standards.
                  Our lab is staffed by qualified technicians and all tests are processed under strict quality control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Lab Tests Today?
            </h2>
            <p className="text-xl mb-8">
              Get your health screening done with same-day results. Book your lab tests now
              or schedule home collection across Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+97145703423"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Lab Tests: +971-45703423
              </a>
              <a
                href="https://wa.me/971523011150"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors border-2 border-blue-600"
              >
                WhatsApp for Home Collection
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
