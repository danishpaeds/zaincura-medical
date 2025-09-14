import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TestTube,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Home,
  Shield,
  Zap,
  Heart,
  Activity,
  Beaker,
  Users,
  MapPin,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Lab Tests Dubai | Home Blood Collection Service | Same-Day Results',
  description: 'Best laboratory tests in Dubai with home blood collection. Same-day results, 50+ tests available. Professional phlebotomist visits your home, office, or hotel across Dubai.',
  keywords: 'lab tests Dubai, home blood collection Dubai, blood test at home Dubai, laboratory Dubai, same day results, blood work Dubai, medical tests Dubai, home lab service',
  openGraph: {
    title: 'Lab Tests Dubai | Home Blood Collection Service | Same-Day Results',
    description: 'Professional laboratory tests in Dubai with convenient home collection. Same-day results for 50+ blood tests. Licensed phlebotomists across Dubai.',
    url: 'https://zaincura.com/lab-tests-dubai-home-collection',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/lab-tests-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Laboratory Tests and Home Blood Collection Service in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab Tests Dubai | Home Blood Collection Service',
    description: 'Professional laboratory tests in Dubai with convenient home collection. Same-day results for 50+ blood tests.',
    images: ['https://zaincura.com/images/lab-tests-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/lab-tests-dubai-home-collection'
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
  name: 'Zain Cura Medical Center - Laboratory Tests Dubai',
  description: 'Professional laboratory testing services in Dubai with home blood collection. Same-day results for comprehensive blood work.',
  url: 'https://zaincura.com/lab-tests-dubai-home-collection',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/lab-tests-dubai.jpg',
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
  medicalSpecialty: ['Laboratory Medicine', 'Clinical Pathology', 'Medical Testing'],
  availableService: [
    {
      '@type': 'MedicalTest',
      name: 'Blood Tests'
    },
    {
      '@type': 'MedicalTest',
      name: 'Home Blood Collection'
    },
    {
      '@type': 'MedicalTest',
      name: 'Hormone Testing'
    },
    {
      '@type': 'MedicalTest',
      name: 'Wellness Panels'
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

const testCategories = [
  {
    icon: TestTube,
    title: 'Routine Blood Tests',
    description: 'CBC, metabolic panels, lipid profiles, liver & kidney function',
    tests: '15+ tests available'
  },
  {
    icon: Heart,
    title: 'Wellness Panels',
    description: 'Comprehensive health checks with smart digital reports',
    tests: '5+ packages available'
  },
  {
    icon: Activity,
    title: 'Hormone Testing',
    description: 'Thyroid, testosterone, female hormones, diabetes markers',
    tests: '12+ tests available'
  },
  {
    icon: Shield,
    title: 'STD Testing',
    description: '100% confidential sexual health screening',
    tests: '8+ tests available'
  },
  {
    icon: Users,
    title: 'Fertility Testing',
    description: 'Semen analysis, fertility hormones, reproductive health',
    tests: '6+ tests available'
  },
  {
    icon: Beaker,
    title: 'Specialized Tests',
    description: 'Genetic testing, microbiome analysis, allergy panels',
    tests: '10+ tests available'
  }
]

const homeServiceFeatures = [
  {
    icon: Home,
    title: '24/7 Home Collection',
    description: 'Professional phlebotomist visits your location across Dubai'
  },
  {
    icon: Clock,
    title: 'Same-Day Results',
    description: 'Most blood tests processed within 4-8 hours'
  },
  {
    icon: Shield,
    title: 'Sterile & Safe',
    description: 'Medical-grade equipment and safety protocols'
  },
  {
    icon: Zap,
    title: 'Digital Reports',
    description: 'Secure results delivered via WhatsApp or email'
  }
]

const popularTests = [
  'Complete Blood Count (CBC)',
  'Lipid Profile (Cholesterol)',
  'Liver Function Test',
  'Kidney Function Test',
  'Thyroid Function (TSH, T3, T4)',
  'Diabetes Screening (HbA1c)',
  'Vitamin D & B12 Levels',
  'Iron Studies',
  'STD Panel (Confidential)',
  'Pregnancy Test',
  'COVID-19 Testing',
  'Wellness Health Check'
]

const areasServed = [
  'Deira', 'Al Rigga', 'Downtown Dubai', 'Business Bay',
  'Dubai Marina', 'JLT', 'Jumeirah', 'Al Barsha',
  'Motor City', 'Sports City', 'Dubai Investment Park',
  'Emirates Hills', 'Arabian Ranches', 'The Springs'
]

export default function LabTestsDubaiPage() {
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
              <Badge className="mb-4 bg-primary text-white">Dubai's Most Convenient Lab Service</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Lab Tests Dubai | Home Blood Collection | Same-Day Results
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional laboratory tests in Dubai with convenient home blood collection.
                50+ tests available with same-day results. Licensed phlebotomists visit your home, office, or hotel.
              </p>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp for Lab Tests
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Lab Direct
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Lab Test
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
                  <span>24/7 home collection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>50+ tests available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All Dubai areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Test Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Laboratory Testing Menu
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive range of blood tests and medical screenings available at our clinic
                or with convenient home collection service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testCategories.map((category, index) => (
                <Card key={index} className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    <span className="text-sm text-primary font-medium">{category.tests}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services/laboratory">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  View All Lab Tests
                  <TestTube className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Home Collection Service */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Blood Collection Service in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Skip the clinic visit. Our certified phlebotomists bring professional lab services
                directly to your location across Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {homeServiceFeatures.map((feature, index) => (
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

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">How Home Collection Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Book via WhatsApp</h4>
                  <p className="text-blue-800 text-sm">Choose your tests and schedule collection time</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Professional Collection</h4>
                  <p className="text-blue-800 text-sm">Certified phlebotomist visits your location</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Digital Results</h4>
                  <p className="text-blue-800 text-sm">Secure results delivered same day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tests */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Most Popular Lab Tests in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most requested blood tests and medical screenings, all available with
                same-day results and home collection service.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {popularTests.map((test, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                  <CheckCircle className="w-5 h-5 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{test}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Can't find the test you need? We have 50+ tests available.</p>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask About Specific Tests
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Lab Collection Areas in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional blood collection service available across Dubai.
                Same-day and 24/7 emergency collection options.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {areasServed.map((area, index) => (
                <div key={index} className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-100">
                  <MapPin className="w-4 h-4 text-primary mx-auto mb-1" />
                  <span className="text-gray-700 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">Don't see your area? <span className="text-primary font-medium">Call us</span> - we serve all Dubai locations!</p>
            </div>
          </div>
        </section>

        {/* Contact & Booking */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Book Your Lab Tests Today
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Choose clinic visit at Al Ghurair Centre, Deira or convenient home collection
                  service anywhere in Dubai. Same quality results, same professional service.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Clinic: 09:00 - 21:00 Daily</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Home Collection: 24/7 Available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Same-day results for most tests</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Lab Test Booking</h3>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Lab Booking
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Lab Direct
                      </Button>
                    </a>
                    <Link href="/services/laboratory">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        <TestTube className="w-4 h-4 mr-2" />
                        Browse All Tests
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Clinic & home collection • Same-day results • No fasting required for most tests
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
              Professional Lab Tests in Dubai - Book Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Skip the wait, skip the traffic. Get professional lab tests with same-day results
              at our clinic or with convenient home collection across Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Lab Tests Now
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Lab
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
