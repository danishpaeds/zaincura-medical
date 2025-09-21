import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Droplets,
  Activity,
  Brain,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  TrendingUp,
  Award,
  Star,
  FileText,
  Users,
  Zap,
  TestTube,
  Target
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Microbiome Testing Dubai | Gut Health Analysis | Digestive Wellness',
  description: 'Advanced microbiome testing Dubai. Gut health analysis, digestive wellness, IBS testing. Personalized probiotic & nutrition recommendations.',
  keywords: 'microbiome testing Dubai, gut health test Dubai, digestive health Dubai, IBS testing Dubai, SIBO test Dubai, gut bacteria analysis Dubai, probiotic recommendations Dubai',
  openGraph: {
    title: 'Microbiome Testing Dubai | Gut Health Analysis | Digestive Wellness',
    description: 'Advanced microbiome testing in Dubai. Comprehensive gut health analysis with personalized recommendations.',
    url: 'https://zaincura.com/microbiome-testing-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/microbiome-testing-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Microbiome Testing and Gut Health Analysis in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microbiome Testing Dubai | Gut Health Analysis',
    description: 'Advanced microbiome testing in Dubai. Comprehensive gut health analysis.',
    images: ['https://zaincura.com/images/microbiome-testing-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/microbiome-testing-dubai'
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
  '@type': 'MedicalClinic',
  name: 'Zain Cura Medical Center - Microbiome Testing Dubai',
  description: 'Advanced microbiome testing and gut health analysis services in Dubai for digestive wellness and personalized nutrition',
  url: 'https://zaincura.com/microbiome-testing-dubai',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/microbiome-testing-dubai.jpg',
  telephone: '+971-45703423',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Ghurair Centre, 6th Floor',
    addressLocality: 'Deira',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2699,
    longitude: 55.3181
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00'
    }
  ],
  medicalSpecialty: ['Gastroenterology', 'Functional Medicine', 'Nutritional Medicine'],
  availableService: [
    {
      '@type': 'MedicalTest',
      name: 'Microbiome Testing'
    },
    {
      '@type': 'MedicalTest',
      name: 'Gut Health Analysis'
    },
    {
      '@type': 'MedicalTest',
      name: 'Digestive Function Testing'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Nutritional Counseling'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: ['AED', 'USD'],
  paymentAccepted: ['Cash', 'Credit Card'],
  hasMap: 'https://maps.google.com/?q=Al+Ghurair+Centre+Dubai',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  }
}

const microbiomeTests = [
  {
    title: "Comprehensive Gut Microbiome",
    description: "Complete gut bacteria analysis for optimal digestive health",
    features: [
      "Bacterial diversity analysis",
      "Beneficial vs harmful bacteria",
      "Digestive function markers",
      "Inflammation indicators",
      "Personalized probiotic plan",
      "Dietary recommendations"
    ],
    duration: "2-3 weeks",
    icon: Droplets,
    popular: true
  },
  {
    title: "IBS & SIBO Analysis",
    description: "Specialized testing for irritable bowel and bacterial overgrowth",
    features: [
      "SIBO bacterial markers",
      "IBS-specific microbes",
      "Methane & hydrogen levels",
      "Digestive enzyme function",
      "Food sensitivity indicators",
      "Treatment protocol"
    ],
    duration: "2-3 weeks",
    icon: Activity
  },
  {
    title: "Digestive Health Panel",
    description: "Comprehensive digestive system function assessment",
    features: [
      "Microbiome diversity",
      "Digestive enzymes",
      "Intestinal permeability",
      "Inflammation markers",
      "Nutrient absorption",
      "pH balance"
    ],
    duration: "1-2 weeks",
    icon: Heart
  },
  {
    title: "Immune-Microbiome Connection",
    description: "Gut-immune system interaction analysis",
    features: [
      "Immune-modulating bacteria",
      "Autoimmune risk markers",
      "Inflammatory response",
      "Allergy-related microbes",
      "Immune optimization",
      "Supplement guidance"
    ],
    duration: "2-3 weeks",
    icon: Shield
  },
  {
    title: "Weight Management Microbiome",
    description: "Metabolism and weight-related gut bacteria analysis",
    features: [
      "Metabolism bacteria",
      "Calorie extraction efficiency",
      "Weight management microbes",
      "Blood sugar regulation",
      "Appetite hormones",
      "Personalized diet plan"
    ],
    duration: "2-3 weeks",
    icon: TrendingUp
  },
  {
    title: "Brain-Gut Axis Analysis",
    description: "Mental health and gut microbiome connection",
    features: [
      "Mood-related bacteria",
      "Neurotransmitter production",
      "Stress response markers",
      "Sleep quality indicators",
      "Cognitive function support",
      "Mental wellness plan"
    ],
    duration: "2-3 weeks",
    icon: Brain
  }
]

const gutHealthBenefits = [
  {
    icon: Activity,
    title: "Improved Digestion",
    description: "Optimize digestive function and nutrient absorption"
  },
  {
    icon: Shield,
    title: "Stronger Immunity",
    description: "70% of immune system is in your gut"
  },
  {
    icon: Brain,
    title: "Better Mental Health",
    description: "Gut-brain axis affects mood and cognition"
  },
  {
    icon: Target,
    title: "Weight Management",
    description: "Gut bacteria influence metabolism and weight"
  }
]

const conditions = [
  "IBS (Irritable Bowel Syndrome)",
  "SIBO (Small Intestinal Bacterial Overgrowth)",
  "Bloating & Gas",
  "Constipation",
  "Diarrhea",
  "Food Intolerances",
  "Leaky Gut",
  "Inflammatory Bowel Disease",
  "Acid Reflux",
  "Chronic Fatigue",
  "Skin Conditions",
  "Autoimmune Issues"
]

const testingProcess = [
  {
    step: 1,
    title: "Order Test Kit",
    description: "Receive home collection kit with instructions"
  },
  {
    step: 2,
    title: "Collect Sample",
    description: "Simple stool sample collection at home"
  },
  {
    step: 3,
    title: "Lab Analysis",
    description: "Advanced DNA sequencing of gut bacteria"
  },
  {
    step: 4,
    title: "Personalized Report",
    description: "Detailed results with action plan"
  }
]

export default function MicrobiomeTestingDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-teal-600 text-white">Advanced Gut Health Analysis</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Microbiome Testing Dubai | Gut Health Analysis for Digestive Wellness
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Advanced microbiome testing in Dubai to optimize your gut health. Comprehensive
                analysis of gut bacteria with personalized probiotic and nutrition recommendations.
                Resolve digestive issues, boost immunity, and improve overall wellness.
              </p>

              {/* Trust Badge */}
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Droplets className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold text-teal-900">Your Gut Health Matters</span>
                </div>
                <p className="text-teal-800 text-sm">
                  DNA sequencing technology • Personalized recommendations • Science-based solutions • Home collection
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp for Gut Testing
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Microbiome Test
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>DNA sequencing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Home collection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>2-3 week results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Action plan included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Microbiome Tests Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Microbiome Testing Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From digestive health to weight management, our microbiome tests provide
                deep insights into your gut health with actionable recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microbiomeTests.map((test, index) => (
                <Card key={index} className={`clinical-card h-full ${test.popular ? 'ring-2 ring-teal-500' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <test.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      {test.popular && (
                        <Badge className="bg-teal-500 text-white">Most Popular</Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {test.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {test.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {test.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Results: {test.duration}</span>
                    </div>

                    <div className="space-y-3">
                      <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp for Info
                        </Button>
                      </a>
                      <Link href="/book">
                        <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Test
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gut Health Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Your Gut Health Matters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your gut microbiome affects every aspect of your health, from digestion
                to immunity, mental health, and weight management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {gutHealthBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">The Gut-Health Connection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">Physical Health</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                      <span>Nutrient absorption and energy production</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                      <span>Immune system regulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                      <span>Inflammation control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                      <span>Metabolic health</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">Mental Wellness</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                      <span>Mood and anxiety regulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                      <span>Cognitive function support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                      <span>Sleep quality improvement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                      <span>Stress response management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple Home Testing Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Test your gut microbiome from the comfort of your home with our easy collection kit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {testingProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
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

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Ready to discover your gut health status?
              </p>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order Your Test Kit Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Conditions We Address */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conditions We Help Address
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Microbiome testing can provide insights and solutions for various digestive and health conditions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <Activity className="w-5 h-5 text-teal-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Included in Your Report
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive analysis with actionable recommendations for improving your gut health.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bacterial Analysis</h3>
                    <p className="text-gray-600">
                      Complete breakdown of your gut bacteria composition, diversity scores,
                      and comparison to healthy ranges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Insights</h3>
                    <p className="text-gray-600">
                      Understanding of how your microbiome affects digestion, immunity,
                      metabolism, and mental health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Plan</h3>
                    <p className="text-gray-600">
                      Custom probiotic recommendations, dietary modifications,
                      and lifestyle changes based on your results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">Sample Report Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 mr-3" />
                    <span className="text-teal-800">Microbiome diversity score and health rating</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 mr-3" />
                    <span className="text-teal-800">Beneficial vs harmful bacteria breakdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 mr-3" />
                    <span className="text-teal-800">Personalized probiotic strains recommendation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 mr-3" />
                    <span className="text-teal-800">Foods to eat and avoid list</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 mr-3" />
                    <span className="text-teal-800">Supplement recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 mr-3" />
                    <span className="text-teal-800">3-month improvement protocol</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Microbiome Testing FAQs
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How accurate is microbiome testing?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our tests use advanced DNA sequencing technology with over 99% accuracy
                    in identifying bacterial species and their relative abundance in your gut.
                  </p>
                </CardContent>
              </Card>

              <Card className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do I collect the sample?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sample collection is simple and can be done at home. The kit includes
                    detailed instructions and all necessary materials for hygienic collection.
                  </p>
                </CardContent>
              </Card>

              <Card className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How long until I see improvements?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Many people notice improvements in digestion and energy within 2-4 weeks
                    of following their personalized recommendations. Full microbiome rebalancing
                    typically takes 3-6 months.
                  </p>
                </CardContent>
              </Card>

              <Card className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Should I retest my microbiome?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We recommend retesting after 3-6 months to track improvements and adjust
                    your protocol. Your microbiome changes with diet and lifestyle modifications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Start Your Gut Health Journey
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover the key to better health through microbiome testing.
                  Get personalized insights and solutions for optimal gut health.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Scientific Accuracy</h4>
                      <p className="text-gray-600">Advanced DNA sequencing technology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Support</h4>
                      <p className="text-gray-600">Nutritionist consultation available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Actionable Results</h4>
                      <p className="text-gray-600">Clear recommendations you can implement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">Order Microbiome Test</h3>
                <div className="space-y-4">
                  <p className="text-teal-800 mb-4">
                    Start improving your gut health today:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp for Test Kit
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call for Consultation
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-teal-700 text-center">
                    Home collection • Personalized report • Action plan included
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Services</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/wellness-health-checks-dubai">
                <Button variant="outline" className="border-gray-300">
                  <Heart className="w-4 h-4 mr-2" />
                  Wellness Health Checks
                </Button>
              </Link>
              <Link href="/genetic-testing-dubai">
                <Button variant="outline" className="border-gray-300">
                  <Brain className="w-4 h-4 mr-2" />
                  Genetic Testing
                </Button>
              </Link>
              <Link href="/services/laboratory">
                <Button variant="outline" className="border-gray-300">
                  <TestTube className="w-4 h-4 mr-2" />
                  Laboratory Tests
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Health Through Your Gut
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Advanced microbiome testing in Dubai with personalized solutions.
              Optimize your gut health for better digestion, immunity, and overall wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Gut Health Journey
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Test Kit
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <TestTube className="w-4 h-4" />
                <span>DNA sequencing</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Personalized report</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Action plan included</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
