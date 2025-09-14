import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Crown,
  Shield,
  Calendar,
  MessageCircle,
  Phone,
  CheckCircle,
  Users,
  Heart,
  Home,
  Apple,
  Award,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Gift,
  Zap,
  Target,
  Activity,
  Stethoscope,
  TestTube,
  Baby,
  FileText,
  HeadphonesIcon,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'VIP Healthcare Membership Dubai | Gold & Silver Plans | Zain Cura Medical',
  description: 'Join our exclusive VIP Healthcare Membership in Dubai. Gold & Silver plans with priority appointments, complimentary home care, quarterly wellness checks, and 24/7 medical support.',
  keywords: 'VIP healthcare membership Dubai, medical membership plans, priority healthcare Dubai, exclusive medical services, healthcare membership benefits Dubai',
  openGraph: {
    title: 'VIP Healthcare Membership Dubai | Exclusive Medical Care Plans',
    description: 'Transform your healthcare experience with our VIP membership. Priority appointments, home care, wellness checks, and exclusive benefits.',
    url: 'https://zaincura.com/membership',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/vip-membership-dubai.jpg',
        width: 1200,
        height: 630,
        alt: 'VIP Healthcare Membership Dubai'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIP Healthcare Membership Dubai | Gold & Silver Plans',
    description: 'Exclusive healthcare membership with priority care, home visits, and comprehensive wellness benefits.',
    images: ['https://zaincura.com/images/vip-membership-dubai.jpg']
  },
  alternates: {
    canonical: 'https://zaincura.com/membership'
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
  name: 'Zain Cura Medical Center VIP Membership',
  description: 'Exclusive VIP healthcare membership plans offering priority medical care, home visits, wellness checks, and comprehensive health benefits in Dubai',
  url: 'https://zaincura.com/membership',
  logo: 'https://zaincura.com/logo.png',
  image: 'https://zaincura.com/images/vip-membership-dubai.jpg',
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
  openingHours: 'Mo-Su 09:00-21:00',
  offers: [
    {
      '@type': 'Offer',
      name: 'Gold VIP Healthcare Membership',
      price: '4999',
      priceCurrency: 'AED',
      description: 'Unlimited VIP healthcare with priority appointments, complimentary home care, and exclusive benefits',
      validFrom: '2024-01-01',
      availability: 'https://schema.org/InStock'
    },
    {
      '@type': 'Offer',
      name: 'Silver VIP Healthcare Membership',
      price: '2999',
      priceCurrency: 'AED',
      description: 'Essential VIP healthcare with priority care and quarterly wellness benefits',
      validFrom: '2024-01-01',
      availability: 'https://schema.org/InStock'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: ['AED', 'USD'],
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  }
}

const membershipPlans = [
  {
    name: "Gold VIP Membership",
    price: "AED 4,999",
    originalPrice: "AED 7,800",
    savings: "AED 2,801",
    period: "per year",
    icon: Crown,
    color: "bg-gradient-to-br from-yellow-50 to-amber-50",
    borderColor: "border-yellow-400",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    badge: "Most Popular",
    badgeColor: "bg-yellow-600 text-white",
    description: "Ultimate healthcare experience with unlimited VIP benefits",
    features: [
      "Unlimited priority appointments (skip all waiting)",
      "Complimentary home doctor visits (unlimited)",
      "Quarterly comprehensive wellness checks",
      "24/7 nurse on call service",
      "Clinical dietician consultations included",
      "Gynecologist & specialist priority access",
      "Home blood collection included",
      "IV drip therapy (2 sessions included)",
      "Emergency home care coverage",
      "Dedicated member support line",
      "Family member discounts (50% off)",
      "Annual executive health screening",
      "Medication delivery service",
      "VIP clinic experience (private rooms)"
    ],
    savings_breakdown: [
      "Home doctor visits: AED 2,400 saved",
      "Quarterly wellness: AED 800 saved",
      "Priority appointments: AED 600 saved",
      "Nurse on call: AED 1,200 saved",
      "Additional benefits: AED 800+"
    ]
  },
  {
    name: "Silver VIP Membership",
    price: "AED 2,999",
    originalPrice: "AED 4,800",
    savings: "AED 1,801",
    period: "per year",
    icon: Shield,
    color: "bg-gradient-to-br from-gray-50 to-slate-50",
    borderColor: "border-gray-400",
    buttonColor: "bg-gray-600 hover:bg-gray-700",
    badge: "Great Value",
    badgeColor: "bg-gray-600 text-white",
    description: "Essential VIP healthcare with priority care and wellness benefits",
    features: [
      "Priority appointment booking",
      "Quarterly wellness health checks",
      "24/7 nurse consultation hotline",
      "Clinical dietician consultations (2 per year)",
      "Home blood collection (2 visits included)",
      "Priority access to specialists",
      "Member-only health seminars",
      "Discounted home doctor visits (30% off)",
      "Family member discounts (25% off)",
      "Digital health records access",
      "Wellness program enrollment",
      "Health reminders & follow-ups"
    ],
    savings_breakdown: [
      "Quarterly wellness: AED 800 saved",
      "Priority appointments: AED 400 saved",
      "Dietician consultations: AED 600 saved",
      "Blood collection: AED 400 saved",
      "Additional discounts: AED 600+"
    ]
  }
]

const memberBenefits = [
  {
    icon: Clock,
    title: "Priority Access",
    description: "Skip waiting lists with same-day priority appointments"
  },
  {
    icon: Home,
    title: "Home Care Included",
    description: "Complimentary doctor and nurse visits at your convenience"
  },
  {
    icon: Heart,
    title: "Preventive Wellness",
    description: "Regular health checks to prevent illness before it starts"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock medical consultation and emergency support"
  },
  {
    icon: Users,
    title: "Family Benefits",
    description: "Extend discounts and priority care to your family members"
  },
  {
    icon: Award,
    title: "VIP Treatment",
    description: "Private rooms, dedicated service, and premium care experience"
  }
]

const memberTestimonials = [
  {
    name: "Sarah Al-Mahmoud",
    role: "Gold Member",
    image: "/testimonials/sarah.jpg",
    rating: 5,
    text: "The Gold membership has been a game-changer for our family. The home doctor visits saved us countless trips to the clinic, especially with young children. The quarterly wellness checks caught a health issue early that could have been serious.",
    location: "Dubai Marina"
  },
  {
    name: "Ahmed Hassan",
    role: "Silver Member",
    image: "/testimonials/ahmed.jpg",
    rating: 5,
    text: "As a busy executive, the priority appointments and 24/7 nurse hotline have been invaluable. The Silver membership pays for itself just with the convenience and peace of mind it provides.",
    location: "Business Bay"
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Gold Member",
    image: "/testimonials/maria.jpg",
    rating: 5,
    text: "Even as a healthcare professional myself, I appreciate the comprehensive care and attention to detail that comes with the Gold membership. The clinical dietician consultations have helped optimize my family's nutrition.",
    location: "JLT"
  }
]

const membershipFAQ = [
  {
    question: "How quickly can I start using my membership benefits?",
    answer: "Your membership benefits activate immediately upon payment confirmation. You can book your first priority appointment within 24 hours and access all included services right away."
  },
  {
    question: "Are there any hidden fees or additional charges?",
    answer: "No hidden fees! Your membership includes all listed benefits. The only additional charges would be for services not included in your plan, which are clearly outlined and offered at member discounted rates."
  },
  {
    question: "Can I upgrade or downgrade my membership?",
    answer: "Yes, you can upgrade from Silver to Gold at any time by paying the difference. Downgrades are processed at renewal time to ensure you get full value from your current membership."
  },
  {
    question: "What happens if I need to cancel my membership?",
    answer: "You can cancel anytime with 30 days notice. We offer pro-rated refunds for unused benefits, and you'll continue to receive benefits until your membership period ends."
  },
  {
    question: "Do membership benefits cover family members?",
    answer: "Primary membership benefits are for the main member. However, both plans include significant family discounts (25-50% off) for all services, making it cost-effective for families."
  },
  {
    question: "How do home visits work for members?",
    answer: "Gold members get unlimited complimentary home visits, while Silver members receive discounted rates. Simply call our member line, and we'll schedule a doctor or nurse visit at your preferred time."
  }
]

export default function MembershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-yellow-600 text-white">VIP Healthcare Membership</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                VIP Healthcare Membership Dubai
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Experience healthcare like never before. Priority appointments, complimentary home care,
                quarterly wellness checks, and exclusive member benefits. Transform your health journey
                with our Gold and Silver VIP membership plans.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4">
                    <Crown className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">VIP Treatment</h3>
                    <p className="text-sm text-gray-600">Priority access & premium care</p>
                  </div>
                  <div className="p-4">
                    <Gift className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Save Up To</h3>
                    <p className="text-sm text-gray-600">AED 2,801 annually</p>
                  </div>
                  <div className="p-4">
                    <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Instant Access</h3>
                    <p className="text-sm text-gray-600">Benefits start immediately</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book?membership=true">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    <Crown className="w-5 h-5 mr-2" />
                    Join VIP Membership
                  </Button>
                </Link>
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Ask About Membership
                  </Button>
                </a>
                <a href="tel:+97145703423">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Details
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your VIP Healthcare Plan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Both plans offer significant savings and exclusive benefits. Upgrade your healthcare experience
                with priority access, home care, and comprehensive wellness services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {membershipPlans.map((plan, index) => (
                <Card key={index} className={`relative overflow-hidden ${plan.color} border-2 ${plan.borderColor} hover:scale-[1.02] transition-transform duration-200`}>
                  {plan.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className={plan.badgeColor}>
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <plan.icon className="w-16 h-16 mx-auto mb-4 text-gray-700" />
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <p className="text-gray-600 mb-4">{plan.description}</p>

                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <div className="text-left">
                          <div className="text-gray-500 line-through text-lg">{plan.originalPrice}</div>
                          <div className="text-gray-600 text-sm">{plan.period}</div>
                        </div>
                      </div>
                      <div className="text-green-600 font-semibold mb-4">
                        💰 Save {plan.savings} per year
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/70 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">💎 Value Breakdown:</h4>
                      <div className="space-y-1">
                        {plan.savings_breakdown.map((saving, idx) => (
                          <div key={idx} className="text-xs text-gray-600">{saving}</div>
                        ))}
                      </div>
                    </div>

                    <Link href="/book?membership=true">
                      <Button className={`w-full ${plan.buttonColor} text-white`}>
                        <plan.icon className="w-5 h-5 mr-2" />
                        Choose {plan.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Need a custom family plan or have specific requirements?
              </p>
              <Link href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Users className="w-4 h-4 mr-2" />
                  Discuss Custom Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Member Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Exclusive Member Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience healthcare with the attention and care you deserve
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {memberBenefits.map((benefit, index) => (
                <Card key={index} className="clinical-card text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Member Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our VIP Members Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real experiences from members who've transformed their healthcare journey
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {memberTestimonials.map((testimonial, index) => (
                <Card key={index} className="clinical-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                              {testimonial.role}
                            </Badge>
                            <span className="text-sm text-gray-500">{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Membership FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our VIP Healthcare Membership
              </p>
            </div>

            <div className="space-y-6">
              {membershipFAQ.map((faq, index) => (
                <Card key={index} className="clinical-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Have more questions about our membership plans?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Crown className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience VIP Healthcare?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of satisfied members who've transformed their healthcare experience.
              Priority care, home visits, wellness checks, and peace of mind - all included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?membership=true">
                <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                  <Crown className="w-5 h-5 mr-2" />
                  Join VIP Membership Today
                </Button>
              </Link>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Membership Info
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Instant activation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Gift className="w-4 h-4" />
                <span>Save up to AED 2,801</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Family discounts</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-4 h-4" />
                <span>VIP treatment</span>
              </div>
            </div>
          </div>
        </section>

        <MobileCTABar />
      </div>
    </>
  )
}
