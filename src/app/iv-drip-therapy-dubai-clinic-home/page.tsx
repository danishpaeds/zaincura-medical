import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Zap,
  Droplets,
  Heart,
  Battery,
  Shield,
  Star,
  Clock,
  Home,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Activity,
  Beaker,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'IV Drip Therapy Dubai | Vitamin Infusion | Clinic & Home Service',
  description: 'Professional IV drip therapy in Dubai. Vitamin infusions, hydration therapy, energy boost treatments. Available at our clinic in Deira or with home service across Dubai.',
  keywords: 'IV drip therapy Dubai, vitamin infusion Dubai, IV therapy home service Dubai, hydration therapy Dubai, vitamin drip Dubai, mobile IV therapy',
  openGraph: {
    title: 'IV Drip Therapy Dubai | Vitamin Infusion | Clinic & Home Service',
    description: 'Professional IV drip therapy in Dubai. Vitamin infusions, hydration therapy, energy boost treatments. Clinic and home service available.',
    url: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/iv-drip-therapy-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'IV Drip Therapy Service in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home'
  }
}

const ivTherapies = [
  {
    icon: Battery,
    title: "Energy Boost IV",
    description: "Revitalize with B-vitamins, amino acids, and essential minerals",
    benefits: ["Combat fatigue", "Enhance mental clarity", "Support metabolism"],
    duration: "30-45 minutes",
    popular: true
  },
  {
    icon: Shield,
    title: "Immune Support IV",
    description: "High-dose vitamin C, zinc, and antioxidants for immunity",
    benefits: ["Boost immunity", "Reduce illness duration", "Antioxidant protection"],
    duration: "45-60 minutes"
  },
  {
    icon: Droplets,
    title: "Hydration Therapy",
    description: "Rapid rehydration with electrolyte-balanced saline",
    benefits: ["Instant rehydration", "Restore electrolytes", "Improve circulation"],
    duration: "20-30 minutes"
  },
  {
    icon: Heart,
    title: "Beauty & Wellness IV",
    description: "Vitamin C, biotin, and glutathione for healthy skin",
    benefits: ["Improve skin glow", "Strengthen hair/nails", "Anti-aging support"],
    duration: "45-60 minutes"
  }
]

export default function IVDripTherapyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Professional IV Therapy</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              IV Drip Therapy Dubai | Vitamin Infusion | Clinic & Home Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Professional IV drip therapy and vitamin infusions in Dubai. Energy boost, immunity support,
              hydration therapy. Available at our clinic in Deira or with mobile service to your location.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp for IV Therapy
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book IV Session
                </Button>
              </Link>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Clinic
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>DHA licensed professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Clinic & home service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Same-day appointments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IV Therapy Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IV Drip Therapy Menu
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully formulated IV drip therapies designed for specific health and wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ivTherapies.map((therapy, index) => (
              <Card key={index} className={`clinical-card h-full ${therapy.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <therapy.icon className="w-6 h-6 text-primary" />
                    </div>
                    {therapy.popular && (
                      <Badge className="bg-primary text-white">Popular</Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {therapy.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {therapy.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {therapy.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Duration: {therapy.duration}</span>
                  </div>

                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp for Info & Booking
                      </Button>
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/book">
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white text-sm">
                          <Beaker className="w-4 h-4 mr-1" />
                          Clinic
                        </Button>
                      </Link>
                      <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm">
                          <Home className="w-4 h-4 mr-1" />
                          Home
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic vs Home Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your IV Therapy Location
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional IV drip therapy available at our medical clinic or with mobile service to your location.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="clinical-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Beaker className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Clinic IV Therapy</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Professional Medical Environment</span>
                      <p className="text-gray-600 text-sm">State-of-the-art clinic at Al Ghurair Centre, Deira</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Comfortable Treatment Rooms</span>
                      <p className="text-gray-600 text-sm">Relaxing environment with professional supervision</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Walk-ins Welcome</span>
                      <p className="text-gray-600 text-sm">Same-day availability during clinic hours</p>
                    </div>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp for Clinic Booking
                    </Button>
                  </a>
                  <a href="tel:+97145703423">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Clinic
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Mobile IV Service</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Ultimate Convenience</span>
                      <p className="text-gray-600 text-sm">IV therapy at your home, office, or hotel</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <span className="font-medium">24/7 Availability</span>
                      <p className="text-gray-600 text-sm">Round-the-clock service across Dubai</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Same Medical Standards</span>
                      <p className="text-gray-600 text-sm">DHA-licensed professionals with portable equipment</p>
                    </div>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp for Home Service
                    </Button>
                  </a>
                  <Link href="/home-care">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      <Home className="w-4 h-4 mr-2" />
                      Learn More About Home Care
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Wellness?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Experience professional IV drip therapy. Available at our clinic or delivered to your location across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp for IV Consultation
              </Button>
            </a>
            <Link href="/book">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Calendar className="w-5 h-5 mr-2" />
                Book IV Session
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
