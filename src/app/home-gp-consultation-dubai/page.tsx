import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  MessageCircle,
  Phone,
  Home,
  Stethoscope,
  Heart,
  Shield,
  CheckCircle,
  Clock,
  Award,
  MapPin,
  Users,
  ArrowRight,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Home GP Consultation Dubai 24/7 | Doctor Visits at Home',
  description: 'Home GP consultation Dubai 24/7. Doctor visits at home, same-day availability. Professional medical care across all Dubai areas.',
  keywords: 'home GP Dubai, doctor home visit Dubai, home consultation Dubai, GP at home Dubai, home medical consultation Dubai, family doctor home visit',
  openGraph: {
    title: 'Home GP Consultation Dubai 24/7 | Doctor Visits at Home',
    description: 'Home GP consultation Dubai 24/7. Doctor visits at home, same-day availability. Professional medical care across all Dubai areas.',
    url: 'https://www.zaincura.com/home-gp-consultation-dubai',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home GP Consultation Dubai 24/7 | Doctor Visits at Home',
    description: 'Home GP consultation Dubai 24/7. Doctor visits at home, same-day availability. Professional medical care across all Dubai areas.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/home-gp-consultation-dubai'
  },
  robots: {
    index: true,
    follow: true
  }
}

const services = [
  {
    title: "General Health Check-ups",
    description: "Comprehensive medical examinations and health assessments at home",
    icon: Stethoscope
  },
  {
    title: "Family Medicine",
    description: "Primary healthcare for all family members in your comfort zone",
    icon: Heart
  },
  {
    title: "Chronic Disease Management",
    description: "Ongoing care for diabetes, hypertension, and other chronic conditions",
    icon: Shield
  },
  {
    title: "Preventive Care",
    description: "Vaccinations, health screenings, and preventive medical services",
    icon: Award
  }
]

export default function HomeGPConsultationDubai() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                <Home className="w-4 h-4 mr-2" />
                Home Consultations
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Home GP Consultation Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Professional general practitioner consultations at your home.
                Same-day availability across all Dubai areas with experienced doctors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book GP Visit
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
              GP Consultation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive primary healthcare services delivered to your home by qualified doctors.
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
            Need a GP Consultation?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your home GP consultation today. Same-day availability across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book GP Visit
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
