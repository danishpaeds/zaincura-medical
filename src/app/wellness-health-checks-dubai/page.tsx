import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wellness Health Checks Dubai | Smart Reports | Comprehensive Screening',
  description: 'Comprehensive wellness health checks in Dubai with AI-powered smart reports. Executive health packages, annual screenings, and preventive care. Book at Zain Cura Medical Center Deira.',
  keywords: [
    'wellness health checks Dubai', 'executive health checkup Dubai', 'comprehensive health screening',
    'annual health checkup Dubai', 'preventive health Dubai', 'health assessment Dubai',
    'medical screening Dubai', 'full body checkup Dubai', 'health package Dubai',
    'corporate health screening', 'wellness package Dubai', 'health monitoring Dubai'
  ],
  openGraph: {
    title: 'Wellness Health Checks Dubai | Smart Reports | Zain Cura Medical',
    description: 'Comprehensive wellness health screenings with AI-powered smart reports. Executive packages available for complete health assessment.',
    url: 'https://zaincura.com/wellness-health-checks-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/wellness-health-checks-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Wellness Health Checks at Zain Cura Medical Center Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wellness Health Checks Dubai | Smart Reports',
    description: 'Comprehensive health screenings with AI-powered reports in Dubai.',
    images: ['https://zaincura.com/images/wellness-health-checks-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/wellness-health-checks-dubai'
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
  '@id': 'https://zaincura.com/wellness-health-checks-dubai',
  name: 'Wellness Health Checks Dubai',
  description: 'Comprehensive wellness health screenings and preventive care packages with AI-powered smart reports and digital health insights.',
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
      name: 'Basic Wellness Package',
      description: 'Essential health screening including CBC, basic metabolic panel, and vital signs assessment'
    },
    {
      '@type': 'MedicalTest',
      name: 'Comprehensive Wellness Package',
      description: 'Complete health assessment including blood tests, cardiac screening, and lifestyle evaluation'
    },
    {
      '@type': 'MedicalTest',
      name: 'Executive Health Package',
      description: 'Premium health screening with advanced diagnostics and detailed health analysis'
    }
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'AI-Powered Smart Reports',
      description: 'Digital health reports with AI analysis and personalized health recommendations'
    },
    {
      '@type': 'Offer',
      name: 'Same-Day Results',
      description: 'Complete health assessment with results available within 24 hours'
    }
  ],
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  }
};

export default function WellnessHealthChecksDubaiPage() {
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
              <li className="text-gray-900 font-medium">Wellness Health Checks Dubai</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Wellness Health Checks Dubai
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive health screenings with AI-powered smart reports and digital health insights.
                Take control of your health with our advanced wellness packages and personalized care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+97145703423"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Book Health Check: +971-45703423
                </a>
                <a
                  href="https://wa.me/971523011150"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  WhatsApp for Package Details
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness Packages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Choose Your Wellness Package
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Wellness</h3>
                  <p className="text-gray-600">Essential health screening</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Complete Blood Count (CBC)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Basic Metabolic Panel</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Blood Pressure Check</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>BMI Assessment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Digital Health Report</span>
                  </li>
                </ul>

                <a
                  href="tel:+97145703423"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block text-center"
                >
                  Book Basic Package
                </a>
              </div>

              {/* Comprehensive Package */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-300 hover:border-purple-400 transition-colors relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive Wellness</h3>
                  <p className="text-gray-600">Complete health assessment</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>All Basic Package tests</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Lipid Profile (Cholesterol)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Diabetes Screening (HbA1c)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Liver Function Tests</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Kidney Function Tests</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Thyroid Function (TSH)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>AI-Powered Smart Report</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Doctor Consultation</span>
                  </li>
                </ul>

                <a
                  href="tel:+97145703423"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block text-center"
                >
                  Book Comprehensive Package
                </a>
              </div>

              {/* Executive Package */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Executive Wellness</h3>
                  <p className="text-gray-600">Premium health screening</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>All Comprehensive tests</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Cardiac Risk Assessment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Vitamin D & B12 levels</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Cancer Markers (PSA/CA125)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>ECG (Heart Rhythm)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Detailed Health Report</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Specialist Consultation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Follow-up Care Plan</span>
                  </li>
                </ul>

                <a
                  href="tel:+97145703423"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block text-center"
                >
                  Book Executive Package
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Reports Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">AI-Powered Smart Reports</h2>
              <p className="text-lg text-gray-600 mt-4">
                Get digital health insights with our advanced reporting system
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h3>
                <p className="text-gray-600">Advanced algorithms analyze your results for comprehensive insights</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Charts</h3>
                <p className="text-gray-600">Easy-to-understand charts and graphs showing health trends</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Tips</h3>
                <p className="text-gray-600">Customized health recommendations based on your results</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Access</h3>
                <p className="text-gray-600">Access your reports anytime via WhatsApp or email</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Wellness Checks?</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Early Detection Saves Lives</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>Prevent Disease:</strong> Identify health risks before symptoms appear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>Track Progress:</strong> Monitor health improvements over time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>Peace of Mind:</strong> Know your health status with confidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>Cost Effective:</strong> Prevent expensive treatments with early intervention</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Advantage</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">★</span>
                    <span><strong>Same-Day Results:</strong> Get your reports within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">★</span>
                    <span><strong>Expert Doctors:</strong> DHA licensed physicians review all reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">★</span>
                    <span><strong>Convenient Location:</strong> Al Ghurair Centre, Deira with parking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">★</span>
                    <span><strong>Transparent Care:</strong> Clear communication and honest health advice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Wellness Health Check FAQ
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How often should I get a wellness health check?
                </h3>
                <p className="text-gray-600">
                  We recommend annual wellness checks for adults over 30, and biannual checks for those over 40
                  or with family history of chronic diseases. Your doctor will advise on the best frequency for you.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What makes your smart reports different?
                </h3>
                <p className="text-gray-600">
                  Our AI-powered smart reports analyze your results against global health standards and provide
                  personalized recommendations. You get visual charts, trend analysis, and actionable health tips.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do I need to prepare for the wellness check?
                </h3>
                <p className="text-gray-600">
                  Yes, 12-hour fasting is required for accurate cholesterol and glucose testing. You can drink water.
                  We'll provide detailed preparation instructions when you book your appointment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I get wellness checks for my family?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We offer family packages and can customize wellness checks for different age groups.
                  Contact us for family packages and group bookings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Take Control of Your Health Today
            </h2>
            <p className="text-xl mb-8">
              Invest in your health with our comprehensive wellness packages. Early detection and
              prevention are key to a healthy, long life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+97145703423"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Wellness Check: +971-45703423
              </a>
              <a
                href="https://wa.me/971523011150"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors border-2 border-green-600"
              >
                WhatsApp for Package Info
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
