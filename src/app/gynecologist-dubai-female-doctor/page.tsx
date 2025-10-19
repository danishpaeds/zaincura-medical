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
  Star,
  Activity,
  FileText,
  UserCheck
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Gynecologist Dubai | Female Doctor | Women\'s Health Specialist',
  description: 'Female gynecologist Dubai. Women\'s health, PCOS treatment, prenatal care. Private consultations at Al Ghurair Centre, Deira. Same-day appointments.',
  keywords: 'gynecologist Dubai, female gynecologist Dubai, women doctor Dubai, gynecology clinic Dubai, OBGYN Dubai, prenatal care Dubai, PCOS treatment Dubai, female doctor Deira',
  openGraph: {
    title: 'Gynecologist Dubai | Female Doctor | Women\'s Health Specialist',
    description: 'Expert female gynecologist in Dubai. Women\'s health, PCOS treatment, prenatal care. Private consultations at Al Ghurair Centre, Deira.',
    url: 'https://zaincura.com/gynecologist-dubai-female-doctor',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/gynecologist-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Female Gynecologist in Dubai - Women\'s Health Specialist'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gynecologist Dubai | Female Doctor',
    description: 'Expert female gynecologist in Dubai. Women\'s health, PCOS treatment, prenatal care. Private consultations.'
  },
  alternates: {
    canonical: 'https://zaincura.com/gynecologist-dubai-female-doctor'
  },
  robots: {
    index: true,
    follow: true
  }
}

const services = [
  {
    icon: Heart,
    title: "Women's Health Consultations",
    description: "Comprehensive gynecological examinations and women's health assessments with female doctor expertise",
    features: ["Annual checkups", "Preventive screening", "Health consultations", "Wellness advice"]
  },
  {
    icon: Baby,
    title: "PCOS Treatment",
    description: "Specialized care for polycystic ovary syndrome with personalized treatment plans",
    features: ["Hormonal balance", "Fertility support", "Lifestyle guidance", "Medication management"]
  },
  {
    icon: Stethoscope,
    title: "Prenatal Care",
    description: "Complete pregnancy monitoring and prenatal health consultations for expectant mothers",
    features: ["Pregnancy checkups", "Fetal monitoring", "Health screening", "Birth preparation"]
  },
  {
    icon: UserCheck,
    title: "Family Planning",
    description: "Contraception advice, fertility consultations, and reproductive health guidance",
    features: ["Contraception options", "Fertility assessment", "Reproductive health", "Family planning"]
  }
]

const whyChooseUs = [
  {
    icon: Users,
    title: "Female Doctor",
    description: "Experienced female gynecologist providing comfortable and private consultations"
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Confidential consultations in a safe and professional environment"
  },
  {
    icon: Clock,
    title: "Same-Day Appointments",
    description: "Quick booking and same-day appointments available for urgent consultations"
  },
  {
    icon: Award,
    title: "DHA Licensed",
    description: "Certified and licensed by Dubai Health Authority for quality assurance"
  }
]

const commonConcerns = [
  {
    title: "Irregular Periods",
    description: "Assessment and treatment for menstrual irregularities and hormonal imbalances"
  },
  {
    title: "PCOS Management",
    description: "Comprehensive care for polycystic ovary syndrome including lifestyle and medical management"
  },
  {
    title: "Fertility Concerns",
    description: "Fertility assessment, preconception counseling, and reproductive health guidance"
  },
  {
    title: "Prenatal Care",
    description: "Complete pregnancy monitoring, health screening, and prenatal consultations"
  },
  {
    title: "Contraception",
    description: "Family planning consultations and contraceptive options tailored to your needs"
  },
  {
    title: "Annual Checkups",
    description: "Routine gynecological examinations and preventive health screening"
  }
]

export default function GynecologistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16 md:py-24">
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
                Expert women's health care with our experienced female gynecologist.
                PCOS treatment, prenatal care, and comprehensive gynecological services
                at Al Ghurair Centre, Deira.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C] font-semibold w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Same-Day Appointment
                  </Button>
                </Link>
                <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20booking%20a%20consultation%20with%20the%20Female%20Gynecologist%20at%20Zain%20Cura.%20Please%20share%20available%20appointment%20slots%20for%20women%27s%20health%20services." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C] w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Consultation
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Female doctor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Same-day appointments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Private consultations</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="clinical-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Women's Health Excellence
                    </h3>
                    <p className="text-gray-600">
                      Compassionate care with female gynecologist expertise in a comfortable, private setting
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Women's Health Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive gynecological care with female doctor expertise and modern facilities in Dubai.
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
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
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
              Why Choose Our Female Gynecologist?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience comfortable, professional care with our qualified female gynecologist in Dubai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Concerns */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Women's Health Concerns
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our female gynecologist provides expert care for a wide range of women's health issues.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonConcerns.map((concern, index) => (
              <Card key={index} className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {concern.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {concern.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Consultation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your appointment with our female gynecologist today. Same-day appointments available
            for your convenience at Al Ghurair Centre, Deira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C] font-semibold w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+97145703423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C] w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">Location</p>
              <p className="text-white/90">Al Ghurair Centre, Deira</p>
            </div>
            <div>
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">Hours</p>
              <p className="text-white/90">Daily 9:00 AM - 9:00 PM</p>
            </div>
            <div>
              <Users className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">Female Doctor</p>
              <p className="text-white/90">Private consultations</p>
            </div>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
