import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Home,
  Clock,
  Stethoscope,
  Phone,
  MessageCircle,
  Calendar,
  Shield,
  MapPin,
  CheckCircle,
  Heart,
  Zap,
  Users,
  Award,
  Star,
  Activity,
  TestTube,
  Baby
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Home Doctor Dubai 24/7 | Home Visit Doctor | Hotel Doctor Service',
  description: '24/7 home doctor visits Dubai. Professional doctors visit your home, office or hotel. Emergency care, GP consultations across all Dubai areas.',
  keywords: 'home doctor Dubai, doctor home visit Dubai, 24/7 doctor Dubai, hotel doctor Dubai, emergency doctor Dubai, home care Dubai, mobile doctor Dubai, doctor on call Dubai',
  openGraph: {
    title: 'Home Doctor Dubai 24/7 | Home Visit Doctor | Hotel Doctor Service',
    description: '24/7 home doctor visits in Dubai. Professional medical care at your location. Emergency care, GP consultations, pediatric care.',
    url: 'https://zaincura.com/home-doctor-dubai-24-7',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/home-doctor-dubai.jpg',
        width: 1200,
        height: 630,
        alt: '24/7 Home Doctor Service in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Doctor Dubai 24/7 | Professional Home Visits',
    description: '24/7 home doctor visits in Dubai. Professional medical care at your location.',
    images: ['https://zaincura.com/images/home-doctor-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/home-doctor-dubai-24-7'
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
  '@type': 'MedicalBusiness',
  name: 'Zain Cura Medical Center - 24/7 Home Doctor Dubai',
  description: '24/7 home doctor service in Dubai providing professional medical care at your home, office, or hotel',
  url: 'https://zaincura.com/home-doctor-dubai-24-7',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/home-doctor-dubai.jpg',
  telephone: '+971-45703423',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Service Available Across Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  medicalSpecialty: ['Emergency Medicine', 'General Practice', 'Pediatrics', 'Internal Medicine'],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Home Doctor Visits'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Emergency Home Care'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Hotel Doctor Service'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Mobile IV Therapy'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: ['AED', 'USD'],
  paymentAccepted: ['Cash', 'Credit Card'],
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  }
}

const homeServices = [
  {
    icon: Stethoscope,
    title: "GP Consultations",
    description: "General medical consultations for all ages",
    services: [
      "Fever & cold treatment",
      "Respiratory infections",
      "Stomach issues",
      "Skin conditions",
      "Minor injuries",
      "Chronic disease management"
    ]
  },
  {
    icon: Zap,
    title: "Emergency Care",
    description: "Urgent medical attention at your location",
    services: [
      "High fever management",
      "Severe pain relief",
      "Allergic reactions",
      "Wound care & suturing",
      "Emergency medications",
      "Stabilization & assessment"
    ]
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Specialized home care for children",
    services: [
      "Newborn & infant care",
      "Childhood illnesses",
      "Vaccination services",
      "Growth monitoring",
      "Feeding difficulties",
      "Emergency pediatric care"
    ]
  },
  {
    icon: TestTube,
    title: "Mobile Diagnostics",
    description: "Lab tests and medical procedures at home",
    services: [
      "Blood sample collection",
      "ECG monitoring",
      "Blood pressure checks",
      "Glucose testing",
      "IV therapy & hydration",
      "Injection administration"
    ]
  }
]

const serviceAreas = [
  "Downtown Dubai", "Dubai Marina", "JBR", "JLT",
  "Business Bay", "DIFC", "Palm Jumeirah", "Jumeirah",
  "Al Barsha", "Dubai Hills", "Arabian Ranches", "Motor City",
  "Sports City", "Deira", "Bur Dubai", "Al Karama",
  "Dubai Silicon Oasis", "International City", "Dubai Investment Park",
  "All Dubai Hotels"
]

const whyChooseHome = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock medical care whenever you need it"
  },
  {
    icon: Home,
    title: "Comfort of Home",
    description: "Receive treatment in familiar surroundings"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Avoid hospital exposure and waiting rooms"
  },
  {
    icon: Award,
    title: "DHA Licensed",
    description: "Certified doctors with hospital experience"
  }
]

const emergencyConditions = [
  "High fever (>39°C)",
  "Severe abdominal pain",
  "Breathing difficulties",
  "Chest pain",
  "Severe allergic reactions",
  "Uncontrolled vomiting",
  "Severe dehydration",
  "Minor injuries & wounds",
  "Acute infections",
  "Severe headaches",
  "Back pain",
  "Pediatric emergencies"
]

const processSteps = [
  {
    step: 1,
    title: "Call or WhatsApp",
    description: "Contact us 24/7 for immediate assistance"
  },
  {
    step: 2,
    title: "Quick Assessment",
    description: "Brief medical history and symptom evaluation"
  },
  {
    step: 3,
    title: "Doctor Dispatch",
    description: "Nearest available doctor sent to your location"
  },
  {
    step: 4,
    title: "Professional Care",
    description: "Complete examination and treatment at your location"
  }
]

export default function HomeDoctorDubai247() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-red-600 text-white">24/7 Emergency Service</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Home Doctor Dubai 24/7 | Professional Medical Care at Your Location
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional doctors visit your home, office, or hotel anywhere in Dubai.
                24/7 emergency care, GP consultations, pediatric care, and mobile diagnostics.
                Avoid hospital waiting rooms - get treated in comfort.
              </p>

              {/* Emergency Badge */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Zap className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-900">Emergency? We're On Our Way!</span>
                </div>
                <p className="text-red-800 text-sm">
                  Average response time: 30-60 minutes • DHA licensed doctors • All Dubai areas covered
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%20need%20a%20home%20doctor%20visit%20in%20Dubai.%20Can%20you%20confirm%2024%2F7%20availability%20and%20send%20a%20doctor%20to%20my%20location%20today%3F" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Doctor Now
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency Line
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Visit
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24/7 available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>30-60 min response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All Dubai areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>DHA licensed</span>
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
                Complete Medical Care at Your Location
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From emergency care to routine checkups, our doctors bring professional
                medical services directly to you, 24 hours a day, 7 days a week.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {homeServices.map((service, index) => (
                <Card key={index} className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%20need%20a%2024%2F7%20home%20doctor%20in%20Dubai.%20Can%20you%20send%20someone%20today%3F" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Request Home Visit
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Conditions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conditions We Treat at Home
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our experienced doctors are equipped to handle a wide range of medical
                conditions right at your location.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {emergencyConditions.map((condition, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <Heart className="w-5 h-5 text-red-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Need immediate medical attention? Our doctors are ready 24/7
              </p>
              <a href="tel:+97145703423">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Doctor Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Home Doctor Service Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Getting medical care at home is simple and fast. Here's how it works:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">What Our Doctors Bring</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Medical Equipment</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Diagnostic tools & examination equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Emergency medications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>IV therapy equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Wound care supplies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Services Provided</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Complete medical examination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Prescription medications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Medical certificates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Follow-up care coordination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Home Doctor Service?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the convenience and comfort of professional medical care at your location.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseHome.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
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

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Doctor Service Areas in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                24/7 home doctor visits available across all areas of Dubai.
                Hotels, residences, and offices covered.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg text-center">
                  <MapPin className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span className="text-gray-700 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">Don't see your area? <span className="text-blue-600 font-medium">We cover all of Dubai!</span></p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Request Home Doctor Visit Now
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional medical care delivered to your doorstep. Available 24/7
                  across Dubai for emergencies and routine care.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Hours</h4>
                      <p className="text-gray-600">24 hours a day, 7 days a week<br />Emergency & routine care</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                      <p className="text-gray-600">30-60 minutes for emergencies<br />Same-day for routine visits</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Our Doctors</h4>
                      <p className="text-gray-600">DHA licensed professionals<br />Hospital-experienced physicians</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-6">Request Emergency Doctor</h3>
                <div className="space-y-4">
                  <p className="text-red-800 mb-4">
                    Need immediate medical attention? Contact us now:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%20need%20a%2024%2F7%20home%20doctor%20in%20Dubai.%20Can%20you%20send%20someone%20today%3F" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Emergency Doctor
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Emergency Line Now
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Non-Emergency Visit
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-red-700 text-center">
                    24/7 service • 30-60 min response • All Dubai areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Medical Care at Your Doorstep
            </h2>
            <p className="text-xl mb-8 text-white/90">
              24/7 home doctor service across Dubai. Avoid hospital waiting rooms and
              get treated in the comfort of your home, office, or hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%20need%20a%2024%2F7%20home%20doctor%20in%20Dubai.%20Can%20you%20send%20someone%20today%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Doctor Now
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 24/7 Hotline
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>24/7 availability</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>All Dubai covered</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>DHA licensed doctors</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
