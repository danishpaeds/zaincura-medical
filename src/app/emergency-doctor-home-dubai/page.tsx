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
  title: 'Urgent Care Doctor Home Dubai | 24/7 Urgent Home Visit | Medical Care',
  description: '24/7 urgent care doctor home visits Dubai. Professional medical care at your location within 30 minutes. Qualified doctors across Dubai.',
  keywords: 'urgent care doctor Dubai, urgent doctor home visit Dubai, 24/7 urgent care Dubai, urgent home doctor Dubai, urgent medical care Dubai, urgent GP Dubai',
  openGraph: {
    title: 'Urgent Care Doctor Home Dubai | 24/7 Urgent Home Visit | Medical Care',
    description: '24/7 urgent care doctor home visits in Dubai. Professional medical care at your location within 30 minutes.',
    url: 'https://zaincura.com/emergency-doctor-home-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/emergency-doctor-home-dubai.jpg',
        width: 1200,
        height: 630,
        alt: '24/7 Urgent Care Doctor Home Service in Dubai'
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
  '@type': 'MedicalClinic',
  name: '24/7 Urgent Care Doctor Home Dubai - Zain Cura Medical',
  description: '24/7 urgent care doctor home visits in Dubai for non-emergency medical care and urgent health conditions',
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
    name: 'Urgent Care Home Doctor Visit',
    description: 'Non-emergency urgent medical care at patient location'
  }
}

const urgentConditions = [
  {
    category: "High Priority Urgent Conditions",
    conditions: ["High fever (>39°C)", "Severe headaches", "Breathing difficulties", "Severe allergic reactions", "Severe bleeding", "Fainting episodes"]
  },
  {
    category: "Urgent Medical Conditions",
    conditions: ["Severe abdominal pain", "Suspected fractures", "Severe dehydration", "Acute infections", "Severe vomiting", "Severe back pain"]
  },
  {
    category: "Pediatric Urgent Care",
    conditions: ["High fever in children", "Severe cough/breathing issues", "Dehydration in infants", "Allergic reactions", "Minor injuries & falls", "Persistent vomiting"]
  },
  {
    category: "Elderly Care Urgencies",
    conditions: ["Falls & injuries", "Medication reactions", "Blood pressure issues", "Diabetic complications", "Heart palpitations", "Confusion/disorientation"]
  }
]

const responseFeatures = [
  {
    icon: Zap,
    title: "30-Minute Response",
    description: "Doctors reach your location within 30 minutes for urgent care"
  },
  {
    icon: Shield,
    title: "24/7 Availability",
    description: "Urgent medical care available around the clock"
  },
  {
    icon: Heart,
    title: "Professional Medical Equipment",
    description: "Doctors carry necessary medical equipment and medications"
  },
  {
    icon: Phone,
    title: "Direct Contact Line",
    description: "Dedicated contact for immediate response"
  }
]

const medicalEquipment = [
  "Medications for urgent care",
  "Oxygen supply",
  "Cardiac monitoring",
  "IV fluids & equipment",
  "Diagnostic tools",
  "Wound care supplies",
  "Nebulizer for breathing",
  "Blood pressure monitors"
]

export default function UrgentCareDoctorHomeDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* CRITICAL SAFETY DISCLAIMER */}
        <section className="bg-red-900 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <AlertTriangle className="w-6 h-6 text-yellow-300" />
                <span className="font-bold text-lg">EMERGENCY MEDICAL DISCLAIMER</span>
                <AlertTriangle className="w-6 h-6 text-yellow-300" />
              </div>
              <p className="text-white/90 font-semibold">
                ⚠️ FOR LIFE-THREATENING EMERGENCIES, CALL 999 IMMEDIATELY ⚠️
              </p>
              <p className="text-white/80 text-sm mt-1">
                We are NOT an emergency facility. This service provides urgent care for non-life-threatening conditions only.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-orange-600 text-white">24/7 Urgent Care Service</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Urgent Care Doctor Home Dubai | 24/7 Professional Medical Care
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                24/7 urgent care doctor home visits in Dubai. Professional medical care
                delivered to your location within 30 minutes. Qualified doctors for urgent health
                conditions and non-emergency care at home.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-900">Need Urgent Care? Call 999 for Emergencies First!</span>
                </div>
                <p className="text-red-800 text-sm">
                  30-minute response • Professional equipment • All Dubai areas • For non-emergency urgent care only
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Urgent Care Line
                  </Button>
                </a>
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Urgent Care
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold">
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
                  <span>Professional equipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Non-emergency care</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Care Conditions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Urgent Conditions We Treat at Home
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our doctors are equipped to handle urgent medical situations at your location
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {urgentConditions.map((category, index) => (
                <Card key={index} className="clinical-card h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.conditions.map((condition, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm text-gray-700">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-orange-600 font-semibold mb-4">
                Don't see your urgent condition? Call us for consultation - we provide urgent care for many medical conditions.
              </p>
              <a href="tel:+97145703423">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Urgent Care Doctor Now
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
                Urgent Care Response Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Rapid response urgent medical care with professional equipment and experienced doctors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {responseFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-orange-600" />
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

        {/* Medical Equipment */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Medical Equipment Our Doctors Carry
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fully equipped for urgent medical situations and immediate care
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {medicalEquipment.map((equipment, index) => (
                <div key={index} className="bg-orange-50 p-4 rounded-lg text-center">
                  <Shield className="w-5 h-5 text-orange-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{equipment}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="text-center">
                <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">When to Call Urgent Care vs 999</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-3">Call 999 IMMEDIATELY For:</h4>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>• Difficulty breathing or shortness of breath</li>
                      <li>• Chest pain or pressure</li>
                      <li>• Severe bleeding that won't stop</li>
                      <li>• Loss of consciousness or fainting</li>
                      <li>• Suspected heart attack or stroke</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-3">Call Us For Urgent Care:</h4>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>• High fever with symptoms</li>
                      <li>• Severe headaches or migraines</li>
                      <li>• Minor cuts and wounds</li>
                      <li>• Suspected infections</li>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Urgent & Home Care Services</h3>
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
                  Pediatric Urgent Care
                </Button>
              </Link>
              <Link href="/home-blood-collection-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <TestTube className="w-4 h-4 mr-2" />
                  Urgent Lab Tests
                </Button>
              </Link>
              <Link href="/iv-drip-therapy-dubai-clinic-home">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Activity className="w-4 h-4 mr-2" />
                  Urgent IV Therapy
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Urgent Care Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Urgent Care Response Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fast, professional urgent medical response to your location
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Urgent Care</h3>
                <p className="text-gray-600">Call our urgent care line for urgent medical situations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Assessment</h3>
                <p className="text-gray-600">Medical assessment over phone to prioritize response</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Doctor Dispatch</h3>
                <p className="text-gray-600">Doctor dispatched to your location within 30 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Urgent Care</h3>
                <p className="text-gray-600">Immediate medical treatment and care at your location</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Urgent Medical Care? We're Here to Help!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              24/7 urgent care doctor home visits across Dubai. Professional medical care
              delivered to your location within 30 minutes. For non-emergency urgent conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+97145703423">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Urgent Care Line NOW
                </Button>
              </a>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Urgent Care
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 mt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Non-emergency care</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Professional care</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Call 999 for emergencies</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
