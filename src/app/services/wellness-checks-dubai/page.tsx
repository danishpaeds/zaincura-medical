import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  BarChart3,
  Smartphone,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Clock,
  TrendingUp,
  FileText,
  Award,
  Users,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb, BreadcrumbConfigs } from '@/components/Breadcrumb'

const howItWorks = [
  {
    step: 1,
    title: "Choose Your Package",
    description: "Select from our comprehensive wellness packages designed for different age groups and health goals."
  },
  {
    step: 2,
    title: "Complete Health Check",
    description: "Comprehensive testing including blood work, vital signs, and health assessments."
  },
  {
    step: 3,
    title: "Receive Smart Report",
    description: "Get your digital wellness report with AI-powered insights and personalized recommendations."
  }
]

const wellnessPackages = [
  {
    name: "Wellness Basic",
    price: "AED 49",
    originalPrice: "AED 99",
    popular: true,
    description: "Essential health screening for young adults",
    age: "18-35 years",
    tests: [
      "Complete Blood Count (CBC)",
      "Blood Sugar (Fasting)",
      "Cholesterol Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "BMI & Vital Signs"
    ],
    features: [
      "Smart digital report",
      "Health trend analysis",
      "Lifestyle recommendations",
      "GP consultation included"
    ],
    turnaround: "Same day results"
  },
  {
    name: "Male 45+ Comprehensive",
    price: "AED 299",
    originalPrice: "AED 450",
    description: "Comprehensive health screening for men over 45",
    age: "45+ years",
    tests: [
      "Complete Blood Count (CBC)",
      "Comprehensive Metabolic Panel",
      "Lipid Profile",
      "PSA (Prostate Cancer Screening)",
      "Testosterone Level",
      "Thyroid Function (TSH, T3, T4)",
      "Vitamin D",
      "ECG & Blood Pressure"
    ],
    features: [
      "Advanced smart report",
      "Risk assessment analysis",
      "Personalized health plan",
      "GP consultation & follow-up",
      "Specialist referrals if needed"
    ],
    turnaround: "24 hours results"
  },
  {
    name: "Female 45+ Comprehensive",
    price: "AED 299",
    originalPrice: "AED 450",
    description: "Comprehensive health screening for women over 45",
    age: "45+ years",
    tests: [
      "Complete Blood Count (CBC)",
      "Comprehensive Metabolic Panel",
      "Lipid Profile",
      "Mammogram Referral",
      "Bone Density Assessment",
      "Thyroid Function (TSH, T3, T4)",
      "Hormone Panel",
      "Pap Smear Referral"
    ],
    features: [
      "Advanced smart report",
      "Hormonal health insights",
      "Menopause guidance",
      "GP consultation & follow-up",
      "Women's health specialist referrals"
    ],
    turnaround: "24 hours results"
  }
]

const smartReportFeatures = [
  {
    icon: BarChart3,
    title: "Visual Health Dashboard",
    description: "Easy-to-understand charts and graphs showing your health metrics"
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Track your health improvements over time with intelligent comparisons"
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly",
    description: "Access your reports anytime, anywhere on your smartphone or computer"
  },
  {
    icon: Award,
    title: "AI-Powered Insights",
    description: "Advanced algorithms provide personalized health recommendations"
  }
]

const preparationGuidance = [
  {
    title: "Fasting Requirements",
    items: [
      "Fast for 8-12 hours before blood tests",
      "Water is allowed during fasting period",
      "Avoid alcohol 24 hours before testing",
      "Continue regular medications unless advised otherwise"
    ]
  },
  {
    title: "What to Bring",
    items: [
      "Emirates ID or valid identification",
      "Previous medical reports (if available)",
      "Current medications list",
      "Comfortable clothing for physical examination"
    ]
  }
]

const faqItems = [
  {
    question: "What makes your Smart Reports different from regular lab reports?",
    answer: "Our Smart Reports use AI technology to transform complex medical data into easy-to-understand visual dashboards. They include color-coded results, trend analysis, risk assessments, and personalized health recommendations that help you understand your health status at a glance."
  },
  {
    question: "Do I need to fast before my wellness check?",
    answer: "Yes, fasting for 8-12 hours is required for accurate blood sugar and cholesterol measurements. You can drink water during the fasting period. We'll provide detailed preparation instructions when you book your appointment."
  },
  {
    question: "How quickly will I receive my wellness report?",
    answer: "Basic wellness reports are available the same day, while comprehensive packages take up to 24 hours. You'll receive an SMS and email notification when your Smart Report is ready for secure online access."
  },
  {
    question: "Is GP consultation included in the wellness packages?",
    answer: "Yes, all our wellness packages include a follow-up GP consultation to review your results, explain findings, and provide personalized health recommendations. Additional consultations can be scheduled if needed."
  },
  {
    question: "Can I track my health progress over time?",
    answer: "Absolutely! Our Smart Reports include trend analysis that tracks your health metrics over time. Each subsequent wellness check builds on your health history to show improvements and identify areas needing attention."
  },
  {
    question: "What if my results show abnormal values?",
    answer: "If any results are outside normal ranges, our GP will contact you immediately for consultation. We provide treatment recommendations, lifestyle guidance, and specialist referrals when necessary, all included in your package."
  }
]

export default function WellnessChecksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-green-600 text-white">Best Value - From AED 49</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Wellness Health Checks with Smart Reports
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive health screenings with AI-powered Smart Reports that make your health
              data easy to understand. Multiple packages for different age groups with GP consultation included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Wellness Check
                </Button>
              </Link>
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20wellness%20health%20checks.%20Can%20you%20share%20available%20packages%20and%20pricing%3F" target="_blank" rel="noopener noreferrer">
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
          <Breadcrumb items={BreadcrumbConfigs.services.wellness} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Wellness Checks Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple process from booking to receiving your personalized Smart Report with health insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
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

      {/* Smart Reports Features */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Reports with AI Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform complex lab data into easy-to-understand insights with our advanced Smart Report system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smartReportFeatures.map((feature, index) => (
              <Card key={index} className="clinical-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wellness Check Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the comprehensive health package that's right for your age and health goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {wellnessPackages.map((pkg, index) => (
              <Card key={index} className={`clinical-card ${pkg.popular ? 'ring-2 ring-green-500 relative' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{pkg.description}</p>
                    <p className="text-sm text-primary font-medium">Age: {pkg.age}</p>
                    <p className="text-xs text-gray-500">{pkg.turnaround}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tests Included:</h4>
                    <div className="space-y-1">
                      {pkg.tests.map((test, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{test}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Package Features:</h4>
                    <div className="space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/book">
                    <Button className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90'}`}>
                      Book This Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Guidance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preparation Guidelines
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple preparation steps to ensure accurate test results for your wellness check.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {preparationGuidance.map((section, index) => (
              <Card key={index} className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GP Follow-up */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                GP Consultation Included
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every wellness package includes a comprehensive consultation with our experienced
                general practitioners to review your results and provide personalized health guidance.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Review</h4>
                    <p className="text-gray-600">Detailed explanation of your results and health status</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Health Recommendations</h4>
                    <p className="text-gray-600">Lifestyle and dietary advice based on your results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Treatment Planning</h4>
                    <p className="text-gray-600">Referrals to specialists if needed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Care
              </h3>
              <p className="text-gray-600 mb-6">
                Our wellness checks go beyond just test results. We provide comprehensive
                health assessments and ongoing care recommendations.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-sm text-gray-500 mb-2">Follow-up options</p>
                <div className="flex justify-center space-x-4 text-sm font-medium text-primary">
                  <span>In-person</span>
                  <span>Video call</span>
                  <span>Phone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wellness Check FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our wellness packages and Smart Reports.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6"
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
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Comprehensive health checks with Smart Reports starting from just AED 49.
            Take control of your health with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Wellness Check
              </Button>
            </Link>
            <a href="tel:+971-45703423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <p>Wellness Center: 09:00 - 21:00 Daily • Same-day results available</p>
          </div>
        </div>
      </section>

      {/* Mobile CTA Bar */}
      <MobileCTABar />
    </div>
  )
}
