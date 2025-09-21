import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  MessageCircle,
  Phone,
  Home,
  Heart,
  Shield,
  CheckCircle,
  Clock,
  Award,
  MapPin,
  Users,
  ArrowRight,
  Stethoscope,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Home Care Dubai 24/7 | Doctor Visits | Nursing Care Services',
  description: 'Home care Dubai 24/7. Doctor visits, nursing care, medical services at home. DHA licensed professionals across all Dubai areas.',
  keywords: 'home care Dubai, home doctor Dubai, nursing care Dubai, medical services home, 24/7 doctor visits Dubai, home healthcare Dubai',
  openGraph: {
    title: 'Home Care Dubai 24/7 | Doctor Visits | Nursing Care Services',
    description: 'Home care Dubai 24/7. Doctor visits, nursing care, medical services at home. DHA licensed professionals.',
    url: 'https://www.zaincura.com/home-care',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Care Dubai 24/7',
    description: 'Home care Dubai 24/7. Doctor visits, nursing care, medical services at home. DHA licensed professionals.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/home-care'
  },
  robots: {
    index: true,
    follow: true
  }
}

const services = [
  {
    title: "24/7 Doctor Visits",
    description: "Emergency and routine medical consultations at your home or hotel",
    icon: Stethoscope
  },
  {
    title: "Nursing Care",
    description: "Professional nursing services for post-operative and chronic care",
    icon: Heart
  },
  {
    title: "Medical Procedures",
    description: "IV therapy, wound care, injections, and minor procedures at home",
    icon: Shield
  },
  {
    title: "Elderly Care",
    description: "Specialized healthcare services for senior citizens",
    icon: Users
  }
]

export default function HomeCare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                24/7 Available
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Home Care Services Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Professional medical care in the comfort of your home. 24/7 doctor visits,
                nursing care, and medical services with DHA licensed professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Home Visit
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
              Home Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical care delivered to your home with the same quality as our clinic.
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
            Need Medical Care at Home?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for 24/7 home care services. Our DHA licensed professionals are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Home Visit
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
