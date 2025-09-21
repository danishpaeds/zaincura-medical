import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Clock,
  CreditCard,
  MessageCircle,
  Phone,
  Calendar,
  Shield,
  Users,
  Home
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata = {
  title: 'Terms of Service | Zain Cura Medical Center',
  description: 'Read our terms of service covering medical consultations, website usage, appointment policies, and patient responsibilities at Zain Cura Medical Center in Dubai.',
  keywords: 'terms of service, medical terms, patient responsibilities, healthcare policies Dubai, clinic terms conditions',
  openGraph: {
    title: 'Terms of Service | Zain Cura Medical Center',
    description: 'Read our terms of service covering medical consultations, policies, and patient responsibilities.',
    url: 'https://www.zaincura.com/terms',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/terms'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Legal Terms & Conditions</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              These terms govern your use of our medical services, website, and clinic facilities.
              Please read carefully to understand your rights and responsibilities as our patient.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Last updated: December 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="w-4 h-4" />
                <span>UAE Law Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Terms of Service' }]} />
        </div>
      </section>

      {/* Key Terms Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Terms Summary
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important highlights of our terms of service for quick reference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="clinical-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Appointments</h3>
                <p className="text-sm text-gray-600">24-hour cancellation policy, same-day bookings available</p>
              </CardContent>
            </Card>

            <Card className="clinical-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Payment</h3>
                <p className="text-sm text-gray-600">Cash-friendly pricing, payment due at time of service</p>
              </CardContent>
            </Card>

            <Card className="clinical-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Confidentiality</h3>
                <p className="text-sm text-gray-600">Strict patient privacy and medical confidentiality standards</p>
              </CardContent>
            </Card>

            <Card className="clinical-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Responsibilities</h3>
                <p className="text-sm text-gray-600">Mutual responsibilities for quality healthcare delivery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            {/* Acceptance of Terms */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By using the services of Zain Cura Medical Center, visiting our clinic, booking appointments, or accessing
                  our website, you agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally
                  binding agreement between you and Zain Cura Medical Center.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you do not agree to these Terms, please do not use our services or website. We reserve the right to
                  modify these Terms at any time, and continued use of our services constitutes acceptance of any changes.
                </p>
              </CardContent>
            </Card>

            {/* Medical Services */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Medical Services</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Medical Care</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our medical services are provided by DHA-licensed healthcare professionals in accordance with UAE medical
                  standards and international best practices. All medical decisions are made based on professional clinical
                  judgment and your individual health needs.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Scope of Services</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>General practice consultations and primary care</li>
                  <li>Preventive health screenings and wellness checks</li>
                  <li>Laboratory testing and diagnostic services</li>
                  <li>Specialized consultations (gynecology, etc.)</li>
                  <li>IV therapy and minor procedures</li>
                  <li>Home and hotel medical visits</li>
                  <li>Medical certificates and reports</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitations</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are not an emergency medical facility. For life-threatening emergencies, please call 999 or go to the
                  nearest emergency room. Our services do not replace ongoing care with your primary healthcare provider for
                  chronic conditions requiring specialized management.
                </p>
              </CardContent>
            </Card>

            {/* Appointments and Scheduling */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Appointments and Scheduling</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Appointments</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Appointments can be booked online, via WhatsApp, or by phone</li>
                  <li>Same-day appointments are usually available</li>
                  <li>Walk-in patients are welcome during clinic hours</li>
                  <li>Home visits can be scheduled for any time (24/7 availability)</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Policy</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">24-Hour Cancellation Policy</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Clinic appointments: 2-hour notice preferred</li>
                    <li>• Home visits: 4-hour notice required</li>
                    <li>• Specialized procedures: 24-hour notice required</li>
                    <li>• Emergency cancellations are always accommodated</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Late Arrivals and No-Shows</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand that delays happen. Please call us if you're running late. Appointments delayed by more than
                  30 minutes may need to be rescheduled based on clinic availability. Repeated no-shows may affect future
                  appointment scheduling.
                </p>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Policy</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Payment is due at the time of service</li>
                  <li>We accept cash, credit cards, and debit cards</li>
                  <li>All prices are transparently displayed</li>
                  <li>No hidden fees or surprise charges</li>
                  <li>Detailed receipts provided for all services</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Insurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are primarily a cash-friendly clinic. While we don't directly bill insurance companies, we provide
                  detailed invoices that you can submit to your insurance provider for potential reimbursement.
                  Please check with your insurance provider about coverage and reimbursement policies.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pricing Changes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Prices may be updated periodically. Current pricing is available on our website, by phone, or at the clinic.
                  You will be informed of costs before receiving any services.
                </p>
              </CardContent>
            </Card>

            {/* Patient Responsibilities */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Patient Responsibilities</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical Information</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Provide accurate and complete medical history</li>
                  <li>Inform us of all current medications and allergies</li>
                  <li>Update us on changes to your health status</li>
                  <li>Bring relevant medical documents and test results</li>
                  <li>Follow pre-appointment instructions (fasting, etc.)</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Clinic Behavior</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Treat all staff and other patients with respect</li>
                  <li>Follow clinic safety and hygiene protocols</li>
                  <li>Keep appointments or provide adequate notice of cancellation</li>
                  <li>Supervise children and dependents during visits</li>
                  <li>Limit visitors to essential companions only</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Treatment Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Follow prescribed treatments, medication instructions, and follow-up recommendations. Ask questions if you
                  don't understand instructions. Inform us of any adverse reactions or concerns about your treatment.
                </p>
              </CardContent>
            </Card>

            {/* Website Terms */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Website Usage Terms</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Acceptable Use</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Use the website for legitimate healthcare and informational purposes</li>
                  <li>Provide accurate information when booking appointments or submitting forms</li>
                  <li>Respect intellectual property rights of content and materials</li>
                  <li>Do not attempt to gain unauthorized access to any systems</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Posting false, misleading, or harmful content</li>
                  <li>Attempting to hack, disrupt, or damage our systems</li>
                  <li>Using the website for any illegal purposes</li>
                  <li>Transmitting viruses, malware, or harmful code</li>
                  <li>Harvesting user data or personal information</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Accuracy</h3>
                <p className="text-gray-600 leading-relaxed">
                  While we strive to provide accurate and up-to-date information, medical information on our website is for
                  general educational purposes only and should not replace professional medical advice, diagnosis, or treatment.
                </p>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality and Privacy</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  We are committed to maintaining the strictest confidentiality of your medical information in accordance
                  with UAE privacy laws, DHA regulations, and international healthcare privacy standards.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Commitments</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Maintain confidentiality of all medical records and personal information</li>
                  <li>Share information only with your consent or as required by law</li>
                  <li>Implement appropriate security measures to protect your data</li>
                  <li>Train all staff on privacy and confidentiality requirements</li>
                </ul>

                <p className="text-gray-600 leading-relaxed">
                  For detailed information about how we collect, use, and protect your information, please see our
                  <Link href="/privacy" className="text-primary hover:underline"> Privacy Policy</Link>.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Medical Disclaimers</h2>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Important Medical Disclaimer</h4>
                      <p className="text-yellow-800 text-sm">
                        Medical services involve inherent risks and uncertainties. While we strive to provide the highest
                        quality care, we cannot guarantee specific outcomes or results from any treatment or procedure.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">No Warranty of Results</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Medical treatment outcomes can vary based on individual factors, compliance with treatment plans,
                  underlying health conditions, and other variables beyond our control. We provide professional care
                  based on current medical knowledge and standards.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Situations</h3>
                <p className="text-gray-600 leading-relaxed">
                  For medical emergencies, call 999 immediately or go to the nearest emergency room. Our clinic is not
                  equipped for emergency medicine, and delays in seeking emergency care can result in serious consequences.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  To the fullest extent permitted by UAE law, Zain Cura Medical Center's liability for any claims arising
                  from our services shall be limited to the amount paid for the specific service in question.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Exclusions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including but not limited to loss of profits, data, or business opportunities, even if we have been
                  advised of the possibility of such damages.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law and Jurisdiction</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms of Service are governed by and construed in accordance with the laws of the United Arab Emirates
                  and the Emirate of Dubai. Any disputes arising from these Terms or our services shall be resolved in the
                  competent courts of Dubai, UAE.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                <p className="text-gray-600 leading-relaxed">
                  We encourage direct communication to resolve any concerns. If formal dispute resolution is necessary,
                  we prefer mediation through the Dubai International Arbitration Centre before pursuing litigation.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have questions about these Terms of Service or need clarification about any policies,
                  please contact us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Clinic Address</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Zain Cura Medical Center</p>
                      <p>Al Ghurair Centre</p>
                      <p>Al Rigga, Deira</p>
                      <p>Dubai, UAE</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Contact Methods</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>+971-45703423</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp: +971-523011150</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>09:00 - 21:00 Daily</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your appointment today and experience our professional, patient-centered care.
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
                WhatsApp Us
              </Button>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4" />
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
