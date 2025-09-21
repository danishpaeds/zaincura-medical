import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  MessageCircle,
  Phone,
  Clock,
  Stethoscope,
  Heart,
  Shield,
  CheckCircle,
  Award,
  MapPin,
  Users,
  ArrowRight,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: '24/7 Home Doctor Dubai | Emergency & Routine Medical Visits',
  description: '24/7 home doctor Dubai. Emergency & routine medical visits. DHA licensed doctors available across Dubai with same-day service.',
  keywords: '24/7 home doctor Dubai, emergency doctor Dubai, home medical visits Dubai, doctor on call Dubai, urgent care home Dubai, emergency house call doctor',
  openGraph: {
    title: '24/7 Home Doctor Dubai | Emergency & Routine Medical Visits',
    description: '24/7 home doctor Dubai. Emergency & routine medical visits. DHA licensed doctors available across Dubai with same-day service.',
    url: 'https://www.zaincura.com/home-doctor-dubai-24-7',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Home Doctor Dubai | Emergency & Routine Medical Visits',
    description: '24/7 home doctor Dubai. Emergency & routine medical visits. DHA licensed doctors available across Dubai with same-day service.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/home-doctor-dubai-24-7'
  },
  robots: {
    index: true,
    follow: true
  }
}

const services = [
  {
    title: "Emergency Home Visits",
    description: "Urgent medical care delivered to your home within 30-60 minutes",
    icon: Stethoscope
  },
  {
    title: "Routine Check-ups",
    description: "Comprehensive health assessments and preventive care at home",
    icon: Heart
  },
  {
    title: "Medical Prescriptions",
    description: "Doctor consultations with prescriptions and treatment plans",
    icon: Shield
  },
  {
    title: "DHA Licensed Doctors",
    description: "Qualified medical professionals available around the clock",
    icon: Award
  }
]

export default function HomeDoctorDubai247() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-2" />
                Available 24/7
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                24/7 Home Doctor Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Emergency and routine medical visits at your home. DHA licensed doctors
                available across Dubai with same-day service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Doctor Visit
                  </Button>
                </Link>
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24/7 Home Doctor Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional medical care available around the clock at your home or hotel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="clinical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need a Doctor at Home?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Available 24/7 for emergency and routine medical visits. Contact us now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Doctor Visit
              </Button>
            </Link>
            <a href="tel:+97145703423">
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
