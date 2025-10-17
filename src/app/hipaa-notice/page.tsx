import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Lock,
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Eye,
  UserCheck,

  Users,
  Bell,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'HIPAA Notice of Privacy Practices | Zain Cura Medical Center Dubai',
  description: 'HIPAA Notice of Privacy Practices for Zain Cura Medical Center. Your health information privacy rights and how your protected health information may be used.',
  keywords: 'HIPAA notice, privacy practices, protected health information, medical privacy, Dubai healthcare',
  robots: {
    index: true,
    follow: true
  }
}

const patientRights = [
  {
    icon: Eye,
    title: "Right to Inspect and Copy",
    description: "You have the right to inspect and copy your protected health information (PHI)"
  },
  {
    icon: FileText,
    title: "Right to Amend",
    description: "You have the right to request amendment of your PHI if you believe it is incorrect"
  },
  {
    icon: Users,
    title: "Right to Accounting of Disclosures",
    description: "You have the right to receive an accounting of disclosures of your PHI"
  },
  {
    icon: Lock,
    title: "Right to Request Restrictions",
    description: "You have the right to request restrictions on uses and disclosures of your PHI"
  },
  {
    icon: Mail,
    title: "Right to Request Confidential Communications",
    description: "You have the right to request confidential communications regarding your PHI"
  },
  {
    icon: FileText,
    title: "Right to File a Complaint",
    description: "You have the right to file a complaint about our privacy practices"
  }
]

const permittedUses = [
  {
    category: "Treatment",
    description: "We use your health information to provide medical care and coordinate your treatment",
    examples: ["Medical consultations", "Lab test coordination", "Specialist referrals", "Emergency care"]
  },
  {
    category: "Payment",
    description: "We use your health information for billing and payment activities",
    examples: ["Insurance claims", "Payment processing", "Coverage verification", "Collections activities"]
  },
  {
    category: "Healthcare Operations",
    description: "We use your health information for quality improvement and business operations",
    examples: ["Quality assurance", "Staff training", "Business planning", "Customer service"]
  }
]

export default function HIPAANoticePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-600 text-white">HIPAA Compliance</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              HIPAA Notice of Privacy Practices
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your health information privacy rights and how your protected health information
              may be used and disclosed by Zain Cura Medical Center.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Effective Date: January 1, 2024</span>
              </div>
              <p className="text-blue-800 text-sm">
                This notice describes how medical information about you may be used and disclosed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="clinical-card mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Your Privacy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Zain Cura Medical Center is committed to protecting your health information privacy.
                  We are required by law to maintain the privacy of your protected health information (PHI)
                  and to provide you with this notice of our legal duties and privacy practices.
                </p>
                <p>
                  This notice describes how we may use and disclose your protected health information
                  to carry out treatment, payment, or healthcare operations and for other purposes that are
                  permitted or required by law.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900">Important</h4>
                      <p className="text-yellow-800 text-sm">
                        We are required to follow the terms of this notice. We reserve the right to change
                        our privacy practices and the terms of this notice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Privacy Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {patientRights.map((right, index) => (
                <Card key={index} className="clinical-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <right.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {right.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {right.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Permitted Uses and Disclosures */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How We May Use and Disclose Your Health Information
            </h2>
            <div className="space-y-6">
              {permittedUses.map((use, index) => (
                <Card key={index} className="clinical-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {use.category}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {use.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {use.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Special Situations */}
          <Card className="clinical-card mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Permitted Uses and Disclosures</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <h4 className="font-semibold mb-2">Public Health Activities</h4>
                  <p>We may disclose your health information for public health activities as required by law.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Health Oversight Activities</h4>
                  <p>We may disclose your health information to health oversight agencies for audits, investigations, and inspections.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Judicial and Administrative Proceedings</h4>
                  <p>We may disclose your health information in response to court orders or lawful subpoenas.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Emergency Situations</h4>
                  <p>We may use or disclose your health information in emergency treatment situations.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Measures */}
          <Card className="clinical-card mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Protect Your Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Physical Safeguards</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Secure facility access controls</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Locked file cabinets and rooms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Private consultation areas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Safeguards</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Encrypted data transmission</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Secure user authentication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Regular security updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="clinical-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Our Privacy Officer</h3>
              <p className="text-gray-600 mb-6 text-center">
                If you have questions about this notice or wish to exercise your privacy rights, please contact:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600 text-sm">
                    Al Ghurair Centre, 6th Floor<br />
                    Deira, Dubai, UAE
                  </p>
                </div>
                <div>
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600 text-sm">
                    +971-45703423
                  </p>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm">
                    privacy@zaincura.com
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Filing a Complaint</h4>
                <p className="text-blue-800 text-sm">
                  You may file a complaint with us or with the U.S. Department of Health and Human Services
                  if you believe your privacy rights have been violated. We will not retaliate against you for filing a complaint.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Privacy Information</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/privacy">
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <FileText className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">Privacy Policy</span>
              </div>
            </Link>
            <Link href="/medical-disclaimer">
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">Medical Disclaimer</span>
              </div>
            </Link>
            <Link href="/terms">
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <FileText className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">Terms of Service</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
