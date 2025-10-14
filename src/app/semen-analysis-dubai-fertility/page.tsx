import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TestTube,
  Lock,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Home,
  Shield,
  Users,
  Award,
  MapPin,
  Star,
  Activity,
  FileText,
  Heart
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Semen Analysis Dubai | Fertility Testing | Private & Confidential',
  description: 'Professional semen analysis Dubai for fertility testing. WHO standards, same-day results, complete privacy. Male fertility assessment center.',
  keywords: 'semen analysis Dubai, sperm test Dubai, male fertility test Dubai, fertility testing Dubai, sperm count Dubai, infertility test Dubai, private semen analysis',
  openGraph: {
    title: 'Semen Analysis Dubai | Fertility Testing | Private & Confidential',
    description: 'Professional semen analysis and male fertility testing in Dubai. WHO standards, same-day results, complete privacy guaranteed.',
    url: 'https://zaincura.com/semen-analysis-dubai-fertility',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/semen-analysis-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Semen Analysis and Fertility Testing in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semen Analysis Dubai | Fertility Testing',
    description: 'Professional semen analysis in Dubai. WHO standards, same-day results, complete privacy.',
    images: ['https://zaincura.com/images/semen-analysis-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/semen-analysis-dubai-fertility'
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
  name: 'Zain Cura Medical Center - Semen Analysis Dubai',
  description: 'Professional semen analysis and male fertility testing services in Dubai with complete privacy and accurate results',
  url: 'https://zaincura.com/semen-analysis-dubai-fertility',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/semen-analysis-dubai.jpg',
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
  medicalSpecialty: ['Reproductive Medicine', 'Andrology', 'Fertility Testing', 'Laboratory Medicine'],
  availableService: [
    {
      '@type': 'MedicalTest',
      name: 'Semen Analysis'
    },
    {
      '@type': 'MedicalTest',
      name: 'Male Fertility Testing'
    },
    {
      '@type': 'MedicalTest',
      name: 'Sperm Count Analysis'
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

const semenAnalysisParameters = [
  {
    parameter: "Sperm Count",
    description: "Total number and concentration of sperm",
    normal: "≥15 million/ml"
  },
  {
    parameter: "Motility",
    description: "Percentage of moving sperm",
    normal: "≥40% total motility"
  },
  {
    parameter: "Morphology",
    description: "Shape and structure of sperm",
    normal: "≥4% normal forms"
  },
  {
    parameter: "Volume",
    description: "Amount of semen produced",
    normal: "≥1.5 ml"
  },
  {
    parameter: "pH Level",
    description: "Acidity/alkalinity of semen",
    normal: "7.2-8.0"
  },
  {
    parameter: "Vitality",
    description: "Percentage of live sperm",
    normal: "≥58% live sperm"
  },
  {
    parameter: "Liquefaction Time",
    description: "Time for semen to liquefy",
    normal: "Within 60 minutes"
  },
  {
    parameter: "White Blood Cells",
    description: "Presence of infection markers",
    normal: "<1 million/ml"
  }
]

const testPackages = [
  {
    title: "Basic Semen Analysis",
    description: "Essential fertility assessment following WHO standards",
    includes: [
      "Sperm count & concentration",
      "Motility assessment",
      "Basic morphology",
      "Volume & pH testing",
      "Detailed report"
    ],
    duration: "24-48 hours",
    popular: false
  },
  {
    title: "Comprehensive Fertility Analysis",
    description: "Complete male fertility evaluation with advanced testing",
    includes: [
      "All basic analysis parameters",
      "Advanced morphology (Kruger strict)",
      "Vitality testing",
      "DNA fragmentation analysis",
      "Antisperm antibodies",
      "Doctor consultation"
    ],
    duration: "48-72 hours",
    popular: true
  },
  {
    title: "Post-Vasectomy Analysis",
    description: "Confirmation of vasectomy success",
    includes: [
      "Presence/absence of sperm",
      "Motility if present",
      "Multiple sample testing",
      "Certificate provided"
    ],
    duration: "Same day",
    popular: false
  }
]

const privacyFeatures = [
  {
    icon: Lock,
    title: "100% Confidential",
    description: "Complete privacy guaranteed with discrete service"
  },
  {
    icon: Shield,
    title: "Private Collection Room",
    description: "Comfortable, private space with complete discretion"
  },
  {
    icon: FileText,
    title: "Secure Results",
    description: "Confidential results delivered only to you"
  },
  {
    icon: Users,
    title: "Professional Staff",
    description: "Experienced technicians ensuring comfort and privacy"
  }
]

const preparationSteps = [
  "Abstain from ejaculation for 2-5 days before the test",
  "Avoid alcohol, caffeine, and smoking 2-3 days prior",
  "Stay well hydrated before collection",
  "Inform about any medications or recent illness",
  "Collection can be done at clinic or home (within 30 minutes)",
  "Use only the sterile container provided by the clinic"
]

const faqs = [
  {
    question: "Is semen analysis completely private?",
    answer: "Yes, we guarantee 100% privacy and confidentiality. We have private collection rooms and your results are shared only with you through secure channels."
  },
  {
    question: "How long does it take to get results?",
    answer: "Basic semen analysis results are typically available within 24-48 hours. Comprehensive fertility panels may take 48-72 hours for complete results."
  },
  {
    question: "What if my results are abnormal?",
    answer: "Abnormal results don't necessarily mean infertility. Our doctors will explain your results and recommend further testing or treatment options if needed."
  },
  {
    question: "Can I collect the sample at home?",
    answer: "Yes, home collection is possible. The sample must reach our lab within 30 minutes of collection and be kept at body temperature during transport."
  },
  {
    question: "Do I need a doctor's referral?",
    answer: "No referral is needed. You can book directly for semen analysis at our clinic."
  }
]

export default function SemenAnalysisDubaiFertility() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-600 text-white">Private & Confidential Testing</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Semen Analysis Dubai | Male Fertility Testing
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional semen analysis in Dubai for accurate fertility assessment.
                WHO standard testing with 24-48 hour results. Complete privacy guaranteed
                in our discrete facility at Al Ghurair Centre, Deira.
              </p>

              {/* Privacy Assurance */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">100% Private & Confidential</span>
                </div>
                <p className="text-green-800 text-sm">
                  Private collection room • Discrete service • Confidential results • Professional care
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Semen%20Analysis%20testing%20for%20fertility%20evaluation.%20Can%20you%20share%20details%20about%20the%20test%2C%20pricing%2C%20and%20booking%3F" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp (Confidential)
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Private Line
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Test
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>WHO standards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24-48h results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>100% private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Accurate testing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Test Parameters */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Semen Analysis Parameters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete fertility assessment following WHO laboratory standards for accurate diagnosis
                and treatment planning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {semenAnalysisParameters.map((param, index) => (
                <Card key={index} className="clinical-card h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {param.parameter}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {param.description}
                    </p>
                    <div className="bg-blue-50 rounded-lg p-2 text-center">
                      <span className="text-xs font-medium text-blue-900">Normal: {param.normal}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Test Packages */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Semen Analysis Test Packages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the right fertility testing package based on your needs.
                All tests performed following international WHO standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testPackages.map((pkg, index) => (
                <Card key={index} className={`clinical-card h-full ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  <CardContent className="p-6">
                    {pkg.popular && (
                      <Badge className="bg-blue-500 text-white mb-4">Most Comprehensive</Badge>
                    )}

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {pkg.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {pkg.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                      <div className="space-y-1">
                        {pkg.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Results: {pkg.duration}</span>
                    </div>

                    <div className="space-y-3">
                      <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Semen%20Analysis%20testing%20for%20fertility%20evaluation.%20Can%20you%20share%20details%20about%20the%20test%2C%20pricing%2C%20and%20booking%3F" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp to Book
                        </Button>
                      </a>
                      <Link href="/book">
                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Test
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Privacy is Our Priority
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the sensitive nature of fertility testing and ensure complete
                confidentiality throughout your experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
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

        {/* Preparation Guidelines */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Prepare for Semen Analysis
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Proper preparation ensures accurate results. Follow these guidelines for optimal testing.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="clinical-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Preparation Steps:</h3>
                  <div className="space-y-4">
                    {preparationSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-900 text-sm">
                      <strong>Important:</strong> Following these guidelines ensures the most accurate results.
                      Contact us if you have any questions about preparation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about semen analysis and fertility testing.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((item, index) => (
                <Card key={index} className="clinical-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Book Your Semen Analysis Test
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Private, professional fertility testing at our discrete facility in Al Ghurair Centre, Deira.
                  Complete confidentiality guaranteed with accurate WHO-standard results.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Location</h4>
                      <p className="text-gray-600">Al Ghurair Centre, 6th Floor<br />Deira, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Testing Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 09:00 - 21:00<br />Private appointments available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Privacy Features</h4>
                      <p className="text-gray-600">Private collection room • Discrete entrance • Confidential results</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Confidential Booking</h3>
                <div className="space-y-4">
                  <p className="text-blue-800 mb-4">
                    Book your private semen analysis test with complete confidentiality:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Semen%20Analysis%20testing%20for%20fertility%20evaluation.%20Can%20you%20share%20details%20about%20the%20test%2C%20pricing%2C%20and%20booking%3F" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp (Private)
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Confidential Line
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Online Booking
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-blue-700 text-center">
                    100% private • WHO standards • 24-48h results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Fertility Assessment Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Professional semen analysis in Dubai with complete privacy and accurate results.
              Take the first step in your fertility journey with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Semen%20Analysis%20testing%20for%20fertility%20evaluation.%20Can%20you%20share%20details%20about%20the%20test%2C%20pricing%2C%20and%20booking%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp (Confidential)
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Private Line
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>100% confidential</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>WHO standards</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>24-48h results</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
