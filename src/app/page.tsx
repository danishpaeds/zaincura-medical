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
  Building2,
  Sparkles,
  Star
} from 'lucide-react'
import Link from 'next/link'

// FAQ Schema for Rich Snippets
const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you accept walk-in patients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! While we encourage booking appointments, we welcome walk-in patients throughout our operating hours (09:00 - 21:00 daily). Same-day appointments are usually available."
      }
    },
    {
      "@type": "Question",
      "name": "Do you accept insurance or is it cash only?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are primarily cash-friendly with transparent pricing. While we don't directly bill insurance, we provide detailed invoices for potential reimbursement."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I get lab results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most routine blood tests have same-day results (within 6-8 hours). We provide digital reports via WhatsApp or email for your convenience."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide home visits across Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our 24/7 home care services cover all areas of Dubai including hotels. Contact us to confirm availability in your specific location."
      }
    }
  ]
};

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
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Premium Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=1920&q=80"
            alt="Premium Healthcare"
            className="w-full h-full object-cover"
          />
          {/* Premium Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D7D7D]/95 via-[#4A9D9C]/90 to-[#7BC142]/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <Badge className="mb-8 bg-white/20 text-white hover:bg-white/30 border-white/30 backdrop-blur-md px-6 py-2 text-sm animate-fade-in">
            <Star className="w-4 h-4 mr-2" />
            DHA-Licensed Medical Excellence in Deira
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Zain Cura Medical Center
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              GP, Lab & Home Health Care in Deira
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Cash-friendly • Same-day GP & Lab • 24/7 Home & Hotel Visits
            <span className="block mt-2 text-cyan-100">Located at Al Ghurair Centre, Deira</span>
          </p>

          {/* Stats Row - Glassmorphic */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-white mb-1 xl:text-[25px]">TRUSTED</div>
              <div className="text-sm text-cyan-100">Medical Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-cyan-100">Home Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-white mb-1">DHA</div>
              <div className="text-sm text-cyan-100">Licensed Clinic</div>
            </div>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link href="/book">
              <Button size="lg" className="bg-gradient-to-r from-white to-cyan-50 text-[#4A9D9C] hover:from-cyan-50 hover:to-white px-12 py-8 text-xl rounded-full shadow-[0_20px_60px_rgba(255,255,255,0.5)] hover:shadow-[0_25px_70px_rgba(255,255,255,0.7)] transition-all duration-300 transform hover:scale-110 font-bold border-4 border-white/30 hover-glow-white">
                <Calendar className="w-6 h-6 mr-3 animate-pulse" />
                Book Appointment Now
              </Button>
            </Link>
            <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20Zain%20Cura%20Medical%20Center.%20Please%20share%20available%20slots%20for%20GP%2C%20Lab%2C%20or%20Home%20Care%20services." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-8 text-xl rounded-full shadow-[0_20px_60px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_70px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:scale-110 font-bold border-4 border-white/30 hover-glow">
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp Now
              </Button>
            </a>
            <a href="tel:+97145703423">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-12 py-8 text-xl rounded-full shadow-[0_20px_60px_rgba(59,130,246,0.5)] hover:shadow-[0_25px_70px_rgba(59,130,246,0.7)] transition-all duration-300 transform hover:scale-110 font-bold border-4 border-white/30 animate-pulse-ring hover-glow">
                <Phone className="w-6 h-6 mr-3 animate-pulse" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">Same-Day Appointments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">No Insurance Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">24/7 Home Visits</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Services Grid - Premium Enhanced */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4A9D9C] to-[#7BC142] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-[#4A9D9C]/10 to-[#7BC142]/10 text-[#4A9D9C] border-[#4A9D9C]/20 px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Comprehensive Healthcare Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2D7D7D] via-[#4A9D9C] to-[#7BC142] bg-clip-text text-transparent mb-6">
              Our Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Same-day availability with transparent pricing
              <span className="block mt-2 text-[#4A9D9C] font-medium">No insurance required</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <div
                  className="group relative h-full"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Glow Effect on Hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-[#4A9D9C]/30 via-[#7BC142]/30 to-cyan-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${service.featured ? 'opacity-50' : ''}`}></div>

                  {/* Main Card */}
                  <Card className={`relative h-full border-2 ${
                    service.featured ? 'border-[#4A9D9C]/50 ring-2 ring-[#4A9D9C]/20' : 'border-gray-200'
                  } hover:border-[#4A9D9C]/40 bg-white backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(74,157,156,0.25)] cursor-pointer`}>
                    {/* Shine Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/50 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                    {/* Content */}
                    <CardContent className="relative p-8">
                      {/* Icon and Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="relative">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4A9D9C] to-[#7BC142] rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            <service.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          {/* Icon Glow */}
                          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#4A9D9C] to-[#7BC142] rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        </div>
                        <Badge variant={service.featured ? "default" : "secondary"} className={`text-xs ${
                          service.featured ? 'bg-gradient-to-r from-[#4A9D9C] to-[#7BC142] text-white' : ''
                        }`}>
                          {service.badge}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#4A9D9C] transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#4A9D9C] font-bold group-hover:translate-x-2 transition-transform duration-300">
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                        {/* Premium Indicator */}
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4A9D9C] to-[#7BC142] group-hover:scale-150 transition-transform duration-300 shadow-lg shadow-[#4A9D9C]/50"></div>
                      </div>
                    </CardContent>

                    {/* Bottom Gradient Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A9D9C] to-[#7BC142] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Membership Promotion - Premium */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 text-white border-0 px-6 py-2 shadow-lg">
              <Award className="w-4 h-4 mr-2 inline" />
              VIP Healthcare Membership
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-700 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Upgrade to VIP Healthcare Experience
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive membership for priority appointments, quarterly wellness checks,
              <span className="block mt-2 font-semibold text-amber-700">complimentary home care, and 24/7 medical support with significant savings</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Gold Membership */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              <Card className="relative bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-400 hover:border-yellow-500 transition-all duration-300 group-hover:scale-105 shadow-xl group-hover:shadow-2xl overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                <CardContent className="relative p-8 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  {/* Icon Glow */}
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Gold VIP Membership</h3>

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

                <div className="flex flex-col space-y-3">
                  <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20the%20Gold%20VIP%20Membership%20at%20Zain%20Cura.%20Please%20share%20details%20about%20benefits%2C%20pricing%2C%20and%20enrollment." target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-base">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp for Gold Plan
                    </Button>
                  </a>
                  <a href="tel:+97145703423">
                    <Button variant="outline" className="w-full border-2 border-yellow-600 text-yellow-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-amber-600 hover:text-white hover:border-transparent transition-all duration-300 py-6 text-base font-semibold">
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Gold Plan
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            </div>

            {/* Silver Membership */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 via-slate-400 to-gray-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              <Card className="relative bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-400 hover:border-gray-500 transition-all duration-300 group-hover:scale-105 shadow-xl group-hover:shadow-2xl overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                <CardContent className="relative p-8 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-slate-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  {/* Icon Glow */}
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-gray-500 to-slate-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Silver VIP Membership</h3>

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

                <div className="flex flex-col space-y-3">
                  <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20the%20Silver%20VIP%20Membership%20at%20Zain%20Cura.%20Please%20share%20details%20about%20benefits%2C%20pricing%2C%20and%20enrollment." target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-base">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp for Silver Plan
                    </Button>
                  </a>
                  <a href="tel:+97145703423">
                    <Button variant="outline" className="w-full border-2 border-gray-600 text-gray-700 hover:bg-gradient-to-r hover:from-gray-600 hover:to-slate-600 hover:text-white hover:border-transparent transition-all duration-300 py-6 text-base font-semibold">
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Silver Plan
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              ⚡ Instant activation • 👨‍⚕️ VIP treatment • 👥 Family benefits • 🏥 Priority healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Premium */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-[#4A9D9C]/10 to-[#7BC142]/10 text-[#4A9D9C] border-[#4A9D9C]/20 px-6 py-2">
              <Star className="w-4 h-4 mr-2 inline" />
              Trusted Healthcare Provider
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2D7D7D] via-[#4A9D9C] to-[#7BC142] bg-clip-text text-transparent mb-4">
              Why Choose Zain Cura?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "DHA Licensed", desc: "Certified clinicians", color: "from-[#4A9D9C] to-[#7BC142]" },
              { icon: Shield, title: "Complete Privacy", desc: "Confidential care", color: "from-blue-500 to-cyan-500" },
              { icon: Home, title: "24/7 Available", desc: "Home care anytime", color: "from-emerald-500 to-teal-500" },
              { icon: CheckCircle, title: "5-Star Rated", desc: "Trusted by patients", color: "from-amber-500 to-yellow-500" }
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 left-1/2 -translate-x-1/2`}></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4A9D9C] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{item.desc}</p>
              </div>
            ))}
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
              <Button variant="outline" className="border-[#4A9D9C] text-[#4A9D9C] hover:bg-primary hover:text-white">
                View All FAQs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2D7D7D] via-[#4A9D9C] to-[#7BC142] text-white overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready for Quality Healthcare?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-2xl mx-auto leading-relaxed">
            Book your appointment today or contact us for immediate assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/book">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-cyan-50 text-[#4A9D9C] hover:from-cyan-50 hover:to-white px-10 py-7 text-lg rounded-full shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_70px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:scale-110 font-bold border-4 border-white/20"
              >
                <Calendar className="w-6 h-6 mr-2 text-[#4A9D9C]" />
                Book Appointment
              </Button>
            </Link>
            <a
              href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20an%20appointment%20at%20Zain%20Cura.%20Please%20share%20available%20time%20slots."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white/60 text-white hover:bg-white/20 hover:border-white px-10 py-7 text-lg rounded-full backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover-glow"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                WhatsApp Now
              </Button>
            </a>
            <a href="tel:+97145703423">
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white/60 text-white hover:bg-white/20 hover:border-white px-10 py-7 text-lg rounded-full backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105 font-semibold shadow-lg animate-pulse-ring hover-glow"
              >
                <Phone className="w-6 h-6 mr-2 animate-pulse" />
                Call
              </Button>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
