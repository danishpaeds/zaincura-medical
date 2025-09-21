import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  MessageCircle,
  Phone,
  Droplets,
  Stethoscope,
  Heart,
  Shield,
  CheckCircle,
  Clock,
  Award,
  MapPin,
  Users,
  ArrowRight,
  Star,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'IV Drip Therapy Dubai | Vitamin Infusions | Clinic & Home Service',
  description: 'IV drip therapy Dubai. Vitamin infusions, energy boost, hydration therapy. Clinic & home service available. Professional treatments.',
  keywords: 'IV drip therapy Dubai, vitamin infusion Dubai, hydration therapy Dubai, energy boost IV Dubai, IV drip clinic Dubai, home IV therapy Dubai',
  openGraph: {
    title: 'IV Drip Therapy Dubai | Vitamin Infusions | Clinic & Home Service',
    description: 'IV drip therapy Dubai. Vitamin infusions, energy boost, hydration therapy. Clinic & home service available. Professional treatments.',
    url: 'https://www.zaincura.com/iv-drip-therapy-dubai-clinic-home',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IV Drip Therapy Dubai | Vitamin Infusions | Clinic & Home Service',
    description: 'IV drip therapy Dubai. Vitamin infusions, energy boost, hydration therapy. Clinic & home service available. Professional treatments.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/iv-drip-therapy-dubai-clinic-home'
  },
  robots: {
    index: true,
    follow: true
  }
}

const services = [
  {
    title: "Energy Boost IV",
    description: "Vitamin B complex and energy-enhancing nutrients for vitality and performance",
    icon: Zap
  },
  {
    title: "Hydration Therapy",
    description: "Advanced hydration with electrolytes for rapid rehydration and recovery",
    icon: Droplets
  },
  {
    title: "Immunity Booster",
    description: "High-dose vitamin C and immune-supporting nutrients for better health",
    icon: Shield
  },
  {
    title: "Beauty & Wellness",
    description: "Antioxidants and vitamins for skin health and overall wellness",
    icon: Heart
  }
]

export default function IVDripTherapyDubai() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                <Droplets className="w-4 h-4 mr-2" />
                Clinic & Home Service
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                IV Drip Therapy Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Professional vitamin infusions and hydration therapy. Energy boost,
                immunity support, and wellness treatments available at clinic or home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book IV Therapy
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
              IV Drip Treatments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional intravenous vitamin and nutrient therapy for optimal health and wellness.
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
            Ready for IV Therapy?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your IV drip therapy session at our clinic or at home. Professional care guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book IV Therapy
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
