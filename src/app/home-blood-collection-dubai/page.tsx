import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TestTube,
  Home,
  Clock,
  Shield,
  Activity,
  Heart,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  MapPin,
  Users,
  Star,
  Award,
  Stethoscope,
  Baby,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Home Blood Collection Dubai | Blood Test at Home | Lab Sample Collection',
  description: 'Professional home blood collection service in Dubai. Certified phlebotomists visit your home for blood test sample collection. Same-day results for all lab tests.',
  keywords: 'home blood collection Dubai, blood test at home Dubai, phlebotomist home visit Dubai, lab sample collection Dubai, home lab service Dubai',
  openGraph: {
    title: 'Home Blood Collection Dubai | Blood Test at Home | Lab Sample Collection',
    description: 'Professional home blood collection service in Dubai. Certified phlebotomists visit your home for blood test sample collection.',
    url: 'https://zaincura.com/home-blood-collection-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/home-blood-collection-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Blood Collection Service in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/home-blood-collection-dubai'
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
  '@type': 'MedicalBusiness',
  name: 'Home Blood Collection Dubai - Zain Cura Medical',
  description: 'Professional home blood collection service in Dubai with certified phlebotomists providing convenient lab sample collection at patient homes',
  url: 'https://zaincura.com/home-blood-collection-dubai',
  telephone: '+971-45703423',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  },
  availableService: {
    '@type': 'MedicalTest',
    name: 'Home Blood Collection',
    description: 'Professional blood sample collection at patient home for laboratory testing'
  }
}

const bloodTestCategories = [
  {
    title: "Routine Blood Tests",
    description: "Essential health monitoring tests",
    tests: ["Complete Blood Count (CBC)", "Basic Metabolic Panel", "Lipid Profile", "Liver Function Tests", "Kidney Function Tests", "Thyroid Function (TSH)"],
    turnaround: "Same day",
    icon: TestTube
  },
  {
    title: "Specialized Testing",
    description: "Advanced diagnostic testing",
    tests: ["Cardiac Risk Markers", "Tumor Markers", "Allergy Panel", "Autoimmune Testing", "Hormone Panels", "Inflammatory Markers"],
    turnaround: "24-48 hours",
    icon: Activity
  },
  {
    title: "Wellness Packages",
    description: "Comprehensive health screenings",
    tests: ["Executive Health Panel", "Annual Wellness Check", "Diabetes Screening", "Heart Health Package", "Women's Health Panel", "Men's Health Panel"],
    turnaround: "Same day",
    icon: Heart
  },
  {
    title: "Emergency Blood Tests",
    description: "Urgent diagnostic testing",
    tests: ["Emergency Glucose", "Cardiac Enzymes", "Infection Markers", "Blood Gas Analysis", "Toxicology Screen", "Emergency CBC"],
    turnaround: "2-4 hours",
    icon: Zap
  }
]

const collectionFeatures = [
  {
    icon: Home,
    title: "Convenient Home Service",
    description: "Professional phlebotomists visit your home, office, or hotel"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Blood collection service available around the clock"
  },
  {
    icon: Shield,
    title: "Sterile & Safe",
    description: "Medical-grade equipment with complete safety protocols"
  },
  {
    icon: Star,
    title: "Same Lab Quality",
    description: "Identical accuracy and turnaround as clinic collection"
  }
]

const serviceAreas = [
  "Downtown Dubai", "Dubai Marina", "JBR", "JLT", "Business Bay", "DIFC",
  "Deira", "Bur Dubai", "Jumeirah", "Al Barsha", "Dubai Hills", "Mirdif",
  "Arabian Ranches", "Motor City", "Sports City", "International City",
  "Dubai Investment Park", "Emirates Hills", "The Springs", "All Dubai Hotels"
]

const specializedTests = [
  {
    category: "Fertility Testing",
    tests: ["Hormone panels", "Ovulation monitoring", "Male fertility markers"]
  },
  {
    category: "Pediatric Testing",
    tests: ["Child-friendly collection", "Newborn screening", "Growth monitoring"]
  },
  {
    category: "Elderly Care",
    tests: ["Chronic disease monitoring", "Medication level checks", "Comfort-focused service"]
  },
  {
    category: "Corporate Health",
    tests: ["Employee wellness", "Pre-employment medicals", "Group health screening"]
  }
]

export default function HomeBloodCollectionDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-teal-600 text-white">Professional Phlebotomy Service</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Home Blood Collection Dubai | Professional Lab Sample Collection
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional home blood collection service in Dubai. Certified phlebotomists visit
                your home, office, or hotel for safe blood sample collection. Same-day results
                for all lab tests with convenience and comfort.
              </p>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TestTube className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold text-teal-900">Certified Phlebotomists</span>
                </div>
                <p className="text-teal-800 text-sm">
                  Same-day results • All lab tests • Sterile equipment • 24/7 service
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp for Collection
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Blood Test
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Collection
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>50+ blood tests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Same-day results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24/7 collection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All Dubai areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blood Test Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Blood Test Menu Available at Home
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional home collection for all types of blood tests with same lab quality and accuracy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bloodTestCategories.map((category, index) => (
                <Card key={index} className="clinical-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {category.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {category.turnaround}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {category.tests.map((test, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">{test}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp for This Test
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Home Blood Collection?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional phlebotomy service bringing lab-quality blood collection to your doorstep
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collectionFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-teal-600" />
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

        {/* Collection Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Home Blood Collection Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple, professional process for safe blood sample collection at home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Collection</h3>
                <p className="text-gray-600">Choose your tests and schedule convenient collection time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phlebotomist Arrives</h3>
                <p className="text-gray-600">Certified professional arrives with sterile equipment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe Collection</h3>
                <p className="text-gray-600">Quick, professional blood sample collection at home</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Results Delivered</h3>
                <p className="text-gray-600">Secure digital results delivered same day</p>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Before Collection</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Follow any fasting instructions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Stay hydrated unless advised otherwise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Have your ID ready</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">During Collection</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Professional, gentle technique</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Sterile, single-use equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Quick 5-10 minute process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Home Collection Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tailored blood collection services for specific needs and populations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedTests.map((specialty, index) => (
                <Card key={index} className="clinical-card text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {specialty.category}
                    </h3>
                    <div className="space-y-2">
                      {specialty.tests.map((test, idx) => (
                        <div key={idx} className="text-sm text-gray-600">
                          • {test}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Blood Collection Areas in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional phlebotomy service available across all areas of Dubai
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-teal-50 p-3 rounded-lg text-center">
                  <MapPin className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                  <span className="text-gray-700 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Laboratory & Home Care Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/services/laboratory">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <TestTube className="w-4 h-4 mr-2" />
                  Complete Lab Menu
                </Button>
              </Link>
              <Link href="/home-gp-consultation-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Home GP Consultation
                </Button>
              </Link>
              <Link href="/wellness-health-checks-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Wellness Health Checks
                </Button>
              </Link>
              <Link href="/pediatric-home-care-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Baby className="w-4 h-4 mr-2" />
                  Pediatric Blood Tests
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Blood Tests? We Come to You!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Professional home blood collection service across Dubai. Skip the clinic visit
              and get the same quality lab results with the convenience of home service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp for Collection
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Blood Test
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <TestTube className="w-4 h-4" />
                <span>50+ blood tests</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Same-day results</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Certified phlebotomists</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
