import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  AlertTriangle,
  Stethoscope,
  Phone,
  Clock,
  MessageCircle,
  Calendar,
  Shield,
  FileText,
  Activity,
  UserCheck,
  Globe,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata = {
  title: 'Medical Disclaimer | Zain Cura Medical Center',
  description: 'Important medical disclaimers and limitations regarding online health information, emergency situations, and professional medical advice at Zain Cura Medical Center.',
  keywords: 'medical disclaimer, health information disclaimer, emergency medical care, professional medical advice Dubai',
  openGraph: {
    title: 'Medical Disclaimer | Zain Cura Medical Center',
    description: 'Important medical disclaimers regarding online health information and professional medical advice.',
    url: 'https://www.zaincura.com/medical-disclaimer',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/medical-disclaimer'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-red-600 text-white">Important Medical Information</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Medical Disclaimer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Important information about the limitations of online health information, emergency care protocols,
              and the proper use of our medical services. Please read carefully.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">Medical Emergency?</h3>
                  <p className="text-red-800 text-sm mb-3">
                    For life-threatening emergencies, call 999 immediately or go to the nearest emergency room.
                    Do not rely on this website or our clinic for emergency medical care.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="tel:999" className="text-red-700 hover:text-red-900 text-sm font-medium">
                      📞 Emergency: 999
                    </a>
                    <a href="tel:+97145703423" className="text-red-700 hover:text-red-900 text-sm font-medium">
                      📞 Clinic: +971-45703423
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Medical Disclaimer' }]} />
        </div>
      </section>

      {/* Key Disclaimers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Medical Disclaimers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key limitations and important information about our medical services and online health content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="clinical-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Care</h3>
                <p className="text-sm text-gray-600">We are not an emergency facility. Call 999 for life-threatening situations.</p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Online Information</h3>
                <p className="text-sm text-gray-600">Website content is educational only, not personalized medical advice.</p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Advice</h3>
                <p className="text-sm text-gray-600">Always consult healthcare professionals for medical decisions.</p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Treatment Outcomes</h3>
                <p className="text-sm text-gray-600">No guarantee of specific results or treatment outcomes.</p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Standards</h3>
                <p className="text-sm text-gray-600">Services provided according to UAE medical standards and DHA regulations.</p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Accurate Information</h3>
                <p className="text-sm text-gray-600">Provide complete and accurate medical history for safe care.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Disclaimers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            {/* Emergency Care Disclaimer */}
            <Card className="clinical-card border-red-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-red-900">Emergency Medical Care Disclaimer</h2>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-red-900 mb-3">CRITICAL: We Are Not an Emergency Medical Facility</h3>
                  <p className="text-red-800 mb-4">
                    Zain Cura Medical Center is a primary care clinic and is NOT equipped to handle medical emergencies.
                    We do not have emergency room facilities, trauma care capabilities, or 24-hour emergency medical staff.
                  </p>

                  <h4 className="font-semibold text-red-900 mb-2">Call 999 Immediately For:</h4>
                  <ul className="list-disc pl-6 text-red-800 space-y-1 mb-4">
                    <li>Chest pain, difficulty breathing, or heart attack symptoms</li>
                    <li>Severe injuries, trauma, or uncontrolled bleeding</li>
                    <li>Loss of consciousness, seizures, or stroke symptoms</li>
                    <li>Severe allergic reactions or anaphylaxis</li>
                    <li>Poisoning or drug overdose</li>
                    <li>Severe burns or electrical injuries</li>
                    <li>Any life-threatening condition</li>
                  </ul>

                  <p className="text-red-800 font-semibold">
                    Do not come to our clinic or call us first in emergency situations. Every minute counts in emergencies.
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">When to Visit Our Clinic</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our clinic is appropriate for non-emergency medical care, routine consultations, preventive care,
                  minor illness and injuries, follow-up visits, and health maintenance. We handle urgent but
                  non-life-threatening conditions during our operating hours.
                </p>
              </CardContent>
            </Card>

            {/* Online Information Disclaimer */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Health Information Disclaimer</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">General Educational Purpose Only</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All health information provided on our website, blog posts, FAQ section, and other online content
                  is for general educational and informational purposes only. This information is NOT intended to:
                </p>

                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Replace professional medical advice, diagnosis, or treatment</li>
                  <li>Serve as personalized medical recommendations</li>
                  <li>Diagnose specific medical conditions</li>
                  <li>Recommend specific treatments or medications</li>
                  <li>Address individual health circumstances</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">No Doctor-Patient Relationship</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Reading our website content, submitting online forms, or using our online services does not create
                  a doctor-patient relationship. A formal doctor-patient relationship is established only through
                  in-person consultation at our clinic or during scheduled home visits.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Always Consult Healthcare Professionals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Always seek the advice of qualified healthcare professionals regarding any medical condition,
                  treatment options, or health concerns. Never disregard professional medical advice or delay
                  seeking treatment because of information you read on our website.
                </p>
              </CardContent>
            </Card>

            {/* Treatment Outcomes Disclaimer */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Outcomes and Results Disclaimer</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">No Guarantee of Results</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While we provide professional medical care according to current medical standards and best practices,
                  we cannot and do not guarantee specific treatment outcomes, results, or cures. Medical treatment
                  involves inherent uncertainties and risks.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Individual Variations</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Treatment outcomes vary significantly based on individual factors including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Individual health status and medical history</li>
                  <li>Compliance with treatment recommendations</li>
                  <li>Underlying health conditions and genetic factors</li>
                  <li>Lifestyle factors and personal circumstances</li>
                  <li>Response to medications and treatments</li>
                  <li>Timing of treatment initiation</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Care Standards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment is to provide professional, ethical medical care based on current medical knowledge,
                  clinical experience, and evidence-based practices. We will clearly communicate realistic expectations
                  for any treatment or procedure.
                </p>
              </CardContent>
            </Card>

            {/* Diagnostic Limitations */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Diagnostic and Testing Limitations</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accuracy of Tests</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While we use reliable laboratory and diagnostic services, no medical test is 100% accurate.
                  False positives, false negatives, and borderline results can occur. Some conditions may
                  require multiple tests or specialized testing not available at our facility.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Test Result Interpretation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Test results must be interpreted in the context of your clinical presentation, medical history,
                  and physical examination. Abnormal results don't always indicate disease, and normal results
                  don't always rule out medical conditions.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Referral When Necessary</h3>
                <p className="text-gray-600 leading-relaxed">
                  When conditions require specialized expertise, advanced testing, or treatment beyond our scope
                  of practice, we will refer you to appropriate specialists or facilities. We encourage you to
                  follow through with recommended referrals promptly.
                </p>
              </CardContent>
            </Card>

            {/* Medication Disclaimer */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Medication and Treatment Disclaimer</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Medication Safety</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All medications carry potential risks, side effects, and interactions. It is crucial that you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Inform us of all current medications, supplements, and allergies</li>
                  <li>Follow prescribed dosages and instructions exactly</li>
                  <li>Report any adverse reactions or side effects immediately</li>
                  <li>Do not share medications with others</li>
                  <li>Complete prescribed courses of antibiotics</li>
                  <li>Ask questions if you don't understand instructions</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Treatment Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  The effectiveness of treatment depends significantly on your compliance with recommended therapies,
                  lifestyle modifications, and follow-up appointments. Non-compliance may result in treatment failure
                  or worsening of conditions.
                </p>
              </CardContent>
            </Card>

            {/* Scope of Practice */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope of Practice and Limitations</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Care Focus</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zain Cura Medical Center provides primary healthcare services including general medicine,
                  preventive care, basic diagnostic services, and routine medical procedures. We do not provide:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Emergency medicine or trauma care</li>
                  <li>Surgery or advanced surgical procedures</li>
                  <li>Specialized treatments requiring hospitalization</li>
                  <li>Advanced cardiac or neurological procedures</li>
                  <li>Complex diagnostic imaging beyond basic services</li>
                  <li>Mental health or psychiatric services</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Limitations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our healthcare providers practice within their scope of training and expertise. When conditions
                  require specialized knowledge or advanced care, we will refer you to appropriate specialists
                  or healthcare facilities without delay.
                </p>
              </CardContent>
            </Card>

            {/* Patient Responsibilities */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Responsibilities for Safe Care</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accurate Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your safety depends on providing complete and accurate information about:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Current symptoms and duration</li>
                  <li>Complete medical history including past surgeries</li>
                  <li>All medications, supplements, and herbal remedies</li>
                  <li>Known allergies and adverse reactions</li>
                  <li>Family medical history when relevant</li>
                  <li>Lifestyle factors affecting health</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow-up Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Many medical conditions require follow-up monitoring and care. It is your responsibility to
                  schedule and attend recommended follow-up appointments, complete prescribed treatments,
                  and seek timely medical attention if your condition changes or worsens.
                </p>
              </CardContent>
            </Card>

            {/* Legal Disclaimer */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal and Regulatory Disclaimer</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zain Cura Medical Center operates under the supervision and regulations of the Dubai Health Authority (DHA)
                  and in compliance with UAE medical practice laws. Our healthcare providers maintain current licenses
                  and certifications as required by UAE regulations.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This medical disclaimer is part of our Terms of Service. By using our services, you acknowledge
                  understanding these limitations and agree to hold harmless Zain Cura Medical Center and its
                  healthcare providers from any claims arising from the proper provision of medical care within
                  our scope of practice.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
                <p className="text-gray-600 leading-relaxed">
                  This disclaimer and all medical services are governed by UAE law and DHA regulations.
                  Any disputes will be resolved according to UAE legal procedures and medical practice standards.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
              Emergency Contacts - Save These Numbers
            </h2>
            <p className="text-lg text-red-800 max-w-3xl mx-auto">
              Keep these important emergency contact numbers readily available for different types of medical situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="clinical-card border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-red-900 mb-2">LIFE-THREATENING EMERGENCY</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">999</p>
                <p className="text-red-800 text-sm">Police, Fire, Ambulance</p>
              </CardContent>
            </Card>

            <Card className="clinical-card border-primary">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">NON-EMERGENCY MEDICAL</h3>
                <p className="text-xl font-bold text-primary mb-2">+971-45703423</p>
                <p className="text-gray-600 text-sm">Zain Cura Medical Center</p>
              </CardContent>
            </Card>

            <Card className="clinical-card border-green-600">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">URGENT CONSULTATION</h3>
                <p className="text-xl font-bold text-green-600 mb-2">+971-523011150</p>
                <p className="text-gray-600 text-sm">WhatsApp 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Medical Care When You Need It
          </h2>
          <p className="text-xl mb-8 text-white/90">
            For non-emergency medical needs, we're here to provide professional, compassionate care.
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
                WhatsApp for Questions
              </Button>
            </a>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <p>Operating Hours: 09:00 - 21:00 Daily | Home Care: 24/7 Available</p>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
