import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  Users,
  Shield,
  Award,
  Clock,
  MapPin,
  Stethoscope,
  Home,
  Star,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  ArrowRight,
  Target,
  Eye,
  Handshake
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'About Zain Cura Medical Center | Healthcare Excellence in Dubai',
  description: 'Learn about Zain Cura Medical Center - Dubai\'s premier healthcare provider offering comprehensive medical services, same-day appointments, and 24/7 home care in Deira.',
  keywords: 'about Zain Cura, medical center Dubai, healthcare Deira, medical services Dubai, Al Ghurair medical center',
  openGraph: {
    title: 'About Zain Cura Medical Center | Healthcare Excellence in Dubai',
    description: 'Premier medical center in Deira, Dubai offering comprehensive healthcare services with experienced doctors and modern facilities.',
    url: 'https://www.zaincura.com/about',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Zain Cura Medical Center',
    description: 'Premier medical center in Deira, Dubai offering comprehensive healthcare services.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/about'
  },
  robots: {
    index: true,
    follow: true
  }
}

const companyValues = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, understanding, and genuine care for their wellbeing and health journey."
  },
  {
    icon: Shield,
    title: "Quality & Safety",
    description: "Maintaining the highest standards of medical care with DHA-licensed professionals and state-of-the-art equipment."
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Your health and comfort are our top priorities. We tailor our services to meet your individual needs and preferences."
  },
  {
    icon: Clock,
    title: "Accessible Care",
    description: "Convenient healthcare solutions including same-day appointments, home visits, and 24/7 emergency services."
  }
]

const achievements = [
  { icon: Users, number: "5000+", label: "Patients Served" },
  { icon: Star, number: "4.9/5", label: "Patient Rating" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Home, number: "1000+", label: "Home Visits" }
]

const teamMembers = [
  {
    name: "Dr. Ahmed Al-Rashid",
    position: "Medical Director & Family Physician",
    qualifications: "MBBS, MRCGP, DHA Licensed",
    experience: "15+ years",
    specialization: "Family Medicine, Preventive Care, Chronic Disease Management",
    languages: "English, Arabic, Hindi"
  },
  {
    name: "Dr. Sarah Johnson",
    position: "Senior General Practitioner",
    qualifications: "MBBS, FRACGP, DHA Licensed",
    experience: "12+ years",
    specialization: "Internal Medicine, Women's Health, Travel Medicine",
    languages: "English, Arabic, French"
  },
  {
    name: "Dr. Fatima Al-Zahra",
    position: "Women's Health Specialist",
    qualifications: "MBBS, MRCOG, DHA Licensed",
    experience: "10+ years",
    specialization: "Gynecology, Reproductive Health, Prenatal Care",
    languages: "English, Arabic, Urdu"
  }
]

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide accessible, high-quality healthcare services that prioritize patient comfort, safety, and convenience through modern, evidence-based medical care delivered with compassion and professionalism."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become Dubai's most trusted neighborhood medical center, known for exceptional patient care, innovative health solutions, and comprehensive services that bring quality healthcare directly to our community."
  },
  {
    icon: Handshake,
    title: "Our Commitment",
    description: "We are committed to building lasting relationships with our patients, providing transparent pricing, maintaining the highest medical standards, and continuously improving our services based on patient feedback and medical advances."
  }
]

const whyChooseUs = [
  {
    title: "DHA Licensed Excellence",
    description: "All our medical professionals are certified by Dubai Health Authority, ensuring the highest standards of medical care and patient safety.",
    icon: Award
  },
  {
    title: "Comprehensive Services",
    description: "From routine consultations to specialized testing and home care, we offer a complete range of medical services under one roof.",
    icon: Stethoscope
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art equipment and comfortable facilities at our convenient Al Ghurair Centre location in the heart of Deira.",
    icon: Shield
  },
  {
    title: "Home Healthcare Pioneer",
    description: "Leading provider of home and hotel medical services in Dubai, bringing quality healthcare directly to your location.",
    icon: Home
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                Trusted Healthcare Partner
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Your Neighborhood Medical Center in Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                More than just a clinic—we are your dedicated healthcare partner,
                committed to providing exceptional medical care with compassion and expertise
                since 2010.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Our Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Card className="clinical-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-96 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Caring for Dubai Since 2010
                      </h3>
                      <p className="text-white/90">
                        Trusted by thousands of families across Deira and greater Dubai
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on principles of excellence, compassion, and innovation in healthcare delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missionVision.map((item, index) => (
              <Card key={index} className="clinical-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and define how we serve our patients and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our patients place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/90 text-lg">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Medical Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced, DHA-licensed medical professionals dedicated to providing
              you with the highest quality healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="clinical-card">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-600">
                      {member.qualifications}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Experience:</span>
                        <span className="text-gray-600 ml-1">{member.experience}</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Stethoscope className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Specialization:</span>
                        <p className="text-gray-600">{member.specialization}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Languages:</span>
                        <span className="text-gray-600 ml-1">{member.languages}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zain Cura?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What sets us apart as Dubai's preferred neighborhood medical center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="clinical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Accessibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Conveniently Located in Deira
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our modern medical center is strategically located at Al Ghurair Centre,
                making us easily accessible to residents and visitors across Deira and
                surrounding areas.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Prime Location</p>
                    <p className="text-gray-600">Al Ghurair Centre, Al Rigga, Deira - Heart of Dubai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Metro Access</p>
                    <p className="text-gray-600">Union Station (5 min) • Al Rigga Station (8 min)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Extended Hours</p>
                    <p className="text-gray-600">08:00 - 22:00 Daily • Home Care 24/7</p>
                  </div>
                </div>
              </div>

              <Link href="/location/al-ghurair-centre-deira">
                <Button className="bg-primary hover:bg-primary/90">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Easy to Reach
              </h3>
              <p className="text-gray-600 mb-6">
                Whether you're coming by metro, bus, or car, our central Deira location
                makes healthcare accessible to everyone in Dubai.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm font-medium text-gray-900">Free Parking</p>
                  <p className="text-xs text-gray-600">Al Ghurair Centre</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm font-medium text-gray-900">Public Transport</p>
                  <p className="text-xs text-gray-600">Metro & Bus Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Quality Healthcare Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of satisfied patients who trust Zain Cura for their healthcare needs.
            Book your appointment and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <a href="https://wa.me/+971-5X-XXXXXXX" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+971-4-XXXXXXX">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <p>Located at Al Ghurair Centre, Deira • Open 08:00 - 22:00 Daily</p>
          </div>
        </div>
      </section>

      {/* Mobile CTA Bar */}
      <MobileCTABar />
    </div>
  )
}
