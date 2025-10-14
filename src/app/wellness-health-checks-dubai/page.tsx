import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  Activity,
  TestTube,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Home,
  Shield,
  TrendingUp,
  Award,
  FileText,
  Star,
  Zap,
  MapPin,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Wellness Health Checks Dubai | Comprehensive Health Screening | Smart Reports',
  description: 'Wellness health checks Dubai with smart reports. 40+ biomarkers, same-day results. Executive & preventive packages from AED 499.',
  keywords: 'wellness health check Dubai, executive health checkup Dubai, preventive health screening Dubai, smart health reports Dubai, comprehensive medical checkup Dubai, annual health check Dubai',
  openGraph: {
    title: 'Wellness Health Checks Dubai | Comprehensive Health Screening | Smart Reports',
    description: 'Complete wellness health checks in Dubai with smart digital reports. 40+ biomarkers, same-day results, personalized health insights.',
    url: 'https://zaincura.com/wellness-health-checks-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/wellness-health-checks-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Wellness Health Checks and Executive Health Screening in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wellness Health Checks Dubai | Comprehensive Health Screening',
    description: 'Complete wellness health checks with smart digital reports. 40+ biomarkers, same-day results.',
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Zain Cura Medical Center - Wellness Health Checks Dubai',
  description: 'Comprehensive wellness health checks and executive health screening in Dubai with smart digital reports and personalized health insights',
  url: 'https://zaincura.com/wellness-health-checks-dubai',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/wellness-health-checks-dubai.jpg',
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
  medicalSpecialty: ['Preventive Medicine', 'Internal Medicine', 'Executive Health'],
  availableService: [
    {
      '@type': 'MedicalTest',
      name: 'Comprehensive Wellness Panel'
    },
    {
      '@type': 'MedicalTest',
      name: 'Executive Health Checkup'
    },
    {
      '@type': 'MedicalTest',
      name: 'Preventive Health Screening'
    },
    {
      '@type': 'MedicalTest',
      name: 'Smart Health Reports'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: ['AED', 'USD'],
  paymentAccepted: ['Cash', 'Credit Card'],
  hasMap: 'https://maps.google.com/?q=Al+Ghurair+Centre+Dubai',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  }
}

const wellnessPackages = [
  {
    title: "Essential Wellness Check",
    price: "From AED 499",
    description: "Foundation health screening with key biomarkers",
    tests: [
      "Complete Blood Count (CBC)",
      "Basic Metabolic Panel",
      "Lipid Profile",
      "Liver Function Tests",
      "Kidney Function Tests",
      "Thyroid Function (TSH)",
      "Vitamin D Level",
      "Smart Digital Report"
    ],
    duration: "Same-day results",
    popular: false
  },
  {
    title: "Comprehensive Wellness Panel",
    price: "From AED 999",
    description: "Complete health assessment with 40+ biomarkers and smart insights",
    tests: [
      "All Essential Tests Included",
      "Extended Metabolic Panel",
      "HbA1c (Diabetes Screening)",
      "Vitamin B12 & Folate",
      "Iron Studies",
      "Inflammatory Markers (CRP, ESR)",
      "Cardiac Risk Assessment",
      "Personalized Health Report",
      "Doctor Consultation"
    ],
    duration: "Same-day results",
    popular: true
  },
  {
    title: "Executive Health Package",
    price: "From AED 1,999",
    description: "Premium health screening for busy professionals",
    tests: [
      "All Comprehensive Tests Included",
      "Tumor Markers Screening",
      "Advanced Cardiac Markers",
      "Hormone Panel",
      "Stress Markers",
      "Nutritional Assessment",
      "Body Composition Analysis",
      "ECG & Vital Signs",
      "Executive Health Report",
      "Extended Doctor Consultation"
    ],
    duration: "Same-day results",
    popular: false
  },
  {
    title: "Women's Wellness Package",
    price: "From AED 1,299",
    description: "Specialized health screening tailored for women",
    tests: [
      "Complete Blood Count",
      "Comprehensive Metabolic Panel",
      "Female Hormone Panel",
      "Thyroid Complete Panel",
      "Iron & Ferritin Studies",
      "Vitamin D, B12, Folate",
      "Bone Health Markers",
      "Breast & Cervical Health Consultation",
      "Women's Health Report"
    ],
    duration: "Same-day results",
    popular: false
  }
]

const smartReportFeatures = [
  {
    icon: TrendingUp,
    title: "Personalized Insights",
    description: "AI-powered analysis with actionable health recommendations"
  },
  {
    icon: FileText,
    title: "Digital Health Report",
    description: "Comprehensive digital report accessible on any device"
  },
  {
    icon: Activity,
    title: "Health Trends",
    description: "Track your health metrics over time with visual charts"
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Early detection and prevention recommendations"
  }
]

const whyChooseWellness = [
  {
    icon: Heart,
    title: "Preventive Care Focus",
    description: "Detect health issues early when they're most treatable"
  },
  {
    icon: Award,
    title: "Certified Lab",
    description: "CAP/ISO certified laboratory with accurate results"
  },
  {
    icon: Clock,
    title: "Same-Day Results",
    description: "Fast turnaround with comprehensive reports"
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Professional doctors to explain your results"
  }
]

const targetAudiences = [
  "Annual health checkup seekers",
  "Corporate executives",
  "Pre-employment medical exams",
  "Pre-marital health screening",
  "Adults 35+ years",
  "Health-conscious individuals",
  "Family health planning",
  "Insurance health requirements"
]

export default function WellnessHealthChecksDubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary text-white">Smart Health Reports Included</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Wellness Health Checks Dubai | Comprehensive Health Screening
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Complete wellness health checks in Dubai with smart digital reports. 40+ biomarkers,
                same-day results, personalized health insights. Executive and preventive health packages from AED 499.
              </p>

              {/* Trust Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">CAP/ISO Certified Laboratory</span>
                </div>
                <p className="text-green-800 text-sm">
                  Accurate results • Smart insights • Preventive care focus • Doctor consultation included
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Wellness%20Health%20Check%20packages%20at%20Zain%20Cura.%20Can%20you%20share%20details%20about%20comprehensive%20health%20screening%20with%20smart%20reports%3F" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp for Health Check
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Packages
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Health Check
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Same-day results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Smart digital reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>40+ biomarkers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Doctor consultation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness Packages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Wellness Health Check Packages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our carefully designed health screening packages with comprehensive testing
                and smart digital reports for complete health insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wellnessPackages.map((pkg, index) => (
                <Card key={index} className={`clinical-card h-full ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {pkg.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                          {pkg.popular && (
                            <Badge className="bg-primary text-white">Most Popular</Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {pkg.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Tests Included:</h4>
                      <div className="space-y-1 max-h-48 overflow-y-auto">
                        {pkg.tests.map((test, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{test}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{pkg.duration}</span>
                    </div>

                    <div className="space-y-3">
                      <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Wellness%20Health%20Check%20packages%20at%20Zain%20Cura.%20Can%20you%20share%20details%20about%20comprehensive%20health%20screening%20with%20smart%20reports%3F" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp to Book Package
                        </Button>
                      </a>
                      <Link href="/book">
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Health Check
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Report Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Smart Digital Health Reports
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI-powered smart reports provide personalized health insights, risk assessments,
                and actionable recommendations for optimal health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartReportFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">What's in Your Smart Report?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Health Analysis</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Comprehensive test results with normal ranges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Color-coded risk indicators</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Health score and trends</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Personalized Recommendations</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Lifestyle and diet suggestions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Follow-up test recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Preventive care action plan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Wellness Health Checks?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience comprehensive health screening with advanced diagnostics and personalized care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseWellness.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Get Tested */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who Should Get a Wellness Health Check?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Regular health screening is recommended for everyone, especially for preventive care and early detection.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {targetAudiences.map((audience, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{audience}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Take charge of your health today with comprehensive wellness screening
              </p>
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Wellness%20Health%20Check%20packages%20at%20Zain%20Cura.%20Can%20you%20share%20details%20about%20comprehensive%20health%20screening%20with%20smart%20reports%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Your Wellness Check Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple Health Check Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get your comprehensive health assessment in three easy steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Book & Visit</h3>
                <p className="text-gray-600">
                  Schedule your appointment online or walk-in to our clinic for sample collection
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Analysis</h3>
                <p className="text-gray-600">
                  Our certified lab processes your samples with advanced diagnostics
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Report & Consultation</h3>
                <p className="text-gray-600">
                  Receive your digital health report with doctor consultation for insights
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Get Your Wellness Health Check Today
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Visit our modern clinic at Al Ghurair Centre, Deira for comprehensive wellness screening
                  with same-day results and smart health reports.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Location</h4>
                      <p className="text-gray-600">Al Ghurair Centre, 6th Floor<br />Deira, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Health Check Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 09:00 - 21:00<br />Walk-ins welcome</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Results</h4>
                      <p className="text-gray-600">Same-day results with smart digital reports</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Book Wellness Health Check</h3>
                <div className="space-y-4">
                  <p className="text-green-800 mb-4">
                    Choose your preferred booking method for comprehensive health screening:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Wellness%20Health%20Check%20packages%20at%20Zain%20Cura.%20Can%20you%20share%20details%20about%20comprehensive%20health%20screening%20with%20smart%20reports%3F" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp for Quick Booking
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call for Package Details
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Online Appointment
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-green-700 text-center">
                    Same-day results • Smart reports • Doctor consultation included
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Invest in Your Health Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Comprehensive wellness health checks in Dubai with smart digital reports.
              Take the first step towards better health with preventive screening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Wellness%20Health%20Check%20packages%20at%20Zain%20Cura.%20Can%20you%20share%20details%20about%20comprehensive%20health%20screening%20with%20smart%20reports%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Wellness Check Now
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C]">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Packages
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-4 h-4" />
                <span>5-star rated service</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Smart digital reports</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>CAP/ISO certified lab</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
