import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Baby, Heart, Stethoscope, CheckCircle, Calendar, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

const howItWorks = [
  { step: 1, title: 'Book Your Visit', description: 'Schedule online, via WhatsApp, or walk-in appointment.' },
  { step: 2, title: 'Consultation', description: 'Comprehensive gynecology consultation with a female specialist.' },
  { step: 3, title: 'Care Plan', description: 'Personalized care plan, tests if needed, and follow-up guidance.' }
]

const servicesList = [
  'Routine gynecology checkups',
  'Pap smear & cervical screening',
  'Prenatal & antenatal care',
  'Hormonal evaluation & menstrual issues',
  'Fertility counseling',
  'Infections & STD screening (confidential)',
  'Breast exam & referral imaging',
]

const faqItems = [
  { question: 'Is the gynecologist female?', answer: 'Yes, consultations are with an experienced, DHA-licensed female gynecologist.' },
  { question: 'Do I need to fast before a Pap smear?', answer: 'No fasting required. We recommend scheduling the test when you are not on your period.' },
  { question: 'Can I get pregnancy care?', answer: 'Yes. We offer prenatal consultations and referrals for scans and specialist care as needed.' },
  { question: 'Is STD testing confidential?', answer: 'Yes. We maintain complete discretion and secure result delivery.' }
]

export default function GynecologistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-pink-600 text-white">Female Doctor</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Gynecologist in Dubai (Deira)
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Women’s health consultations, Pap smear & screenings, prenatal care, and hormonal health — delivered with compassion and complete privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20gynecology%20services.%20Can%20you%20share%20available%20appointment%20slots%20with%20the%20female%20gynecologist%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp for Enquiry
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

      {/* Services Covered */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="clinical-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Baby className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What We Cover</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesList.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
            <p className="text-lg text-gray-600">Common questions about our gynecology services</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-left font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Speak to a Female Gynecologist Today</h2>
          <p className="text-xl mb-8 text-white/90">Confidential care for women’s health, from routine checkups to prenatal care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C]">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20gynecology%20services.%20Can%20you%20share%20available%20appointment%20slots%20with%20the%20female%20gynecologist%3F" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C]">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp for Enquiry
              </Button>
            </a>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
