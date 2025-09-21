import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Lock,
  Eye,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Clock,
  Home,
  FileText,
  Heart,
  UserCheck
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

const howItWorks = [
  {
    step: 1,
    title: "Private Consultation",
    description: "Discreet booking via phone, WhatsApp, or secure online form. No personal details required initially."
  },
  {
    step: 2,
    title: "Confidential Testing",
    description: "Private sample collection in clinic or at your home/hotel with complete discretion."
  },
  {
    step: 3,
    title: "Secure Results",
    description: "Results delivered directly to you via encrypted channels. No third-party access."
  }
]

const testingOptions = [
  {
    title: "Clinic Testing",
    description: "Private consultation room with separate entrance for complete discretion",
    features: ["Immediate testing", "Private waiting area", "Same-day results", "Discreet location"],
    icon: Shield
  },
  {
    title: "Home Collection",
    description: "Professional nurse visits your home or hotel for convenient, private testing",
    features: ["Complete privacy", "Flexible timing", "Professional service", "Hotel visits available"],
    icon: Home
  }
]

const testPanels = [
  {
    name: "STD Basic Panel",
    price: "From AED 299",
    tests: ["HIV", "Syphilis", "Hepatitis B", "Hepatitis C"],
    turnaround: "24-48 hours"
  },
  {
    name: "STD Comprehensive Panel",
    price: "From AED 499",
    tests: ["HIV", "Syphilis", "Gonorrhea", "Chlamydia", "Hepatitis B", "Hepatitis C", "Herpes"],
    turnaround: "24-48 hours"
  },
  {
    name: "Individual Tests",
    price: "From AED 99",
    tests: ["Single STD test of your choice"],
    turnaround: "24-48 hours"
  }
]

const privacyFeatures = [
  "Anonymous testing options available",
  "Encrypted result delivery",
  "No insurance billing (maintains privacy)",
  "Confidential medical records",
  "Discreet appointment scheduling",
  "Professional counseling available"
]

const faqItems = [
  {
    question: "Is STD testing completely confidential?",
    answer: "Absolutely. We maintain complete confidentiality with encrypted result delivery, anonymous testing options, and no third-party sharing. Your privacy is our top priority and we follow strict medical confidentiality protocols."
  },
  {
    question: "Can I get tested anonymously?",
    answer: "Yes, we offer anonymous testing options where you can use a reference number instead of personal details. Results are delivered securely using your chosen method of communication."
  },
  {
    question: "How accurate are your STD tests?",
    answer: "Our laboratory uses internationally certified testing methods with over 99% accuracy. All tests are performed by DHA-licensed technicians using advanced diagnostic equipment that meets international standards."
  },
  {
    question: "What happens if my test is positive?",
    answer: "If results are positive, we provide immediate professional counseling and treatment guidance. Our doctors can prescribe treatment or refer you to specialists while maintaining complete confidentiality throughout the process."
  },
  {
    question: "Do you offer home collection for STD testing?",
    answer: "Yes, our DHA-licensed nurses provide discreet home and hotel collection services across Deira, Al Rigga, and surrounding areas. All equipment is medical-grade and collection is completely professional."
  },
  {
    question: "How quickly can I get my results?",
    answer: "Most STD test results are available within 24-48 hours. We notify you immediately when results are ready via your preferred secure communication method (encrypted email, secure SMS, or phone call)."
  }
]

export default function STDTestingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-600 text-white">100% Confidential</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Confidential STD Testing in Dubai (Deira, Al Rigga)
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Private, professional STD testing with complete discretion. Clinic or home collection
              available. Fast, accurate results with encrypted delivery and anonymous options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Private Test
                </Button>
              </Link>
              <a href="https://wa.me/+971-5X-XXXXXXX" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp (Discreet)
                </Button>
              </a>
              <a href="tel:+971-4-XXXXXXX">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Confidentially
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Guarantee */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Privacy is Guaranteed
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the sensitive nature of STD testing and maintain the highest
              standards of confidentiality and discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Confidential Testing Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple, private process designed to protect your privacy at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Testing Option
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the option that provides you with the most comfort and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testingOptions.map((option, index) => (
              <Card key={index} className="clinical-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{option.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  <div className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Panels & Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              STD Testing Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing options with transparent pricing and fast results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testPanels.map((panel, index) => (
              <Card key={index} className="clinical-card">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {panel.name}
                    </h3>
                    <p className="text-3xl font-bold text-primary mb-2">{panel.price}</p>
                    <p className="text-sm text-gray-600">Results: {panel.turnaround}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                    {panel.tests.map((test, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{test}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/book">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Book This Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Note */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-blue-200 bg-blue-100">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Complete Confidentiality Guaranteed
                  </h3>
                  <p className="text-blue-800 leading-relaxed mb-4">
                    All STD testing and consultations are kept strictly confidential. We use secure,
                    encrypted systems for all communications and follow international privacy standards.
                    Your test results are only accessible to you and our medical team.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-800">Anonymous testing available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-800">Encrypted result delivery</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-800">No insurance required</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <UserCheck className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-800">Professional counseling</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              STD Testing FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about confidential STD testing and our privacy procedures.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-left font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Confidential STD Testing?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Private, professional testing with complete discretion. Your health and privacy matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Private Test
              </Button>
            </Link>
            <a href="https://wa.me/+971-5X-XXXXXXX" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Discreetly
              </Button>
            </a>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <p>Available: Clinic 08:00 - 22:00 Daily • Home Collection: 24/7</p>
          </div>
        </div>
      </section>

      {/* Mobile CTA Bar */}
      <MobileCTABar />
    </div>
  )
}
