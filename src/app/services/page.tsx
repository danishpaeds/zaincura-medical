import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Stethoscope,
  TestTube,
  Shield,
  Heart,
  Baby,
  Droplets,
  Home,
  Search,
  Brain,
  Zap,
  Activity,
  Calendar,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  MapPin,
  Apple,
  Sparkles,
  Users,
  TrendingUp,
  Star,
  Target,
  Microscope
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb, BreadcrumbConfigs } from '@/components/Breadcrumb'

export const metadata = {
  title: 'Medical Services Dubai - GP, Lab Tests, Home Doctor | Zain Cura Deira Clinic',
  description: 'Looking for a doctor in Dubai? Zain Cura Medical Center in Deira offers GP consultations, 50+ lab tests with same-day results, 24/7 home doctor visits, STD testing, IV drip therapy, gynecologist, and wellness checks. DHA licensed. Walk-ins welcome 9 AM-9 PM daily at Al Ghurair Centre. WhatsApp +971-52-301-1150 for pricing. Cash-friendly, no insurance needed.',
  keywords: 'medical services Dubai, healthcare Dubai, doctor Dubai, GP clinic Dubai, lab tests Dubai, home doctor Dubai, medical center Deira, clinic Al Ghurair, DHA licensed doctor, STD testing Dubai, IV drip Dubai, gynecologist Dubai, genetic testing Dubai, microbiome testing Dubai, wellness checks Dubai, same-day doctor Dubai, 24/7 home doctor, cash-friendly clinic Dubai, confidential medical services Dubai',
  openGraph: {
    title: 'Premium Medical Services Dubai | Complete Healthcare Solutions | Zain Cura',
    description: 'DHA licensed medical center in Deira offering GP consultations, lab tests, specialist care, and 24/7 home doctor visits. Same-day appointments available.',
    url: 'https://zaincura.com/services',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website',
    images: [{
      url: 'https://zaincura.com/og-services.jpg',
      width: 1200,
      height: 630,
      alt: 'Zain Cura Medical Services Dubai'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Medical Services Dubai | Zain Cura Medical Center',
    description: 'DHA licensed healthcare in Deira. GP, lab tests, specialists, 24/7 home visits.',
  },
  alternates: {
    canonical: 'https://zaincura.com/services'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Zain Cura Medical Center',
  description: 'Premium medical center in Dubai offering comprehensive healthcare services including GP consultations, laboratory testing, specialist care, IV drip therapy, and 24/7 home doctor visits',
  url: 'https://zaincura.com/services',
  telephone: '+971-45703423',
  priceRange: '$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Ghurair Centre, 6th Floor',
    addressLocality: 'Deira',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
    postalCode: '00000'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.2697',
    longitude: '55.3273'
  },
  medicalSpecialty: ['General Practice', 'Family Medicine', 'Laboratory Medicine', 'Gynecology', 'Nutrition', 'Preventive Medicine'],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'GP Consultation',
      description: 'Same-day general practitioner consultations for all ages'
    },
    {
      '@type': 'MedicalTest',
      name: 'Laboratory Testing',
      description: '50+ lab tests with same-day results and home collection service'
    },
    {
      '@type': 'MedicalTherapy',
      name: '24/7 Home Doctor Visits',
      description: 'Professional doctors visit your home, office, or hotel across Dubai'
    },
    {
      '@type': 'MedicalTest',
      name: 'Wellness Health Checks',
      description: 'Comprehensive health screening packages with digital reports'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'IV Drip Therapy',
      description: 'Vitamin infusions and hydration therapy at clinic or home'
    }
  ],
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    '@id': 'https://www.wikidata.org/wiki/Q612'
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'DHA License',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Dubai Health Authority'
    }
  }
}

const primaryServices = [
  {
    icon: Stethoscope,
    title: "GP / Family Medicine",
    description: "Get expert medical care from DHA-licensed general practitioners at our Deira clinic. We offer same-day appointments for acute illnesses, chronic disease management, health certificates, and preventive care. Our experienced doctors treat patients of all ages, from newborns to elderly, with walk-ins welcome 7 days a week from 9 AM to 9 PM.",
    href: "/gp-doctor-deira-dubai",
    badge: "Walk-in Welcome",
    features: ["Same-day appointments available", "Treats all ages from infants to seniors", "Chronic disease management (diabetes, hypertension)", "Medical certificates and sick leave notes"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: TestTube,
    title: "Laboratory Tests",
    description: "Access 50+ diagnostic tests at our in-house laboratory with same-day results. We offer blood tests, urine analysis, hormone panels, and specialized testing with digital reports sent via WhatsApp. Home collection service available across all Dubai areas. Tests include CBC, lipid profile, HbA1c, thyroid function, vitamin D, and more.",
    href: "/lab-tests-dubai-home-collection",
    badge: "Same-Day Results",
    features: ["50+ tests including CBC, thyroid, diabetes markers", "Home blood collection across all Dubai", "Digital reports via WhatsApp within hours", "No appointment needed for walk-in lab tests"],
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Home,
    title: "24/7 Home Doctor",
    description: "Need a doctor at home? Our qualified physicians visit your location 24/7 across Dubai, including Dubai Marina, JBR, Downtown, Arabian Ranches, and all emirates. Perfect for emergencies, elderly care, pediatric consultations, or when you can't visit our clinic. Doctor arrives within 60-90 minutes with full medical equipment.",
    href: "/home-doctor-dubai-24-7",
    badge: "24/7 Available",
    features: ["Available round-the-clock, even on holidays", "Covers all Dubai areas and neighboring emirates", "Pediatric and elderly care specialists", "Hotel and office visits for tourists and professionals"],
    color: "bg-red-100 text-red-600"
  }
]

const specializedServices = [
  {
    icon: Heart,
    title: "Wellness Health Checks",
    description: "Complete health screening packages analyzing 40+ biomarkers including cardiac risk, liver function, kidney health, diabetes markers, thyroid, vitamins, and cholesterol. Results come with AI-powered insights and doctor consultation. Ideal for annual checkups, pre-employment medicals, or preventive health monitoring.",
    href: "/wellness-health-checks-dubai",
    badge: "Smart Reports",
    features: ["Analyzes 40+ blood markers and vital signs", "Basic to Executive packages available", "AI-powered health insights with doctor review"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Shield,
    title: "STD Testing",
    description: "Completely confidential sexual health screening in private rooms with no judgment. We test for HIV, syphilis, hepatitis B/C, chlamydia, gonorrhea, and other STIs. Results in 24-48 hours via secure WhatsApp. Walk-ins welcome, no appointment needed. All tests performed by same-gender medical staff for your comfort.",
    href: "/std-testing-dubai-confidential",
    badge: "Confidential",
    features: ["100% private testing in separate rooms", "Results in 24-48 hours via secure messaging", "Tests for HIV, syphilis, hepatitis, chlamydia, gonorrhea"],
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: TestTube,
    title: "Semen Analysis",
    description: "WHO-standard fertility testing for men trying to conceive. Complete analysis includes sperm count, motility, morphology, volume, and pH. Private collection room with full discretion. Results ready in 2-3 hours with detailed report and doctor consultation included. No referral needed - direct walk-in or appointment available.",
    href: "/semen-analysis-dubai-fertility",
    badge: "Fertility Testing",
    features: ["WHO-certified analysis of count, motility, morphology", "Private collection room with complete privacy", "Results in 2-3 hours with doctor consultation"],
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Zap,
    title: "IV Drip Therapy",
    description: "Intravenous vitamin therapy for energy, immunity, hydration, and recovery. Popular drips include Immune Boost (Vitamin C, zinc), Energy & Performance (B-complex, amino acids), Beauty & Skin (glutathione, biotin), and Hangover Recovery. Sessions take 30-45 minutes at our clinic or we come to your home/hotel.",
    href: "/iv-drip-therapy-dubai-clinic-home",
    badge: "Clinic & Home",
    features: ["Immune boost, energy, beauty, and hangover drips", "Available at clinic or home/hotel service", "Sessions take 30-45 minutes"],
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Baby,
    title: "Female Gynecologist",
    description: "Women's healthcare by experienced female gynecologists for prenatal care, PCOS management, irregular periods, contraception, and fertility consultations. We provide pap smears, ultrasounds, and pregnancy monitoring in a comfortable private setting. Appointments available same-day. We accept most insurance plans and offer cash-friendly pricing.",
    href: "/gynecologist-dubai-female-doctor",
    badge: "Female Doctor",
    features: ["Prenatal care, PCOS, fertility, contraception", "Pap smears and gynecological ultrasounds", "Female doctors for comfortable consultations"],
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Apple,
    title: "Clinical Dietician",
    description: "Expert nutrition therapy by certified dieticians for weight management, diabetes diet control, PCOS, IBS, food allergies, and sports nutrition. Get personalized meal plans, grocery lists, and ongoing support via WhatsApp. Initial consultation includes body composition analysis and detailed dietary assessment.",
    href: "/clinical-dietician-dubai",
    badge: "Nutrition Expert",
    features: ["Weight loss, diabetes, PCOS, IBS diet plans", "Body composition analysis included", "Personalized meal plans with WhatsApp support"],
    color: "bg-lime-100 text-lime-600"
  }
]

const advancedTesting = [
  {
    icon: Search,
    title: "Genetic Testing",
    description: "Advanced DNA testing to assess your genetic risk for hereditary cancers (breast, ovarian, colon), cardiovascular disease, and metabolic disorders. Pharmacogenomics testing helps doctors prescribe the right medications based on your genetics. Carrier screening available for couples planning pregnancy. Simple cheek swab or blood sample, results in 2-3 weeks. Includes genetic counseling session.",
    href: "/genetic-testing-dubai",
    badge: "DNA Analysis",
    features: ["Hereditary cancer risk (BRCA1/2, Lynch syndrome)", "Pharmacogenomics for medication optimization", "Carrier screening for genetic conditions"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Droplets,
    title: "Microbiome Testing",
    description: "Comprehensive gut health analysis identifying bacteria, fungi, and parasites affecting digestion, immunity, and overall health. Helps diagnose IBS, SIBO, dysbiosis, and food sensitivities. Test includes personalized diet and probiotic recommendations. Simple stool sample collection at home with kit delivery. Results in 7-10 days with detailed report and dietician consultation.",
    href: "/microbiome-testing-dubai",
    badge: "Gut Health",
    features: ["Tests for IBS, SIBO, dysbiosis, parasites", "Personalized diet and probiotic recommendations", "Home collection kit with 7-10 day results"],
    color: "bg-teal-100 text-teal-600"
  }
]

const labCategories = [
  {
    title: "Routine Blood Tests",
    href: "/services/laboratory#routine",
    tests: ["CBC", "Metabolic Panel", "Lipid Profile", "Liver Function"]
  },
  {
    title: "Hormone Testing",
    href: "/services/laboratory#hormones",
    tests: ["Thyroid", "Testosterone", "Female Hormones", "PCOS Panel"]
  },
  {
    title: "Specialized Testing",
    href: "/services/laboratory#specialized",
    tests: ["Cardiac Risk", "Tumor Markers", "Allergy Panel", "Autoimmune"]
  }
]

export default function ServicesHubPage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* PREMIUM HERO SECTION */}
        <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 isolate">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80"
              alt="Premium Medical Services"
              className="w-full h-full object-cover scale-105"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            {/* Premium Gradient Overlays - Enhanced for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D7D7D]/95 via-[#4A9D9C]/92 to-[#7BC142]/88"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/15"></div>

            {/* Soft Vignette Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>

            {/* Animated gradient orbs - Floating effect */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-300/15 to-teal-400/15 rounded-full blur-3xl will-change-transform" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-300/10 to-emerald-400/10 rounded-full blur-3xl will-change-transform" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            {/* Top Stats Bar - Glass Morphism with Micro-Interactions - Mobile Optimized */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 animate-fade-in px-4 sm:px-6 md:px-8 max-w-6xl mx-auto will-change-transform">
              <div className="group backdrop-blur-md bg-white/15 border border-white/30 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 flex items-center gap-2 hover:bg-white/25 hover:border-white/50 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/25 flex items-center justify-center group-hover:bg-white/35 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300 whitespace-nowrap">DHA</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-white whitespace-nowrap">Licensed</p>
                </div>
              </div>

              <div className="group backdrop-blur-md bg-white/15 border border-white/30 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 flex items-center gap-2 hover:bg-white/25 hover:border-white/50 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/25 flex items-center justify-center group-hover:bg-white/35 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300 whitespace-nowrap">10,000+</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-white whitespace-nowrap">Patients</p>
                </div>
              </div>

              <div className="group backdrop-blur-md bg-white/15 border border-white/30 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 flex items-center gap-2 hover:bg-white/25 hover:border-white/50 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/25 flex items-center justify-center group-hover:bg-white/35 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <Microscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300 whitespace-nowrap">50+</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-white whitespace-nowrap">Services</p>
                </div>
              </div>

              <div className="group backdrop-blur-md bg-white/15 border border-white/30 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 flex items-center gap-2 hover:bg-white/25 hover:border-white/50 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/25 flex items-center justify-center group-hover:bg-white/35 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300 whitespace-nowrap">24/7</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-white whitespace-nowrap">Home Visits</p>
                </div>
              </div>
            </div>

            {/* Main Hero Content */}
            <div className="text-center max-w-5xl mx-auto will-change-transform">
              {/* Premium Badge - Mobile Optimized */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full backdrop-blur-md bg-white/15 border border-white/30 text-white mb-4 sm:mb-6 md:mb-8 animate-slide-up hover:bg-white/20 transition-all duration-300 max-w-[95%] sm:max-w-none shadow-lg">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="font-semibold text-[10px] sm:text-xs md:text-sm tracking-wide text-center">COMPREHENSIVE MEDICAL CARE</span>
                <Star className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              </div>

              {/* Massive Headline - Mobile Optimized */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-[1.2] sm:leading-[1.15] md:leading-[1.1] animate-slide-up [animation-delay:0.1s] drop-shadow-2xl px-4 sm:px-6 md:px-0 max-w-5xl mx-auto">
                Your Complete
                <span className="block mt-2 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))' }}>
                  Healthcare Solution
                </span>
              </h1>

              {/* Subtitle with Icons - Mobile Optimized */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 animate-slide-up [animation-delay:0.2s] px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-cyan-200 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">GP Clinic</span>
                </div>
                <span className="hidden sm:inline text-white/70">•</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Microscope className="w-4 h-4 md:w-5 md:h-5 text-cyan-200 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">Lab Testing</span>
                </div>
                <span className="hidden sm:inline text-white/70">•</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Home className="w-4 h-4 md:w-5 md:h-5 text-cyan-200 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">24/7 Home Visits</span>
                </div>
                <span className="hidden md:inline text-white/70">•</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-cyan-200 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">Specialist Care</span>
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed sm:leading-relaxed md:leading-loose animate-slide-up [animation-delay:0.3s] font-light px-4 sm:px-6 md:px-8">
                From routine checkups to advanced genetic testing, we provide world-class healthcare services at our modern clinic in <span className="font-bold text-white">Al Ghurair Centre, Deira</span> and through convenient home visits across all of Dubai.
              </p>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center mb-8 sm:mb-10 md:mb-12 animate-slide-up [animation-delay:0.4s] px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
                <Link href="/book" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-white to-cyan-50 text-[#4A9D9C] hover:from-cyan-50 hover:to-white px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg rounded-full shadow-[0_20px_60px_rgba(255,255,255,0.4)] hover:shadow-[0_25px_70px_rgba(255,255,255,0.6)] transition-all duration-300 transform hover:scale-105 font-bold border-2 sm:border-3 md:border-4 border-white/20">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
                    <span className="whitespace-nowrap">Book Appointment</span>
                  </Button>
                </Link>
                <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20get%20pricing%20information%20for%20medical%20services%20at%20Zain%20Cura.%20Please%20share%20details%20about%20GP%20consultations%2C%20lab%20tests%2C%20and%20wellness%20packages." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg rounded-full shadow-[0_20px_60px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_70px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:scale-105 font-bold border-2 sm:border-3 md:border-4 border-white/20 hover-glow">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
                    <span className="whitespace-nowrap">WhatsApp for Pricing</span>
                  </Button>
                </a>
              </div>

              {/* Trust Indicators - Mobile Optimized */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-white text-xs sm:text-sm md:text-base animate-slide-up [animation-delay:0.5s] px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-200 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">Same-Day</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-200 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">Cash-Friendly</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-200 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">Walk-ins Welcome</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-200 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">Digital Reports</span>
                </div>
              </div>
            </div>
          </div>


        </section>

        {/* Breadcrumb */}
        <section className="bg-white py-4 border-b border-gray-100 -mt-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Services' }
            ]} />
          </div>
        </section>

        {/* Quick Facts for AI Search */}
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl border-2 border-[#4A9D9C]/20 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Quick Facts About Zain Cura Medical Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#4A9D9C] uppercase tracking-wide">Location</p>
                  <p className="text-gray-900 font-medium">Al Ghurair Centre, 6th Floor, Deira, Dubai</p>
                  <p className="text-gray-600 text-sm">Near Al Rigga Metro Station</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#4A9D9C] uppercase tracking-wide">Clinic Hours</p>
                  <p className="text-gray-900 font-medium">7 Days: 9:00 AM - 9:00 PM</p>
                  <p className="text-gray-600 text-sm">Home visits available 24/7</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#4A9D9C] uppercase tracking-wide">GP Consultation</p>
                  <p className="text-gray-900 font-medium">Same-Day Appointments</p>
                  <p className="text-gray-600 text-sm">Walk-ins welcome, DHA-licensed doctors</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#4A9D9C] uppercase tracking-wide">Lab Tests</p>
                  <p className="text-gray-900 font-medium">50+ Tests Available</p>
                  <p className="text-gray-600 text-sm">Same-day results, home collection available</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#4A9D9C] uppercase tracking-wide">Home Doctor</p>
                  <p className="text-gray-900 font-medium">24/7 Availability</p>
                  <p className="text-gray-600 text-sm">All Dubai areas, 60-90 min arrival</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#4A9D9C] uppercase tracking-wide">Contact</p>
                  <p className="text-gray-900 font-medium">+971 4 570 3423</p>
                  <p className="text-gray-600 text-sm">WhatsApp: +971 52 301 1150</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#4A9D9C] uppercase tracking-wide">Wellness Checks</p>
                  <p className="text-gray-900 font-medium">Comprehensive Packages</p>
                  <p className="text-gray-600 text-sm">40+ biomarkers with doctor consultation</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#4A9D9C] uppercase tracking-wide">STD Testing</p>
                  <p className="text-gray-900 font-medium">100% Confidential</p>
                  <p className="text-gray-600 text-sm">Private testing, 24-48h results</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#4A9D9C] uppercase tracking-wide">Payment</p>
                  <p className="text-gray-900 font-medium">Cash-Friendly</p>
                  <p className="text-gray-600 text-sm">No insurance required, transparent pricing</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-700 text-lg">
                  <strong>DHA Licensed</strong> medical facility serving Dubai residents, expats, and tourists since establishment.
                  Specializing in general practice, laboratory diagnostics, women's health, nutrition, and preventive medicine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9D9C]/10 text-[#4A9D9C] mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium text-sm">MOST POPULAR SERVICES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Primary Healthcare Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Essential medical services for immediate care and routine health needs with same-day availability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {primaryServices.map((service, index) => (
                <Card key={index} className="h-full overflow-hidden border-2 border-gray-100 hover:border-[#4A9D9C] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 group">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                          <service.icon className="w-8 h-8" />
                        </div>
                        <Badge className="bg-[#4A9D9C] text-white text-xs px-3 py-1">
                          {service.badge}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4A9D9C] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#4A9D9C] flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <a
                          href={`https://wa.me/971523011150?text=${encodeURIComponent(`Hi! I'd like to learn about ${service.title} services and pricing at Zain Cura Medical Center. Can you share more details?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mb-3"
                        >
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp for Pricing
                          </Button>
                        </a>
                      </div>

                      <Link href={service.href} className="mt-3 flex items-center justify-center text-[#4A9D9C] font-medium text-sm hover:text-[#3A8D8C] transition-colors">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9D9C]/10 text-[#4A9D9C] mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium text-sm">SPECIALIST CARE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Specialized Medical Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Advanced healthcare services tailored for specific health conditions and wellness goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <Card key={index} className="h-full overflow-hidden border-2 border-gray-100 hover:border-[#4A9D9C] transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-md`}>
                          <service.icon className="w-7 h-7" />
                        </div>
                        <Badge variant="outline" className="text-xs border-[#4A9D9C] text-[#4A9D9C]">
                          {service.badge}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4A9D9C] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-[#4A9D9C]/10 text-[#4A9D9C] px-3 py-1.5 rounded-full font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <a
                          href={`https://wa.me/971523011150?text=${encodeURIComponent(`Hi! I'd like to learn about ${service.title} services and pricing at Zain Cura Medical Center. Can you share more details?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"

                        >
                          <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white text-xs">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            WhatsApp for Pricing
                          </Button>
                        </a>
                        <Link href={service.href} className="mt-2 inline-flex items-center text-[#4A9D9C] font-medium text-xs hover:text-[#3A8D8C] transition-colors">
                          View Details
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Testing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 mb-6">
                <Search className="w-4 h-4" />
                <span className="font-medium text-sm">CUTTING-EDGE DIAGNOSTICS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advanced Diagnostic Testing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                State-of-the-art testing for personalized health insights, disease prevention, and wellness optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advancedTesting.map((service, index) => (
                <Card key={index} className="h-full overflow-hidden border-2 border-gray-100 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 relative group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                          <service.icon className="w-8 h-8" />
                        </div>
                        <Badge className="text-xs bg-purple-600 text-white px-3 py-1">
                          {service.badge}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <a
                          href={`https://wa.me/971523011150?text=${encodeURIComponent(`Hi! I'd like to learn about ${service.title} services and pricing at Zain Cura Medical Center. Can you share more details?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"

                        >
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp for Pricing
                          </Button>
                        </a>
                      </div>

                      <Link href={service.href} className="mt-3 flex items-center justify-center text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory Services Quick Links */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9D9C]/10 text-[#4A9D9C] mb-6">
                <TestTube className="w-4 h-4" />
                <span className="font-medium text-sm">LABORATORY TESTING</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Lab Test Menu
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From routine blood work to specialized panels - all with same-day results and digital reports
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {labCategories.map((category, index) => (
                <Link key={index} href={category.href} className="block group">
                  <Card className="h-full border-2 border-gray-100 hover:border-[#4A9D9C] transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-[#4A9D9C]/10 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                        <TestTube className="w-6 h-6 text-[#4A9D9C]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#4A9D9C] transition-colors">
                        {category.title}
                      </h3>
                      <div className="space-y-2 mb-6">
                        {category.tests.map((test, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4A9D9C]"></div>
                            <span className="text-gray-600">{test}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-[#4A9D9C] font-semibold">
                        View All Tests
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services/laboratory">
                <Button size="lg" className="bg-[#4A9D9C] hover:bg-[#3A8D8C] text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all px-10 py-6">
                  View Complete Lab Menu
                  <TestTube className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works - Process Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9D9C]/10 text-[#4A9D9C] mb-6">
                <Target className="w-4 h-4" />
                <span className="font-medium text-sm">HOW IT WORKS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Getting Medical Care Made Simple
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From booking to treatment, here's what to expect when you visit Zain Cura Medical Center
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4A9D9C] to-[#3A8D8C] rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <span className="text-3xl font-black text-white">1</span>
                  </div>
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#4A9D9C]/20"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Book Appointment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call, WhatsApp, or walk in. Same-day slots available. No long waits - most patients seen within 15-30 minutes.
                </p>
              </div>

              <div className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <span className="text-3xl font-black text-white">2</span>
                  </div>
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#4A9D9C]/20"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Meet with DHA-licensed doctors who listen carefully, examine thoroughly, and explain your condition clearly.
                </p>
              </div>

              <div className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <span className="text-3xl font-black text-white">3</span>
                  </div>
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#4A9D9C]/20"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tests (if needed)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get lab tests done immediately in our in-house laboratory. Most results ready same day, sent via WhatsApp.
                </p>
              </div>

              <div className="text-center group">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <span className="text-3xl font-black text-white">4</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment & Follow-up</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive prescriptions, medical certificates, or treatment. Follow-up via WhatsApp or schedule next visit easily.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-[#4A9D9C]/5 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#4A9D9C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>No insurance hassles:</strong> Transparent cash pricing often lower than insurance co-pays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#4A9D9C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Same-day everything:</strong> Appointments, lab results, and treatment - no waiting days</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#4A9D9C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Digital-first:</strong> WhatsApp booking, digital reports, online follow-ups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#4A9D9C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Convenience:</strong> Central Deira location, 9 AM-9 PM hours, plus 24/7 home visits</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Patient Experience</h3>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "I needed blood tests urgently for a visa medical. Called at 10 AM, got tested by 11 AM, and received results on WhatsApp by 3 PM same day. The doctor was very professional and the clinic is spotless. Highly recommend!"
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">- Ahmed K., Dubai Marina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A9D9C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9D9C]/10 text-[#4A9D9C] mb-6">
                <Award className="w-4 h-4" />
                <span className="font-medium text-sm">WHY PATIENTS CHOOSE US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excellence in Healthcare
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Combining medical expertise, advanced technology, and patient-centered care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4A9D9C] to-[#3A8D8C] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">DHA Licensed</h3>
                <p className="text-gray-600 leading-relaxed">Certified medical professionals meeting Dubai Health Authority standards</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Same-Day Service</h3>
                <p className="text-gray-600 leading-relaxed">Rapid appointments and lab results for your convenience</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Home Care</h3>
                <p className="text-gray-600 leading-relaxed">Doctor visits to your home, office, or hotel anywhere in Dubai</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Privacy</h3>
                <p className="text-gray-600 leading-relaxed">Confidential healthcare with full discretion guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9D9C]/10 text-[#4A9D9C] mb-6">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium text-sm">VISIT US</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Medical Center
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Conveniently located in the heart of Deira at Al Ghurair Centre. Modern facilities with the latest medical equipment and same-day appointments available.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-[#4A9D9C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#4A9D9C]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Clinic Location</h4>
                      <p className="text-gray-600">Al Ghurair Centre, 6th Floor<br />Deira, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Clinic Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 09:00 - 21:00<br />Home Visits: 24/7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Contact</h4>
                      <p className="text-gray-600">Phone: +971-45703423<br />WhatsApp: +971-52301150</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-[#1A5F5F] via-[#2D7D7D] to-[#4A9D9C] p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden">
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0">
                  {/* Animated Gradient Orbs */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>

                  {/* Dot Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Premium Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border-2 border-white/30 text-white shadow-lg">
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                      <span className="font-bold text-sm tracking-widest">BOOK NOW</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-center text-white mb-4 leading-tight">
                    Book Your Service
                  </h3>
                  <p className="text-center text-white/95 mb-8 text-base md:text-lg font-light leading-relaxed">
                    Choose your preferred booking method - we're available 24/7 to assist you
                  </p>

                  {/* Premium Buttons Container */}
                  <div className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-6 mb-6">
                    <div className="space-y-4">
                      <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20a%20medical%20service%20at%20Zain%20Cura%20Medical%20Center.%20Please%20share%20available%20appointment%20slots%20for%20GP%2C%20Lab%20Tests%2C%20or%20other%20services." target="_blank" rel="noopener noreferrer">
                        <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white text-[#2D7D7D] hover:from-gray-50 hover:to-white px-6 py-7 text-base md:text-lg font-bold rounded-2xl shadow-[0_15px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-all duration-300 border-2 border-white/50 hover-glow-white">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
                          <span className="relative z-10">WhatsApp Booking</span>
                        </Button>
                      </a>
                      <a href="tel:+97145703423">
                        <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 hover:from-emerald-600 hover:to-green-600 text-white px-6 py-7 text-base md:text-lg font-bold rounded-2xl shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.6)] transform hover:scale-105 transition-all duration-300 border-2 border-white/30 animate-pulse-ring hover-glow">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Phone className="w-5 h-5 mr-3 relative z-10 animate-pulse" />
                          <span className="relative z-10">Call Clinic Now</span>
                        </Button>
                      </a>
                      <Link href="/book">
                        <Button className="w-full group bg-white/15 backdrop-blur-sm hover:bg-white/25 border-2 border-white/40 hover:border-white/60 text-white px-6 py-7 text-base md:text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 xl:my-[10px]">
                          <Calendar className="w-5 h-5 mr-3" />
                          <span>Online Booking</span>
                        </Button>
                      </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-6 pt-5 border-t border-white/20">
                      <div className="flex flex-wrap justify-center gap-4 text-white text-xs">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                          <span className="font-medium">Walk-ins Welcome</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                          <span className="font-medium">Same-Day Appointments</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                          <span className="font-medium">No Insurance Required</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9D9C]/10 text-[#4A9D9C] mb-6">
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium text-sm">FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Common Questions About Our Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Quick answers to help you understand our medical services in Dubai
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9D9C] text-white flex items-center justify-center text-sm font-bold">Q</span>
                  How do I get pricing information for services at Zain Cura Medical Center?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  For accurate pricing tailored to your specific needs, simply WhatsApp us at <strong>+971 52 301 1150</strong> and we'll provide an instant quote. We offer cash-friendly transparent pricing with same-day appointments available. Walk-ins are welcome from 9 AM to 9 PM, 7 days a week. Medical certificates and sick leave notes are included at no extra charge during your GP consultation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9D9C] text-white flex items-center justify-center text-sm font-bold">Q</span>
                  Do you offer home doctor visits in Dubai and what areas do you cover?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Yes, we provide <strong>24/7 home doctor visits across all Dubai areas</strong> including Dubai Marina, JBR, Downtown Dubai, Arabian Ranches, Jumeirah, Deira, Bur Dubai, and neighboring emirates. Our doctors arrive within 60-90 minutes with full medical equipment. WhatsApp us at <strong>+971 52 301 1150</strong> for pricing and availability. We also visit hotels and offices for tourists and business professionals who cannot leave their location.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9D9C] text-white flex items-center justify-center text-sm font-bold">Q</span>
                  What laboratory tests can I get and how quickly are results available?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  We offer <strong>50+ laboratory tests</strong> including complete blood count (CBC), lipid profile, HbA1c for diabetes, thyroid function (TSH, T3, T4), vitamin D, liver function, kidney function, and hormone panels. Most results are available the <strong>same day within 3-6 hours</strong> and sent to you via WhatsApp as digital reports. For complex tests like cultures or genetic testing, results take 2-3 days to 2 weeks. Home blood collection service is available across Dubai for AED 50.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9D9C] text-white flex items-center justify-center text-sm font-bold">Q</span>
                  Is STD testing confidential and how long until I get results?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Absolutely, all STD testing at Zain Cura is <strong>100% confidential</strong> with complete privacy. We use separate private rooms and same-gender medical staff for your comfort. No one else has access to your results except you. We test for HIV, syphilis, hepatitis B/C, chlamydia, gonorrhea, and other STIs. Results are typically ready in <strong>24-48 hours</strong> and sent via secure WhatsApp message. Walk-ins are welcome with no appointment needed. WhatsApp <strong>+971 52 301 1150</strong> for confidential pricing information.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9D9C] text-white flex items-center justify-center text-sm font-bold">Q</span>
                  Do you accept health insurance or is it cash payment only?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  We are <strong>cash-friendly</strong> and offer competitive prices without insurance requirements. However, we do work with select insurance providers and can provide detailed receipts for reimbursement claims with your insurance company. Most of our patients appreciate our transparent cash pricing as it's often lower than insurance co-pays and there's no waiting for approvals. We accept cash, credit cards, and bank transfers.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9D9C] text-white flex items-center justify-center text-sm font-bold">Q</span>
                  What is included in a wellness health check package?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Our wellness packages analyze <strong>40+ health biomarkers</strong> including complete blood count, lipid panel, diabetes screening (fasting glucose, HbA1c), liver and kidney function, thyroid hormones, vitamin D, B12, iron studies, and cardiac risk markers. You also get vital signs assessment (blood pressure, BMI, body fat percentage). We offer Basic, Advanced, and Executive packages to suit different needs. WhatsApp us at <strong>+971 52 301 1150</strong> to get a personalized package recommendation and pricing. All packages include doctor consultation and AI-powered health insights.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9D9C] text-white flex items-center justify-center text-sm font-bold">Q</span>
                  Where is Zain Cura Medical Center located and what are the clinic hours?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Zain Cura Medical Center is located on the <strong>6th Floor of Al Ghurair Centre in Deira, Dubai</strong>. This is a prime central location easily accessible by metro (Al Rigga station) and with ample parking. Our clinic is open <strong>7 days a week from 9:00 AM to 9:00 PM</strong> including weekends and holidays. For home visits, we're available 24/7 across all Dubai and UAE areas. You can reach us at <strong>+971 4 570 3423</strong> or WhatsApp <strong>+971 52 301 1150</strong>.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9D9C] text-white flex items-center justify-center text-sm font-bold">Q</span>
                  Can I get same-day appointments or do I need to book in advance?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  <strong>Same-day appointments are readily available</strong> at Zain Cura. You can book via WhatsApp, phone, or simply walk in without an appointment. Most patients are seen within 15-30 minutes of arrival. For specialized services like gynecology or dietician consultations, we recommend booking 1-2 days ahead to secure your preferred time slot, though same-day availability often exists. Laboratory tests need no appointment - just walk in during clinic hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Premium Design */}
        <section className="py-24 bg-gradient-to-br from-[#1A5F5F] via-[#2D7D7D] to-[#4A9D9C] text-white relative overflow-hidden">
          {/* Animated Background with Grid Pattern */}
          <div className="absolute inset-0">
            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-400/30 to-transparent rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Premium Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border-2 border-white/30 text-white shadow-lg hover:bg-white/20 transition-all">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="font-bold text-sm tracking-widest">PREMIUM HEALTHCARE SERVICES</span>
                <Award className="w-5 h-5 text-yellow-300" />
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-center leading-tight">
              <span className="block mb-2">Ready for Personalized</span>
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-emerald-100 bg-clip-text text-transparent drop-shadow-2xl">
                Health Advice?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl mb-12 text-center text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
              Book a consultation with our expert healthcare professionals today and experience world-class medical care
            </p>

            {/* Premium CTA Buttons Container */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-6">
                  {/* Book Appointment Button - Primary */}
                  <Link href="/book" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white text-[#2D7D7D] hover:from-gray-50 hover:to-white px-8 md:px-12 py-6 md:py-8 text-base md:text-xl font-bold rounded-2xl shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_70px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-all duration-300 border-2 border-white/50 hover-glow-white"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Calendar className="w-6 h-6 mr-3 relative z-10" />
                      <span className="relative z-10">Book Appointment</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                    </Button>
                  </Link>

                  {/* Call Now Button - Secondary Emphasis */}
                  <a href="tel:+97145703423" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 md:px-12 py-6 md:py-8 text-base md:text-xl font-bold rounded-2xl shadow-[0_20px_60px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_70px_rgba(16,185,129,0.6)] transform hover:scale-105 transition-all duration-300 border-2 border-white/30 animate-pulse-ring hover-glow"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Phone className="w-6 h-6 mr-3 relative z-10 animate-pulse" />
                      <span className="relative z-10">Call Now: +971 4 570 3423</span>
                    </Button>
                  </a>
                </div>

                {/* WhatsApp Option */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-white/80 text-sm mb-4">
                    <div className="h-px w-12 bg-white/30"></div>
                    <span className="font-medium">Or contact via</span>
                    <div className="h-px w-12 bg-white/30"></div>
                  </div>
                  <a
                    href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20get%20pricing%20information%20for%20your%20medical%20services%20at%20Zain%20Cura%20Medical%20Center.%20Can%20you%20share%20details%20about%20consultation%20fees%2C%20lab%20tests%2C%20and%20packages%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group"
                  >
                    <Button
                      size="lg"
                      className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white px-8 py-5 text-base md:text-lg font-bold rounded-xl border-2 border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      WhatsApp for Pricing
                      <span className="ml-2 text-sm opacity-80">+971 52 301 1150</span>
                    </Button>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex flex-wrap justify-center gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="text-sm font-medium">Same-Day Appointments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="text-sm font-medium">DHA Licensed Doctors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="text-sm font-medium">Walk-ins Welcome</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="text-sm font-medium">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-8">
              <p className="text-white/70 text-sm">
                <MapPin className="w-4 h-4 inline mr-1" />
                Al Ghurair Centre, 6th Floor, Deira, Dubai • Open 7 Days: 9 AM - 9 PM
              </p>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
