import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  Baby,
  Shield,
  Users,
  Stethoscope,
  Activity,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  MapPin,
  Award,
  Star,
  Droplets,
  Bandage,
  Pill,
  Home,
  Zap,
  UserCheck,
  HeartHandshake,
  Thermometer
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Nurse on Call Dubai | Professional Home Nursing Services | 24/7 Care',
  description: 'Professional nurse on call Dubai. Newborn care, postpartum care, post-operative care, elderly nursing, wound care. DHA licensed nurses 24/7.',
  keywords: 'nurse on call Dubai, home nursing Dubai, newborn care Dubai, postpartum care Dubai, post operative care Dubai, elderly care nursing Dubai, private nurse Dubai',
  openGraph: {
    title: 'Nurse on Call Dubai | Professional Home Nursing Services | 24/7 Care',
    description: 'Professional nursing services at your home. Newborn care, postpartum care, post-operative care with DHA licensed nurses in Dubai.',
    url: 'https://zaincura.com/nurse-on-call-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/nurse-on-call-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Nurse on Call Services in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurse on Call Dubai | Professional Home Nursing',
    description: 'Professional nursing services at your home. Newborn care, postpartum care, post-operative care.',
    images: ['https://zaincura.com/images/nurse-on-call-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/nurse-on-call-dubai'
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
  name: 'Zain Cura Medical Center - Nurse on Call Dubai',
  description: 'Professional home nursing services in Dubai including newborn care, postpartum care, post-operative care, and elderly nursing with DHA licensed nurses',
  url: 'https://zaincura.com/nurse-on-call-dubai',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/nurse-on-call-dubai.jpg',
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
  medicalSpecialty: ['Nursing', 'Newborn Care', 'Postpartum Care', 'Post-Operative Care', 'Elderly Care'],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Newborn Care Nursing'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Postpartum Care Nursing'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Post-Operative Care'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Elderly Care Nursing'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Home IV Therapy'
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

const nursingServices = [
  {
    icon: Baby,
    title: "Newborn Care Nursing",
    description: "Specialized care for newborns and infant health monitoring",
    href: "#newborn-care",
    badge: "New Parents",
    features: ["24/7 newborn monitoring", "Feeding assistance & guidance", "Sleep routine establishment", "Health assessment & tracking", "Umbilical cord care", "Vaccination schedule support"],
    color: "bg-pink-100 text-pink-600",
    popular: true
  },
  {
    icon: HeartHandshake,
    title: "Postpartum Care Nursing",
    description: "Comprehensive care for new mothers during recovery",
    href: "#postpartum-care",
    badge: "New Mothers",
    features: ["Mother's recovery monitoring", "Breastfeeding support", "C-section wound care", "Emotional support", "Baby care education", "Family guidance"],
    color: "bg-purple-100 text-purple-600",
    popular: true
  },
  {
    icon: Bandage,
    title: "Post-Operative Care",
    description: "Professional nursing care after surgery and procedures",
    href: "#post-operative",
    badge: "Recovery Care",
    features: ["Surgical wound care", "Pain management", "Medication administration", "Mobility assistance", "Recovery monitoring", "Complication prevention"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Heart,
    title: "Elderly Care Nursing",
    description: "Compassionate nursing care for senior patients",
    href: "#elderly-care",
    badge: "Senior Care",
    features: ["Daily living assistance", "Medication management", "Health monitoring", "Companionship", "Mobility support", "Chronic condition care"],
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Droplets,
    title: "IV Therapy & Hydration",
    description: "Professional IV administration and hydration therapy",
    href: "#iv-therapy",
    badge: "Medical Therapy",
    features: ["IV line insertion", "Medication administration", "Hydration therapy", "Vitamin infusions", "Blood sampling", "Safe monitoring"],
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Professional medication administration and monitoring",
    href: "#medication",
    badge: "Medication Care",
    features: ["Injection administration", "Medication scheduling", "Side effect monitoring", "Drug interaction checks", "Compliance assistance", "Dosage management"],
    color: "bg-orange-100 text-orange-600"
  }
]

const whyChooseNursing = [
  {
    icon: UserCheck,
    title: "DHA Licensed Nurses",
    description: "Certified, experienced nurses with international training"
  },
  {
    icon: Home,
    title: "Comfort of Home",
    description: "Professional nursing care in familiar surroundings"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock nursing care when you need it"
  },
  {
    icon: Shield,
    title: "Infection Control",
    description: "Strict hygiene protocols and sterile procedures"
  }
]

const serviceAreas = [
  "Downtown Dubai", "Dubai Marina", "JBR", "JLT", "Business Bay", "DIFC",
  "Palm Jumeirah", "Jumeirah", "Al Barsha", "Dubai Hills", "Arabian Ranches",
  "Deira", "Bur Dubai", "Al Karama", "Motor City", "Sports City",
  "Dubai Silicon Oasis", "International City", "Dubai Investment Park",
  "Emirates Hills", "The Springs", "Mirdif", "Al Mizhar", "Festival City",
  "All Dubai Hospitals & Clinics"
]

const nursingSpecialties = [
  {
    category: "Maternal & Newborn",
    services: ["Newborn assessment", "Breastfeeding support", "Postpartum depression support", "C-section care"]
  },
  {
    category: "Surgical Recovery",
    services: ["Wound dressing", "Drain management", "Pain assessment", "Mobility assistance"]
  },
  {
    category: "Chronic Care",
    services: ["Diabetes management", "Cardiac care", "Respiratory care", "Palliative care"]
  },
  {
    category: "Emergency Nursing",
    services: ["Urgent nursing needs", "Hospital discharge support", "Medical equipment setup", "Family education"]
  }
]

const processSteps = [
  {
    step: 1,
    title: "Assessment Call",
    description: "Discuss your specific nursing care requirements",
    icon: Phone
  },
  {
    step: 2,
    title: "Nurse Assignment",
    description: "Qualified nurse matched to your specific needs",
    icon: UserCheck
  },
  {
    step: 3,
    title: "Care Planning",
    description: "Personalized care plan developed with family",
    icon: Stethoscope
  },
  {
    step: 4,
    title: "Quality Care",
    description: "Professional nursing care delivered at home",
    icon: Heart
  }
]

const conditions = [
  "Post-surgical recovery",
  "Newborn & infant care",
  "Postpartum depression",
  "Chronic wound care",
  "Diabetes management",
  "Cardiac care",
  "Respiratory conditions",
  "Elderly care needs",
  "Medication administration",
  "IV therapy requirements",
  "Palliative care",
  "Disability care support"
]

export default function NurseOnCallDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-purple-600 text-white">DHA Licensed Professional Nurses</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Nurse on Call Dubai | Professional Home Nursing Services 24/7
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional nursing services at your home in Dubai. Specialized care for newborns,
                postpartum recovery, post-operative care, elderly nursing, IV therapy, and medication
                management. DHA licensed nurses available 24/7 across Dubai.
              </p>

              {/* Trust Badge */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-900">DHA Licensed Nurses • International Training</span>
                </div>
                <p className="text-purple-800 text-sm">
                  24/7 availability • Specialized care • Sterile procedures • Family support
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp for Nurse
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Nursing Team
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Nursing Care
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>DHA licensed nurses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Specialized care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All Dubai areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nursing Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Home Nursing Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive nursing care delivered by DHA licensed professionals at your home.
                Specialized services for all ages and medical conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nursingServices.map((service, index) => (
                <Card key={index} className={`clinical-card h-full hover:scale-[1.02] transition-transform duration-200 ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <Badge variant={service.popular ? "default" : "secondary"} className="text-xs">
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

                    <div className="space-y-3">
                      <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp for This Service
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Care Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Nursing Care Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our nurses are trained in various specialties to provide expert care for specific conditions and situations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nursingSpecialties.map((specialty, index) => (
                <Card key={index} className="clinical-card text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {specialty.category}
                    </h3>
                    <div className="space-y-2">
                      {specialty.services.map((service, idx) => (
                        <div key={idx} className="text-sm text-gray-600">
                          • {service}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Our Nursing Service Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional nursing care delivered with compassion and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-purple-600" />
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

        {/* Why Choose Our Nurses */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Professional Nurses?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience exceptional nursing care with certified professionals who prioritize your health and comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseNursing.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
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

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">What Our Nurses Provide</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Clinical Skills</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Medication administration & monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Wound care & dressing changes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>IV therapy & blood sampling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Vital signs monitoring</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Care & Support</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Patient & family education</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Emotional support & counseling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Daily living assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Communication with doctors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions We Care For */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conditions We Provide Nursing Care For
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our professional nurses are experienced in caring for various medical conditions and situations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg text-center">
                  <Heart className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Need specialized nursing care? Our team is here to help
              </p>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Discuss Your Nursing Needs
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nursing Service Areas in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional nursing services available across all areas of Dubai
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-purple-50 p-3 rounded-lg text-center">
                  <MapPin className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                  <span className="text-gray-700 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Booking Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Book Professional Nursing Care
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get the nursing care you need with our DHA licensed professional nurses.
                  Available 24/7 across Dubai for specialized medical care at home.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Hours</h4>
                      <p className="text-gray-600">24 hours a day, 7 days a week<br />Emergency nursing care available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <UserCheck className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Qualified Nurses</h4>
                      <p className="text-gray-600">DHA licensed professionals<br />International training & experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Safety Standards</h4>
                      <p className="text-gray-600">Strict infection control<br />Sterile procedures & equipment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Nursing Care</h3>
                <div className="space-y-4">
                  <p className="text-gray-800 mb-4">
                    Contact us to discuss your nursing care requirements:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Nursing Team
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call for Nursing Care
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Consultation
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-700 text-center">
                    24/7 availability • DHA licensed • Professional care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Nursing Care When You Need It
            </h2>
            <p className="text-xl mb-8 text-white/90">
              DHA licensed nurses providing specialized care for newborns, postpartum recovery,
              post-operative care, and elderly nursing. Professional, compassionate care at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp for Nurse
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Nursing Team
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <UserCheck className="w-4 h-4" />
                <span>DHA licensed</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>24/7 available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Compassionate care</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Professional standards</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
