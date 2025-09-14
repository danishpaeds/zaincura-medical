import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Baby,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Home,
  Users,
  Award,
  MapPin,
  Star,
  Activity,
  Stethoscope,
  FileText
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Gynecologist Dubai | Female Doctor | Women\'s Health Specialist',
  description: 'Experienced female gynecologist in Dubai. Women\'s health, prenatal care, gynecological exams, PCOS treatment, fertility consultation. Private & confidential care at Al Ghurair Centre, Deira.',
  keywords: 'gynecologist Dubai, female gynecologist Dubai, women doctor Dubai, gynecology clinic Dubai, OBGYN Dubai, prenatal care Dubai, PCOS treatment Dubai, female doctor Deira',
  openGraph: {
    title: 'Gynecologist Dubai | Female Doctor | Women\'s Health Specialist',
    description: 'Experienced female gynecologist in Dubai for women\'s health, prenatal care, and gynecological services. Private consultation at Zain Cura Medical Center.',
    url: 'https://zaincura.com/gynecologist-dubai-female-doctor',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/gynecologist-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Female Gynecologist Consultation in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gynecologist Dubai | Female Doctor',
    description: 'Experienced female gynecologist in Dubai for women\'s health and prenatal care.',
    images: ['https://zaincura.com/images/gynecologist-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/gynecologist-dubai-female-doctor'
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
  name: 'Zain Cura Medical Center - Female Gynecologist Dubai',
  description: 'Female gynecologist clinic in Dubai offering comprehensive women\'s health services, prenatal care, and gynecological treatments',
  url: 'https://zaincura.com/gynecologist-dubai-female-doctor',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/gynecologist-dubai.jpg',
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
  medicalSpecialty: ['Gynecology', 'Obstetrics', 'Women\'s Health', 'Reproductive Medicine'],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Gynecological Consultation'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Prenatal Care'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'PCOS Treatment'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Fertility Consultation'
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

const gynecologyServices = [
  {
    icon: Stethoscope,
    title: "General Gynecology",
    description: "Comprehensive women's health exams and consultations",
    services: [
      "Annual well-woman exams",
      "Pap smears & HPV testing",
      "Breast examinations",
      "Menstrual disorder treatment",
      "Contraception counseling",
      "STD screening & treatment"
    ]
  },
  {
    icon: Baby,
    title: "Prenatal & Pregnancy Care",
    description: "Complete pregnancy care from conception to delivery",
    services: [
      "Pregnancy confirmation & dating",
      "Prenatal checkups & monitoring",
      "Ultrasound scans",
      "High-risk pregnancy management",
      "Nutritional guidance",
      "Birth planning consultation"
    ]
  },
  {
    icon: Heart,
    title: "PCOS & Hormonal Health",
    description: "Specialized treatment for hormonal imbalances",
    services: [
      "PCOS diagnosis & management",
      "Irregular periods treatment",
      "Hormonal testing & therapy",
      "Weight management guidance",
      "Acne & hair loss treatment",
      "Fertility preservation"
    ]
  },
  {
    icon: Users,
    title: "Fertility & Family Planning",
    description: "Comprehensive fertility evaluation and treatment",
    services: [
      "Fertility assessment",
      "Ovulation monitoring",
      "Pre-conception counseling",
      "Infertility investigation",
      "IUI/IVF consultation",
      "Recurrent miscarriage evaluation"
    ]
  }
]

const whyChooseFemaleDr = [
  {
    icon: Users,
    title: "Female Doctor",
    description: "Experienced female gynecologist for comfortable, confidential care"
  },
  {
    icon: Shield,
    title: "Private & Confidential",
    description: "Complete privacy with discrete consultation rooms"
  },
  {
    icon: Award,
    title: "DHA Licensed",
    description: "Board-certified gynecologist with international experience"
  },
  {
    icon: Clock,
    title: "Same-Day Appointments",
    description: "Urgent appointments available for emergency cases"
  }
]

const conditions = [
  "PCOS (Polycystic Ovary Syndrome)",
  "Irregular Periods",
  "Heavy Menstrual Bleeding",
  "Endometriosis",
  "Uterine Fibroids",
  "Ovarian Cysts",
  "Vaginal Infections",
  "UTI (Urinary Tract Infections)",
  "Menopause Symptoms",
  "Infertility Issues",
  "Pregnancy Care",
  "Contraception Needs"
]

const faqs = [
  {
    question: "Is the gynecologist female?",
    answer: "Yes, our gynecologist is an experienced female doctor who provides comfortable and confidential care for all women's health needs."
  },
  {
    question: "Do I need a referral to see the gynecologist?",
    answer: "No referral is needed. You can book directly with our female gynecologist for any women's health concerns."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your Emirates ID, any previous medical records, current medications list, and last menstrual period date."
  },
  {
    question: "Do you provide pregnancy care?",
    answer: "Yes, we offer comprehensive prenatal care from early pregnancy through delivery planning, including regular checkups and ultrasound scans."
  }
]

export default function GynecologistDubaiFemaleDoctor() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-pink-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-pink-600 text-white">Female Doctor Available</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Female Gynecologist Dubai | Women's Health Specialist
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Experienced female gynecologist in Dubai for comprehensive women's health care.
                Prenatal care, PCOS treatment, fertility consultation, and gynecological exams
                in a private, comfortable environment at Al Ghurair Centre, Deira.
              </p>

              {/* Trust Badge */}
              <div className="bg-pink-100 border border-pink-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-pink-600" />
                  <span className="font-semibold text-pink-900">Female Doctor for Your Comfort</span>
                </div>
                <p className="text-pink-800 text-sm">
                  Private consultation • Confidential care • Same-day appointments • All women's health needs
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Female Gynecologist
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Women's Clinic
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Female doctor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Private consultations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Same-day appointments</span>
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
                Comprehensive Women's Health Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our female gynecologist provides complete women's health care from adolescence through menopause,
                including pregnancy care and fertility services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gynecologyServices.map((service, index) => (
                <Card key={index} className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-pink-600" />
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
                      <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp for Consultation
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Female Doctor */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Female Gynecologist?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience compassionate, professional women's healthcare with our experienced female doctor
                in a comfortable, private setting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseFemaleDr.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-pink-600" />
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Special Women's Health Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Well-Woman Package</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Complete gynecological exam</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Pap smear & HPV testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Breast examination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Hormonal health assessment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Pregnancy Care Package</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Regular prenatal checkups</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Ultrasound scans</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Lab tests & monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Nutritional guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conditions We Treat
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our female gynecologist has extensive experience treating a wide range of women's health conditions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="bg-pink-50 p-4 rounded-lg text-center hover:bg-pink-100 transition-colors">
                  <Heart className="w-5 h-5 text-pink-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Don't see your condition? Contact us for personalized consultation
              </p>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Female Doctor
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our female gynecologist services in Dubai.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((item, index) => (
                <Card key={index} className="clinical-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Visit Our Female Gynecologist
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Conveniently located at Al Ghurair Centre in Deira, our women's health clinic
                  offers private, comfortable consultation rooms with complete confidentiality.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-pink-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Address</h4>
                      <p className="text-gray-600">Al Ghurair Centre, 6th Floor<br />Deira, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-pink-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Consultation Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 09:00 - 21:00<br />Same-day appointments available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-pink-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Privacy Features</h4>
                      <p className="text-gray-600">Private entrance • Female staff • Confidential consultations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-8 rounded-xl border border-pink-200">
                <h3 className="text-2xl font-bold text-pink-900 mb-6">Book Female Gynecologist</h3>
                <div className="space-y-4">
                  <p className="text-pink-800 mb-4">
                    Schedule your appointment with our experienced female gynecologist:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Female Doctor
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Women's Clinic
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Online Appointment
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-pink-700 text-center">
                    Female doctor • Private consultation • Same-day appointments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Female Gynecologist Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Experience compassionate women's healthcare with our experienced female gynecologist.
              Private, confidential consultations for all your women's health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Female Gynecologist
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Female doctor</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Complete privacy</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-4 h-4" />
                <span>5-star rated care</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
