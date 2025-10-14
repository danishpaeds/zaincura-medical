import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, Clock, Brain, AlertCircle, Beaker, Home, Building2 } from 'lucide-react'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Memory Boost IV Drip Dubai | NAD+ for Focus & Cognitive Clarity | Zain Cura',
  description: 'Enhance focus, mental sharpness & memory retention with our Memory Boost IV in Dubai. NAD+, Acetyl-L-Carnitine, Alpha-Lipoic Acid & B-Vitamins for brain health. Combat brain fog & cognitive fatigue. DHA-licensed.',
  keywords: 'memory boost iv dubai, nad+ therapy dubai, cognitive enhancement dubai, brain fog treatment, mental clarity iv, focus enhancement dubai, acetyl-l-carnitine therapy, neuroprotection dubai, memory retention treatment, cognitive fatigue dubai, brain health iv therapy',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/memory-boost-iv'
  }
}

export default function MemoryBoostIVPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Memory%20Boost%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-violet-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-violet-500"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-6">
              <Brain className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Memory Boost IV Drip
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Focus • Memory • Clarity
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
            The Memory Boost IV is designed for individuals seeking sharper cognitive performance, improved recall, and sustained mental energy. Ideal for professionals, students, and anyone feeling mentally fatigued, it combines neuroprotective nutrients that fuel the brain, enhance neurotransmitter synthesis, and promote cellular repair.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Enhances focus, alertness, and memory retention.",
              "Supports mitochondrial energy production for brain cells.",
              "Combats brain fog and cognitive fatigue.",
              "Promotes long-term neuroprotection and healthy aging."
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
                  This infusion delivers NAD+ and Acetyl-L-Carnitine directly into the bloodstream, bypassing digestive limitations for instant availability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  NAD+ supports mitochondrial ATP production, critical for mental clarity and concentration.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Acetyl-L-Carnitine and Alpha-Lipoic Acid work synergistically to protect neurons from oxidative stress and support neurotransmitter synthesis (NIH, 2020, PMID: 32112346).
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
                  { name: "NAD+ 5 mg", desc: "Restores cellular energy and supports DNA repair." },
                  { name: "Acetyl-L-Carnitine 500 mg", desc: "Improves mental clarity and neurotransmitter activity." },
                  { name: "Alpha Lipoic Acid 300 mg", desc: "Neuroprotective antioxidant for brain health." },
                  { name: "Vitamin B-Complex (B1, B6, B12)", desc: "Supports neurotransmission and memory consolidation." },
                  { name: "Magnesium 500 mg", desc: "Regulates brain excitability and reduces stress response." }
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
          <Card className="bg-gradient-to-br from-indigo-50 to-violet-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ideal for students, professionals, and executives experiencing mental fatigue, burnout, or memory decline.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Duration: 45–60 minutes
                    </Badge>
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Recommended: Weekly or biweekly
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
              "Avoid during pregnancy or breastfeeding.",
              "Caution in patients with uncontrolled hypertension or epilepsy.",
              "Not suitable for severe kidney disease."
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
                Is the Memory Boost IV safe?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes. It is administered by DHA-licensed healthcare professionals after a clinical screening to ensure safety and suitability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How soon can I notice results?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Many clients report improved mental clarity and focus within hours of infusion, while cumulative benefits appear after 3–4 sessions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can this drip prevent age-related memory decline?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Regular use of NAD+ and antioxidant nutrients has been linked with slower neurodegeneration and improved mitochondrial function (PubMed, DOI:10.1016/j.neurobiolaging.2021.04.002).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is it safe for people with migraines?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, but individual assessment is required. Magnesium and B-vitamins may reduce migraine frequency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can I combine this with the Energy Boost IV?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes. Both complement each other, supporting brain and physical energy together.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Does it cause overstimulation or anxiety?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No. It supports balanced neurotransmitter function rather than overstimulation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is it suitable for older adults?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, especially beneficial for cognitive decline prevention and post-illness recovery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How frequently should I take it?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Weekly sessions for the first month, then maintenance every 2–4 weeks based on clinical guidance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Are there side effects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Minimal. Mild flushing or metallic taste may occur briefly during infusion.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Research & Clinical Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Research & Clinical Insights</h2>
          <div className="space-y-4">
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">1.</span> NIH – NAD+ in Neuroprotection and Aging, Front Aging Neurosci (2021) DOI:10.3389/fnagi.2021.671806
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">2.</span> PubMed – Acetyl-L-Carnitine in Memory Enhancement, J Geriatr Psychiatry Neurol (2019) DOI:10.1177/0891988719871235
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#00B6AD] to-[#008B84] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Memory Boost IV Drip Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Enhance focus, mental sharpness & cognitive clarity with NAD+ and neuroprotective nutrients
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
            For educational use only. Administered solely by DHA-licensed professionals following medical evaluation. Not suitable for pregnancy, heart failure, renal/liver disease, or G6PD deficiency.
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
                "name": "Memory Boost IV Drip",
                "description": "Enhance focus, mental sharpness and recall with NAD+, Acetyl-L-Carnitine & B-Vitamins for brain health and cognitive clarity",
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
                    "name": "Is the Memory Boost IV safe?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It is administered by DHA-licensed healthcare professionals after a clinical screening to ensure safety and suitability."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can this drip prevent age-related memory decline?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Regular use of NAD+ and antioxidant nutrients has been linked with slower neurodegeneration and improved mitochondrial function."
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
