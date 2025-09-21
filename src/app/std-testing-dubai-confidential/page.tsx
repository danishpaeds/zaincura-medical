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
  Star,
  Eye,
  Lock
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'STD Testing Dubai | 100% Confidential | Same-Day Results | Home Collection',
  description: 'STD testing Dubai 100% confidential. Same-day results, home collection available. Private sexual health screening at Al Ghurair Centre.',
  keywords: 'STD testing Dubai, confidential STD test Dubai, sexual health screening Dubai, private STD testing, anonymous STD test Dubai, home STD collection Dubai, STD clinic Dubai, STD center Dubai, full panel STD test, 10 panel STD test, quick STD test, sexual health check up, STD blood test, STD check up',
  openGraph: {
    title: 'STD Testing Dubai | 100% Confidential | Same-Day Results | Home Collection',
    description: 'STD testing Dubai 100% confidential. Same-day results, home collection available. Private sexual health screening at Al Ghurair Centre.',
    url: 'https://www.zaincura.com/std-testing-dubai-confidential',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STD Testing Dubai | 100% Confidential | Same-Day Results | Home Collection',
    description: 'STD testing Dubai 100% confidential. Same-day results, home collection available. Private sexual health screening at Al Ghurair Centre.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/std-testing-dubai-confidential'
  },
  robots: {
    index: true,
    follow: true
  }
}

const services = [
  {
    title: "Complete STD Panel",
    description: "Comprehensive testing for all major sexually transmitted infections",
    icon: Shield
  },
  {
    title: "100% Confidential",
    description: "Private testing with secure results delivery and complete anonymity",
    icon: Lock
  },
  {
    title: "Same-Day Results",
    description: "Fast turnaround with digital results delivered securely within hours",
    icon: Clock
  },
  {
    title: "Home Collection",
    description: "Discreet sample collection at your home for maximum privacy",
    icon: Home
  }
]

export default function STDTestingDubaiConfidential() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                <Lock className="w-4 h-4 mr-2" />
                100% Confidential
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                STD Testing Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Completely confidential STD testing with same-day results.
                Home collection available for maximum privacy and convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book STD Test
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
              STD Testing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive sexual health screening with complete privacy and professional care.
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
            Need STD Testing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your confidential STD test today. Complete privacy guaranteed with fast results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book STD Test
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
