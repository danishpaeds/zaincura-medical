import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Apple,
  Scale,
  Heart,
  Brain,
  Activity,
  Shield,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  MapPin,
  Award,
  Star,
  TrendingUp,
  Users,
  Zap,
  Target,
  BookOpen,
  Utensils,
  Leaf,
  ChefHat,
  FileText,
  Clipboard,
  Stethoscope,
  ArrowRight,
  Baby,
  TestTube
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Clinical Dietician Dubai | Professional Nutrition Consultations | Weight Management',
  description: 'Professional clinical dietician in Dubai. Weight management, therapeutic diets, meal planning, nutrition consultations. DHA licensed nutritionist at Al Ghurair Centre, Deira.',
  keywords: 'clinical dietician Dubai, nutritionist Dubai, weight management Dubai, therapeutic diet Dubai, meal planning Dubai, nutrition consultation Dubai, dietician Deira',
  openGraph: {
    title: 'Clinical Dietician Dubai | Professional Nutrition & Weight Management',
    description: 'Expert nutrition consultations with clinical dietician in Dubai. Weight management, therapeutic diets, meal planning for optimal health.',
    url: 'https://zaincura.com/clinical-dietician-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/clinical-dietician-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Clinical Dietician Dubai - Professional Nutrition Services'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Dietician Dubai | Professional Nutrition',
    description: 'Expert nutrition consultations and weight management with clinical dietician.',
    images: ['https://zaincura.com/images/clinical-dietician-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/clinical-dietician-dubai'
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Zain Cura Medical Center - Clinical Dietician Dubai',
  description: 'Professional clinical dietician services in Dubai including weight management, therapeutic diets, nutrition consultations, and meal planning at Al Ghurair Centre, Deira',
  url: 'https://zaincura.com/clinical-dietician-dubai',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/clinical-dietician-dubai.jpg',
  telephone: '+971-45703423',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Ghurair Centre, 6th Floor',
    addressLocality: 'Deira',
    addressRegion: 'Dubai',
    addressCountry: 'AE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2630,
    longitude: 55.3117
  },
  openingHours: 'Mo-Su 08:00-22:00',
  medicalSpecialty: ['Clinical Nutrition', 'Dietetics', 'Weight Management', 'Therapeutic Nutrition'],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Weight Management Program'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Therapeutic Diet Planning'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Nutrition Consultation'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Meal Planning Service'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: ['AED', 'USD'],
  paymentAccepted: ['Cash', 'Credit Card'],
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  }
}

const nutritionServices = [
  {
    icon: Scale,
    title: "Weight Management Program",
    description: "Comprehensive weight loss and weight gain programs with personalized meal plans",
    badge: "Most Popular",
    features: ["BMI assessment", "Body composition analysis", "Customized meal plans", "Weekly follow-ups", "Lifestyle coaching", "Sustainable results"],
    color: "bg-green-100 text-green-600",
    popular: true
  },
  {
    icon: Heart,
    title: "Therapeutic Diet Planning",
    description: "Medical nutrition therapy for chronic conditions and health management",
    badge: "Medical Nutrition",
    features: ["Diabetes management", "Cardiac diet planning", "Kidney disease nutrition", "Liver health diets", "Hypertension control", "PCOS nutrition"],
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Apple,
    title: "General Nutrition Consultation",
    description: "Comprehensive nutritional assessment and personalized dietary guidance",
    badge: "Complete Assessment",
    features: ["Nutritional assessment", "Dietary analysis", "Supplement guidance", "Health goal setting", "Eating habit improvement", "Nutritional education"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Activity,
    title: "Sports Nutrition",
    description: "Performance nutrition for athletes and active individuals",
    badge: "Performance Focused",
    features: ["Pre/post workout nutrition", "Endurance fueling", "Muscle building diets", "Recovery nutrition", "Hydration planning", "Competition preparation"],
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Brain,
    title: "Child & Adolescent Nutrition",
    description: "Specialized nutrition guidance for growing children and teenagers",
    badge: "Pediatric Nutrition",
    features: ["Growth monitoring", "Picky eater solutions", "Teen weight management", "School lunch planning", "Nutrient deficiency correction", "Healthy habit formation"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Leaf,
    title: "Digestive Health Nutrition",
    description: "Specialized diets for digestive disorders and gut health optimization",
    badge: "Gut Health",
    features: ["IBS management", "FODMAP diet planning", "Acid reflux diets", "Inflammatory bowel disease", "Food intolerance guidance", "Gut healing protocols"],
    color: "bg-teal-100 text-teal-600"
  }
]

const conditions = [
  "Obesity & Overweight",
  "Type 2 Diabetes",
  "High Cholesterol",
  "Hypertension",
  "PCOS",
  "Thyroid Disorders",
  "Fatty Liver Disease",
  "Kidney Disease",
  "Cardiac Conditions",
  "Digestive Disorders",
  "Food Allergies",
  "Eating Disorders",
  "Malnutrition",
  "Metabolic Syndrome",
  "Osteoporosis",
  "Anemia"
]

const whyChooseNutrition = [
  {
    icon: Award,
    title: "DHA Licensed Dietician",
    description: "Certified clinical dietician with international qualifications"
  },
  {
    icon: Target,
    title: "Personalized Approach",
    description: "Customized nutrition plans based on your health goals and preferences"
  },
  {
    icon: Heart,
    title: "Evidence-Based Practice",
    description: "Scientific approach to nutrition with proven dietary interventions"
  },
  {
    icon: Users,
    title: "Comprehensive Support",
    description: "Ongoing guidance and motivation throughout your health journey"
  }
]

const processSteps = [
  {
    step: 1,
    title: "Initial Assessment",
    description: "Comprehensive evaluation of your health status, goals, and dietary habits",
    icon: Clipboard
  },
  {
    step: 2,
    title: "Custom Plan Creation",
    description: "Personalized nutrition plan designed for your specific needs and lifestyle",
    icon: FileText
  },
  {
    step: 3,
    title: "Implementation Support",
    description: "Guidance on meal preparation, shopping, and dietary changes",
    icon: ChefHat
  },
  {
    step: 4,
    title: "Progress Monitoring",
    description: "Regular follow-ups to track progress and adjust your nutrition plan",
    icon: TrendingUp
  }
]

const dietTypes = [
  {
    category: "Weight Management",
    plans: ["Low-calorie diets", "High-protein diets", "Intermittent fasting", "Mediterranean diet"]
  },
  {
    category: "Medical Nutrition",
    plans: ["Diabetic diet", "DASH diet", "Renal diet", "Cardiac diet"]
  },
  {
    category: "Specialized Diets",
    plans: ["Gluten-free", "Ketogenic", "Plant-based", "Anti-inflammatory"]
  },
  {
    category: "Performance Nutrition",
    plans: ["Endurance athlete", "Strength training", "Pre-competition", "Recovery nutrition"]
  }
]

const successMetrics = [
  {
    icon: Users,
    number: "2000+",
    label: "Patients Helped"
  },
  {
    icon: TrendingUp,
    number: "85%",
    label: "Success Rate"
  },
  {
    icon: Clock,
    number: "12+",
    label: "Years Experience"
  },
  {
    icon: Award,
    number: "4.9★",
    label: "Patient Rating"
  }
]

export default function ClinicalDieticianDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-green-600 text-white">DHA Licensed Clinical Dietician</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Clinical Dietician Dubai | Professional Nutrition & Weight Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Expert nutrition consultations with a clinical dietician in Dubai. Personalized weight
                management programs, therapeutic diets, and meal planning for optimal health. Located
                at Al Ghurair Centre, Deira with same-day appointments available.
              </p>

              {/* Trust Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">DHA Licensed • Evidence-Based Nutrition</span>
                </div>
                <p className="text-green-800 text-sm">
                  Same-day appointments • Personalized plans • Medical nutrition therapy • Al Ghurair Centre
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/book">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Nutrition Consultation
                  </Button>
                </Link>
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Dietician
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Appointment
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>DHA licensed dietician</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Same-day appointments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Personalized meal plans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Medical nutrition therapy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Nutrition Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive nutrition consultations and therapeutic diet planning for optimal health and wellness.
                Expert guidance for weight management, chronic conditions, and performance nutrition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nutritionServices.map((service, index) => (
                <Card key={index} className={`clinical-card h-full hover:scale-[1.02] transition-transform duration-200 ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
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

                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <Link href="/book">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Results in Nutrition Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our clinical dietician has helped thousands of patients achieve their health goals through evidence-based nutrition therapy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</div>
                  <p className="text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complementary Health Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Enhance your nutrition journey with our comprehensive medical services for complete wellness care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/gp-doctor-deira-dubai" className="group">
                <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Stethoscope className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      GP Consultation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Complete medical assessment to identify underlying health conditions affecting your nutrition needs
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/wellness-health-checks-dubai" className="group">
                <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      Wellness Health Checks
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive health screening to monitor your nutritional progress and overall wellness metrics
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/gynecologist-dubai-female-doctor" className="group">
                <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                      <Baby className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      Women's Health
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Specialized nutrition guidance for women's health, PCOS, pregnancy, and hormonal balance
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Medical Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Health Conditions We Address Through Nutrition
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our clinical dietician provides specialized nutrition therapy for various health conditions and wellness goals
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="bg-lime-50 p-4 rounded-lg text-center">
                  <Apple className="w-5 h-5 text-lime-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Our Process Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Our Nutrition Consultation Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A systematic approach to understanding your needs and creating a personalized nutrition plan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diet Types & Plans */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Diet Plans & Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Evidence-based diet plans tailored to your specific health needs and lifestyle requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dietTypes.map((category, index) => (
                <Card key={index} className="clinical-card text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.plans.map((plan, idx) => (
                        <div key={idx} className="text-sm text-gray-600">
                          • {plan}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Dietician */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Clinical Dietician?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience expert nutrition care with our qualified clinical dietician who focuses on evidence-based practice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseNutrition.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
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

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">What's Included in Your Consultation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Assessment & Analysis</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Comprehensive dietary assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Medical history review</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Body composition analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Lifestyle & habit evaluation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Plan & Support</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Personalized meal plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Nutritional education</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Follow-up appointments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Progress monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Visit Our Clinical Dietician in Dubai
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Located at Al Ghurair Centre in Deira, our clinical dietician provides expert
                  nutrition consultations with same-day appointments available. Experience
                  professional nutrition care in a convenient Dubai location.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">Al Ghurair Centre, 6th Floor, Deira, Dubai<br />Near Union Metro Station</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Hours</h4>
                      <p className="text-gray-600">Daily: 8:00 AM - 10:00 PM<br />Same-day appointments available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Qualifications</h4>
                      <p className="text-gray-600">DHA licensed clinical dietician<br />International nutrition certifications</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-lime-50 p-8 rounded-xl border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Nutrition Consultation</h3>
                <div className="space-y-4">
                  <p className="text-gray-800 mb-4">
                    Ready to start your journey to better health through nutrition?
                  </p>
                  <div className="space-y-3">
                    <Link href="/book">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment Online
                      </Button>
                    </Link>
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp for Quick Booking
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call to Schedule
                      </Button>
                    </a>
                  </div>
                  <p className="text-sm text-gray-700 text-center">
                    Same-day appointments • Walk-ins welcome • DHA licensed dietician
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Health Through Expert Nutrition
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Work with our DHA licensed clinical dietician to achieve your health goals through
              personalized nutrition plans, therapeutic diets, and expert guidance. Located in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation Now
                </Button>
              </Link>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Dietician
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>DHA licensed</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Same-day available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Personalized plans</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Proven results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Medical Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complement your nutrition journey with our comprehensive healthcare services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/gp-doctor-deira-dubai">
                <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">GP Consultation</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Complete health assessment to support your nutrition plan
                    </p>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      Same-day Available
                    </Badge>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/wellness-health-checks-dubai">
                <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TestTube className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Wellness Checks</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Comprehensive health screening with nutritional markers
                    </p>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Smart Reports
                    </Badge>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/lab-tests-dubai-home-collection">
                <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TestTube className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lab Tests</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Blood work to track nutrition and metabolic health
                    </p>
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      Home Collection
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Medical Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
