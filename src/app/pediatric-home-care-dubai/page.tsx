import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Baby,
  Heart,
  Shield,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  MapPin,
  Thermometer,
  Home,
  Users,
  Activity,
  Stethoscope,
  TestTube,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Pediatric Home Care Dubai | Child Doctor Home Visit | Baby Care at Home',
  description: 'Specialized pediatric home care in Dubai. Experienced child doctors visit your home for baby and child medical care. Newborn care, vaccinations, and pediatric emergencies.',
  keywords: 'pediatric home care Dubai, child doctor home visit Dubai, baby doctor Dubai, pediatrician at home Dubai, newborn care Dubai, child health Dubai',
  openGraph: {
    title: 'Pediatric Home Care Dubai | Child Doctor Home Visit | Baby Care at Home',
    description: 'Specialized pediatric home care in Dubai. Experienced child doctors visit your home for comprehensive baby and child medical care.',
    url: 'https://zaincura.com/pediatric-home-care-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/pediatric-home-care-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Pediatric Home Care Service in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/pediatric-home-care-dubai'
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
  name: 'Pediatric Home Care Dubai - Zain Cura Medical',
  description: 'Specialized pediatric home care services in Dubai with experienced child doctors visiting homes for comprehensive baby and child medical care',
  url: 'https://zaincura.com/pediatric-home-care-dubai',
  telephone: '+971-45703423',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  },
  availableService: {
    '@type': 'MedicalTherapy',
    name: 'Pediatric Home Care',
    description: 'Comprehensive child healthcare at home including newborn care, vaccinations, and pediatric consultations'
  }
}

const pediatricServices = [
  {
    title: "Newborn & Infant Care",
    description: "Specialized care for newborns and infants in their first year",
    conditions: ["Newborn checkups", "Feeding difficulties", "Sleep issues", "Growth monitoring", "Jaundice assessment", "Umbilical cord care"],
    icon: Baby,
    ageRange: "0-12 months"
  },
  {
    title: "Child Health Checkups",
    description: "Regular health assessments and developmental monitoring",
    conditions: ["Growth & development", "Milestone tracking", "Vision & hearing", "Nutritional assessment", "Behavioral evaluation", "School readiness"],
    icon: Heart,
    ageRange: "1-18 years"
  },
  {
    title: "Childhood Illnesses",
    description: "Treatment of common childhood diseases and infections",
    conditions: ["Fever & cold", "Ear infections", "Throat infections", "Stomach bugs", "Skin conditions", "Respiratory issues"],
    icon: Thermometer,
    ageRange: "All ages"
  },
  {
    title: "Vaccinations at Home",
    description: "Complete vaccination schedules administered at home",
    conditions: ["Routine immunizations", "Travel vaccines", "Catch-up vaccines", "Booster shots", "Vaccine counseling", "Adverse reaction monitoring"],
    icon: Shield,
    ageRange: "All ages"
  }
]

const pediatricAdvantages = [
  {
    icon: Home,
    title: "Comfort of Home",
    description: "Children feel safer and more relaxed in familiar surroundings"
  },
  {
    icon: Shield,
    title: "Avoid Infections",
    description: "Reduce exposure to hospital-acquired infections and germs"
  },
  {
    icon: Users,
    title: "Family Convenience",
    description: "No need to travel with sick children or multiple siblings"
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Appointments scheduled around nap times and routines"
  }
]

const ageGroups = [
  {
    age: "Newborns (0-28 days)",
    services: ["Initial health assessment", "Feeding support", "Jaundice monitoring", "Weight tracking"]
  },
  {
    age: "Infants (1-12 months)",
    services: ["Growth monitoring", "Vaccination schedule", "Developmental milestones", "Sleep guidance"]
  },
  {
    age: "Toddlers (1-3 years)",
    services: ["Behavior assessment", "Speech development", "Potty training support", "Nutrition guidance"]
  },
  {
    age: "Children (4-12 years)",
    services: ["School health checks", "Sports physicals", "Learning assessments", "Health education"]
  },
  {
    age: "Adolescents (13-18 years)",
    services: ["Puberty guidance", "Mental health support", "Reproductive health", "Lifestyle counseling"]
  }
]

const emergencyPediatric = [
  "High fever in infants",
  "Difficulty breathing",
  "Severe dehydration",
  "Allergic reactions",
  "Seizures or convulsions",
  "Severe injuries",
  "Poisoning incidents",
  "Severe vomiting/diarrhea"
]

export default function PediatricHomCareDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-pink-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-pink-600 text-white">Specialized Child Care</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Pediatric Home Care Dubai | Child Doctor Home Visit Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Specialized pediatric home care in Dubai with experienced child doctors.
                Comprehensive medical care for babies, children, and adolescents in the comfort
                of your home. Newborn care, vaccinations, and emergency pediatric services.
              </p>

              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Baby className="w-5 h-5 text-pink-600" />
                  <span className="font-semibold text-pink-900">Child-Friendly Care at Home</span>
                </div>
                <p className="text-pink-800 text-sm">
                  Experienced pediatricians • All ages 0-18 years • Vaccinations • Emergency care
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Pediatrician
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Child Doctor
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Visit
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Pediatric specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All ages 0-18</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Home vaccinations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Emergency pediatric</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pediatric Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Pediatric Home Care Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized medical care for children of all ages, from newborns to adolescents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pediatricServices.map((service, index) => (
                <Card key={index} className="clinical-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {service.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {service.ageRange}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {service.conditions.map((condition, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Age Groups */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Age-Specific Pediatric Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tailored medical care for each stage of child development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {ageGroups.map((group, index) => (
                <Card key={index} className="clinical-card text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {group.age}
                    </h3>
                    <div className="space-y-2">
                      {group.services.map((service, idx) => (
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

        {/* Advantages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Pediatric Home Care?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Benefits of receiving pediatric medical care in the comfort of your home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pediatricAdvantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pediatric Emergencies */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pediatric Emergency Conditions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When to call for immediate pediatric emergency care at home
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emergencyPediatric.map((emergency, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-red-200 text-center">
                  <Heart className="w-5 h-5 text-red-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{emergency}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-red-600 font-semibold mb-4">
                Child Emergency? Don't Wait - Call Immediately!
              </p>
              <a href="tel:+97145703423">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Pediatric Emergency
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Pediatric & Home Care Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/home-gp-consultation-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Home GP for Children
                </Button>
              </Link>
              <Link href="/emergency-doctor-home-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Pediatric Emergencies
                </Button>
              </Link>
              <Link href="/home-blood-collection-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <TestTube className="w-4 h-4 mr-2" />
                  Child Blood Tests
                </Button>
              </Link>
              <Link href="/gynecologist-dubai-female-doctor">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Adolescent Care
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Vaccination Schedule */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Vaccination Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete vaccination schedules administered safely at home
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Why Choose Home Vaccinations?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Convenience Benefits</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>No travel with sick or fussy children</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Comfortable familiar environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Reduced exposure to infections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Schedule around child's routine</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Medical Benefits</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Same vaccine safety and efficacy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Professional monitoring after vaccination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Complete vaccination records</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Emergency equipment available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Give Your Child the Best Medical Care at Home
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Specialized pediatric home care in Dubai with experienced child doctors.
              From newborn care to adolescent health - we bring expert pediatric care to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Pediatrician
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Child Doctor
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Baby className="w-4 h-4" />
                <span>All ages 0-18</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Home vaccinations</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Emergency pediatric care</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
