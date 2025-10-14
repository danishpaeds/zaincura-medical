import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  TestTube,
  Home,
  Clock,
  Shield,
  Activity,
  Heart,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  MapPin,
  Users,
  Star,
  Award,
  Stethoscope,
  Baby,
  Zap,
  DollarSign,
  FileText,
  TrendingUp,
  Sparkles,
  Download,
  Mail
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { QuoteForm } from '@/components/QuoteForm'

export const metadata = {
  title: 'Home Blood Collection Dubai | Most Affordable Lab Tests | Express Results & Smart Reports',
  description: 'Most affordable home blood collection in Dubai. Cash-friendly pricing, express same-day results, unique smart reports. Certified phlebotomists visit your home 24/7. Get instant quote.',
  keywords: 'home blood collection Dubai, affordable blood test Dubai, cheap lab tests Dubai, blood test at home Dubai, home phlebotomy Dubai, lab collection service Dubai, express blood test results Dubai, smart lab reports, cash friendly lab Dubai, same day blood test Dubai',
  openGraph: {
    title: 'Home Blood Collection Dubai | Most Affordable | Express Results',
    description: 'Dubai\'s most affordable home blood collection service. Cash-friendly, express results, smart digital reports. Certified phlebotomists 24/7.',
    url: 'https://zaincura.com/home-blood-collection-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Most Affordable Home Blood Collection Service in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/home-blood-collection-dubai'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

// FAQ Schema for Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does home blood collection cost in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer Dubai's most affordable home blood collection service with transparent cash-friendly pricing. Request a free quote via WhatsApp to get exact pricing for your specific tests. We're committed to being the most affordable option in Dubai."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I get my blood test results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide express results with most routine blood tests available same-day (within 6-8 hours). Specialized tests are available within 24-48 hours. All results are delivered digitally via our unique smart reports system."
      }
    },
    {
      "@type": "Question",
      "name": "What makes your lab reports 'smart reports'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our unique smart reports feature easy-to-understand visualizations, AI-powered insights, automatic flagging of abnormal values, trend tracking over time, and personalized health recommendations. Reports are delivered digitally via WhatsApp or email."
      }
    },
    {
      "@type": "Question",
      "name": "Do you accept cash payment for home blood collection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We are proudly cash-friendly with transparent pricing. We accept cash, card, and digital payments. No insurance required - direct transparent pricing for all services."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas in Dubai do you cover for home blood collection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide home blood collection service across all areas of Dubai including Downtown, Marina, JBR, Deira, Jumeirah, and all residential communities. 24/7 service available to your home, office, or hotel."
      }
    }
  ]
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Home Blood Collection Dubai - Zain Cura Medical',
  description: 'Dubai\'s most affordable home blood collection service with express results and unique smart reports. Cash-friendly pricing, certified phlebotomists, 24/7 availability.',
  url: 'https://zaincura.com/home-blood-collection-dubai',
  telephone: '+971-45703423',
  priceRange: '$',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  },
  availableService: {
    '@type': 'MedicalTest',
    name: 'Home Blood Collection',
    description: 'Affordable professional blood sample collection at patient home for laboratory testing with express results'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '347',
    bestRating: '5',
    worstRating: '1'
  }
}

const bloodTestCategories = [
  {
    title: "Routine Blood Tests",
    description: "Essential health monitoring tests",
    tests: ["Complete Blood Count (CBC)", "Basic Metabolic Panel", "Lipid Profile", "Liver Function Tests", "Kidney Function Tests", "Thyroid Function (TSH)"],
    turnaround: "Same day",
    icon: TestTube
  },
  {
    title: "Specialized Testing",
    description: "Advanced diagnostic testing",
    tests: ["Cardiac Risk Markers", "Tumor Markers", "Allergy Panel", "Autoimmune Testing", "Hormone Panels", "Inflammatory Markers"],
    turnaround: "24-48 hours",
    icon: Activity
  },
  {
    title: "Wellness Packages",
    description: "Comprehensive health screenings",
    tests: ["Executive Health Panel", "Annual Wellness Check", "Diabetes Screening", "Heart Health Package", "Women's Health Panel", "Men's Health Panel"],
    turnaround: "Same day",
    icon: Heart
  },
  {
    title: "Emergency Blood Tests",
    description: "Urgent diagnostic testing",
    tests: ["Emergency Glucose", "Cardiac Enzymes", "Infection Markers", "Blood Gas Analysis", "Toxicology Screen", "Emergency CBC"],
    turnaround: "2-4 hours",
    icon: Zap
  }
]

const collectionFeatures = [
  {
    icon: Home,
    title: "Convenient Home Service",
    description: "Professional phlebotomists visit your home, office, or hotel"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Blood collection service available around the clock"
  },
  {
    icon: Shield,
    title: "Sterile & Safe",
    description: "Medical-grade equipment with complete safety protocols"
  },
  {
    icon: Star,
    title: "Same Lab Quality",
    description: "Identical accuracy and turnaround as clinic collection"
  }
]

const serviceAreas = [
  "Downtown Dubai", "Dubai Marina", "JBR", "JLT", "Business Bay", "DIFC",
  "Deira", "Bur Dubai", "Jumeirah", "Al Barsha", "Dubai Hills", "Mirdif",
  "Arabian Ranches", "Motor City", "Sports City", "International City",
  "Dubai Investment Park", "Emirates Hills", "The Springs", "All Dubai Hotels"
]

const specializedTests = [
  {
    category: "Fertility Testing",
    tests: ["Hormone panels", "Ovulation monitoring", "Male fertility markers"]
  },
  {
    category: "Pediatric Testing",
    tests: ["Child-friendly collection", "Newborn screening", "Growth monitoring"]
  },
  {
    category: "Elderly Care",
    tests: ["Chronic disease monitoring", "Medication level checks", "Comfort-focused service"]
  },
  {
    category: "Corporate Health",
    tests: ["Employee wellness", "Pre-employment medicals", "Group health screening"]
  }
]

const affordabilityFeatures = [
  {
    icon: DollarSign,
    title: "Most Affordable in Dubai",
    description: "Transparent cash-friendly pricing - best value for quality lab tests"
  },
  {
    icon: Clock,
    title: "Express Results",
    description: "Same-day results for routine tests, digital delivery within hours"
  },
  {
    icon: Sparkles,
    title: "Unique Smart Reports",
    description: "AI-powered insights, easy visualizations, trend tracking, personalized recommendations"
  },
  {
    icon: Shield,
    title: "No Hidden Costs",
    description: "Transparent pricing, no insurance needed, pay directly what you see"
  }
]

const smartReportFeatures = [
  "Easy-to-understand visualizations with charts and graphs",
  "AI-powered health insights and personalized recommendations",
  "Automatic flagging of abnormal values with explanations",
  "Trend tracking - compare results over time",
  "Digital delivery via WhatsApp/Email within hours",
  "Downloadable PDF format for your records",
  "Doctor's notes and interpretation included",
  "Secure and confidential - HIPAA compliant"
]

export default function HomeBloodCollectionDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Premium Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&q=80"
              alt="Professional Home Blood Collection"
              className="w-full h-full object-cover"
            />
            {/* Premium Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/95 via-cyan-600/90 to-blue-600/85"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Animated gradient orbs */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Premium Badge */}
            <Badge className="mb-8 bg-white/20 text-white hover:bg-white/30 border-white/30 backdrop-blur-md px-6 py-2 text-sm">
              <Award className="w-4 h-4 mr-2" />
              Dubai's Most Affordable Lab Tests
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Home Blood Collection Dubai
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                Most Affordable • Express Results • Smart Reports
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
              Cash-friendly pricing • Same-day express results • Unique AI-powered smart reports
              <span className="block mt-2 text-yellow-100 font-medium">Certified phlebotomists visit your home, office, or hotel 24/7</span>
            </p>

            {/* Stats Row - Glassmorphic */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-cyan-100">Blood Tests</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold text-white mb-1">6-8h</div>
                <div className="text-sm text-cyan-100">Express Results</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-cyan-100">Home Service</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="#quote-form">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12 py-8 text-xl rounded-full shadow-[0_20px_60px_rgba(251,191,36,0.5)] hover:shadow-[0_25px_70px_rgba(251,191,36,0.7)] transition-all duration-300 transform hover:scale-110 font-bold border-4 border-white/30">
                  <FileText className="w-7 h-7 mr-3 animate-pulse" />
                  Get Instant Quote
                </Button>
              </a>
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20get%20a%20quote%20for%20home%20blood%20collection%20in%20Dubai.%20Please%20share%20your%20most%20affordable%20pricing%20and%20available%20time%20slots." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-8 text-xl rounded-full shadow-[0_20px_60px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_70px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:scale-110 font-bold border-4 border-white/30">
                  <MessageCircle className="w-7 h-7 mr-3" />
                  WhatsApp Quote
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Most Affordable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Cash Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Express Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Smart Reports</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Calendar className="w-6 h-6 text-white rotate-90" />
          </div>
        </section>

        {/* Why Most Affordable - Premium Section */}
        <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-teal-600/10 to-blue-600/10 text-teal-600 border-teal-600/20 px-6 py-2">
                <DollarSign className="w-4 h-4 mr-2 inline" />
                Best Value in Dubai
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Why We're Dubai's Most Affordable
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Premium quality lab tests at unbeatable prices
                <span className="block mt-2 text-teal-600 font-medium">Cash-friendly • Transparent • No hidden costs</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {affordabilityFeatures.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Card className="relative h-full border-2 border-gray-200 hover:border-teal-500/40 bg-white transition-all duration-300 group-hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="relative inline-block mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Cash Friendly Highlight */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center max-w-4xl mx-auto">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-3">💰 100% Cash-Friendly Service</h3>
              <p className="text-green-800 text-lg leading-relaxed">
                We believe in transparent, affordable healthcare. Pay directly with <strong>cash, card, or digital payment</strong> - no insurance required.
                Get the <strong>exact price upfront</strong> with no hidden fees. Most affordable lab tests in Dubai, guaranteed!
              </p>
            </div>
          </div>
        </section>

        {/* Smart Reports Section - NEW */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-purple-600 border-purple-600/20 px-6 py-2">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Exclusive Feature
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Unique Smart Reports Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Not just numbers - get AI-powered insights and easy-to-understand health reports
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white rounded-2xl border-2 border-purple-200 p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-purple-600" />
                    What Makes Our Reports "Smart"?
                  </h3>
                  <div className="space-y-4">
                    {smartReportFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-purple-500 to-blue-500 text-white border-0">
                  <CardContent className="p-8">
                    <Download className="w-12 h-12 mb-4" />
                    <h4 className="text-2xl font-bold mb-3">Digital Delivery</h4>
                    <p className="text-white/90 text-lg">
                      Receive your smart reports within <strong>6-8 hours</strong> via WhatsApp or Email.
                      No waiting in queues, no clinic visits needed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white border-0">
                  <CardContent className="p-8">
                    <Activity className="w-12 h-12 mb-4" />
                    <h4 className="text-2xl font-bold mb-3">Trend Tracking</h4>
                    <p className="text-white/90 text-lg">
                      Compare your results over time with visual charts.
                      See your health progress at a glance with AI-powered insights.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white border-0">
                  <CardContent className="p-8">
                    <Shield className="w-12 h-12 mb-4" />
                    <h4 className="text-2xl font-bold mb-3">Doctor Interpretation</h4>
                    <p className="text-white/90 text-lg">
                      Every report includes professional medical interpretation and
                      personalized health recommendations from our doctors.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Request Form - NEW PREMIUM */}
        <section id="quote-form" className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-6 py-2 shadow-lg">
                <FileText className="w-4 h-4 mr-2 inline" />
                Get Your Free Quote
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Request Your Instant Quote
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fill in the quick form below and get your personalized quote via WhatsApp instantly
              </p>
            </div>

            <Card className="border-2 border-teal-200 shadow-2xl bg-white/95 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <QuoteForm />
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-teal-600" />
                <span>Your information is secure and confidential</span>
              </div>
              <p>We'll send your quote via WhatsApp within 5 minutes • No obligation • Free quote</p>
            </div>
          </div>
        </section>

        {/* Blood Test Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Blood Test Menu Available at Home
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional home collection for all types of blood tests with same lab quality and accuracy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bloodTestCategories.map((category, index) => (
                <Card key={index} className="clinical-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {category.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {category.turnaround}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {category.tests.map((test, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">{test}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20a%20home%20blood%20collection%20service.%20Can%20you%20arrange%20a%20visit%3F" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp for This Test
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Home Blood Collection?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional phlebotomy service bringing lab-quality blood collection to your doorstep
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collectionFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Home Blood Collection Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple, professional process for safe blood sample collection at home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Collection</h3>
                <p className="text-gray-600">Choose your tests and schedule convenient collection time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phlebotomist Arrives</h3>
                <p className="text-gray-600">Certified professional arrives with sterile equipment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe Collection</h3>
                <p className="text-gray-600">Quick, professional blood sample collection at home</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Results Delivered</h3>
                <p className="text-gray-600">Secure digital results delivered same day</p>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Before Collection</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Follow any fasting instructions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Stay hydrated unless advised otherwise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Have your ID ready</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">During Collection</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Professional, gentle technique</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Sterile, single-use equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Quick 5-10 minute process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Home Collection Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tailored blood collection services for specific needs and populations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedTests.map((specialty, index) => (
                <Card key={index} className="clinical-card text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {specialty.category}
                    </h3>
                    <div className="space-y-2">
                      {specialty.tests.map((test, idx) => (
                        <div key={idx} className="text-sm text-gray-600">
                          • {test}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Blood Collection Areas in Dubai
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional phlebotomy service available across all areas of Dubai
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-teal-50 p-3 rounded-lg text-center">
                  <MapPin className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                  <span className="text-gray-700 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Laboratory & Home Care Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/services/laboratory">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <TestTube className="w-4 h-4 mr-2" />
                  Complete Lab Menu
                </Button>
              </Link>
              <Link href="/home-gp-consultation-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Home GP Consultation
                </Button>
              </Link>
              <Link href="/wellness-health-checks-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Wellness Health Checks
                </Button>
              </Link>
              <Link href="/pediatric-home-care-dubai">
                <Button variant="outline" className="w-full border-gray-300 justify-start">
                  <Baby className="w-4 h-4 mr-2" />
                  Pediatric Blood Tests
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our affordable home blood collection service
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                  How much does home blood collection cost in Dubai?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We offer Dubai's most affordable home blood collection service with transparent cash-friendly pricing.
                  Request a free quote via WhatsApp to get exact pricing for your specific tests. We're committed to being
                  the most affordable option in Dubai without compromising on quality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                  How quickly can I get my blood test results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We provide express results with most routine blood tests available same-day (within 6-8 hours).
                  Specialized tests are available within 24-48 hours. All results are delivered digitally via our unique
                  smart reports system to your WhatsApp or email.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                  What makes your lab reports 'smart reports'?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Our unique smart reports feature easy-to-understand visualizations, AI-powered insights, automatic flagging
                  of abnormal values, trend tracking over time, and personalized health recommendations. Reports are delivered
                  digitally via WhatsApp or email with doctor's interpretation included.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                  Do you accept cash payment for home blood collection?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes! We are proudly cash-friendly with transparent pricing. We accept cash, card, and digital payments.
                  No insurance required - direct transparent pricing for all services. You'll know the exact cost upfront with no hidden fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                  Which areas in Dubai do you cover for home blood collection?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We provide home blood collection service across all areas of Dubai including Downtown, Marina, JBR, Deira,
                  Jumeirah, and all residential communities. 24/7 service available to your home, office, or hotel anywhere in Dubai.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600">
                  Are your phlebotomists certified and experienced?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, all our phlebotomists are DHA-licensed, certified professionals with years of experience in blood collection.
                  They use sterile, medical-grade equipment and follow strict safety protocols to ensure a comfortable, safe experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Blood Tests? We Come to You!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Professional home blood collection service across Dubai. Skip the clinic visit
              and get the same quality lab results with the convenience of home service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20a%20home%20blood%20collection%20service.%20Can%20you%20arrange%20a%20visit%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp for Collection
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Blood Test
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <TestTube className="w-4 h-4" />
                <span>50+ blood tests</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Same-day results</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Certified phlebotomists</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}

