import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  Shield,
  Heart,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Activity,
  Award,
  Star,
  FileText,
  Users,
  Zap,
  TrendingUp,
  Brain
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Genetic Testing Dubai | DNA Analysis | Hereditary Health Screening',
  description: 'Advanced genetic testing Dubai. Hereditary cancer screening, pharmacogenomics, carrier testing. Personalized health insights with counseling.',
  keywords: 'genetic testing Dubai, DNA test Dubai, hereditary cancer screening Dubai, BRCA testing Dubai, pharmacogenomics Dubai, carrier screening Dubai, genetic counseling Dubai',
  openGraph: {
    title: 'Genetic Testing Dubai | DNA Analysis | Hereditary Health Screening',
    description: 'Advanced genetic testing in Dubai. Hereditary cancer screening, pharmacogenomics, personalized health insights.',
    url: 'https://zaincura.com/genetic-testing-dubai',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/genetic-testing-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'Genetic Testing and DNA Analysis in Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genetic Testing Dubai | DNA Analysis',
    description: 'Advanced genetic testing in Dubai. Hereditary health screening with personalized insights.',
    images: ['https://zaincura.com/images/genetic-testing-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/genetic-testing-dubai'
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
  name: 'Zain Cura Medical Center - Genetic Testing Dubai',
  description: 'Advanced genetic testing and DNA analysis services in Dubai for hereditary health screening and personalized medicine',
  url: 'https://zaincura.com/genetic-testing-dubai',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/genetic-testing-dubai.jpg',
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
  medicalSpecialty: ['Medical Genetics', 'Genomic Medicine', 'Preventive Medicine'],
  availableService: [
    {
      '@type': 'MedicalTest',
      name: 'Genetic Testing'
    },
    {
      '@type': 'MedicalTest',
      name: 'DNA Analysis'
    },
    {
      '@type': 'MedicalTest',
      name: 'Hereditary Cancer Screening'
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Genetic Counseling'
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

const geneticTests = [
  {
    title: "Hereditary Cancer Risk Panel",
    description: "Comprehensive screening for genetic cancer predisposition",
    features: [
      "BRCA1/BRCA2 gene analysis",
      "Lynch syndrome markers",
      "50+ cancer-related genes",
      "Risk assessment for breast, ovarian, colorectal cancers",
      "Family risk evaluation",
      "Genetic counseling included"
    ],
    duration: "2-3 weeks",
    icon: Shield,
    popular: true
  },
  {
    title: "Pharmacogenomics Testing",
    description: "Personalized medication response based on your DNA",
    features: [
      "Drug metabolism analysis",
      "Medication efficacy prediction",
      "Adverse reaction risk",
      "Dosage optimization",
      "100+ medication insights",
      "Lifetime validity"
    ],
    duration: "1-2 weeks",
    icon: Brain
  },
  {
    title: "Carrier Screening Panel",
    description: "Genetic carrier status for family planning",
    features: [
      "300+ genetic conditions",
      "Recessive disorder screening",
      "Couple compatibility testing",
      "Pre-conception planning",
      "Ethnic-specific conditions",
      "Counseling support"
    ],
    duration: "2-3 weeks",
    icon: Users
  },
  {
    title: "Cardiovascular Genetics",
    description: "Genetic risk for heart disease and related conditions",
    features: [
      "Familial hypercholesterolemia",
      "Cardiomyopathy genes",
      "Arrhythmia risk factors",
      "Blood clotting disorders",
      "Hypertension genetics",
      "Prevention strategies"
    ],
    duration: "2-3 weeks",
    icon: Heart
  },
  {
    title: "Nutrigenomics Panel",
    description: "DNA-based nutrition and lifestyle optimization",
    features: [
      "Nutrient metabolism",
      "Food sensitivities",
      "Weight management genes",
      "Exercise response",
      "Vitamin requirements",
      "Personalized diet plan"
    ],
    duration: "1-2 weeks",
    icon: Activity
  },
  {
    title: "Whole Exome Sequencing",
    description: "Comprehensive genetic analysis for complex conditions",
    features: [
      "20,000+ gene analysis",
      "Rare disease diagnosis",
      "Unexplained symptoms",
      "Family trio testing",
      "Clinical interpretation",
      "Ongoing reanalysis"
    ],
    duration: "4-6 weeks",
    icon: Search
  }
]

const whyGeneticTesting = [
  {
    icon: TrendingUp,
    title: "Preventive Healthcare",
    description: "Identify health risks before symptoms appear"
  },
  {
    icon: Brain,
    title: "Personalized Medicine",
    description: "Treatments tailored to your genetic profile"
  },
  {
    icon: Shield,
    title: "Family Protection",
    description: "Understand hereditary risks for your family"
  },
  {
    icon: FileText,
    title: "Informed Decisions",
    description: "Make evidence-based health and lifestyle choices"
  }
]

const testingProcess = [
  {
    step: 1,
    title: "Consultation",
    description: "Discuss your health history and testing goals"
  },
  {
    step: 2,
    title: "Sample Collection",
    description: "Simple saliva or blood sample at our clinic"
  },
  {
    step: 3,
    title: "DNA Analysis",
    description: "Advanced sequencing in certified laboratories"
  },
  {
    step: 4,
    title: "Results & Counseling",
    description: "Comprehensive report with genetic counseling"
  }
]

const conditions = [
  "Breast Cancer (BRCA1/2)",
  "Ovarian Cancer",
  "Colorectal Cancer",
  "Lynch Syndrome",
  "Heart Disease",
  "Diabetes Risk",
  "Alzheimer's Risk",
  "Parkinson's Disease",
  "Cystic Fibrosis",
  "Sickle Cell Disease",
  "Thalassemia",
  "Rare Genetic Disorders"
]

export default function GeneticTestingDubai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Optimized for Ads */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-purple-600 text-white">Advanced DNA Analysis</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Genetic Testing Dubai | DNA Analysis for Personalized Health
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Advanced genetic testing in Dubai for hereditary cancer screening, pharmacogenomics,
                and personalized health insights. Understand your DNA to prevent disease and optimize
                your health with genetic counseling included.
              </p>

              {/* Trust Badge */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Search className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-900">Unlock Your Genetic Blueprint</span>
                </div>
                <p className="text-purple-800 text-sm">
                  CLIA-certified labs • Genetic counseling included • 99.9% accuracy • Confidential results
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp for Genetic Testing
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Genetics Team
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>CLIA-certified labs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Genetic counseling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>99.9% accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Confidential</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Genetic Tests Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Genetic Testing Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From cancer risk assessment to personalized medicine, our genetic tests provide
                actionable insights for your health and your family's future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {geneticTests.map((test, index) => (
                <Card key={index} className={`clinical-card h-full ${test.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <test.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      {test.popular && (
                        <Badge className="bg-purple-500 text-white">Most Popular</Badge>
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
                        <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
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

        {/* Why Genetic Testing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Genetic Testing?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Genetic testing empowers you with knowledge to make informed health decisions
                and take preventive action for a healthier future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyGeneticTesting.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-600" />
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
          </div>
        </section>

        {/* Testing Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple Genetic Testing Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From consultation to results, we guide you through every step of your genetic testing journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {testingProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
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

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">What Makes Our Genetic Testing Different?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Advanced Technology</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Next-generation sequencing technology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>CLIA-certified international laboratories</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>99.9% analytical accuracy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Comprehensive Support</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Board-certified genetic counselors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Detailed interpretation reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2" />
                      <span>Ongoing support and reanalysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Screened */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conditions We Screen For
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our genetic tests screen for hundreds of hereditary conditions and health risks.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <Shield className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                  <span className="text-gray-700 text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Plus hundreds more genetic conditions and predispositions
              </p>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask About Specific Conditions
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Genetic Testing FAQs
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Is genetic testing covered by insurance?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Some genetic tests may be covered by insurance, especially if medically indicated.
                    We provide detailed invoices for insurance reimbursement claims.
                  </p>
                </CardContent>
              </Card>

              <Card className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How accurate are genetic test results?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our genetic tests have 99.9% analytical accuracy. All tests are performed in
                    CLIA-certified laboratories with rigorous quality control standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Is my genetic information kept confidential?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, your genetic information is completely confidential and protected by strict
                    privacy laws. We never share your data without explicit consent.
                  </p>
                </CardContent>
              </Card>

              <Card className="clinical-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Do I need genetic counseling?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Genetic counseling is included with all our tests to help you understand your
                    results and make informed health decisions based on your genetic profile.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Start Your Genetic Testing Journey
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover your genetic blueprint and take control of your health future.
                  Professional genetic testing with counseling support at every step.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">International Standards</h4>
                      <p className="text-gray-600">CLIA-certified labs with global quality standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Counseling</h4>
                      <p className="text-gray-600">Board-certified genetic counselors included</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Complete Privacy</h4>
                      <p className="text-gray-600">Your genetic data is secure and confidential</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">Book Genetic Consultation</h3>
                <div className="space-y-4">
                  <p className="text-purple-800 mb-4">
                    Start with a consultation to determine the right genetic test for you:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Genetics Team
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call for Consultation
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-purple-700 text-center">
                    Genetic counseling • Personalized insights • Prevention planning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Services</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/wellness-health-checks-dubai">
                <Button variant="outline" className="border-gray-300">
                  <Heart className="w-4 h-4 mr-2" />
                  Wellness Health Checks
                </Button>
              </Link>
              <Link href="/services/laboratory">
                <Button variant="outline" className="border-gray-300">
                  <Activity className="w-4 h-4 mr-2" />
                  Laboratory Tests
                </Button>
              </Link>
              <Link href="/microbiome-testing-dubai">
                <Button variant="outline" className="border-gray-300">
                  <Search className="w-4 h-4 mr-2" />
                  Microbiome Testing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unlock Your Genetic Potential Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Advanced genetic testing in Dubai with personalized health insights.
              Take control of your health future with DNA analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Genetic Testing
                </Button>
              </a>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Genetics Team
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>CLIA-certified labs</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>99.9% accuracy</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Genetic counseling</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
