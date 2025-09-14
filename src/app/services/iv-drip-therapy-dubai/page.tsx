import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Zap,
  Droplets,
  Heart,
  Battery,
  Shield,
  Star,
  Clock,
  Home,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  ArrowRight,
  Activity,
  Beaker,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb, BreadcrumbConfigs } from '@/components/Breadcrumb'

const ivTherapyTypes = [
  {
    icon: Battery,
    title: "Energy Boost IV",
    description: "Revitalize your energy levels with a powerful blend of B-vitamins, amino acids, and essential minerals.",
    benefits: ["Combats fatigue", "Enhances mental clarity", "Supports metabolism", "Improves focus"],
    duration: "30-45 minutes",
    popular: true
  },
  {
    icon: Shield,
    title: "Immune Support IV",
    description: "Strengthen your immune system with high-dose vitamin C, zinc, and antioxidants.",
    benefits: ["Boosts immunity", "Reduces illness duration", "Antioxidant protection", "Supports recovery"],
    duration: "45-60 minutes",
    popular: false
  },
  {
    icon: Droplets,
    title: "Hydration Therapy",
    description: "Rapid rehydration with electrolyte-balanced saline solution for optimal cellular function.",
    benefits: ["Instant rehydration", "Restores electrolytes", "Improves circulation", "Enhances recovery"],
    duration: "20-30 minutes",
    popular: false
  },
  {
    icon: Heart,
    title: "Beauty & Wellness IV",
    description: "Promote healthy skin, hair, and nails with vitamin C, biotin, and glutathione.",
    benefits: ["Improves skin glow", "Strengthens hair/nails", "Anti-aging support", "Detoxification"],
    duration: "45-60 minutes",
    popular: true
  },
  {
    icon: Activity,
    title: "Recovery & Performance",
    description: "Accelerate recovery and enhance performance with amino acids and muscle-supporting nutrients.",
    benefits: ["Faster recovery", "Reduces inflammation", "Supports muscle repair", "Enhances performance"],
    duration: "30-45 minutes",
    popular: false
  },
  {
    icon: Star,
    title: "Executive Wellness",
    description: "Comprehensive nutrient therapy designed for busy professionals and frequent travelers.",
    benefits: ["Stress management", "Cognitive enhancement", "Energy optimization", "Jet lag relief"],
    duration: "60-75 minutes",
    popular: true
  }
]

const benefits = [
  {
    icon: Zap,
    title: "100% Bioavailability",
    description: "Direct intravenous delivery ensures complete absorption of nutrients, bypassing digestive limitations."
  },
  {
    icon: Clock,
    title: "Rapid Results",
    description: "Feel the effects within minutes as nutrients are delivered directly to your bloodstream."
  },
  {
    icon: Heart,
    title: "Customized Formulations",
    description: "Personalized IV cocktails tailored to your specific health goals and nutritional needs."
  },
  {
    icon: Shield,
    title: "Medical Supervision",
    description: "All treatments administered by DHA-licensed medical professionals in a safe environment."
  }
]

const safetyFeatures = [
  "DHA-licensed medical professionals",
  "Sterile medical-grade equipment",
  "Pre-treatment health assessment",
  "Continuous monitoring during therapy",
  "Emergency protocols in place",
  "Post-treatment care instructions"
]

export default function IVDripTherapyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Wellness & Recovery</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              IV Drip Therapy in Dubai - Clinic & Home Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional intravenous vitamin therapy and hydration treatments delivered by DHA-licensed
              medical professionals. Available at our Deira clinic or in the comfort of your home/hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp for IV Therapy
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book IV Session
                </Button>
              </Link>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Clinic
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Services', href: '/services' },
            { label: 'IV Drip Therapy Dubai' }
          ]} />
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose IV Drip Therapy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the fastest and most effective way to deliver essential nutrients, vitamins,
              and hydration directly to your cells.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
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

      {/* IV Therapy Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IV Therapy Menu
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully formulated IV drip therapies, each designed to address
              specific health and wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ivTherapyTypes.map((therapy, index) => (
              <Card key={index} className={`clinical-card h-full ${therapy.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <therapy.icon className="w-6 h-6 text-primary" />
                    </div>
                    {therapy.popular && (
                      <Badge className="bg-primary text-white">Popular</Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {therapy.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {therapy.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {therapy.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Duration: {therapy.duration}</span>
                  </div>

                  <div className="space-y-3">
                    <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp for Pricing
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Session
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Home vs Clinic */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clinic or Home Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the setting that works best for you - our professional clinic environment
              or the comfort and privacy of your home or hotel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="clinical-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Beaker className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">In-Clinic Service</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Professional Medical Environment</span>
                      <p className="text-gray-600 text-sm">State-of-the-art clinic facilities in Al Ghurair Centre, Deira</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Full Medical Support</span>
                      <p className="text-gray-600 text-sm">Complete medical supervision and emergency protocols</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Comfortable Setting</span>
                      <p className="text-gray-600 text-sm">Relaxing treatment rooms with comfortable seating</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Walk-ins Welcome</span>
                      <p className="text-gray-600 text-sm">Same-day availability during clinic hours</p>
                    </div>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp for Clinic Booking
                    </Button>
                  </a>
                  <a href="tel:+97145703423">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Clinic
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Home & Hotel Service</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Ultimate Convenience</span>
                      <p className="text-gray-600 text-sm">Professional IV therapy in your home, office, or hotel</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">24/7 Availability</span>
                      <p className="text-gray-600 text-sm">Round-the-clock service across Dubai</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Complete Privacy</span>
                      <p className="text-gray-600 text-sm">Discreet service in your private space</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Same Medical Standards</span>
                      <p className="text-gray-600 text-sm">DHA-licensed professionals with portable equipment</p>
                    </div>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp for Home Service
                    </Button>
                  </a>
                  <Link href="/home-care">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      <Home className="w-4 h-4 mr-2" />
                      Learn More About Home Care
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety & Quality Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your safety is our priority. We follow strict medical protocols and use only
              the highest quality nutrients and equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Medical Safety Protocols</h3>
              <div className="space-y-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Health Assessment</h4>
                    <p className="text-gray-600 text-sm">Review of medical history and current health status</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">IV Insertion</h4>
                    <p className="text-gray-600 text-sm">Gentle, professional IV line placement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Treatment Monitoring</h4>
                    <p className="text-gray-600 text-sm">Continuous supervision during therapy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Post-Treatment Care</h4>
                    <p className="text-gray-600 text-sm">Care instructions and follow-up guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about IV drip therapy at Zain Cura Medical Center.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long does an IV drip session take?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most IV therapy sessions take between 30-75 minutes, depending on the specific treatment
                  and formulation. Simple hydration therapy may take 20-30 minutes, while comprehensive
                  wellness formulations may take up to 75 minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is IV drip therapy safe?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, when administered by qualified medical professionals. All our IV therapy is performed
                  by DHA-licensed healthcare providers using sterile equipment and pharmaceutical-grade nutrients.
                  We conduct health assessments before treatment and monitor patients throughout the session.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What are the side effects of IV therapy?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Side effects are rare when performed professionally. Some patients may experience mild
                  discomfort at the injection site, temporary metallic taste, or feeling of warmth during
                  infusion. Our medical team monitors for any adverse reactions and is trained to handle any complications.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How often can I have IV drip therapy?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The frequency depends on your individual health goals and the type of therapy. Some patients
                  benefit from weekly sessions, while others prefer monthly treatments. Our medical team will
                  assess your needs and recommend an appropriate treatment schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you provide IV therapy for specific medical conditions?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our IV therapy focuses on wellness, hydration, and nutritional support. While we can help
                  with general wellness goals, we recommend consulting with your primary healthcare provider
                  for specific medical conditions. Our medical team will assess your suitability for treatment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Wellness?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Experience the benefits of professional IV drip therapy. Available at our clinic
            or delivered to your home anywhere in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp for Consultation
              </Button>
            </a>
            <Link href="/book">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Calendar className="w-5 h-5 mr-2" />
                Book IV Session
              </Button>
            </Link>
            <a href="tel:+97145703423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Home Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>DHA Licensed</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Clinic & Home Options</span>
            </div>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
