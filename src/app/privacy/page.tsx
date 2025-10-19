import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Lock,
  Eye,
  Database,
  Globe,
  MessageCircle,
  Phone,
  Calendar,
  FileText,
  UserCheck,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata = {
  title: 'Privacy Policy | Zain Cura Medical Center',
  description: 'Learn how Zain Cura Medical Center protects your personal and medical information. Our comprehensive privacy policy covers data collection, usage, and security measures.',
  keywords: 'privacy policy, medical privacy, patient data protection, healthcare privacy Dubai, medical records confidentiality',
  openGraph: {
    title: 'Privacy Policy | Zain Cura Medical Center',
    description: 'Learn how we protect your personal and medical information with comprehensive privacy measures.',
    url: 'https://www.zaincura.com/privacy',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/privacy'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Privacy & Data Protection</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your privacy and the confidentiality of your medical information are fundamental to our practice.
              Learn how we protect, collect, and use your personal and health data.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Last updated: December 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Privacy Rights at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your personal and medical information in accordance with UAE laws and international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="clinical-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Storage</h3>
                <p className="text-sm text-gray-600">Medical records stored with bank-level encryption</p>
              </CardContent>
            </Card>

            <Card className="clinical-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Confidentiality</h3>
                <p className="text-sm text-gray-600">Strict access controls and staff confidentiality agreements</p>
              </CardContent>
            </Card>

            <Card className="clinical-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Your Control</h3>
                <p className="text-sm text-gray-600">Right to access, correct, or delete your personal data</p>
              </CardContent>
            </Card>

            <Card className="clinical-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">Clear information about how we use your data</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            {/* Introduction */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zain Cura Medical Center ("we," "our," or "us") is committed to protecting your privacy and ensuring the confidentiality
                  of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our clinic, use our services, or access our website.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This policy complies with the UAE Data Protection Law, Dubai Health Authority (DHA) regulations, and international
                  healthcare privacy standards including HIPAA principles where applicable.
                </p>
              </CardContent>
            </Card>

            {/* HIPAA Compliance Section */}
            <Card className="clinical-card border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-blue-900">HIPAA Compliance & Protected Health Information</h2>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-blue-900 mb-3">Your Health Information is Protected</h3>
                  <p className="text-blue-800 mb-4">
                    We follow HIPAA (Health Insurance Portability and Accountability Act) principles to protect your
                    Protected Health Information (PHI). Your medical information is confidential and will only be used
                    for authorized purposes.
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Permitted Uses of Your Health Information</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Treatment</h4>
                      <p className="text-gray-600 text-sm">Providing medical care, coordinating with specialists, and managing your health</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Payment</h4>
                      <p className="text-gray-600 text-sm">Processing insurance claims, billing activities, and payment verification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Healthcare Operations</h4>
                      <p className="text-gray-600 text-sm">Quality improvement, staff training, and ensuring proper medical care delivery</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights Under HIPAA Principles</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                  <li>Right to access and review your medical records</li>
                  <li>Right to request corrections to your health information</li>
                  <li>Right to restrict certain uses and disclosures</li>
                  <li>Right to request confidential communications</li>
                  <li>Right to file a complaint about privacy practices</li>
                  <li>Right to receive an accounting of disclosures</li>
                </ul>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Security Measures</h4>
                  <p className="text-gray-700 text-sm">
                    We implement physical, technical, and administrative safeguards to protect your health information
                    from unauthorized access, use, or disclosure. This includes encrypted data storage, secure facility
                    access controls, and trained staff who understand confidentiality requirements.
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <Link href="/hipaa-notice" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    <FileText className="w-4 h-4 mr-2" />
                    Read Full HIPAA Notice of Privacy Practices
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Full name, date of birth, and contact information</li>
                  <li>Emirates ID, passport, or other identification documents</li>
                  <li>Emergency contact details</li>
                  <li>Insurance information (when applicable)</li>
                  <li>Payment and billing information</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical Information</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Medical history, symptoms, and current health conditions</li>
                  <li>Examination findings and diagnostic test results</li>
                  <li>Treatment plans, prescriptions, and medical recommendations</li>
                  <li>Laboratory results and medical imaging</li>
                  <li>Vaccination records and allergy information</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Website and Digital Information</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>IP address, browser type, and device information</li>
                  <li>Website usage patterns and preferences</li>
                  <li>Appointment booking and form submissions</li>
                  <li>Communication records (emails, WhatsApp messages, calls)</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical Care and Treatment</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Providing medical consultations, diagnoses, and treatments</li>
                  <li>Coordinating care between healthcare providers</li>
                  <li>Maintaining accurate medical records</li>
                  <li>Following up on treatment outcomes</li>
                  <li>Emergency medical situations and urgent care</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Administrative Purposes</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Appointment scheduling and management</li>
                  <li>Billing and payment processing</li>
                  <li>Insurance claim processing and verification</li>
                  <li>Quality improvement and patient safety initiatives</li>
                  <li>Compliance with legal and regulatory requirements</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Appointment reminders and follow-up care</li>
                  <li>Test results and medical updates</li>
                  <li>Health education and preventive care information</li>
                  <li>Important clinic announcements and policy updates</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your explicit consent,
                  except in the following circumstances:
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare Providers</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Referrals to specialists or other healthcare facilities</li>
                  <li>Laboratory and diagnostic service providers</li>
                  <li>Pharmacy services for prescription fulfillment</li>
                  <li>Emergency medical services when necessary</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Requirements</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Dubai Health Authority reporting requirements</li>
                  <li>Public health notifications (communicable diseases)</li>
                  <li>Court orders or legal proceedings</li>
                  <li>Law enforcement investigations with proper warrants</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Providers</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>IT services and data storage providers (under strict contracts)</li>
                  <li>Billing and payment processing companies</li>
                  <li>Appointment scheduling and communication platforms</li>
                  <li>All service providers sign confidentiality agreements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement comprehensive security measures to protect your personal and medical information:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Safeguards</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>256-bit SSL encryption for all data transmission</li>
                      <li>Encrypted data storage with regular backups</li>
                      <li>Firewall protection and intrusion detection</li>
                      <li>Regular security audits and updates</li>
                      <li>Access controls and user authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Safeguards</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Secure facility access controls</li>
                      <li>Locked filing cabinets for physical records</li>
                      <li>CCTV monitoring of sensitive areas</li>
                      <li>Visitor access logs and escort policies</li>
                      <li>Secure disposal of confidential documents</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the following rights regarding your personal and medical information:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">Right to Access</h3>
                    <p className="text-gray-600">Request copies of your medical records and personal information</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">Right to Correction</h3>
                    <p className="text-gray-600">Request corrections to inaccurate or incomplete information</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">Right to Restrict Processing</h3>
                    <p className="text-gray-600">Limit how we use your information in certain circumstances</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">Right to Data Portability</h3>
                    <p className="text-gray-600">Request your data in a portable format for transfer to another provider</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">Right to Object</h3>
                    <p className="text-gray-600">Object to certain uses of your information, such as marketing communications</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Website */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Website Data</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Our website uses cookies and similar technologies to improve your experience:
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Required for website functionality, appointment booking, and security features.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Help us understand website usage to improve our services (anonymized data only).
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Preference Cookies</h3>
                <p className="text-gray-600">
                  Remember your settings and preferences for a better user experience.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us About Privacy</h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have questions about this Privacy Policy, want to exercise your privacy rights, or have concerns
                  about how we handle your information, please contact us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Privacy Officer</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Zain Cura Medical Center</p>
                      <p>Al Ghurair Centre, Deira</p>
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
                        <FileText className="w-4 h-4" />
                        <span>Privacy requests in writing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card className="clinical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Policy Updates</h2>

                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements,
                  or technology. We will notify you of any material changes through our website, email, or during your next visit.
                  The "Last Updated" date at the top of this policy indicates when the most recent changes were made.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our privacy officer is available to answer any questions about how we protect your information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C]">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Privacy Officer
              </Button>
            </Link>
            <a href="tel:+97145703423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C]">
                <Phone className="w-5 h-5 mr-2" />
                Call Directly
              </Button>
            </a>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
