import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Lock,
  TestTube,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Home,
  Eye,
  Heart,
  Users,
  MapPin,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'STD Testing Dubai | 100% Confidential | Same-Day Results | Home Collection',
  description: 'Confidential STD testing in Dubai with complete privacy. Same-day results, home collection available. Professional, discreet sexual health screening at Zain Cura Medical Center.',
  keywords: 'STD testing Dubai, confidential STD test Dubai, sexual health screening Dubai, private STD testing, anonymous STD test Dubai, home STD collection Dubai',
  openGraph: {
    title: 'STD Testing Dubai | 100% Confidential | Same-Day Results',
    description: 'Professional confidential STD testing in Dubai. Complete privacy guaranteed, same-day results, home collection available. Trusted sexual health screening.',
    url: 'https://zaincura.com/std-testing-dubai-confidential',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/std-testing-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Confidential STD Testing Service in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STD Testing Dubai | 100% Confidential',
    description: 'Professional confidential STD testing in Dubai. Complete privacy guaranteed, same-day results.',
    images: ['https://zaincura.com/images/std-testing-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/std-testing-dubai-confidential'
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
  name: 'Zain Cura Medical Center - Confidential STD Testing',
  description: 'Professional confidential STD testing services in Dubai with complete privacy and same-day results',
  url: 'https://zaincura.com/std-testing-dubai-confidential',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/std-testing-dubai.jpg',
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
  medicalSpecialty: ['Sexual Health', 'Infectious Disease Testing', 'Laboratory Medicine'],
  availableService: [
    {
      '@type': 'MedicalTest',
      name: 'STD Testing'
    },
    {
      '@type': 'MedicalTest',
      name: 'HIV Testing'
    },
    {
      '@type': 'MedicalTest',
      name: 'Sexual Health Screening'
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

const privacyFeatures = [
  {
    icon: Lock,
    title: '100% Confidential',
    description: 'Complete privacy guaranteed. Results shared only with you through secure channels.'
  },
  {
    icon: Eye,
    title: 'Anonymous Testing',
    description: 'No judgmental questions. Professional, discrete service in private setting.'
  },
  {
    icon: Shield,
    title: 'Secure Results',
    description: 'Encrypted digital results delivered privately via WhatsApp or secure email.'
  },
  {
    icon: Home,
    title: 'Home Collection',
    description: 'Complete privacy with professional sample collection at your location.'
  }
]

const stdTests = [
  {
    name: 'Comprehensive STD Panel',
    includes: ['HIV 1&2', 'Hepatitis B & C', 'Syphilis', 'Chlamydia', 'Gonorrhea', 'Herpes 1&2'],
    duration: '24-48 hours',
    popular: true
  },
  {
    name: 'HIV Testing (Confidential)',
    includes: ['HIV 1&2 antibodies', 'HIV p24 antigen', 'Confidential results'],
    duration: '24 hours'
  },
  {
    name: 'Hepatitis Panel',
    includes: ['Hepatitis A antibodies', 'Hepatitis B surface antigen', 'Hepatitis C antibodies'],
    duration: '24 hours'
  },
  {
    name: 'Bacterial STD Panel',
    includes: ['Chlamydia', 'Gonorrhea', 'Syphilis screening'],
    duration: '24-48 hours'
  },
  {
    name: 'Viral STD Panel',
    includes: ['Herpes 1&2', 'HIV screening', 'Viral load testing if needed'],
    duration: '24-48 hours'
  },
  {
    name: 'Complete Sexual Health Check',
    includes: ['All STD panel tests', 'General health markers', 'Consultation included'],
    duration: '24-48 hours'
  }
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Complete Confidentiality',
    description: 'Your privacy is our priority. No information shared with anyone without your consent.'
  },
  {
    icon: Clock,
    title: 'Same-Day Results',
    description: 'Fast, accurate results delivered within 24-48 hours for most STD tests.'
  },
  {
    icon: Users,
    title: 'Non-Judgmental Care',
    description: 'Professional, compassionate healthcare providers in a safe environment.'
  },
  {
    icon: Star,
    title: 'DHA Licensed',
    description: 'Certified medical professionals following international testing standards.'
  }
]

const faqItems = [
  {
    question: 'Is STD testing completely confidential?',
    answer: 'Yes, we guarantee 100% confidentiality. Your test results are shared only with you through secure channels. We never share information with anyone without your explicit consent.'
  },
  {
    question: 'How quickly can I get STD test results?',
    answer: 'Most STD tests provide results within 24-48 hours. We deliver results securely via WhatsApp or encrypted email for complete privacy.'
  },
  {
    question: 'Do you offer home collection for STD testing?',
    answer: 'Yes, we provide discreet home collection service across Dubai. Our certified phlebotomists visit your location for complete privacy and convenience.'
  },
  {
    question: 'What STDs do you test for?',
    answer: 'We test for all common STDs including HIV, Hepatitis B&C, Syphilis, Chlamydia, Gonorrhea, and Herpes. Comprehensive panels and individual tests available.'
  }
]

export default function STDTestingDubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-red-600 text-white">100% Confidential & Private</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                STD Testing Dubai | 100% Confidential | Same-Day Results
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional confidential STD testing in Dubai with complete privacy guaranteed.
                Same-day results, home collection available. No judgment, just professional healthcare.
              </p>

              {/* Privacy Assurance */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Lock className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">Your Privacy is Guaranteed</span>
                </div>
                <p className="text-blue-800 text-sm">
                  Complete confidentiality • Secure results delivery • Professional discretion • Anonymous options available
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Confidential WhatsApp
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Private Call
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Discrete Booking
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>100% confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24-48h results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Home collection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No judgment</span>
                </div>
              </div>
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
                We understand the sensitive nature of STD testing. Our commitment to your privacy
                and dignity is absolute - no exceptions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-red-600" />
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

        {/* STD Tests Available */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive STD Testing Panel
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional testing for all common sexually transmitted diseases with
                fast, accurate results and complete confidentiality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stdTests.map((test, index) => (
                <Card key={index} className={`clinical-card h-full ${test.popular ? 'ring-2 ring-red-500' : ''}`}>
                  <CardContent className="p-6">
                    {test.popular && (
                      <Badge className="bg-red-500 text-white mb-4">Most Popular</Badge>
                    )}

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {test.name}
                    </h3>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Tests Include:</h4>
                      <div className="space-y-1">
                        {test.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-6 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Results: {test.duration}</span>
                    </div>

                    <div className="space-y-3">
                      <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Confidential WhatsApp
                        </Button>
                      </a>
                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/book">
                          <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-sm">
                            <TestTube className="w-4 h-4 mr-1" />
                            Clinic
                          </Button>
                        </Link>
                        <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm">
                            <Home className="w-4 h-4 mr-1" />
                            Home
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our STD Testing Service?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional, confidential sexual health care in a judgment-free environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
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

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our confidential STD testing service.
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
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

        {/* Contact & Location */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Confidential STD Testing Location
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Private consultation rooms at Al Ghurair Centre, Deira. Discrete entrance,
                  professional staff, and complete confidentiality guaranteed.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Address</h4>
                      <p className="text-gray-600">Al Ghurair Centre, 6th Floor<br />Deira, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Private Consultation Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 09:00 - 21:00<br />Home Collection: 24/7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Privacy Features</h4>
                      <p className="text-gray-600">Private entrance • Confidential consultations • Secure results delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-6">Book Confidential STD Testing</h3>
                <div className="space-y-4">
                  <p className="text-red-800 mb-4">
                    Your privacy is completely protected. Choose your preferred contact method:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Confidential WhatsApp
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Private Phone Call
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Discrete Online Booking
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-red-700 text-center">
                    100% confidential • Same-day results • Home collection available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Confidential STD Testing Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Your sexual health matters. Get professional, confidential STD testing with
              complete privacy and fast results. No judgment, just healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Confidential WhatsApp
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Private Call
                </Button>
              </a>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
