import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Building2,
  Users,
  TrendingDown,
  BarChart3,
  Shield,
  Heart,
  Calendar,
  MessageCircle,
  Phone,
  CheckCircle,
  Award,
  Target,
  Zap,
  Brain,
  Activity,
  Clock,
  MapPin,
  Stethoscope,
  Apple,
  Baby,
  FileText,
  PieChart,
  LineChart,
  AlertTriangle,
  Lightbulb,
  DollarSign,
  Briefcase,
  Home
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Corporate Wellness Dubai | Employee Health Programs | Workplace Wellness Solutions',
  description: 'Comprehensive corporate wellness programs in Dubai. Employee health screenings, group medical services, wellness camps, AI health analytics dashboard. Reduce absenteeism and boost productivity.',
  keywords: 'corporate wellness Dubai, employee health programs Dubai, workplace wellness UAE, group medical services, corporate health screening, employee wellness camps, occupational health Dubai',
  openGraph: {
    title: 'Corporate Wellness Dubai | Employee Health Programs',
    description: 'Comprehensive corporate wellness programs to boost employee health and productivity.',
    url: 'https://www.zaincura.com/corporate-wellness-dubai',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Wellness Dubai | Employee Health Programs',
    description: 'Comprehensive corporate wellness programs to boost employee health and productivity.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/corporate-wellness-dubai'
  },
  robots: {
    index: true,
    follow: true
  }
}

const corporateServices = [
  {
    icon: Users,
    title: "Employee Health Screening Programs",
    description: "Comprehensive health assessments for your workforce with detailed risk analysis",
    badge: "Most Popular",
    features: ["Complete blood panels", "Biometric screenings", "Health risk assessments", "Cardiovascular evaluations", "Diabetes screening", "Mental health check-ins"],
    color: "bg-blue-100 text-blue-600",
    popular: true
  },
  {
    icon: Home,
    title: "On-Site Wellness Camps",
    description: "Mobile medical units bring healthcare directly to your workplace",
    badge: "Convenient",
    features: ["Mobile clinic setup", "Multi-specialty doctors", "Vaccination drives", "Health education sessions", "Emergency preparedness", "Flexible scheduling"],
    color: "bg-green-100 text-green-600"
  },
  {
    icon: BarChart3,
    title: "AI Corporate Health Dashboard",
    description: "Doctor-analyzed health analytics with predictive insights and recommendations",
    badge: "AI-Powered",
    features: ["Real-time health metrics", "Risk prediction models", "Absenteeism analytics", "Custom health reports", "Trend analysis", "Action recommendations"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Stethoscope,
    title: "Custom Wellness Packages",
    description: "Tailored employee health programs including comprehensive screenings and specialty consultations",
    badge: "Custom Made",
    features: ["Overall wellness health checks", "Cancer screening programs", "Spirometry lung function tests", "Gynecologist consultations", "Clinical dietician services", "Comprehensive lab testing panels"],
    color: "bg-orange-100 text-orange-600"
  }
]

export default function CorporateWellnessDubai() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-600 text-white">Corporate Wellness Solutions</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Corporate Wellness Dubai | Employee Health Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transform your workplace with comprehensive employee wellness programs featuring AI-powered health
              analytics dashboard, group medical services, and wellness camps across Dubai. Custom packages include
              overall wellness checks, cancer screening, spirometry, gynecologist consultations, clinical dietician
              services, and comprehensive lab testing. Reduce absenteeism, boost productivity, and create a healthier workforce.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3">
                  <TrendingDown className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">40% Less</p>
                  <p className="text-xs text-gray-600">Absenteeism</p>
                </div>
                <div className="p-3">
                  <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">15% More</p>
                  <p className="text-xs text-gray-600">Productivity</p>
                </div>
                <div className="p-3">
                  <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">30% Savings</p>
                  <p className="text-xs text-gray-600">Healthcare Costs</p>
                </div>
                <div className="p-3">
                  <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">85% Happy</p>
                  <p className="text-xs text-gray-600">Employees</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Request Corporate Quote
                </Button>
              </Link>
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20Corporate%20Wellness%20Programs%20for%20our%20company.%20Can%20we%20schedule%20a%20demo%20and%20discuss%20custom%20packages%20for%20employee%20health%20screenings%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp for Demo
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-[#4A9D9C] text-[#4A9D9C] hover:bg-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Speak to Wellness Expert
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Corporate Wellness Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end employee health solutions designed to reduce healthcare costs, improve productivity, and create a healthier workplace culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((service, index) => (
              <Card key={index} className={`clinical-card h-full hover:scale-[1.02] transition-transform duration-200 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <Badge variant={service.popular ? "default" : "secondary"} className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Corporate Health Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every organization is unique. Our corporate wellness packages are custom-designed based on your
              workforce demographics, industry risks, and health objectives. No fixed pricing - only solutions
              that fit your specific needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="clinical-card">
              <CardContent className="p-6 text-center">
                <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Health Screening</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Overall wellness health checks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Cancer screening programs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Spirometry lung function tests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Comprehensive lab testing panels</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Consultations</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Gynecologist consultations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Clinical dietician services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>GP health assessments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Mental health screenings</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Health Analytics</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Corporate health dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Absenteeism reduction tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Health risk analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Productivity impact reports</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Why Custom Packages?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Tailored to Your Industry</h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Office workers: Focus on ergonomic health, eye strain, stress management</li>
                  <li>• Construction: Emphasis on safety screenings, respiratory health, injury prevention</li>
                  <li>• Healthcare: Infectious disease screening, mental health support</li>
                  <li>• Manufacturing: Occupational health, hearing tests, chemical exposure screening</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Flexible Implementation</h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• On-site mobile clinics or clinic-based assessments</li>
                  <li>• Flexible scheduling around your operations</li>
                  <li>• Scalable from small teams to large corporations</li>
                  <li>• Budget-conscious solutions with measurable ROI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Healthcare Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete your corporate wellness program with our specialized medical services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/gp-doctor-deira-dubai">
              <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GP Services</h3>
                  <p className="text-gray-600">General health consultations for your employees</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/clinical-dietician-dubai">
              <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Apple className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Nutrition</h3>
                  <p className="text-gray-600">Workplace nutrition programs and dietary consultations</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/gynecologist-dubai-female-doctor">
              <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Baby className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Women's Health</h3>
                  <p className="text-gray-600">Specialized women's health services for female employees</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Invest in Your Greatest Asset - Your Employees
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join forward-thinking Dubai companies that have reduced healthcare costs and improved employee satisfaction
            through comprehensive corporate wellness programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Request Corporate Demo
              </Button>
            </Link>
            <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20We%27re%20looking%20for%20a%20Corporate%20Wellness%20solution%20for%20our%20team.%20Can%20you%20provide%20an%20instant%20quote%20and%20details%20about%20your%20employee%20health%20programs%3F" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Instant Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
