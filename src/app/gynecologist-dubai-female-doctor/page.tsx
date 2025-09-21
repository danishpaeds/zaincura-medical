import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  MessageCircle,
  Phone,
  Stethoscope,
  Heart,
  Shield,
  CheckCircle,
  Clock,
  Award,
  MapPin,
  Users,
  ArrowRight,
  Baby,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Gynecologist Dubai | Female Doctor | Women\'s Health Specialist',
  description: 'Female gynecologist Dubai. Women\'s health, PCOS treatment, prenatal care. Private consultations at Al Ghurair Centre, Deira. Same-day appointments.',
  keywords: 'gynecologist Dubai, female gynecologist Dubai, women doctor Dubai, gynecology clinic Dubai, OBGYN Dubai, prenatal care Dubai, PCOS treatment Dubai, female doctor Deira',
  openGraph: {
    title: 'Gynecologist Dubai | Female Doctor | Women\'s Health Specialist',
    description: 'Female gynecologist Dubai. Women\'s health, PCOS treatment, prenatal care. Private consultations at Al Ghurair Centre, Deira.',
    url: 'https://www.zaincura.com/gynecologist-dubai-female-doctor',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gynecologist Dubai | Female Doctor',
    description: 'Female gynecologist Dubai. Women\'s health, PCOS treatment, prenatal care. Same-day appointments.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/gynecologist-dubai-female-doctor'
  },
  robots: {
    index: true,
    follow: true
  }
}

const services = [
  {
    title: "Women's Health Consultations",
    description: "Comprehensive gynecological examinations and women's health assessments",
    icon: Heart
  },
  {
    title: "PCOS Treatment",
    description: "Specialized care for polycystic ovary syndrome with personalized treatment plans",
    icon: Stethoscope
  },
  {
    title: "Prenatal Care",
    description: "Complete pregnancy monitoring and prenatal health consultations",
    icon: Baby
  },
  {
    title: "Reproductive Health",
    description: "Family planning, contraception advice, and fertility consultations",
    icon: Users
  }
]

export default function GynecologistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                Female Doctor Available
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Female Gynecologist in Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Expert women's health care with a female gynecologist. PCOS treatment,
                prenatal care, and comprehensive gynecological services at Al Ghurair Centre, Deira.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Same-Day Appointment
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
              Women's Health Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive gynecological care with female doctor expertise and modern facilities.
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
            Ready to Schedule Your Consultation?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment with our female gynecologist today. Same-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
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
