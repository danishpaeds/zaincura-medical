"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Calendar,
  Search,
  Clock,
  MapPin,
  CreditCard,
  Shield,
  Users,
  Stethoscope,
  TestTube,
  Home,
  Heart
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb } from '@/components/Breadcrumb'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqCategories = [
  { id: 'general', label: 'General Information', icon: Users },
  { id: 'appointments', label: 'Appointments & Booking', icon: Calendar },
  { id: 'services', label: 'Medical Services', icon: Stethoscope },
  { id: 'lab', label: 'Laboratory & Tests', icon: TestTube },
  { id: 'homecare', label: 'Home Care', icon: Home },
  { id: 'payment', label: 'Payment & Insurance', icon: CreditCard },
  { id: 'location', label: 'Location & Access', icon: MapPin }
]

const faqData: FAQItem[] = [
  // General Information
  {
    category: 'general',
    question: 'What services does Zain Cura Medical Center offer?',
    answer: 'We provide comprehensive healthcare services including GP consultations, wellness health checks with smart reports, laboratory tests, STD testing, gynecology services, IV drip therapy, and 24/7 home care services. All our services are available with same-day appointments and transparent pricing.'
  },
  {
    category: 'general',
    question: 'Are your doctors licensed and qualified?',
    answer: 'Yes, all our doctors and medical staff are DHA (Dubai Health Authority) licensed and certified. Our team consists of experienced professionals with international qualifications and expertise in their respective fields.'
  },
  {
    category: 'general',
    question: 'What languages do your staff speak?',
    answer: 'Our medical team is fluent in English and Arabic. We also have staff members who speak Hindi, Urdu, Filipino, and other languages to ensure clear communication with our diverse patient community.'
  },
  {
    category: 'general',
    question: 'Do you maintain patient confidentiality?',
    answer: 'Absolutely. We maintain strict patient confidentiality in accordance with international medical ethics and UAE healthcare regulations. All consultations, test results, and medical records are kept completely confidential.'
  },

  // Appointments & Booking
  {
    category: 'appointments',
    question: 'How can I book an appointment?',
    answer: 'You can book appointments through multiple channels: online via our website, WhatsApp (+971-523011150), phone call (+971-45703423), or as a walk-in patient. Same-day appointments are usually available.'
  },
  {
    category: 'appointments',
    question: 'Do you accept walk-in patients?',
    answer: 'Yes, we welcome walk-in patients. While we encourage booking appointments for guaranteed time slots, our clinic accommodates walk-ins throughout our operating hours (09:00 - 21:00 daily).'
  },
  {
    category: 'appointments',
    question: 'What are your operating hours?',
    answer: 'Our clinic is open from 09:00 AM to 09:00 PM daily (9 AM to 9 PM). Home care services are available 24/7. We operate throughout the week including weekends and most public holidays.'
  },
  {
    category: 'appointments',
    question: 'How long does a typical consultation take?',
    answer: 'Standard GP consultations typically last 15-30 minutes, depending on the complexity of your condition. Specialized consultations may take longer. We ensure adequate time for thorough examination and discussion.'
  },
  {
    category: 'appointments',
    question: 'Can I cancel or reschedule my appointment?',
    answer: 'Yes, you can cancel or reschedule appointments by calling us or sending a WhatsApp message. We appreciate at least 2 hours notice for cancellations to accommodate other patients.'
  },

  // Medical Services
  {
    category: 'services',
    question: 'What conditions do your GPs treat?',
    answer: 'Our GPs handle a wide range of conditions including common illnesses (cold, flu, infections), chronic disease management (diabetes, hypertension), preventive care, health certificates, vaccinations, minor injuries, skin conditions, and routine health checkups.'
  },
  {
    category: 'services',
    question: 'Do you provide emergency medical services?',
    answer: 'While we are not an emergency room, we handle urgent medical situations during our operating hours. For life-threatening emergencies, please call 999. For urgent but non-emergency care, contact us immediately.'
  },
  {
    category: 'services',
    question: 'What is included in your wellness health checks?',
    answer: 'Our wellness packages include comprehensive blood tests, vital signs assessment, GP consultation, and our signature Smart Reports with AI-powered insights. Packages vary by age group and health goals, starting from AED 49.'
  },
  {
    category: 'services',
    question: 'Do you provide medical certificates?',
    answer: 'Yes, we provide various medical certificates including fitness certificates for employment, sick leave certificates, travel medical certificates, and specialized medical reports. Valid ID is required for all certificate services.'
  },
  {
    category: 'services',
    question: 'What gynecology services do you offer?',
    answer: 'Our female gynecologist provides routine checkups, prenatal care, contraceptive counseling, women\'s health screenings, hormonal consultations, and treatment for common gynecological conditions in a comfortable, private environment.'
  },

  // Laboratory & Tests
  {
    category: 'lab',
    question: 'How quickly do I get my lab results?',
    answer: 'Most routine blood tests have same-day results (within 6-8 hours). Complex tests may take 24-48 hours. We provide digital reports via WhatsApp or email for your convenience.'
  },
  {
    category: 'lab',
    question: 'Do I need to fast before blood tests?',
    answer: 'This depends on the specific tests ordered. Common tests requiring fasting include glucose, lipid profile, and some metabolic panels (8-12 hours fasting). We will inform you of any preparation requirements when booking.'
  },
  {
    category: 'lab',
    question: 'Is STD testing completely confidential?',
    answer: 'Yes, we guarantee 100% confidentiality for all STD testing. Results are shared only with you through secure channels. We maintain the highest privacy standards and never share results with third parties without your consent.'
  },
  {
    category: 'lab',
    question: 'What Smart Reports features do you offer?',
    answer: 'Our Smart Reports use AI to provide easy-to-understand health dashboards, trend analysis over time, personalized health recommendations, and mobile-friendly access. All reports include GP interpretation and follow-up advice.'
  },

  // Home Care
  {
    category: 'homecare',
    question: 'Which areas do you cover for home visits?',
    answer: 'We provide home care services across Dubai including Deira, Al Rigga, Downtown, Business Bay, Dubai Marina, JLT, Jumeirah, and surrounding areas. Contact us to confirm availability in your specific location.'
  },
  {
    category: 'homecare',
    question: 'Do you visit hotels?',
    answer: 'Yes, we provide discreet medical services at hotels throughout Dubai. Our doctors and nurses are experienced in providing professional care in hotel environments while maintaining complete privacy.'
  },
  {
    category: 'homecare',
    question: 'What home care services do you provide?',
    answer: 'We offer doctor visits, nursing care, IV drip therapy, blood sample collection, medication administration, wound care, health monitoring, and various medical procedures that can be safely performed at home.'
  },
  {
    category: 'homecare',
    question: 'How quickly can you arrange a home visit?',
    answer: 'Emergency home visits can usually be arranged within 1-2 hours. Routine visits can be scheduled same-day or for convenient future appointments. Our 24/7 availability ensures care when you need it most.'
  },

  // Payment & Insurance
  {
    category: 'payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit cards (Visa, Mastercard), debit cards, and digital payments. All payments are processed securely, and we provide detailed receipts for all services.'
  },
  {
    category: 'payment',
    question: 'Do you accept insurance?',
    answer: 'We are primarily a cash-friendly clinic with transparent pricing. While we don\'t directly bill insurance companies, we provide detailed invoices that you can submit to your insurance provider for potential reimbursement.'
  },
  {
    category: 'payment',
    question: 'Are your prices transparent?',
    answer: 'Yes, we believe in complete pricing transparency. All our service costs are clearly displayed, and we discuss fees before providing any treatment. No hidden charges or surprise bills.'
  },
  {
    category: 'payment',
    question: 'Do you offer payment plans?',
    answer: 'For comprehensive treatments or multiple services, we can discuss flexible payment arrangements. Contact us to discuss your specific situation and available options.'
  },

  // Location & Access
  {
    category: 'location',
    question: 'Where is your clinic located?',
    answer: 'We are located at Al Ghurair Centre in Deira, Dubai. Take Entrance 3 of Al Ghurair Centre, then use the office building lift to reach the 6th floor. The location is easily accessible by metro, car, and taxi.'
  },
  {
    category: 'location',
    question: 'Is parking available?',
    answer: 'Yes, Al Ghurair Centre has ample parking facilities. Paid parking is available throughout the complex. Metro users can access us via Union or Al Rigga stations, both within walking distance.'
  },
  {
    category: 'location',
    question: 'How do I get to your clinic by public transport?',
    answer: 'The nearest metro stations are Union and Al Rigga (both on Red and Green lines). The clinic is a 5-10 minute walk from either station. Buses and taxis also provide convenient access to Al Ghurair Centre.'
  },
  {
    category: 'location',
    question: 'Is your clinic wheelchair accessible?',
    answer: 'Yes, our clinic is fully wheelchair accessible. Al Ghurair Centre provides elevators and wheelchair-friendly access throughout the building. Please inform us in advance if you need any special assistance.'
  }
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  // Add FAQ Page Schema.org structured data
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.zaincura.com/faq#faqpage",
      mainEntity: faqData.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      })),
      about: {
        "@id": "https://www.zaincura.com/#organization"
      },
      publisher: {
        "@id": "https://www.zaincura.com/#organization"
      },
      url: "https://www.zaincura.com/faq"
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(faqSchema)
    script.id = 'faq-schema'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('faq-schema')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = searchTerm === '' ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Frequently Asked Questions</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about our medical services, appointments,
              pricing, and clinic information. Can't find what you're looking for? Contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask on WhatsApp
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="text-sm"
            >
              All Questions
            </Button>
            {faqCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No FAQs found matching your search.</p>
              <p className="text-gray-500 mt-2">Try different keywords or contact us directly.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => {
                const isExpanded = expandedItems.includes(index)
                return (
                  <Card key={index} className="clinical-card">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-primary" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact Form for Unanswered Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Can't Find Your Answer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Submit your question below and our medical team will get back to you within 24 hours.
              For urgent medical matters, please call us directly.
            </p>
          </div>

          <Card className="clinical-card">
            <CardContent className="p-8">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+971-XX-XXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Question Category
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select category...</option>
                      <option value="general">General Information</option>
                      <option value="appointments">Appointments & Booking</option>
                      <option value="services">Medical Services</option>
                      <option value="lab">Laboratory & Tests</option>
                      <option value="homecare">Home Care Services</option>
                      <option value="payment">Payment & Insurance</option>
                      <option value="location">Location & Access</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Question */}
                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Question *
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Please describe your question in detail. The more information you provide, the better we can assist you."
                  />
                </div>

                {/* Preferred Response Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Response Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="responseMethod"
                        value="email"
                        defaultChecked
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-2 text-sm text-gray-700">Email Response</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="responseMethod"
                        value="whatsapp"
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-2 text-sm text-gray-700">WhatsApp Message</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="responseMethod"
                        value="phone"
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-2 text-sm text-gray-700">Phone Call</span>
                    </label>
                  </div>
                </div>

                {/* Urgency Level */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <label className="block text-sm font-medium text-blue-900 mb-3">
                    Urgency Level
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value="routine"
                        defaultChecked
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-600"
                      />
                      <span className="ml-2 text-sm text-blue-800">
                        <span className="font-medium">Routine</span> - Response within 24-48 hours
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value="urgent"
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-600"
                      />
                      <span className="ml-2 text-sm text-blue-800">
                        <span className="font-medium">Urgent</span> - Response within 4-6 hours
                      </span>
                    </label>
                  </div>
                  <p className="text-xs text-blue-700 mt-3">
                    <strong>For medical emergencies:</strong> Please call +971-45703423 immediately or visit our clinic.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Submit Question
                  </Button>
                  <div className="flex gap-2">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                    </a>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy. We will only use your information to respond to your question and will not share it with third parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ready to Get Started CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your appointment today or contact us for immediate medical assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp for Urgent Care
              </Button>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Same-day appointments</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Walk-ins welcome</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Home className="w-4 h-4" />
              <span>24/7 home care</span>
            </div>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
