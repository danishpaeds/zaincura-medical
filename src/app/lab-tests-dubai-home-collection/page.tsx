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
  TestTube,
  Download
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Lab Tests Dubai | Home Blood Collection | Same-Day Results',
  description: 'Lab tests Dubai with home collection. 50+ blood tests, same-day results, digital reports. Professional medical laboratory services.',
  keywords: 'lab tests Dubai, blood tests Dubai, home collection Dubai, blood test home Dubai, laboratory Dubai, medical tests Dubai, home lab collection',
  openGraph: {
    title: 'Lab Tests Dubai | Home Blood Collection | Same-Day Results',
    description: 'Lab tests Dubai with home collection. 50+ blood tests, same-day results, digital reports. Professional medical laboratory services.',
    url: 'https://www.zaincura.com/lab-tests-dubai-home-collection',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab Tests Dubai | Home Blood Collection | Same-Day Results',
    description: 'Lab tests Dubai with home collection. 50+ blood tests, same-day results, digital reports. Professional medical laboratory services.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/lab-tests-dubai-home-collection'
  },
  robots: {
    index: true,
    follow: true
  }
}

const services = [
  {
    title: "Complete Blood Count",
    description: "Comprehensive blood analysis including CBC, differential, and platelet count",
    icon: TestTube
  },
  {
    title: "Diabetes Testing",
    description: "HbA1c, fasting glucose, and glucose tolerance tests for diabetes monitoring",
    icon: Heart
  },
  {
    title: "Lipid Profile",
    description: "Cholesterol, triglycerides, and cardiac risk assessment blood tests",
    icon: Shield
  },
  {
    title: "Digital Reports",
    description: "Same-day results delivered securely to your email and mobile",
    icon: Download
  }
]

export default function LabTestsDubaiHomeCollection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                <Home className="w-4 h-4 mr-2" />
                Home Collection Available
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Lab Tests Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Comprehensive laboratory testing with home blood collection.
                50+ tests available with same-day results and digital reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Lab Tests
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
              Laboratory Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional laboratory testing with convenient home collection and rapid results.
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
            Need Lab Tests?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your lab tests today. Home collection available with same-day results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Lab Tests
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
