import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, Clock, Heart, AlertCircle, Beaker, Home, Building2 } from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Cardio Support IV – Heart Health and Circulation Booster | Zain Cura Dubai',
  description: 'Support cardiovascular wellness, improve energy and circulation with the Cardio Support IV at Zain Cura Medical Center Dubai. Contains CoQ10, L-Carnitine, Magnesium, and Taurine for optimal heart performance.',
  keywords: 'cardio support iv dubai, heart health dubai, cardiovascular wellness dubai, coq10 iv therapy, circulation booster dubai, heart performance iv, l-carnitine therapy dubai, taurine infusion dubai, cardiac wellness dubai',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/cardio-support-iv'
  }
}

export default function CardioSupportPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Cardio%20Support%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-white py-20 overflow-hidden">
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
              <Heart className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Cardio Support IV Drip
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Circulate • Strengthen • Endure
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
            The Cardio Support IV is formulated to enhance heart performance, improve blood oxygenation, and reduce fatigue associated with circulatory inefficiency. It's ideal for individuals managing hypertension, mild cardiac fatigue, or seeking endurance support for longevity.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Boosts cardiac energy and muscle efficiency.",
              "Improves circulation and vascular tone.",
              "Supports endurance and reduces post-exertion fatigue.",
              "Provides antioxidant protection against cardiac stress."
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
                  Coenzyme Q10 (CoQ10) acts as a mitochondrial cofactor, vital for ATP production in cardiac muscle.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  L-Carnitine enhances fatty acid metabolism in the myocardium, improving efficiency (NIH, 2020, PMID: 32451211).
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Taurine and Magnesium stabilize heart rhythm and improve oxygen utilization.
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
                  { name: "CoQ10 200 mg", desc: "Essential mitochondrial coenzyme for heart energy." },
                  { name: "L-Carnitine 1000 mg", desc: "Facilitates fat-to-energy conversion in cardiac muscle." },
                  { name: "Magnesium 800 mg", desc: "Regulates blood pressure and vascular tone." },
                  { name: "Taurine 500 mg", desc: "Supports cardiac rhythm and contractility." },
                  { name: "Vitamin C 3000 mg", desc: "Antioxidant that reduces endothelial inflammation." },
                  { name: "B-Complex", desc: "Improves energy and cellular metabolism." }
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
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Recommended for individuals with sedentary lifestyle, hypertension, or family history of cardiovascular disease.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Duration: 60–75 min
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
              "Avoid in acute heart failure or post-MI without medical clearance.",
              "Caution in renal insufficiency due to electrolyte load."
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
                Can the Cardio Support IV improve stamina?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, it enhances mitochondrial efficiency, improving both physical and mental endurance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is it safe for hypertensive patients?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, under supervision. Magnesium and Taurine help reduce vascular tension naturally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Does it replace cardiac medication?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No. It complements standard therapy to support cardiovascular function.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Will I feel immediate effects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Many report increased energy and clarity within 24 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can athletes use this IV?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, it's beneficial for endurance and recovery when used medically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How often can it be taken?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Weekly or biweekly based on cardiac assessment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Are there side effects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Mild warmth or lightheadedness during infusion is possible but transient.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can it be combined with Chelation IV?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, alternated weekly it can support vessel detox and strengthen cardiac performance (PubMed, 2021, DOI:10.1016/j.clnu.2021.03.011).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Who should avoid it?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Patients with acute heart failure, severe hypotension, or advanced renal impairment.
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
                  <span className="font-semibold">1.</span> NIH – CoQ10 in Cardiovascular Health, Nutrients (2020) DOI:10.3390/nu12113294
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">2.</span> PubMed – L-Carnitine and Heart Function, Clin Nutr (2021) DOI:10.1016/j.clnu.2021.03.011
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
              Book Your Cardio Support IV Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Experience scientifically-backed cardiovascular support and enhanced endurance
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
            For educational use only. Administered by DHA-licensed professionals following evaluation. Not suitable for acute cardiac failure, severe hypotension, or G6PD deficiency.
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
                "name": "Cardio Support IV Drip",
                "description": "Support cardiovascular wellness with CoQ10, L-Carnitine, Magnesium & Taurine for optimal heart performance",
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
                    "name": "CoQ10",
                    "activeIngredient": "CoQ10 200mg"
                  },
                  {
                    "@type": "Drug",
                    "name": "L-Carnitine",
                    "activeIngredient": "L-Carnitine 1000mg"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can the Cardio Support IV improve stamina?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it enhances mitochondrial efficiency, improving both physical and mental endurance."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it safe for hypertensive patients?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, under supervision. Magnesium and Taurine help reduce vascular tension naturally."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it replace cardiac medication?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. It complements standard therapy to support cardiovascular function."
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
