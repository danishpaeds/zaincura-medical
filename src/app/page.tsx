import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zain Cura Medical Center - GP, Lab & Home Care in Deira, Dubai',
  description: 'Premier medical center in Deira offering same-day GP consultations, lab tests, wellness checks, STD testing, IV drips, and 24/7 home care services. Located at Al Ghurair Centre with transparent care and no insurance required.',
  keywords: [
    'medical center Dubai', 'GP clinic Deira', 'lab tests Dubai', 'home doctor Dubai',
    'wellness health checks', 'STD testing Dubai', 'IV drip therapy', 'Al Ghurair medical',
    'same day doctor appointment', 'walk-in clinic Dubai', 'health screening Dubai',
    'family medicine Dubai', 'clinical dietician', 'gynecologist Dubai', 'corporate wellness'
  ],
  openGraph: {
    title: 'Zain Cura Medical Center - Premier Healthcare in Deira, Dubai',
    description: 'Same-day GP consultations, lab tests, wellness checks, and 24/7 home care services at Al Ghurair Centre, Deira. Transparent care, no insurance required.',
    url: 'https://zaincura.com',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/zain-cura-medical-center.jpg',
        width: 1200,
        height: 630,
        alt: 'Zain Cura Medical Center - Healthcare Services in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zain Cura Medical Center - Healthcare in Dubai',
    description: 'Same-day GP, lab tests, wellness checks & 24/7 home care in Deira. No insurance required.',
    images: ['https://zaincura.com/images/zain-cura-medical-center.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com'
  }
};

// Homepage JSON-LD structured data
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
  hasMap: 'https://maps.google.com/?q=Al+Ghurair+Centre+Dubai',
  sameAs: [
    'https://www.facebook.com/zaincuramedical',
    'https://www.instagram.com/zaincuramedical',
    'https://www.linkedin.com/company/zaincuramedical'
  ]
};

const services = [
  {
    title: "GP / Family Medicine",
    description: "Same-day consultations with experienced doctors",
    href: "/gp-doctor-deira-dubai",
    icon: "🩺",
    badge: "Walk-in Welcome"
  },
  {
    title: "Gynecologist",
    description: "Experienced female gynecologist for women's health, prenatal care and screenings",
    href: "/gynecologist-dubai-female-doctor",
    icon: "👩‍⚕️",
    badge: "Female Doctor"
  },
  {
    title: "Clinical Dietician",
    description: "Professional nutrition consultations and therapeutic diets for optimal health",
    href: "/clinical-dietician-dubai",
    icon: "🍎",
    badge: "Nutrition Expert"
  },
  {
    title: "IV Drips (Clinic & Home)",
    description: "Vitamin therapy and hydration treatments",
    href: "/iv-drip-therapy-dubai-clinic-home",
    icon: "💉",
    badge: "Clinic & Home"
  },
  {
    title: "Wellness Health Checks",
    description: "Comprehensive health checks with digital insights",
    href: "/wellness-health-checks-dubai",
    icon: "📊",
    badge: "Smart Reports",
    featured: true
  },
  {
    title: "Corporate Wellness",
    description: "AI-powered employee health programs with custom packages to reduce absenteeism and boost productivity",
    href: "/corporate-wellness-dubai",
    icon: "🏢",
    badge: "Custom Packages"
  },
  {
    title: "Lab Tests",
    description: "Fast, accurate diagnostics with same-day results",
    href: "/lab-tests-dubai",
    icon: "🧪",
    badge: "Same Day Results"
  },
  {
    title: "STD Testing (Confidential)",
    description: "Private testing with complete discretion",
    href: "/std-testing-dubai-confidential",
    icon: "🔒",
    badge: "100% Confidential"
  },
  {
    title: "Home Care Services",
    description: "24/7 medical care at your location",
    href: "/home-care-dubai",
    icon: "🏠",
    badge: "24/7 Available"
  }
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Zain Cura Medical Center — GP, Lab & Home Health Care in Deira (Al Ghurair Centre)
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Cash-friendly • Same-day GP & Lab • 24/7 Home & Hotel Visits
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/book">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    📅 Book Now
                  </button>
                </Link>
                <a
                  href="https://wa.me/971523011150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    💬 WhatsApp
                  </button>
                </a>
                <a href="tel:+97145703423">
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    📞 Call
                  </button>
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Same-day appointments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>No insurance required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>24/7 home visits</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Medical Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive healthcare services available same-day, with transparent care and no insurance required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <div className={`bg-white p-6 rounded-lg shadow-lg border-2 hover:border-blue-300 transition-all duration-200 h-full ${
                    service.featured ? 'ring-2 ring-blue-500' : 'border-gray-200'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl mb-2">
                        {service.icon}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        service.featured ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* VIP Membership Section */}
        <section className="py-12 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-y border-yellow-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">VIP Healthcare Membership</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 mt-3">
                Upgrade to VIP Healthcare Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our exclusive membership for priority appointments, quarterly wellness checks,
                complimentary home care, and 24/7 medical support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Gold Membership */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 hover:border-yellow-400 transition-colors p-6 rounded-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Gold VIP Membership</h3>

                  <div className="space-y-2 mb-6 text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Unlimited priority appointments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Complimentary home doctor visits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Quarterly wellness health checks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">24/7 nurse on call service</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Clinical dietician consultations</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        💬 WhatsApp for Gold Plan
                      </button>
                    </a>
                    <a href="tel:+97145703423">
                      <button className="w-full border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white py-3 rounded-lg font-semibold transition-colors">
                        📞 Call for Gold Plan
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Silver Membership */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-300 hover:border-gray-400 transition-colors p-6 rounded-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Silver VIP Membership</h3>

                  <div className="space-y-2 mb-6 text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Priority appointment booking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Quarterly wellness health checks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">24/7 nurse consultation hotline</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Discounted home doctor visits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Family member benefits</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        💬 WhatsApp for Silver Plan
                      </button>
                    </a>
                    <a href="tel:+97145703423">
                      <button className="w-full border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white py-3 rounded-lg font-semibold transition-colors">
                        📞 Call for Silver Plan
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                ⚡ Instant activation • 👨‍⚕️ VIP treatment • 👥 Family benefits • 🏥 Priority healthcare
              </p>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zain Cura?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DHA Licensed</h3>
                <p className="text-gray-600">Certified clinicians</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Privacy</h3>
                <p className="text-gray-600">Confidential care</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Available</h3>
                <p className="text-gray-600">Home care anytime</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⭐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5-Star Rated</h3>
                <p className="text-gray-600">Trusted by patients</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Quality Healthcare?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Book your appointment today or contact us for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  📅 Book Appointment
                </button>
              </Link>
              <a
                href="https://wa.me/971523011150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-green-600">
                  💬 WhatsApp Now
                </button>
              </a>
              <a href="tel:+97145703423">
                <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  📞 Call
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer with Admin Access */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Al Ghurair Centre, 6th Floor, Deira, Dubai</p>
                  <p>📞 +971-45703423</p>
                  <p>📱 +971-523011150 (WhatsApp)</p>
                  <p>✉️ info@zaincura.com</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2 text-gray-300">
                  <Link href="/blog" className="block hover:text-white">Health Blog</Link>
                  <Link href="/gp-doctor-deira-dubai" className="block hover:text-white">GP Services</Link>
                  <Link href="/lab-tests-dubai" className="block hover:text-white">Lab Tests</Link>
                  <Link href="/home-care-dubai" className="block hover:text-white">Home Care</Link>
                </div>
              </div>

              {/* Business Hours & Admin */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300 mb-4">
                  <p>Monday - Sunday: 9:00 AM - 9:00 PM</p>
                  <p>Home Care: 24/7 Available</p>
                </div>

                {/* Discrete Admin Link */}
                <div className="pt-4 border-t border-gray-700">
                  <Link
                    href="/admin"
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    Staff Portal
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; 2024 Zain Cura Medical Center. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
