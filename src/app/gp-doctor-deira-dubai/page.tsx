import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Stethoscope,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
  Users,
  Shield,
  Heart,
  Star,
  Award,
  Home,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'GP Doctor in Deira Dubai | Family Medicine Clinic | Same-Day Appointments',
  description: 'Best GP doctor in Deira, Dubai at Al Ghurair Centre. Same-day appointments, walk-ins welcome, experienced family medicine doctors. Cash-friendly clinic with 24/7 home visits.',
  keywords: 'GP doctor Dubai, family medicine Deira, general practitioner Dubai, Al Ghurair clinic, same day doctor appointment Dubai, walk-in clinic Deira, home doctor visits Dubai',
  openGraph: {
    title: 'GP Doctor in Deira Dubai | Family Medicine Clinic | Zain Cura Medical',
    description: 'Experienced GP doctors in Deira, Dubai. Same-day appointments, walk-ins welcome. Located at Al Ghurair Centre with 24/7 home visits across Dubai.',
    url: 'https://zaincura.com/gp-doctor-deira-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/gp-doctor-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'GP Doctor Consultation at Zain Cura Medical Center Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GP Doctor in Deira Dubai | Family Medicine Clinic',
    description: 'Experienced GP doctors in Deira, Dubai. Same-day appointments, walk-ins welcome.',
    images: ['https://zaincura.com/images/gp-doctor-dubai.jpg']
  },
  alternates: {
    canonical: 'https://www.zaincura.com/gp-doctor-deira-dubai'
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
  name: 'Zain Cura Medical Center - GP & Family Medicine',
  description: 'General practitioner and family medicine clinic in Deira, Dubai offering same-day appointments and home visits',
  url: 'https://zaincura.com/gp-doctor-deira-dubai',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/gp-doctor-dubai.jpg',
  telephone: '+971-45703423',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Ghurair Centre, 6th Floor',
    addressLocality: 'Deira',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2699,
    longitude: 55.3181
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00'
    }
  ],
  medicalSpecialty: ['General Practice', 'Family Medicine', 'Preventive Medicine'],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'General Practice Consultation'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Family Medicine'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Health Checkups'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Home Doctor Visits'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: ['AED', 'USD'],
  paymentAccepted: ['Cash', 'Credit Card'],
  hasMap: 'https://maps.google.com/?q=Al+Ghurair+Centre+Dubai',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  }
}

const services = [
  {
    title: 'Same-Day GP Consultations',
    description: 'Walk-in or book appointments for immediate medical care',
    icon: Stethoscope
  },
  {
    title: '24/7 Home Doctor Visits',
    description: 'Professional GP visits to your home, office, or hotel',
    icon: Home
  },
  {
    title: 'Family Medicine',
    description: 'Comprehensive healthcare for patients of all ages',
    icon: Users
  },
  {
    title: 'Health Certificates',
    description: 'Medical certificates for employment, travel, and fitness',
    icon: Award
  },
  {
    title: 'Chronic Disease Management',
    description: 'Ongoing care for diabetes, hypertension, and other conditions',
    icon: Heart
  },
  {
    title: 'Preventive Care',
    description: 'Regular health checkups and wellness screenings',
    icon: Shield
  }
]

const conditions = [
  'Common Cold & Flu',
  'Diabetes Management',
  'High Blood Pressure',
  'Skin Conditions',
  'Respiratory Issues',
  'Digestive Problems',
  'Minor Injuries',
  'Vaccinations',
  'Health Screenings',
  'Medical Certificates',
  'Travel Medicine',
  'Chronic Disease Care'
]

const whyChooseUs = [
  {
    icon: Clock,
    title: 'Same-Day Appointments',
    description: 'No waiting weeks for a doctor. Same-day availability guaranteed.'
  },
  {
    icon: MapPin,
    title: 'Prime Deira Location',
    description: 'Convenient location at Al Ghurair Centre with metro and parking access.'
  },
  {
    icon: Star,
    title: 'Experienced Doctors',
    description: 'DHA-licensed general practitioners with international experience.'
  },
  {
    icon: Zap,
    title: 'No Insurance Hassles',
    description: 'Cash-friendly transparent pricing. Get detailed invoices for insurance.'
  }
]

export default function GPDoctorDeiraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary text-white">Deira's Most Trusted GP Clinic</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                GP Doctor in Deira Dubai | Same-Day Appointments Available
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Experienced family medicine doctors at Al Ghurair Centre. Walk-ins welcome,
                same-day appointments, and 24/7 home visits across Dubai. Cash-friendly pricing.
              </p>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20booking%20a%20GP%20consultation%20at%20Zain%20Cura%20Medical%20Center%2C%20Deira.%20Please%20share%20available%20appointment%20slots%20for%20Clinic%20or%20Home%20visit." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp GP Now
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call GP Clinic
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book GP Appointment
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Same-day appointments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Walk-ins welcome</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>DHA licensed doctors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24/7 home visits</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Family Medicine Services in Deira
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From routine checkups to chronic disease management, our experienced GP doctors
                provide comprehensive healthcare for the whole family.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conditions We Treat
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our GP doctors in Deira have extensive experience treating a wide range of medical conditions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our GP Clinic in Deira?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference of patient-centered care at Dubai's most accessible GP clinic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
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

        {/* Location & Contact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Visit Our GP Clinic in Deira
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Conveniently located at Al Ghurair Centre in the heart of Deira, our modern GP clinic
                  is easily accessible by metro, car, and public transport.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">Al Ghurair Centre, 6th Floor<br />Deira, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 09:00 - 21:00<br />Home Visits: 24/7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact</h4>
                      <p className="text-gray-600">Phone: +971-45703423<br />WhatsApp: +971-523011150</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your GP Appointment</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Ready to see our GP doctor in Deira? Multiple convenient ways to book:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20a%20GP%20consultation%20at%20Zain%20Cura.%20Please%20confirm%20available%20appointment%20times%20for%20today%20or%20nearest%20available%20slot." target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book via WhatsApp
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Clinic Direct
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Online Booking
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Walk-ins welcome • Same-day appointments • No insurance required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See a GP Doctor in Deira Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Don't wait days for a doctor appointment. Our experienced GP doctors in Deira
              are available for same-day consultations and 24/7 home visits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%20need%20to%20see%20a%20GP%20Doctor%20urgently.%20Can%20I%20book%20a%20same-day%20appointment%20at%20your%20Deira%20clinic%20or%20arrange%20a%20home%20visit%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp GP Doctor
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C]">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
