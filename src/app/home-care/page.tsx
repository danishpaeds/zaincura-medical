import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Home,
  Stethoscope,
  Shield,
  Baby,
  TestTube,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  MapPin,
  Heart,
  Zap,
  Users,
  Award,
  Star,
  Activity,
  ThermometerSun,
  Siren,
  FileText
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Home Care Dubai | 24/7 Doctor Home Visits | Medical Care at Home',
  description: 'Professional home care services in Dubai. 24/7 doctor home visits, GP consultations, emergency care, pediatric services, blood collection. Same-day appointments across Dubai.',
  keywords: 'home care Dubai, doctor home visit Dubai, 24/7 home doctor Dubai, home medical care Dubai, home healthcare Dubai, GP at home Dubai, emergency doctor home Dubai',
  openGraph: {
    title: 'Home Care Dubai | 24/7 Doctor Home Visits | Professional Medical Care',
    description: 'Complete home care services in Dubai. 24/7 doctor visits, emergency care, GP consultations, pediatric care at your location.',
    url: 'https://zaincura.com/home-care',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/home-care-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Home Care Services in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Care Dubai | 24/7 Doctor Home Visits',
    description: 'Professional home care services in Dubai with 24/7 doctor visits and medical care.',
    images: ['https://zaincura.com/images/home-care-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/home-care'
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
  name: 'Zain Cura Medical Center - Home Care Services Dubai',
  description: 'Comprehensive home care services in Dubai including 24/7 doctor visits, emergency care, GP consultations, and specialized medical care at patient location',
  url: 'https://zaincura.com/home-care',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/home-care-dubai.jpg',
  telephone: '+971-45703423',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Service Available Across Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
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
  medicalSpecialty: ['Emergency Medicine', 'General Practice', 'Pediatrics', 'Home Healthcare'],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: '24/7 Home Doctor Visits'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Emergency Home Care'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Home GP Consultation'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Pediatric Home Care'
    },
    {
      '@type': 'MedicalTest',
      name: 'Home Blood Collection'
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

const homeCareServices = [
  {
    icon: Stethoscope,
    title: "Home GP Consultation",
    description: "Professional GP consultations at your home, office, or hotel",
    href: "/home-gp-consultation-dubai",
    badge: "Same-Day Available",
    features: ["General health consultation", "Chronic disease management", "Prescription & medication", "Health certificates"],
    color: "bg-blue-100 text-blue-600",
    popular: true
  },
  {
    icon: Zap,
    title: "24/7 Emergency Doctor",
    description: "Urgent medical care delivered to your location within 30 minutes",
    href: "/emergency-doctor-home-dubai",
    badge: "30-Min Response",
    features: ["High priority emergencies", "Life-saving equipment", "24/7 availability", "All emergency conditions"],
    color: "bg-red-100 text-red-600",
    urgent: true
  },
  {
    icon: Users,
    title: "Nurse on Call",
    description: "DHA licensed nurses for newborn, postpartum, and post-operative care",
    href: "/nurse-on-call-dubai",
    badge: "Professional Nursing",
    features: ["Newborn & postpartum care", "Post-operative nursing", "Elderly care", "IV therapy & medication"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Baby,
    title: "Pediatric Home Care",
    description: "Specialized child healthcare with experienced pediatricians",
    href: "/pediatric-home-care-dubai",
    badge: "Child Specialists",
    features: ["Newborn & infant care", "Child health checkups", "Vaccinations at home", "Pediatric emergencies"],
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: TestTube,
    title: "Home Blood Collection",
    description: "Professional phlebotomists collect blood samples at your location",
    href: "/home-blood-collection-dubai",
    badge: "Same-Day Results",
    features: ["50+ blood tests", "Certified phlebotomists", "Sterile equipment", "Digital results"],
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: Home,
    title: "24/7 Home Doctor Service",
    description: "Comprehensive medical care available around the clock",
    href: "/home-doctor-dubai-24-7",
    badge: "Round the Clock",
    features: ["All medical conditions", "Hotel visits", "Family care", "Mobile diagnostics"],
    color: "bg-green-100 text-green-600"
  }
]

const whyChooseHomeCare = [
  {
    icon: Home,
    title: "Comfort & Convenience",
    description: "Receive professional medical care in familiar surroundings"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Avoid hospital exposure and reduce infection risk"
  },
  {
    icon: Clock,
    title: "Time Saving",
    description: "No travel time or waiting rooms - we come to you"
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Care for multiple family members in one visit"
  }
]

const serviceAreas = [
  "Downtown Dubai", "Dubai Marina", "JBR", "JLT", "Business Bay", "DIFC",
  "Palm Jumeirah", "Jumeirah", "Al Barsha", "Dubai Hills", "Arabian Ranches",
  "Deira", "Bur Dubai", "Al Karama", "Motor City", "Sports City",
  "Dubai Silicon Oasis", "International City", "Dubai Investment Park",
  "Emirates Hills", "The Springs", "Mirdif", "Al Mizhar", "Festival City",
  "All Dubai Hotels & Apartments"
]

const emergencyConditions = [
  "High fever & severe illness",
  "Chest pain & heart issues",
  "Breathing difficulties",
  "Severe injuries & wounds",
  "Allergic reactions",
  "Severe abdominal pain",
  "Pediatric emergencies",
  "Elderly care emergencies"
]

const processSteps = [
  {
    step: 1,
    title: "Call or WhatsApp",
    description: "Contact us 24/7 for immediate medical assistance",
    icon: Phone
  },
  {
    step: 2,
    title: "Quick Assessment",
    description: "Brief medical evaluation to determine urgency",
    icon: FileText
  },
  {
    step: 3,
    title: "Doctor Dispatch",
    description: "Qualified doctor sent to your location with equipment",
    icon: Stethoscope
  },
  {
    step: 4,
    title: "Professional Care",
    description: "Complete medical examination and treatment at home",
    icon: Heart
  }
]

export default function HomeCareDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-red-600 text-white">24/7 Emergency & Routine Care</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Home Care Dubai | 24/7 Doctor Home Visits & Medical Care
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional home care services across Dubai. 24/7 doctor home visits, emergency care,
                GP consultations, pediatric services, and blood collection. Experienced doctors bring
                complete medical care to your home, office, or hotel within 30-60 minutes.
              </p>

              {/* Trust Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">DHA Licensed Doctors • 24/7 Available</span>
                </div>
                <p className="text-green-800 text-sm">
                  30-60 min response • All Dubai areas • Same-day appointments • Emergency equipment
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency Doctor
                  </Button>
                </a>
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Home Doctor
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Home Visit
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All Dubai areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>30-60 min response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>DHA licensed doctors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Home Care Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Home Care Services Menu
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional medical care delivered to your home, office, or hotel across Dubai.
                From routine consultations to emergency care - we bring healthcare to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeCareServices.map((service, index) => (
                <Link key={index} href={service.href}>
                  <Card className={`clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer ${service.urgent ? 'ring-2 ring-red-500' : service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <Badge variant={service.popular ? "default" : "secondary"} className={`text-xs ${service.urgent ? 'bg-red-600 text-white' : ''}`}>
                          {service.badge}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center text-primary font-medium">
                        {service.urgent ? "Call Emergency Now" : "Learn More & Book"}
                        <span className="ml-2">→</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="py-12 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Siren className="w-8 h-8 mr-3 animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-bold">Medical Emergency?</h2>
                <Siren className="w-8 h-8 ml-3 animate-pulse" />
              </div>
              <p className="text-xl mb-6 text-white/90">
                Emergency doctor arrives within 30 minutes with life-saving equipment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency Line NOW
                  </Button>
                </a>
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Emergency
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Conditions */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Emergency Conditions We Treat at Home
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our emergency doctors are equipped to handle urgent medical situations at your location
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emergencyConditions.map((condition, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-red-200 text-center">
                  <Heart className="w-5 h-5 text-red-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Home Care Service Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple steps to get professional medical care delivered to your location
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-blue-600" />
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
          </div>
        </section>

        {/* Why Choose Home Care */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Home Care Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of professional medical care in the comfort of your own space
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseHomeCare.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">What Our Home Care Team Brings</h3>
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
                      <span>Emergency medications & supplies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Blood collection & testing equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>IV therapy & hydration supplies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Professional nursing equipment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Services Provided</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Complete medical examination & assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Prescription medications & certificates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Lab tests & blood collection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Follow-up care coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Professional nursing care</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Care Service Areas in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                24/7 home care services available across all areas of Dubai, including hotels and apartments
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

        {/* Testimonials & Trust */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Dubai Families
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Thousands of satisfied patients trust us for reliable home care services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <p className="text-gray-600">Available Always</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9★</div>
                <p className="text-gray-600">Patient Rating</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">30-60</div>
                <p className="text-gray-600">Minutes Response</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Booking Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Book Your Home Care Service Now
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional medical care delivered to your doorstep across Dubai.
                  Available 24/7 for emergencies and routine care with same-day appointments.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Hours</h4>
                      <p className="text-gray-600">24 hours a day, 7 days a week<br />Emergency & routine care available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                      <p className="text-gray-600">30-60 minutes for most locations<br />Emergency priority dispatch</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                      <p className="text-gray-600">DHA licensed doctors<br />Fully equipped mobile units</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Home Care Team</h3>
                <div className="space-y-4">
                  <p className="text-gray-800 mb-4">
                    Need medical care at home? Choose your preferred contact method:
                  </p>
                  <div className="space-y-3">
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Emergency/Urgent Line
                      </Button>
                    </a>
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Home Doctor
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Appointment
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-700 text-center">
                    24/7 availability • Same-day service • All Dubai areas covered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Medical Care at Your Doorstep
            </h2>
            <p className="text-xl mb-8 text-white/90">
              24/7 home care services across Dubai. From emergency care to routine consultations,
              we bring qualified doctors and complete medical care directly to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+97145703423">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Doctor
                </Button>
              </a>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Home Care
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
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
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Emergency equipped</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
