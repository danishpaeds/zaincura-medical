import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Zap,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  MapPin,
  AlertTriangle,
  Heart,
  Home,
  Activity,
  Stethoscope,
  Baby,
  TestTube
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Emergency Doctor Home Dubai | 24/7 Emergency Home Visit | Urgent Care',
  description: '24/7 emergency doctor home visits in Dubai. Urgent medical care at your location within 30 minutes. Professional emergency doctors for urgent health conditions across Dubai.',
  keywords: 'emergency doctor Dubai, urgent doctor home visit Dubai, 24/7 emergency care Dubai, emergency home doctor Dubai, urgent medical care Dubai, emergency GP Dubai',
  openGraph: {
    title: 'Emergency Doctor Home Dubai | 24/7 Emergency Home Visit | Urgent Care',
    description: '24/7 emergency doctor home visits in Dubai. Urgent medical care at your location within 30 minutes.',
    url: 'https://zaincura.com/emergency-doctor-home-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/emergency-doctor-home-dubai.jpg',
        width: 1200,
        height: 630,
        alt: '24/7 Emergency Doctor Home Service in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/emergency-doctor-home-dubai'
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
  '@type': 'EmergencyService',
  name: '24/7 Emergency Doctor Home Dubai - Zain Cura Medical',
  description: '24/7 emergency doctor home visits in Dubai for urgent medical care and emergency situations',
  url: 'https://zaincura.com/emergency-doctor-home-dubai',
  telephone: '+971-45703423',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  },
  openingHours: 'Mo-Su 00:00-23:59',
  availableService: {
    '@type': 'MedicalTherapy',
    name: 'Emergency Home Doctor Visit',
    description: 'Urgent medical care at patient location'
  }
}

const emergencyConditions = [
  {
    category: "High Priority Emergencies",
    conditions: ["High fever (>39°C)", "Severe chest pain", "Breathing difficulties", "Severe allergic reactions", "Uncontrolled bleeding", "Loss of consciousness"]
  },
  {
    category: "Urgent Medical Conditions",
    conditions: ["Severe abdominal pain", "Severe headaches", "Suspected fractures", "Severe dehydration", "Acute infections", "Severe vomiting"]
  },
  {
    category: "Pediatric Emergencies",
    conditions: ["High fever in children", "Severe cough/breathing issues", "Dehydration in infants", "Allergic reactions", "Injuries & falls", "Seizures"]
  },
  {
    category: "Elderly Care Emergencies",
    conditions: ["Falls & injuries", "Medication reactions", "Blood pressure crisis", "Diabetic emergencies", "Heart palpitations", "Confusion/disorientation"]
  }
]

const responseFeatures = [
  {
    icon: Zap,
    title: "30-Minute Response",
    description: "Emergency doctors reach your location within 30 minutes"
  },
  {
    icon: Shield,
    title: "24/7 Availability",
    description: "Emergency medical care available around the clock"
  },
  {
    icon: Heart,
    title: "Life-Saving Equipment",
    description: "Doctors carry emergency medical equipment and medications"
  },
  {
    icon: Phone,
    title: "Direct Emergency Line",
    description: "Dedicated emergency contact for immediate response"
  }
]

const emergencyEquipment = [
  "Emergency medications",
  "Oxygen supply",
  "Cardiac monitoring",
  "IV fluids & equipment",
  "Emergency diagnostic tools",
  "Wound care supplies",
  "Nebulizer for breathing",
  "Blood pressure monitors"
]

export default function EmergencyDoctorHomeDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-red-600 text-white">24/7 Emergency Service</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Emergency Doctor Home Dubai | 24/7 Urgent Medical Care
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                24/7 emergency doctor home visits in Dubai. Professional emergency medical care
                delivered to your location within 30 minutes. Equipped doctors for urgent health
                conditions, emergencies, and critical care at home.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-900">Medical Emergency? Call Now!</span>
                </div>
                <p className="text-red-800 text-sm">
                  30-minute response • Life-saving equipment • All Dubai areas • Insurance accepted
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency Line
                  </Button>
                </a>
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Emergency
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Urgent Visit
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>30-min response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24/7 available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Emergency equipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All emergencies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Conditions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Emergency Conditions We Treat at Home
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our emergency doctors are equipped to handle urgent medical situations at your location
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {emergencyConditions.map((category, index) => (
                <Card key={index} className="clinical-card h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.conditions.map((condition, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span className="text-sm text-gray-700">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-red-600 font-semibold mb-4">
                Don't see your emergency condition? Call us immediately - we handle all medical emergencies!
              </p>
              <a href="tel:+97145703423">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Doctor Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Response Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Emergency Response Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Rapid response emergency medical care with professional equipment and experienced doctors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {responseFeatures.map((feature, index) => (
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

        {/* Emergency Equipment */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Emergency Equipment Our Doctors Carry
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fully equipped for emergency medical situations and immediate care
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emergencyEquipment.map((equipment, index) => (
                <div key={index} className="bg-red-50 p-4 rounded-lg text-center">
                  <Shield className="w-5 h-5 text-red-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{equipment}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="text-center">
                <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">When to Call Emergency Doctor</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-3">Call Immediately For:</h4>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>• Difficulty breathing or shortness of breath</li>
                      <li>• Chest pain or pressure</li>
                      <li>• Severe bleeding that won't stop</li>
                      <li>• Loss of consciousness or fainting</li>
                      <li>• Severe allergic reactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-3">Also Emergency:</h4>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>• High fever with severe symptoms</li>
                      <li>• Suspected heart attack or stroke</li>
                      <li>• Severe burns or injuries</li>
                      <li>• Suspected poisoning</li>
                      <li>• Severe abdominal pain</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Emergency & Home Care Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/home-gp-consultation-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Home GP Consultation
                </Button>
              </Link>
              <Link href="/pediatric-home-care-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Baby className="w-4 h-4 mr-2" />
                  Pediatric Emergencies
                </Button>
              </Link>
              <Link href="/home-blood-collection-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <TestTube className="w-4 h-4 mr-2" />
                  Emergency Lab Tests
                </Button>
              </Link>
              <Link href="/iv-drip-therapy-dubai-clinic-home">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Activity className="w-4 h-4 mr-2" />
                  Emergency IV Therapy
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Emergency Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Emergency Response Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fast, professional emergency medical response to your location
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Emergency</h3>
                <p className="text-gray-600">Call our emergency line immediately for urgent medical situations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Assessment</h3>
                <p className="text-gray-600">Emergency medical assessment over phone to prioritize response</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Doctor Dispatch</h3>
                <p className="text-gray-600">Emergency doctor dispatched to your location within 30 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Care</h3>
                <p className="text-gray-600">Immediate medical treatment and stabilization at your location</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Medical Emergency? Don't Wait!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              24/7 emergency doctor home visits across Dubai. Professional emergency medical care
              delivered to your location within 30 minutes. Every second counts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+97145703423">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Line NOW
                </Button>
              </a>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Emergency
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>30-minute response</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>24/7 availability</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Life-saving care</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
