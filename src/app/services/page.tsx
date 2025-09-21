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
  Apple
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb, BreadcrumbConfigs } from '@/components/Breadcrumb'

export const metadata = {
  title: 'Medical Services Dubai | GP, Lab Tests, Specialists | Zain Cura Medical',
  description: 'Medical services Dubai. GP consultations, lab tests, home doctor visits. DHA licensed healthcare at Al Ghurair Centre, Deira.',
  keywords: 'medical services Dubai, healthcare Dubai, doctor Dubai, lab tests Dubai, medical center Dubai, clinic Dubai',
  openGraph: {
    title: 'Medical Services Dubai | Complete Healthcare Solutions',
    description: 'Comprehensive medical services in Dubai. GP, lab tests, specialists, home care. Cash-friendly healthcare.',
    url: 'https://zaincura.com/services',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/services'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Zain Cura Medical Center Services',
  description: 'Complete range of medical services including GP consultations, laboratory testing, specialist care, and home healthcare in Dubai',
  url: 'https://zaincura.com/services',
  telephone: '+971-45703423',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Ghurair Centre, 6th Floor',
    addressLocality: 'Deira',
    addressRegion: 'Dubai',
    addressCountry: 'AE'
  }
}

const primaryServices = [
  {
    icon: Stethoscope,
    title: "GP / Family Medicine",
    description: "Same-day GP consultations with experienced doctors for all ages",
    href: "/gp-doctor-deira-dubai",
    badge: "Walk-in Welcome",
    features: ["Same-day appointments", "All ages", "Chronic care", "Certificates"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: TestTube,
    title: "Laboratory Tests",
    description: "50+ lab tests with same-day results and home collection",
    href: "/lab-tests-dubai-home-collection",
    badge: "Same-Day Results",
    features: ["Blood tests", "Home collection", "Digital reports", "50+ tests"],
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Home,
    title: "24/7 Home Doctor",
    description: "Professional doctors visit your home, office, or hotel",
    href: "/home-doctor-dubai-24-7",
    badge: "24/7 Available",
    features: ["Emergency care", "All Dubai", "Pediatric care", "Hotel visits"],
    color: "bg-red-100 text-red-600"
  }
]

const specializedServices = [
  {
    icon: Heart,
    title: "Wellness Health Checks",
    description: "Comprehensive health screening with smart digital reports",
    href: "/wellness-health-checks-dubai",
    badge: "Smart Reports",
    features: ["40+ biomarkers", "Executive packages", "Preventive care"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Shield,
    title: "STD Testing",
    description: "100% confidential sexual health screening",
    href: "/std-testing-dubai-confidential",
    badge: "Confidential",
    features: ["Private testing", "24-48h results", "Complete discretion"],
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: TestTube,
    title: "Semen Analysis",
    description: "Male fertility testing with complete privacy",
    href: "/semen-analysis-dubai-fertility",
    badge: "Fertility Testing",
    features: ["WHO standards", "Private room", "Detailed analysis"],
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Zap,
    title: "IV Drip Therapy",
    description: "Vitamin infusions and hydration therapy",
    href: "/iv-drip-therapy-dubai-clinic-home",
    badge: "Clinic & Home",
    features: ["Energy boost", "Immunity support", "Mobile service"],
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Baby,
    title: "Female Gynecologist",
    description: "Women's health care with female doctor",
    href: "/gynecologist-dubai-female-doctor",
    badge: "Female Doctor",
    features: ["Prenatal care", "PCOS treatment", "Family planning"],
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Apple,
    title: "Clinical Dietician",
    description: "Professional nutrition consultations and therapeutic diets",
    href: "/clinical-dietician-dubai",
    badge: "Nutrition Expert",
    features: ["Weight management", "Therapeutic diets", "Meal planning", "Health optimization"],
    color: "bg-lime-100 text-lime-600"
  }
]

const advancedTesting = [
  {
    icon: Search,
    title: "Genetic Testing",
    description: "DNA analysis for hereditary health screening",
    href: "/genetic-testing-dubai",
    badge: "DNA Analysis",
    features: ["Cancer screening", "Pharmacogenomics", "Carrier testing"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Droplets,
    title: "Microbiome Testing",
    description: "Gut health analysis for digestive wellness",
    href: "/microbiome-testing-dubai",
    badge: "Gut Health",
    features: ["IBS/SIBO testing", "Personalized plan", "Home collection"],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Complete Medical Services in Dubai
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                From GP consultations to advanced genetic testing, we provide comprehensive
                healthcare services at our clinic in Al Ghurair Centre and through home visits across Dubai.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp for Services
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Clinic
                  </Button>
                </a>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>DHA licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Same-day service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Cash-friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24/7 home care</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white py-4 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Services' }
            ]} />
          </div>
        </section>

        {/* Primary Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Primary Healthcare Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Essential medical services for immediate care and routine health needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {primaryServices.map((service, index) => (
                <Link key={index} href={service.href}>
                  <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
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

                      <div className="flex items-center text-primary font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Medical Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced healthcare services for specific health needs and conditions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <Link key={index} href={service.href}>
                  <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center`}>
                          <service.icon className="w-5 h-5" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {service.badge}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-3">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Testing */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Diagnostic Testing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge testing for personalized health insights and prevention
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advancedTesting.map((service, index) => (
                <Link key={index} href={service.href}>
                  <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <Badge className="text-xs bg-primary text-white">
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

                      <div className="mt-4 flex items-center text-primary font-medium">
                        Explore Testing Options
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory Services Quick Links */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Laboratory Test Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our comprehensive laboratory testing menu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {labCategories.map((category, index) => (
                <Link key={index} href={category.href}>
                  <Card className="clinical-card hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {category.title}
                      </h3>
                      <div className="space-y-1">
                        {category.tests.map((test, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <TestTube className="w-3 h-3 text-primary" />
                            <span className="text-sm text-gray-600">{test}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-primary text-sm font-medium">
                        View All Tests →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/services/laboratory">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  View Complete Lab Menu
                  <TestTube className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zain Cura Medical Center?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DHA Licensed</h3>
                <p className="text-gray-600">Certified medical professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Appointments and results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Home Care</h3>
                <p className="text-gray-600">Doctor visits anywhere</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Privacy</h3>
                <p className="text-gray-600">Confidential healthcare</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Visit Our Medical Center
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Conveniently located at Al Ghurair Centre in Deira, our modern medical facility
                  offers comprehensive healthcare services with same-day appointments available.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Location</h4>
                      <p className="text-gray-600">Al Ghurair Centre, 6th Floor<br />Deira, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clinic Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 09:00 - 21:00<br />Home Visits: 24/7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact</h4>
                      <p className="text-gray-600">Phone: +971-45703423<br />WhatsApp: +971-523011150</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Service</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    Choose your preferred booking method:
                  </p>
                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Booking
                      </Button>
                    </a>
                    <a href="tel:+97145703423">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Clinic
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Online Booking
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Walk-ins welcome • Same-day appointments • No insurance required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Quality Healthcare?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              From routine checkups to specialized testing, we're here for all your healthcare needs.
              Book your appointment today or contact us for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
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
