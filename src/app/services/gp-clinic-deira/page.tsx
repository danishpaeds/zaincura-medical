import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Stethoscope,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
  Users,
  Shield,
  Heart,
  FileText,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb, BreadcrumbConfigs } from '@/components/Breadcrumb'

const howItWorks = [
  {
    step: 1,
    title: "Book Your Visit",
    description: "Schedule online, via WhatsApp, or walk-in. Same-day appointments available."
  },
  {
    step: 2,
    title: "Consultation",
    description: "Meet with our experienced GP for comprehensive health assessment and diagnosis."
  },
  {
    step: 3,
    title: "Treatment Plan",
    description: "Receive personalized treatment recommendations, prescriptions, and follow-up care."
  }
]

const whatToBring = [
  "Emirates ID or valid identification",
  "Previous medical reports (if any)",
  "Current medications list",
  "Insurance card (if applicable)"
]

const faqItems = [
  {
    question: "Do I need an appointment or can I walk in?",
    answer: "Both options are available. While we encourage booking appointments for guaranteed time slots, we welcome walk-in patients. Same-day appointments are usually available, especially during weekday mornings."
  },
  {
    question: "What conditions do your GPs treat?",
    answer: "Our GPs handle a wide range of conditions including common illnesses, chronic disease management, preventive care, health certificates, vaccinations, minor injuries, and routine health checkups. For specialized conditions, we can provide referrals."
  },
  {
    question: "Do you accept insurance or is it cash only?",
    answer: "We are primarily a cash-friendly clinic with transparent pricing. While we don't directly bill insurance companies, we can provide detailed invoices for potential reimbursement. Contact us to discuss your specific insurance coverage."
  },
  {
    question: "Can I get medical certificates and reports?",
    answer: "Yes, we provide various medical certificates including fitness certificates, sick leave certificates, and employment medical reports. Bring your requirements and valid ID for processing."
  },
  {
    question: "What languages do your doctors speak?",
    answer: "Our doctors are fluent in English and Arabic. We also have staff members who speak Hindi, Urdu, and other languages to ensure clear communication with all patients."
  },
  {
    question: "How long does a typical consultation last?",
    answer: "Standard consultations typically last 15-30 minutes, depending on the complexity of your condition. We ensure adequate time for thorough examination and discussion of your health concerns."
  }
]

export default function GPClinicPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Most Popular Service</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              GP / Family Medicine Clinic in Deira (Al Ghurair Centre)
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive primary healthcare with experienced doctors. Same-day consultations
              available for patients of all ages in the heart of Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book GP Consultation
                </Button>
              </Link>
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20GP%20services%20at%20your%20Deira%20clinic.%20Can%20you%20share%20available%20appointment%20slots%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+971-45703423">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={BreadcrumbConfigs.services.gp} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple, straightforward process to get the medical care you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
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

      {/* Turnaround Times & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="clinical-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Appointment Times</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Same-day booking</span>
                    <span className="font-semibold text-primary">Usually available</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Walk-in availability</span>
                    <span className="font-semibold text-primary">30-60 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Consultation duration</span>
                    <span className="font-semibold text-primary">15-30 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Clinic hours</span>
                    <span className="font-semibold text-primary">09:00 - 21:00 Daily</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Stethoscope className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Pricing (Cash-Friendly)</h2>
                </div>
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-primary">From AED 150</p>
                    <p className="text-gray-600">Standard GP Consultation</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">Comprehensive examination</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">Diagnosis and treatment plan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">Prescription (if needed)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">Follow-up advice</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Bring
            </h2>
            <p className="text-lg text-gray-600">
              Please bring the following items for your consultation to ensure efficient service.
            </p>
          </div>

          <Card className="clinical-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whatToBring.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">DHA Licensed</h3>
              <p className="text-sm text-gray-600">Certified doctors and clinic</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">All Ages Welcome</h3>
              <p className="text-sm text-gray-600">Family medicine specialists</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compassionate Care</h3>
              <p className="text-sm text-gray-600">Patient-focused approach</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Central Location</h3>
              <p className="text-sm text-gray-600">Easy metro and car access</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our GP services and clinic procedures.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 px-6 py-4"
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
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your GP Consultation Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Same-day appointments available. Experienced doctors, transparent pricing, convenient location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C]">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Button>
            </Link>
            <a href="tel:+971-45703423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C]">
                <Phone className="w-5 h-5 mr-2" />
                Call Direct
              </Button>
            </a>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <p>Located at Al Ghurair Centre, Deira • Open 09:00 - 21:00 Daily</p>
          </div>
        </div>
      </section>

      {/* Mobile CTA Bar */}
      <MobileCTABar />
    </div>
  )
}
