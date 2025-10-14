import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Calendar,
  MessageCircle,
  Phone,
  Stethoscope,
  Home,
  CheckCircle,
  Clock,
  Award,
  MapPin,
  Users,
  ArrowRight,
  Heart,
  Shield,
  FileText,
  Activity
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Home GP Consultation Dubai | Doctor at Home | Family Medicine',
  description: 'Home GP consultation Dubai. Same-day family doctor visits at home. General practice, health checkups, prescriptions. Available across Dubai.',
  keywords: 'home GP Dubai, family doctor home visit Dubai, general practitioner Dubai, doctor at home Dubai, home consultation Dubai',
  openGraph: {
    title: 'Home GP Consultation Dubai | Doctor at Home | Family Medicine',
    description: 'Professional GP consultations at home across Dubai. Same-day doctor visits for family medicine and health checkups.',
    url: 'https://zaincura.com/home-gp-consultation-dubai',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
}

const services = [
  {
    icon: Stethoscope,
    title: "General Health Consultations",
    description: "Comprehensive medical consultations for common health concerns and routine checkups",
    features: ["Full health assessment", "Symptom evaluation", "Health monitoring", "Medical advice"]
  },
  {
    icon: FileText,
    title: "Prescription Services",
    description: "Prescription renewals, medication reviews, and new prescriptions as needed",
    features: ["Prescription renewals", "Medication review", "New prescriptions", "Drug interactions"]
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    description: "Ongoing care for chronic conditions requiring regular monitoring and adjustment",
    features: ["Diabetes management", "Hypertension care", "Regular monitoring", "Lifestyle advice"]
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description: "Health screening, vaccinations, and preventive measures for optimal wellness",
    features: ["Health screening", "Vaccination updates", "Health education", "Risk assessment"]
  }
]

const whyChooseUs = [
  {
    icon: Home,
    title: "Comfort of Home",
    description: "Receive quality medical care in the familiar environment of your own home"
  },
  {
    icon: Clock,
    title: "Same-Day Availability",
    description: "Quick response times with same-day appointments available across Dubai"
  },
  {
    icon: Award,
    title: "DHA Licensed Doctors",
    description: "Qualified general practitioners licensed by Dubai Health Authority"
  },
  {
    icon: Shield,
    title: "Comprehensive Care",
    description: "Complete family medicine services for all ages and health concerns"
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does a home GP provide in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our home GP services include general health consultations, prescription services, chronic disease management, preventive care, health screenings, and medical advice for common conditions."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can a GP visit my home in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day home GP visits across Dubai. Emergency consultations can often be arranged within 2-4 hours, while routine visits are typically available within 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What areas in Dubai do you provide home GP services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide home GP consultations across all areas of Dubai including Downtown, Marina, JBR, Jumeirah, Deira, Bur Dubai, and surrounding emirates upon request."
      }
    },
    {
      "@type": "Question",
      "name": "Can the home GP prescribe medications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our licensed GPs can prescribe medications, renew existing prescriptions, and provide medication reviews. All prescriptions are issued according to UAE medical regulations."
      }
    },
    {
      "@type": "Question",
      "name": "What should I prepare for a home GP visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prepare your medical history, current medications list, Emirates ID, and any relevant medical documents. Ensure a clean, private space for the consultation."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a home GP consultation cost in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home GP consultation fees are transparent with no hidden costs. Contact us for current pricing, which includes the consultation, basic examination, and travel costs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide follow-up care after home GP visits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive follow-up care including phone consultations, prescription adjustments, and scheduled return visits as medically necessary."
      }
    },
    {
      "@type": "Question",
      "name": "Are home GP services covered by insurance in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many insurance plans cover home GP services. We provide detailed invoices for insurance reimbursement. Contact your insurance provider to confirm coverage."
      }
    }
  ]
}

const faqs = [
  {
    question: "What services does a home GP provide in Dubai?",
    answer: "Our home GP services include general health consultations, prescription services, chronic disease management, preventive care, health screenings, and medical advice for common conditions."
  },
  {
    question: "How quickly can a GP visit my home in Dubai?",
    answer: "We offer same-day home GP visits across Dubai. Emergency consultations can often be arranged within 2-4 hours, while routine visits are typically available within 24 hours."
  },
  {
    question: "What areas in Dubai do you provide home GP services?",
    answer: "We provide home GP consultations across all areas of Dubai including Downtown, Marina, JBR, Jumeirah, Deira, Bur Dubai, and surrounding emirates upon request."
  },
  {
    question: "Can the home GP prescribe medications?",
    answer: "Yes, our licensed GPs can prescribe medications, renew existing prescriptions, and provide medication reviews. All prescriptions are issued according to UAE medical regulations."
  },
  {
    question: "What should I prepare for a home GP visit?",
    answer: "Prepare your medical history, current medications list, Emirates ID, and any relevant medical documents. Ensure a clean, private space for the consultation."
  },
  {
    question: "How much does a home GP consultation cost in Dubai?",
    answer: "Home GP consultation fees are transparent with no hidden costs. Contact us for current pricing, which includes the consultation, basic examination, and travel costs."
  },
  {
    question: "Do you provide follow-up care after home GP visits?",
    answer: "Yes, we provide comprehensive follow-up care including phone consultations, prescription adjustments, and scheduled return visits as medically necessary."
  },
  {
    question: "Are home GP services covered by insurance in Dubai?",
    answer: "Many insurance plans cover home GP services. We provide detailed invoices for insurance reimbursement. Contact your insurance provider to confirm coverage."
  },
  {
    question: "What conditions can a home GP treat?",
    answer: "Home GPs can treat common conditions like respiratory infections, digestive issues, skin problems, minor injuries, chronic disease management, and provide preventive care."
  },
  {
    question: "How long does a typical home GP consultation last?",
    answer: "A standard home GP consultation typically lasts 30-45 minutes, allowing sufficient time for thorough examination, discussion, and treatment planning."
  },
  {
    question: "Can children receive home GP consultations?",
    answer: "Yes, our GPs provide family medicine services for patients of all ages, including children, adults, and elderly patients with appropriate care for each age group."
  },
  {
    question: "What equipment does the home GP bring?",
    answer: "Our GPs carry essential medical equipment including stethoscope, blood pressure monitor, thermometer, otoscope, and basic diagnostic tools for comprehensive examination."
  }
]

export default function HomeGPConsultationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="medical-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                Same-Day Available
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Home GP Consultation Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Professional GP consultations in the comfort of your home. Same-day family
                doctor visits, health checkups, and prescriptions across Dubai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C] font-semibold w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Home Visit
                  </Button>
                </Link>
                <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20a%20home%20GP%20consultation%20in%20Dubai.%20Please%20share%20available%20time%20slots%20for%20a%20doctor%20home%20visit." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C] w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp GP
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Same-day visits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>All Dubai areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>DHA licensed</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="clinical-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Home className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Family Medicine at Home
                    </h3>
                    <p className="text-gray-600">
                      Professional GP care delivered to your home with convenience and comfort
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home GP Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive family medicine services delivered to your home by qualified general practitioners.
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
              Why Choose Our Home GP Service?
            </h2>
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

      {/* Enhanced FAQ Section with Schema */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about home GP consultations and family medicine services in Dubai.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a GP Consultation at Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your home GP visit today. Professional family medicine delivered to your door
            across Dubai with same-day availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C] font-semibold w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" />
                Book Home GP Visit
              </Button>
            </Link>
            <a href="tel:+97145703423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C] w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call for GP
              </Button>
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">Response Time</p>
              <p className="text-white/80">2-4 hours emergency</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">Coverage Area</p>
              <p className="text-white/80">All Dubai areas</p>
            </div>
            <div>
              <Award className="w-6 h-6 mx-auto mb-2" />
              <p className="font-semibold">Qualification</p>
              <p className="text-white/80">DHA licensed GPs</p>
            </div>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
