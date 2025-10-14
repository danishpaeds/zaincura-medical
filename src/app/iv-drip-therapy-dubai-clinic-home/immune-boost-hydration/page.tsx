import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, Clock, Shield, AlertCircle, Beaker, Home, Building2 } from 'lucide-react'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Immune Boost & Hydration IV Dubai | Vitamin C + Zinc Infusion | Zain Cura',
  description: 'Strengthen your immune system & restore hydration fast with our Immune Boost IV in Dubai. High-dose Vitamin C, NAC, Zinc & electrolytes. Perfect for post-illness recovery, travel & wellness. DHA-licensed.',
  keywords: 'immune boost iv dubai, hydration therapy dubai, vitamin c drip dubai, immunity support dubai, nac iv therapy, zinc infusion, post-viral recovery dubai, flu recovery dubai, travel wellness iv, dehydration treatment dubai, immune system boost, wellness iv therapy dubai',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/immune-boost-hydration'
  }
}

export default function ImmuneBoostHydrationPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Immune%20Boost%20%26%20Hydration%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5bb7a582fd67933734c064e5/b2e398d1-b00f-4ff3-a873-578472d92522/wellness-immunity-booster-recrop.jpg"
            alt="Immune Boost IV Therapy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-6">
              <Shield className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Immune Boost & Hydration IV
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Defend • Hydrate • Revive
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#00B6AD] hover:bg-[#008B84] text-white px-8 py-6 text-lg shadow-lg">
                Book via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">Overview</h2>
          <div className="h-1 w-16 bg-[#00B6AD] mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            This drip combines immune-modulating antioxidants and electrolytes to support recovery from illness, fatigue, or travel.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Strengthens immune response and resilience.",
              "Rehydrates cells after fatigue, illness, or travel.",
              "Accelerates recovery and improves vitality."
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#00B6AD] mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">How It Works</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Vitamin C, Zinc, and NAC enhance immune cell activity and antioxidant defense.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Taurine and Magnesium help cellular hydration and detox pathways.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Administered intravenously for faster systemic absorption and sustained effect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Ingredients */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Active Ingredients</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
            <table className="w-full">
              <thead className="bg-[#00B6AD] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Ingredient</th>
                  <th className="px-6 py-4 text-left font-semibold">Function</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { name: "Ascorbic Acid 5000 mg", desc: "High-dose Vitamin C for immune activation." },
                  { name: "N-Acetylcysteine 800 mg", desc: "Boosts glutathione; aids detoxification." },
                  { name: "Zinc 30 mg", desc: "Supports immune signaling and wound healing." },
                  { name: "Magnesium 800 mg", desc: "Rebalances electrolytes, reducing fatigue." },
                  { name: "Taurine 500 mg", desc: "Improves hydration and antioxidant defense." }
                ].map((ingredient, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#333333]">{ingredient.name}</td>
                    <td className="px-6 py-4 text-gray-600">{ingredient.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">Who It's For</h2>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ideal during seasonal flu, post-viral fatigue, or dehydration.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Duration: 45–60 min
                    </Badge>
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Recommended: Weekly or after illness
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Precautions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Precautions & Contraindications</h2>
          <div className="space-y-4">
            {[
              "Avoid in acute infection with high fever.",
              "Consult physician if diabetic or hypertensive."
            ].map((precaution, index) => (
              <div key={index} className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{precaution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can I receive this IV therapy while taking antibiotics?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, the Immune Boost & Hydration IV is generally safe to use alongside antibiotics and can actually support your recovery. However, please inform our medical team about all medications you're taking during your consultation for proper assessment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Does IV therapy replace oral vitamin supplements?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                IV therapy complements but doesn't replace a balanced diet and oral supplementation. The advantage of IV delivery is 100% bioavailability, making it ideal for rapid immune support when you need it most, such as during illness or high-stress periods.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How effective is this for preventing colds and flu?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                High-dose Vitamin C, Zinc, and NAC have been clinically shown to support immune function and may reduce the duration and severity of respiratory infections. Many clients use this preventatively during flu season or before/after travel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is this treatment good for post-COVID recovery?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes. Many clients recovering from COVID-19 or other viral infections report improved energy, reduced fatigue, and faster recovery with our Immune Boost IV. The NAC component is particularly beneficial for respiratory support and detoxification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How quickly does hydration work through IV therapy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                IV hydration works immediately, restoring fluid balance within 30-45 minutes. This is significantly faster than oral rehydration, making it ideal for severe dehydration from illness, heat exposure, or intense physical activity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can I get this before international travel?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Absolutely! Many frequent travelers receive this treatment 24-48 hours before flying to boost immunity, prevent jet lag, and stay hydrated. It's an excellent preventive measure against travel-related illness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                What's the difference between this and drinking water?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                IV hydration delivers fluids, electrolytes, and immune-supporting nutrients directly into your bloodstream for 100% absorption. Oral hydration must pass through the digestive system, where absorption is limited to 50-60%, making IV therapy far more effective for rapid results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is this safe for elderly patients or those with chronic conditions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, with proper medical assessment. Our DHA-licensed physicians will review your complete medical history and adjust the formula if needed. IV therapy can be particularly beneficial for elderly patients who have difficulty swallowing pills or absorbing nutrients orally.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Research & Clinical Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Research & Clinical Insights</h2>
          <Card className="border-l-4 border-[#00B6AD]">
            <CardContent className="p-6">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">1.</span> PubMed — NAC and Glutathione in Immune Support (2020) DOI:10.1016/j.redox.2020.101512
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#00B6AD] to-[#008B84] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Immune Boost & Hydration Drip Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Strengthen your immunity and restore hydration with scientifically-backed IV therapy
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#00B6AD] hover:bg-gray-100 px-8 py-6 text-lg shadow-lg">
                Book via WhatsApp
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium">Available at Clinic</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium">Home Service</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium">Hotel Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            For educational use only. Treatments are administered solely by DHA-licensed professionals after medical evaluation.
            Not suitable for pregnancy, heart failure, renal/liver disease, or G6PD deficiency.
          </p>
        </div>
      </section>

      <MobileCTABar />

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalTherapy",
                "name": "Immune Boost & Hydration IV",
                "description": "Strengthen immune system & restore hydration with high-dose Vitamin C, NAC, Zinc & electrolytes for post-illness recovery and wellness",
                "procedureType": "Intravenous therapy",
                "provider": {
                  "@type": "MedicalBusiness",
                  "name": "Zain Cura Medical Center",
                  "url": "https://zaincura.com"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can I receive this IV therapy while taking antibiotics?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the Immune Boost & Hydration IV is generally safe to use alongside antibiotics and can actually support your recovery. However, please inform our medical team about all medications you're taking during your consultation for proper assessment."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is this treatment good for post-COVID recovery?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Many clients recovering from COVID-19 or other viral infections report improved energy, reduced fatigue, and faster recovery with our Immune Boost IV. The NAC component is particularly beneficial for respiratory support and detoxification."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </div>
  )
}
