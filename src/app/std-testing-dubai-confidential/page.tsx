import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Calendar,
  MessageCircle,
  Phone,
  Shield,
  Lock,
  CheckCircle,
  Clock,
  Award,
  MapPin,
  Users,
  ArrowRight,
  Eye,
  Heart,
  FileText,
  AlertCircle,
  FileCheck
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'STD Testing Dubai | Confidential | Private Sexual Health Screening',
  description: 'STD testing Dubai confidential. Private sexual health screening, HIV tests, STI panel. Same-day results at Al Ghurair Centre, Deira.',
  keywords: 'STD testing Dubai, sexual health Dubai, HIV test Dubai, STI screening Dubai, confidential testing Dubai, private clinic Dubai',
  openGraph: {
    title: 'STD Testing Dubai | Confidential Sexual Health Screening',
    description: 'Private STD testing in Dubai with complete confidentiality. Same-day results, comprehensive STI panels.',
    url: 'https://zaincura.com/std-testing-dubai-confidential',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
}

const testingOptions = [
  {
    icon: Shield,
    title: "Complete STI Panel",
    description: "Comprehensive screening for all common sexually transmitted infections",
    features: ["HIV 1&2", "Syphilis", "Hepatitis B & C", "Chlamydia", "Gonorrhea", "Herpes HSV 1&2"]
  },
  {
    icon: Eye,
    title: "Individual Tests",
    description: "Specific testing for particular concerns or follow-up testing",
    features: ["HIV testing", "Chlamydia PCR", "Gonorrhea PCR", "Syphilis screening", "Hepatitis panel"]
  },
  {
    icon: Clock,
    title: "Rapid Testing",
    description: "Quick results for urgent testing needs with same-day availability",
    features: ["HIV rapid test", "Same-day results", "Emergency screening", "Pre-travel testing"]
  },
  {
    icon: Users,
    title: "Couple Testing",
    description: "Confidential testing packages designed for couples",
    features: ["Partner screening", "Synchronized results", "Counseling included", "Privacy assured"]
  }
]

const whyChooseUs = [
  {
    icon: Lock,
    title: "100% Confidential",
    description: "Complete privacy with secure handling of all results and personal information"
  },
  {
    icon: Award,
    title: "DHA Licensed Lab",
    description: "Certified laboratory with international quality standards"
  },
  {
    icon: Clock,
    title: "Same-Day Results",
    description: "Fast turnaround times for most tests with digital delivery"
  },
  {
    icon: Shield,
    title: "Private Environment",
    description: "Discreet consultations in a comfortable, judgment-free setting"
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How confidential is STD testing at your clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We maintain complete confidentiality. All test results are delivered securely via encrypted channels, and your personal information is never shared. Our clinic provides a private, judgment-free environment."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I get STD test results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most STD test results are available within 24-48 hours. Rapid HIV tests can provide results in 15-20 minutes. We deliver results securely via WhatsApp, email, or in-person consultation."
      }
    },
    {
      "@type": "Question",
      "name": "What STDs do you test for in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive STI panels including HIV 1&2, Syphilis, Hepatitis B & C, Chlamydia, Gonorrhea, Herpes HSV 1&2, and other common sexually transmitted infections."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an appointment for STD testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While walk-ins are welcome, we recommend booking an appointment for faster service and guaranteed privacy. Same-day appointments are usually available."
      }
    },
    {
      "@type": "Question",
      "name": "Is STD testing painful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most STD tests involve simple blood draws or urine samples, which are minimally uncomfortable. Our experienced staff ensures the process is as comfortable as possible."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if my STD test is positive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our doctors provide immediate consultation, treatment options, and partner notification guidance. We offer ongoing support and follow-up care as needed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get STD testing without insurance in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer transparent cash pricing for all STD tests. No insurance is required, and we provide detailed invoices for potential reimbursement."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer home STD testing in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide confidential home collection services for STD testing across Dubai. Our trained nurses ensure complete privacy and proper sample collection."
      }
    }
  ]
}

const faqs = [
  {
    question: "How confidential is STD testing at your clinic?",
    answer: "We maintain complete confidentiality. All test results are delivered securely via encrypted channels, and your personal information is never shared. Our clinic provides a private, judgment-free environment."
  },
  {
    question: "How quickly can I get STD test results?",
    answer: "Most STD test results are available within 24-48 hours. Rapid HIV tests can provide results in 15-20 minutes. We deliver results securely via WhatsApp, email, or in-person consultation."
  },
  {
    question: "What STDs do you test for in Dubai?",
    answer: "We offer comprehensive STI panels including HIV 1&2, Syphilis, Hepatitis B & C, Chlamydia, Gonorrhea, Herpes HSV 1&2, and other common sexually transmitted infections."
  },
  {
    question: "Do I need an appointment for STD testing?",
    answer: "While walk-ins are welcome, we recommend booking an appointment for faster service and guaranteed privacy. Same-day appointments are usually available."
  },
  {
    question: "Is STD testing painful?",
    answer: "Most STD tests involve simple blood draws or urine samples, which are minimally uncomfortable. Our experienced staff ensures the process is as comfortable as possible."
  },
  {
    question: "What should I do if my STD test is positive?",
    answer: "Our doctors provide immediate consultation, treatment options, and partner notification guidance. We offer ongoing support and follow-up care as needed."
  },
  {
    question: "Can I get STD testing without insurance in Dubai?",
    answer: "Yes, we offer transparent cash pricing for all STD tests. No insurance is required, and we provide detailed invoices for potential reimbursement."
  },
  {
    question: "Do you offer home STD testing in Dubai?",
    answer: "Yes, we provide confidential home collection services for STD testing across Dubai. Our trained nurses ensure complete privacy and proper sample collection."
  },
  {
    question: "How accurate are your STD tests?",
    answer: "Our DHA-licensed laboratory uses internationally certified testing methods with over 99% accuracy. We use the latest PCR and ELISA technologies for precise results."
  },
  {
    question: "Can I bring my partner for testing?",
    answer: "Yes, we offer couple testing packages with synchronized appointments and coordinated results delivery. This ensures both partners receive comprehensive care."
  },
  {
    question: "What happens during an STD test consultation?",
    answer: "Our doctor will discuss your health history, explain testing options, and recommend appropriate tests. The consultation is completely confidential and judgment-free."
  },
  {
    question: "Do you provide treatment if tests are positive?",
    answer: "Yes, our experienced doctors provide immediate treatment for treatable STIs and ongoing management for chronic conditions like HIV and herpes."
  },
  {
    question: "How do you ensure privacy during STD testing?",
    answer: "We use private entrances, individual consultation rooms, and secure result delivery. Our staff is trained in confidentiality protocols to protect your privacy."
  },
  {
    question: "What age do you need to be for STD testing?",
    answer: "We provide STD testing for adults 18+. For minors, parental consent may be required depending on the specific circumstances and local regulations."
  },
  {
    question: "How often should I get tested for STDs?",
    answer: "Testing frequency depends on your risk factors and sexual activity. Generally, sexually active individuals should be tested annually, or more frequently if at higher risk."
  }
]

export default function STDTestingPage() {
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
                100% Confidential
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                STD Testing Dubai - Private & Confidential
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Complete sexual health screening with absolute privacy. Same-day results,
                comprehensive STI panels, and expert care at Al Ghurair Centre, Deira.
              </p>

              {/* HIPAA Compliance Badge */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">HIPAA Compliant • Protected Health Information</span>
                </div>
                <p className="text-blue-800 text-sm text-center">
                  Your privacy is protected by federal law. <Link href="/privacy" className="underline">Read our Privacy Policy</Link> • <Link href="/hipaa-notice" className="underline">HIPAA Notice</Link>
                </p>
              </div>

              {/* Enhanced Privacy Messaging */}
              <div className="bg-green-50/20 border border-green-200/50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Lock className="w-4 h-4 text-green-200" />
                    <span className="text-sm font-medium text-green-100">HIPAA Protected</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="w-4 h-4 text-green-200" />
                    <span className="text-sm font-medium text-green-100">Encrypted Data</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <FileCheck className="w-4 h-4 text-green-200" />
                    <span className="text-sm font-medium text-green-100">Secure Results</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C] font-semibold w-full sm:w-auto transition-all">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Confidential Test
                  </Button>
                </Link>
                <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20confidential%20STD%20testing%20in%20Dubai.%20Please%20share%20details%20about%20your%20private%20sexual%20health%20screening%20services." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C] w-full sm:w-auto transition-all">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Privately
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>100% confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Same-day results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>DHA licensed lab</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="clinical-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Private Health Screening
                    </h3>
                    <p className="text-gray-600">
                      Complete confidentiality with professional care in a judgment-free environment
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer Section */}
      <section className="py-8 bg-yellow-50 border-t border-b border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-semibold text-yellow-900 mb-2">Important Medical Information</h3>
          <p className="text-yellow-800 text-sm">
            This website provides general information only. Always consult with healthcare professionals for medical advice.
            Testing services are provided by DHA-licensed medical professionals.
            <Link href="/medical-disclaimer" className="underline ml-1">Full Medical Disclaimer</Link>
          </p>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-6">Licensed & Certified Healthcare</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium">DHA Licensed</p>
              <p className="text-sm text-gray-600">Dubai Health Authority</p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium">ISO Certified Lab</p>
              <p className="text-sm text-gray-600">International Standards</p>
            </div>
            <div>
              <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium">HIPAA Compliant</p>
              <p className="text-sm text-gray-600">Privacy Protected</p>
            </div>
            <div>
              <FileCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium">Accredited Tests</p>
              <p className="text-sm text-gray-600">Quality Assured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              STD Testing Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive sexual health screening with complete confidentiality and rapid results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingOptions.map((option, index) => (
              <Card key={index} className="clinical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {option.description}
                      </p>
                      <ul className="space-y-2">
                        {option.features.map((feature, idx) => (
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
              Why Choose Our STD Testing?
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
              Common questions about STD testing, privacy, and procedures in Dubai.
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
            Need Confidential STD Testing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your private STD test today. Complete confidentiality guaranteed with rapid,
            accurate results at Al Ghurair Centre, Deira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C] font-semibold w-full sm:w-auto transition-all">
                <Calendar className="w-5 h-5 mr-2" />
                Book Private Test
              </Button>
            </Link>
            <a href="tel:+971523011150">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C] w-full sm:w-auto transition-all">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
