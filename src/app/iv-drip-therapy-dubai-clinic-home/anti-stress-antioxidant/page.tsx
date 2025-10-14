import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, Clock, Wind, AlertCircle, Beaker, Home, Building2 } from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Anti-Stress & Antioxidant IV Drip Dubai | Vitamin C Infusion | Zain Cura',
  description: 'Combat stress, anxiety & oxidative damage with our premium anti-stress IV drip in Dubai. High-dose Vitamin C, L-Glutamine & B-complex for mental clarity & cellular repair. DHA-licensed. Clinic & home service.',
  keywords: 'anti-stress iv drip dubai, antioxidant therapy dubai, stress relief iv therapy, vitamin c infusion dubai, anxiety treatment dubai, burnout therapy, oxidative stress treatment, l-glutamine iv therapy, mental clarity dubai, stress management dubai, wellness iv drip',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/anti-stress-antioxidant'
  }
}

export default function AntiStressAntioxidantPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Anti-Stress%20%26%20Antioxidant%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://sfast.ae/wp-content/uploads/2024/07/image-of-iv-infusion-in-wellness-clinic.jpg"
            alt="IV Therapy Wellness Clinic"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-6">
              <Wind className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Anti-Stress & Antioxidant IV Drip
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Recharge • Restore • Rebalance
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">Overview</h2>
          <div className="h-1 w-16 bg-[#00B6AD] mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Targets oxidative stress and fatigue using high-dose antioxidants and B-vitamins to restore physiological balance and mental clarity.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Reduces oxidative damage and supports stress resilience.",
              "Enhances mental clarity and calm.",
              "Supports immune and nervous system health.",
              "Promotes youthful skin and vitality."
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">How It Works</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Delivers essential antioxidants such as Vitamin C and Glutamine intravenously for 100% bioavailability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Vitamin C neutralizes free radicals, reducing oxidative stress and inflammation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  B-complex vitamins support neurotransmitter synthesis and energy metabolism, improving overall wellbeing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Ingredients */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  { name: "Ascorbic Acid (Vit C 4000 mg)", desc: "Potent antioxidant; supports collagen and immune defense." },
                  { name: "L-Glutamine 200 mg", desc: "Amino acid supporting energy metabolism and gut integrity." },
                  { name: "B-Complex (B1, B2, B5, B6, B12)", desc: "Improves metabolism and neurological balance." },
                  { name: "Magnesium 1000 mg", desc: "Relaxes muscles, reduces anxiety and fatigue." },
                  { name: "Zinc 10 mg", desc: "Essential for repair and immune defense." }
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">Who It's For</h2>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ideal for professionals or frequent travelers facing stress, burnout, or fatigue.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Duration: 30–45 min
                    </Badge>
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Recommended: Weekly
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Precautions & Contraindications</h2>
          <div className="space-y-4">
            {[
              "Avoid during pregnancy or lactation.",
              "Caution for G6PD deficiency (avoid high Vitamin C).",
              "Avoid in severe cardiac or renal disease."
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is the Anti-Stress & Antioxidant IV drip safe?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Absolutely. All treatments are prepared and administered by DHA-licensed medical professionals using pharmaceutical-grade ingredients. We conduct thorough medical screening before each session to ensure safety and efficacy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How quickly will I feel the effects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Most clients report noticeable improvements in mental clarity, relaxation, and energy within 2-4 hours post-treatment. The full antioxidant and stress-reducing benefits continue to develop over 24-48 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can this IV therapy help with chronic anxiety and stress?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes. The B-vitamin complex and magnesium in our formula support neurotransmitter balance and help modulate cortisol (stress hormone) levels. Many clients with chronic stress report improved mood, better sleep, and enhanced resilience when receiving regular treatments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How often should I receive this treatment?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                For acute stress or burnout, we recommend weekly sessions for 4-6 weeks. For maintenance and prevention, monthly treatments are typically sufficient. Your physician will create a personalized treatment plan based on your lifestyle and stress levels.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Does it help with skin aging caused by stress?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes! High-dose Vitamin C stimulates collagen production and protects against free radical damage, which can reduce fine lines, improve skin tone, and promote a youthful glow. Many clients notice skin improvements within 2-3 sessions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can I get this treatment if I'm taking medications?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                In most cases, yes. However, please inform our medical team about all medications, supplements, and health conditions during your consultation. Certain medications may require dosage adjustments or timing considerations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is this treatment suitable for busy professionals and executives?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Absolutely. This IV drip is specifically designed for high-performing professionals experiencing work-related stress, mental fatigue, or burnout. We offer flexible scheduling and mobile home/office service to fit your busy lifestyle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Will it interfere with my workout routine?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Not at all. You can resume normal activities, including exercise, immediately after treatment. In fact, many athletes use this drip for recovery as it reduces oxidative stress from intense training.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Research & Clinical Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Research & Clinical Insights</h2>
          <div className="space-y-4">
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">1.</span> NIH — Vitamin C and Immune Function, Nutrients (2017) DOI:10.3390/nu9111211
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">2.</span> PubMed — Glutamine and oxidative stress protection, Clin Nutr (2019) DOI:10.1016/j.clnu.2019.02.006
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#00B6AD] to-[#008B84] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Anti-Stress & Antioxidant Drip Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Experience scientifically-backed stress relief and antioxidant protection
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                "name": "Anti-Stress & Antioxidant IV Drip",
                "description": "Combat stress, anxiety & oxidative damage with high-dose Vitamin C, L-Glutamine & B-complex for mental clarity & cellular repair",
                "procedureType": "Intravenous therapy",
                "provider": {
                  "@type": "MedicalBusiness",
                  "name": "Zain Cura Medical Center",
                  "url": "https://zaincura.com"
                },
                "availableIn": {
                  "@type": "AdministrativeArea",
                  "name": "Dubai, UAE"
                },
                "drug": [
                  {
                    "@type": "Drug",
                    "name": "Ascorbic Acid (Vitamin C)",
                    "activeIngredient": "Vitamin C 4000mg"
                  },
                  {
                    "@type": "Drug",
                    "name": "L-Glutamine",
                    "activeIngredient": "L-Glutamine 200mg"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is the Anti-Stress & Antioxidant IV drip safe?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. All treatments are prepared and administered by DHA-licensed medical professionals using pharmaceutical-grade ingredients. We conduct thorough medical screening before each session to ensure safety and efficacy."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly will I feel the effects?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most clients report noticeable improvements in mental clarity, relaxation, and energy within 2-4 hours post-treatment. The full antioxidant and stress-reducing benefits continue to develop over 24-48 hours."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can this IV therapy help with chronic anxiety and stress?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The B-vitamin complex and magnesium in our formula support neurotransmitter balance and help modulate cortisol (stress hormone) levels. Many clients with chronic stress report improved mood, better sleep, and enhanced resilience when receiving regular treatments."
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
