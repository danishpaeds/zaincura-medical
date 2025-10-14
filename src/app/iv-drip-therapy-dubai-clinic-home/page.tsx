import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Zap,
  Droplets,
  Heart,
  Shield,
  Activity,
  Sparkles,
  Wind,
  Brain,
  ArrowRight,
  Star,
  CheckCircle2,
  Dna,
  Baby,
  Phone
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata = {
  title: 'IV Drip Therapy Dubai | Premium Vitamin Infusions at Clinic & Home | Zain Cura',
  description: 'Experience premium IV drip therapy in Dubai with DHA-licensed professionals. Boost energy, immunity & hydration with scientifically-formulated vitamin infusions. Clinic, home & hotel service available.',
  keywords: 'iv drip dubai, iv therapy dubai, vitamin infusion dubai, hydration therapy dubai, wellness clinic dubai, iv drip at home dubai, mobile iv therapy dubai, nad+ therapy dubai, vitamin c infusion dubai, energy boost iv dubai, immunity iv therapy, detox iv drip dubai',
  openGraph: {
    title: 'IV Drip Therapy Dubai | Premium Vitamin Infusions | Zain Cura',
    description: 'Experience premium IV drip therapy in Dubai with DHA-licensed professionals. Boost energy, immunity & hydration with scientifically-formulated vitamin infusions.',
    url: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home'
  }
}

// FAQ Schema for Rich Snippets
const ivTherapyFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is IV drip therapy and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IV drip therapy delivers vitamins, minerals, and nutrients directly into your bloodstream via intravenous infusion. This bypasses the digestive system, ensuring 100% absorption and immediate availability to your cells. It's a safe, effective way to boost energy, immunity, hydration, and overall wellness."
      }
    },
    {
      "@type": "Question",
      "name": "Is IV therapy safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, when administered by qualified medical professionals. All our IV therapies are performed by DHA-licensed nurses and doctors using pharmaceutical-grade ingredients and sterile equipment. We conduct a medical screening before each treatment to ensure safety and suitability."
      }
    },
    {
      "@type": "Question",
      "name": "How long does an IV drip session take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most IV therapy sessions take between 30-90 minutes depending on the specific treatment. Our medical team will inform you of the expected duration during your consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer home service for IV therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We provide mobile IV therapy services across Dubai. Our medical professionals will come to your home, office, or hotel with all necessary equipment. Simply book via WhatsApp and we'll arrange a convenient time."
      }
    },
    {
      "@type": "Question",
      "name": "Which IV therapy is right for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best IV therapy depends on your individual health goals and needs. During your consultation, our medical team will assess your symptoms, lifestyle, and wellness objectives to recommend the most suitable treatment. You can also browse our therapy descriptions to learn more about each option."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I get IV therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frequency varies based on your therapy type and wellness goals. Some clients benefit from weekly sessions for acute needs, while others prefer monthly maintenance treatments. Our medical team will create a personalized treatment plan for optimal results."
      }
    }
  ]
};

const ivDrips = [
  {
    slug: "anti-stress-antioxidant",
    icon: Wind,
    title: "Anti-Stress & Antioxidant",
    tagline: "Recharge • Restore • Rebalance",
    description: "Combat stress and oxidative damage with high-dose Vitamin C, L-Glutamine, and B-complex vitamins.",
    color: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    borderColor: "border-blue-500/20",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
  {
    slug: "immune-boost-hydration",
    icon: Shield,
    title: "Immune Boost & Hydration",
    tagline: "Defend • Hydrate • Revive",
    description: "Strengthen immunity and restore hydration with Vitamin C, Zinc, NAC & essential electrolytes.",
    color: "from-emerald-500/10 via-green-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-500"
  },
  {
    slug: "energy-boost-fitness-support",
    icon: Zap,
    title: "Energy Boost & Fitness",
    tagline: "Perform • Recover • Excel",
    description: "Maximize performance and accelerate recovery with NAD+, L-Carnitine, and B-complex.",
    color: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
    borderColor: "border-orange-500/20",
    iconBg: "bg-gradient-to-br from-orange-500 to-amber-500"
  },
  {
    slug: "hair-loss-support",
    icon: Sparkles,
    title: "Hair Loss Support",
    tagline: "Nourish • Strengthen • Revitalize",
    description: "Promote healthy hair growth from within with Biotin, Vitamin D3, MSM & Zinc.",
    color: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    borderColor: "border-purple-500/20",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    slug: "gut-support",
    icon: Activity,
    title: "Gut Support & Detox",
    tagline: "Detox • Heal • Balance",
    description: "Repair gut lining and support digestive wellness with L-Glutamine, MSM & Methylfolate.",
    color: "from-teal-500/10 via-cyan-500/10 to-blue-500/10",
    borderColor: "border-teal-500/20",
    iconBg: "bg-gradient-to-br from-teal-500 to-cyan-500"
  },
  {
    slug: "memory-boost-iv",
    icon: Brain,
    title: "Memory Boost",
    tagline: "Focus • Memory • Clarity",
    description: "Enhance focus, mental sharpness, and recall with NAD+, Acetyl-L-Carnitine & B-Vitamins.",
    color: "from-indigo-500/10 via-violet-500/10 to-purple-500/10",
    borderColor: "border-indigo-500/20",
    iconBg: "bg-gradient-to-br from-indigo-500 to-violet-500"
  },
  {
    slug: "female-balance-iv",
    icon: Heart,
    title: "Female Balance",
    tagline: "Harmony • Vitality • Grace",
    description: "Restore hormonal balance and vitality with B-Complex, Magnesium, and amino acids.",
    color: "from-pink-500/10 via-rose-500/10 to-red-500/10",
    borderColor: "border-pink-500/20",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500"
  },
  {
    slug: "edta-chelation-iv",
    icon: Droplets,
    title: "EDTA Chelation",
    tagline: "Cleanse • Chelate • Renew",
    description: "Detoxify from heavy metals and improve circulation with EDTA, Glutathione & antioxidants.",
    color: "from-cyan-500/10 via-blue-500/10 to-indigo-500/10",
    borderColor: "border-cyan-500/20",
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500"
  },
  {
    slug: "cardio-support-iv",
    icon: Heart,
    title: "Cardio Support",
    tagline: "Circulate • Strengthen • Endure",
    description: "Support cardiovascular wellness with CoQ10, L-Carnitine, Magnesium & Taurine.",
    color: "from-red-500/10 via-orange-500/10 to-amber-500/10",
    borderColor: "border-red-500/20",
    iconBg: "bg-gradient-to-br from-red-500 to-orange-500"
  },
  {
    slug: "liver-detox-iv",
    icon: Droplets,
    title: "Liver Detox",
    tagline: "Purify • Restore • Revive",
    description: "Rejuvenate your liver with Glutathione, Alpha-Lipoic Acid & essential amino acids.",
    color: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
    borderColor: "border-green-500/20",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500"
  },
  {
    slug: "diabetic-support-iv",
    icon: Activity,
    title: "Diabetic Support",
    tagline: "Balance • Regulate • Reenergize",
    description: "Support glucose metabolism and nerve health with Alpha Lipoic Acid, Chromium & B-Vitamins.",
    color: "from-blue-500/10 via-indigo-500/10 to-violet-500/10",
    borderColor: "border-blue-500/20",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500"
  },
  {
    slug: "nad-cellular-recharge-iv",
    icon: Dna,
    title: "NAD+ Cellular Recharge",
    tagline: "Revitalize • Repair • Rejuvenate",
    description: "Advanced longevity therapy with NAD+ (100-500mg) to restore cellular energy, enhance mental clarity, and support healthy aging.",
    color: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
    borderColor: "border-violet-500/20",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500"
  },
  {
    slug: "pregnancy-nausea-hydration-iv",
    icon: Baby,
    title: "Pregnancy Nausea & Hydration",
    tagline: "Hydrate • Soothe • Nourish",
    description: "Pregnancy-safe IV therapy for morning sickness relief with Vitamin B6, electrolytes, and physician-approved antiemetics.",
    color: "from-pink-500/10 via-rose-500/10 to-pink-400/10",
    borderColor: "border-pink-500/20",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-400"
  }
]

export default function IVDripTherapyPage() {
  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ivTherapyFaqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Hero Section - Premium Full Width with Background */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80"
            alt="Premium IV Drip Therapy"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays for Premium Look */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B6AD]/95 via-[#008B84]/90 to-blue-600/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <Badge className="mb-8 bg-white/20 text-white hover:bg-white/30 border-white/30 backdrop-blur-md px-6 py-2 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            DHA-Licensed Medical Excellence
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Premium IV Drip Therapy
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Delivered to Your Doorstep
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Experience scientifically-formulated vitamin infusions delivered by expert medical professionals.
            <span className="block mt-2 text-cyan-100">Available at clinic, home, or hotel across Dubai</span>
          </p>

          {/* Stats Row - Glassmorphic */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-white mb-1">13+</div>
              <div className="text-sm text-cyan-100">Premium Therapies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-white mb-1">DHA</div>
              <div className="text-sm text-cyan-100">Licensed Clinic</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-cyan-100">Home Service</div>
            </div>
          </div>

          {/* CTA Buttons - Enhanced */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20IV%20Drip%20Therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots.">
              <Button size="lg" className="bg-gradient-to-r from-white to-cyan-50 text-[#00B6AD] hover:from-cyan-50 hover:to-white px-14 py-9 text-2xl rounded-full shadow-[0_20px_60px_rgba(255,255,255,0.5)] hover:shadow-[0_25px_70px_rgba(255,255,255,0.7)] transition-all duration-300 transform hover:scale-110 font-bold border-4 border-white/30">
                <Sparkles className="w-7 h-7 mr-3 animate-pulse" />
                Book IV Therapy Now
              </Button>
            </Link>
            <Link href="tel:+971523011150">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-14 py-9 text-2xl rounded-full shadow-[0_20px_60px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_70px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:scale-110 font-bold border-4 border-white/30">
                <Phone className="w-7 h-7 mr-3" />
                Call Now
              </Button>
            </Link>
          </div>

          {/* Secondary CTA */}
          <div className="mt-6">
            <Link href="#therapies">
              <Button size="lg" variant="outline" className="border-3 border-white/60 text-white hover:bg-white/30 hover:border-white px-10 py-6 text-lg rounded-full backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105 font-semibold shadow-lg">
                View All 13 Therapies
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">Same-Day Appointments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">No Insurance Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">Medical-Grade Ingredients</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>


      {/* IV Therapies Grid - Premium Enhanced */}
      <section id="therapies" className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#00B6AD] to-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-[#00B6AD]/10 to-blue-500/10 text-[#00B6AD] border-[#00B6AD]/20 px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              13 Premium Therapies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#333333] via-[#00B6AD] to-[#333333] bg-clip-text text-transparent mb-6">
              Our IV Therapy Menu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Clinically-formulated vitamin infusions tailored to your wellness goals,
              <span className="block mt-2 text-[#00B6AD] font-medium">delivered by DHA-licensed medical professionals</span>
            </p>
          </div>

          {/* Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ivDrips.map((drip, index) => {
              const IconComponent = drip.icon
              return (
                <Link key={drip.slug} href={`/iv-drip-therapy-dubai-clinic-home/${drip.slug}`}>
                  <div
                    className="group relative h-full"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {/* Glow Effect on Hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${drip.color.replace('/10', '/30')} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse`}></div>

                    {/* Main Card */}
                    <Card className={`relative h-full border-2 ${drip.borderColor} hover:border-opacity-50 bg-white backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(0,182,173,0.25)] cursor-pointer`}>
                      {/* Shine Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/50 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${drip.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>

                      {/* Content */}
                      <CardContent className="relative p-8">
                        {/* Icon with Floating Animation */}
                        <div className="relative mb-6">
                          <div className={`inline-flex items-center justify-center w-16 h-16 ${drip.iconBg} rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                            <IconComponent className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          {/* Icon Glow */}
                          <div className={`absolute inset-0 w-16 h-16 ${drip.iconBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#00B6AD] transition-colors duration-300">
                          {drip.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-base font-semibold bg-gradient-to-r from-[#00B6AD] to-blue-600 bg-clip-text text-transparent mb-4">
                          {drip.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors">
                          {drip.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-[#00B6AD] font-bold group-hover:translate-x-2 transition-transform duration-300">
                            <span>Learn More</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                          {/* Premium Badge */}
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B6AD] to-blue-500 group-hover:scale-150 transition-transform duration-300 shadow-lg shadow-[#00B6AD]/50"></div>
                        </div>
                      </CardContent>

                      {/* Bottom Gradient Border */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${drip.iconBg.replace('bg-gradient-to-br', '')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </Card>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Why Choose Zain Cura for IV Therapy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DHA-Licensed Professionals",
                desc: "All treatments administered by certified medical professionals with extensive IV therapy training",
                icon: Shield
              },
              {
                title: "Premium Ingredients",
                desc: "Pharmaceutical-grade vitamins, minerals, and amino acids sourced from trusted suppliers",
                icon: Star
              },
              {
                title: "Personalized Treatment",
                desc: "Medical consultation and customized formulations based on your health goals and needs",
                icon: Heart
              },
              {
                title: "Flexible Service",
                desc: "Available at our clinic, your home, office, or hotel across Dubai",
                icon: CheckCircle2,
  Dna,
  Baby
              },
              {
                title: "Evidence-Based",
                desc: "Scientifically-formulated therapies backed by clinical research and medical literature",
                icon: Brain
              },
              {
                title: "Comfort & Safety",
                desc: "Sterile equipment, comfortable environment, and continuous monitoring throughout treatment",
                icon: Activity
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#00B6AD]/30 hover:shadow-lg transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00B6AD]/10 rounded-full mb-4">
                    <IconComponent className="w-6 h-6 text-[#00B6AD]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                What is IV drip therapy and how does it work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                IV drip therapy delivers vitamins, minerals, and nutrients directly into your bloodstream via intravenous infusion. This bypasses the digestive system, ensuring 100% absorption and immediate availability to your cells. It's a safe, effective way to boost energy, immunity, hydration, and overall wellness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is IV therapy safe?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, when administered by qualified medical professionals. All our IV therapies are performed by DHA-licensed nurses and doctors using pharmaceutical-grade ingredients and sterile equipment. We conduct a medical screening before each treatment to ensure safety and suitability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How long does an IV drip session take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Most IV therapy sessions take between 30-90 minutes depending on the specific treatment. Our medical team will inform you of the expected duration during your consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Do you offer home service for IV therapy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes! We provide mobile IV therapy services across Dubai. Our medical professionals will come to your home, office, or hotel with all necessary equipment. Simply book via WhatsApp and we'll arrange a convenient time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Which IV therapy is right for me?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                The best IV therapy depends on your individual health goals and needs. During your consultation, our medical team will assess your symptoms, lifestyle, and wellness objectives to recommend the most suitable treatment. You can also browse our therapy descriptions to learn more about each option.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How often should I get IV therapy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Frequency varies based on your therapy type and wellness goals. Some clients benefit from weekly sessions for acute needs, while others prefer monthly maintenance treatments. Our medical team will create a personalized treatment plan for optimal results.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00B6AD] to-[#008B84] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Premium IV Therapy?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Book your personalized IV drip therapy session today
          </p>
          <Link href="https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20IV%20Drip%20Therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots.">
            <Button size="lg" className="bg-white text-[#00B6AD] hover:bg-gray-100 px-8 py-6 text-lg shadow-lg">
              Book via WhatsApp
            </Button>
          </Link>
        </div>
      </section>

      <MobileCTABar />
      </div>
    </>
  )
}
