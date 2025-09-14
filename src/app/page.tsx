import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  MessageCircle,
  Phone,
  Stethoscope,
  TestTube,
  Shield,
  Beaker,
  Home,
  Zap,
  CheckCircle,
  Award,
  Baby,
  ArrowRight,
  Apple,
  Building2
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Stethoscope,
    title: "GP / Family Medicine",
    description: "Same-day consultations with experienced doctors",
    href: "/gp-doctor-deira-dubai",
    badge: "Walk-in Welcome"
  },
  {
    icon: Baby,
    title: "Gynecologist",
    description: "Experienced female gynecologist for women's health, prenatal care and screenings",
    href: "/gynecologist-dubai-female-doctor",
    badge: "Female Doctor"
  },
  {
    icon: Apple,
    title: "Clinical Dietician",
    description: "Professional nutrition consultations and therapeutic diets for optimal health",
    href: "/clinical-dietician-dubai",
    badge: "Nutrition Expert"
  },
  {
    icon: Zap,
    title: "IV Drips (Clinic & Home)",
    description: "Vitamin therapy and hydration treatments",
    href: "/iv-drip-therapy-dubai-clinic-home",
    badge: "Clinic & Home"
  },
  {
    icon: TestTube,
    title: "Wellness (Smart Reports)",
    description: "Comprehensive health checks with digital insights",
    href: "/wellness-health-checks-dubai",
    badge: "From AED 49",
    featured: true
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    description: "AI-powered employee health programs with custom packages to reduce absenteeism and boost productivity",
    href: "/corporate-wellness-dubai",
    badge: "Custom Packages"
  },
  {
    icon: TestTube,
    title: "Lab Tests",
    description: "Fast, accurate diagnostics with same-day results",
    href: "/lab-tests-dubai-home-collection",
    badge: "Same Day Results"
  },
  {
    icon: Shield,
    title: "STD Testing (Confidential)",
    description: "Private testing with complete discretion",
    href: "/std-testing-dubai-confidential",
    badge: "100% Confidential"
  },
  {
    icon: Beaker,
    title: "Semen Analysis",
    description: "Accurate fertility testing in private setting",
    href: "/semen-analysis-dubai-fertility",
    badge: "24-48h Results"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Zain Cura Medical Center — GP, Lab & Home Health Care in Deira (Al Ghurair Centre)
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Cash-friendly • Same-day GP & Lab • 24/7 Home & Hotel Visits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/book">
                <Button
                  size="lg"
                  className="hover:bg-gray-50 text-[#4A9D9C] border-2 border-white hover:border-gray-200 font-semibold shadow-lg bg-[#FFFFFF33]"
                >
                  <Calendar className="w-5 h-5 mr-2 text-[#4A9D9C]" />
                  Book Now
                </Button>
              </Link>
              <a
                href="https://wa.me/971523011150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white hover:border-white font-semibold backdrop-blur-sm"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white hover:border-white font-semibold backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Same-day appointments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>No insurance required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>24/7 home visits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services available same-day, with transparent pricing and no insurance required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className={`clinical-card h-full hover:scale-[1.02] transition-transform duration-200 ${
                  service.featured ? 'ring-2 ring-primary' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant={service.featured ? "default" : "secondary"} className="text-xs">
                        {service.badge}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Membership Promotion - Non-intrusive */}
      <section className="py-12 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-yellow-600 text-white">VIP Healthcare Membership</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Upgrade to VIP Healthcare Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our exclusive membership for priority appointments, quarterly wellness checks,
              complimentary home care, and 24/7 medical support with significant savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Gold Membership */}
            <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 hover:scale-[1.02] transition-transform duration-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gold VIP Membership</h3>

                <div className="space-y-2 mb-6 text-left">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Unlimited priority appointments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Complimentary home doctor visits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Quarterly wellness health checks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">24/7 nurse on call service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Clinical dietician consultations</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp for Gold Plan
                    </Button>
                  </a>
                  <a href="tel:+97145703423">
                    <Button variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call for Gold Plan
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Silver Membership */}
            <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-300 hover:scale-[1.02] transition-transform duration-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Silver VIP Membership</h3>

                <div className="space-y-2 mb-6 text-left">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Priority appointment booking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Quarterly wellness health checks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">24/7 nurse consultation hotline</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Discounted home doctor visits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Family member discounts</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp for Silver Plan
                    </Button>
                  </a>
                  <a href="tel:+97145703423">
                    <Button variant="outline" className="w-full border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call for Silver Plan
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              ⚡ Instant activation • 👨‍⚕️ VIP treatment • 👥 Family benefits • 🏥 Priority healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zain Cura?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DHA Licensed</h3>
              <p className="text-gray-600">Certified clinicians</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Privacy</h3>
              <p className="text-gray-600">Confidential care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Available</h3>
              <p className="text-gray-600">Home care anytime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5-Star Rated</h3>
              <p className="text-gray-600">Trusted by patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to the most common questions about our medical services and clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you accept walk-in patients?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! While we encourage booking appointments, we welcome walk-in patients throughout our operating hours (09:00 - 21:00 daily). Same-day appointments are usually available.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you accept insurance or is it cash only?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are primarily cash-friendly with transparent pricing. While we don't directly bill insurance, we provide detailed invoices for potential reimbursement.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How quickly can I get lab results?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most routine blood tests have same-day results (within 6-8 hours). We provide digital reports via WhatsApp or email for your convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you provide home visits across Dubai?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, our 24/7 home care services cover all areas of Dubai including hotels. Contact us to confirm availability in your specific location.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/faq">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All FAQs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Quality Healthcare?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your appointment today or contact us for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button
                size="lg"
                className="hover:bg-gray-50 text-[#4A9D9C] border-2 border-white hover:border-gray-200 font-semibold shadow-lg bg-[#FFFFFF33]"
              >
                <Calendar className="w-5 h-5 mr-2 text-[#4A9D9C]" />
                Book Appointment
              </Button>
            </Link>
            <a
              href="https://wa.me/971523011150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white hover:border-white font-semibold backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
            </a>
            <a href="tel:+97145703423">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white hover:border-white font-semibold backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
