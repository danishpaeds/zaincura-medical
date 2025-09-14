import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Stethoscope,
  Home,
  Clock,
  Shield,
  Heart,
  Users,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  MapPin,
  Star,
  Award,
  Activity,
  Baby,
  TestTube
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Home GP Consultation Dubai | Doctor Home Visit | Same-Day Home Care',
  description: 'Professional GP consultations at your home in Dubai. Experienced doctors visit your location for medical consultations, health checks, and treatments. Available 24/7 across Dubai.',
  keywords: 'home GP Dubai, doctor home visit Dubai, home consultation Dubai, GP at home Dubai, home medical consultation Dubai, family doctor home visit',
  openGraph: {
    title: 'Home GP Consultation Dubai | Doctor Home Visit | Same-Day Home Care',
    description: 'Professional GP consultations at your home in Dubai. Experienced doctors visit your location for medical care.',
    url: 'https://zaincura.com/home-gp-consultation-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/home-gp-consultation-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Home GP Consultation Service in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/home-gp-consultation-dubai'
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
  name: 'Home GP Consultation Dubai - Zain Cura Medical',
  description: 'Professional GP consultations at your home in Dubai with experienced doctors available 24/7',
  url: 'https://zaincura.com/home-gp-consultation-dubai',
  telephone: '+971-45703423',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  },
  availableService: {
    '@type': 'MedicalTherapy',
    name: 'Home GP Consultation',
    description: 'General practitioner consultations at patient home',
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Zain Cura Medical Center'
    }
  }
}

const homeGPServices = [
  {
    title: "General Health Consultation",
    description: "Comprehensive medical assessment and diagnosis at home",
    conditions: ["Cold & flu", "Fever", "Headaches", "Body aches", "Fatigue"]
  },
  {
    title: "Chronic Disease Management",
    description: "Ongoing care for long-term health conditions",
    conditions: ["Diabetes", "Hypertension", "Heart conditions", "Arthritis", "COPD"]
  },
  {
    title: "Prescription & Medication",
    description: "Prescription reviews and medication management",
    conditions: ["Medication refills", "Drug interactions", "Side effects", "Dosage adjustments"]
  },
  {
    title: "Health Certificates",
    description: "Medical certificates and fitness assessments",
    conditions: ["Employment medicals", "Travel certificates", "Fitness assessments", "Sick leave"]
  }
]

const homeAdvantages = [
  {
    icon: Home,
    title: "Comfort of Home",
    description: "Receive medical care in familiar surroundings"
  },
  {
    icon: Clock,
    title: "Same-Day Availability",
    description: "GP visits available within 30-60 minutes"
  },
  {
    icon: Shield,
    title: "Avoid Clinic Exposure",
    description: "Stay safe from waiting room infections"
  },
  {
    icon: Users,
    title: "Family Care",
    description: "Multiple family members can be seen in one visit"
  }
]

const serviceAreas = [
  "Downtown Dubai", "Dubai Marina", "JBR", "JLT", "Business Bay",
  "Deira", "Bur Dubai", "Jumeirah", "Al Barsha", "Dubai Hills",
  "Arabian Ranches", "Motor City", "Sports City", "International City"
]

export default function HomeGPConsultationDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-600 text-white">Professional Home GP Service</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Home GP Consultation Dubai | Doctor Home Visit Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional GP consultations at your home in Dubai. Experienced doctors visit
                your location for comprehensive medical care, health assessments, and treatments.
                Available same-day across all Dubai areas.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Stethoscope className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">DHA Licensed GP Doctors</span>
                </div>
                <p className="text-green-800 text-sm">
                  Same-day visits • All ages welcome • Comprehensive care • Medical certificates
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Home GP
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Home Visit
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Visit
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>30-60 min response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All Dubai areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24/7 available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Insurance receipts</span>
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
                Home GP Consultation Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive medical care delivered to your home by experienced GP doctors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {homeGPServices.map((service, index) => (
                <Card key={index} className="clinical-card h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.conditions.map((condition, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Home GP Consultation?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the convenience and comfort of professional medical care at home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {homeAdvantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home GP Service Areas in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional GP consultations available across all areas of Dubai
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg text-center">
                  <MapPin className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span className="text-gray-700 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Home Care Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/emergency-doctor-home-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Emergency Home Doctor
                </Button>
              </Link>
              <Link href="/pediatric-home-care-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Baby className="w-4 h-4 mr-2" />
                  Pediatric Home Care
                </Button>
              </Link>
              <Link href="/home-blood-collection-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <TestTube className="w-4 h-4 mr-2" />
                  Home Blood Collection
                </Button>
              </Link>
              <Link href="/iv-drip-therapy-dubai-clinic-home">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Activity className="w-4 h-4 mr-2" />
                  Home IV Therapy
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Home GP Consultation Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple steps to get professional medical care at your home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Visit</h3>
                <p className="text-gray-600">Contact us via WhatsApp or phone to schedule your home GP visit</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Doctor Arrives</h3>
                <p className="text-gray-600">Licensed GP doctor arrives at your location within 30-60 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation</h3>
                <p className="text-gray-600">Comprehensive medical examination and consultation at home</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Treatment & Follow-up</h3>
                <p className="text-gray-600">Receive treatment, prescriptions, and follow-up care recommendations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a GP Doctor at Home Today?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Professional GP consultations delivered to your doorstep. Same-day availability
              across Dubai with experienced, licensed doctors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Home GP Now
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Immediate Visit
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
