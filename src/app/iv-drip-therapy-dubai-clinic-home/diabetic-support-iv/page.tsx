import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, Clock, Activity, AlertCircle, Beaker, Home, Building2 } from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Diabetic Support IV – Metabolic and Nerve Health | Zain Cura Dubai',
  description: 'Support glucose metabolism and nerve function with the Diabetic Support IV at Zain Cura Dubai. Contains Alpha Lipoic Acid, Chromium, and B-Vitamins to aid metabolic balance and reduce fatigue.',
  keywords: 'diabetic support iv dubai, diabetes therapy dubai, glucose metabolism dubai, neuropathy treatment dubai, alpha lipoic acid iv, chromium therapy dubai, diabetic wellness dubai, nerve health dubai',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/diabetic-support-iv'
  }
}

export default function DiabeticSupportPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Diabetic%20Support%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 overflow-hidden">
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
              <Activity className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Diabetic Support IV Drip
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Balance • Regulate • Reenergize
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
            The Diabetic Support IV aids individuals managing diabetes or metabolic syndrome by optimizing insulin sensitivity, improving nerve function, and restoring essential nutrients often depleted by chronic high glucose. It provides antioxidant and circulatory benefits for long-term metabolic health.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Improves glucose utilization and insulin sensitivity.",
              "Protects nerves and reduces diabetic neuropathy symptoms.",
              "Enhances circulation and energy levels.",
              "Reduces oxidative stress and inflammation."
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
                  Alpha-Lipoic Acid enhances glucose uptake and protects against neuropathic damage (NIH, 2020, PMID: 32292347).
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Chromium and Zinc assist in insulin receptor activity and carbohydrate metabolism.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  B-Complex and Vitamin C support nerve regeneration and antioxidant defense.
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
                  { name: "Alpha Lipoic Acid 600 mg", desc: "Improves glucose metabolism and neuropathic protection." },
                  { name: "Chromium 200 mcg", desc: "Enhances insulin sensitivity." },
                  { name: "Zinc 20 mg", desc: "Supports immune and pancreatic function." },
                  { name: "Vitamin B1 (Thiamine) 100 mg", desc: "Protects against neuropathy." },
                  { name: "Vitamin C 2000 mg", desc: "Antioxidant reducing glycation stress." },
                  { name: "Magnesium 500 mg", desc: "Improves glucose control and muscle relaxation." }
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
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Recommended for Type 2 diabetics, prediabetics, or those with neuropathic symptoms.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Duration: 60 min
                    </Badge>
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Recommended: Weekly for 4–6 sessions
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
              "Monitor glucose levels before and after infusion.",
              "Avoid in uncontrolled diabetes or ketoacidosis.",
              "Consult doctor if on insulin or hypoglycemics for dose adjustment."
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
                Can this replace diabetes medication?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No. It complements standard therapy by improving insulin function and cellular energy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Will it lower my blood sugar immediately?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                It helps optimize metabolism over several sessions rather than immediate glucose reduction.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is Alpha Lipoic Acid safe for diabetics?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, studies confirm its safety and benefits for neuropathy and oxidative stress (PubMed, DOI:10.1016/j.metabol.2020.154547).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can I combine this with the Cardio Support IV?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, it's beneficial to alternate for vascular and metabolic support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Will I feel energetic after?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, improved glucose uptake often translates into better stamina and mental clarity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can it prevent diabetic neuropathy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Regular infusions of ALA and B-vitamins have been shown to reduce nerve inflammation (NIH, 2019, PMID: 31564745).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How many sessions are recommended?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Usually 4–6 weekly sessions followed by monthly maintenance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can non-diabetics take it?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, it supports healthy glucose metabolism and prevents insulin resistance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is it painful?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No, it's a gentle IV infusion performed by trained DHA professionals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Any dietary advice with this drip?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Maintain balanced meals and hydration to support nutrient absorption and glycemic stability.
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
                  <span className="font-semibold">1.</span> NIH – Alpha Lipoic Acid in Diabetic Neuropathy, Metabolism (2020) DOI:10.1016/j.metabol.2020.154547
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">2.</span> PubMed – Chromium and Glucose Control, Diabetes Care (2019) DOI:10.2337/dc19-0564
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
              Book Your Diabetic Support IV Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Experience scientifically-backed metabolic support and nerve protection
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
            For educational use only. Administered by DHA-licensed professionals following evaluation. Not suitable for uncontrolled diabetes, heart failure, or G6PD deficiency.
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
                "name": "Diabetic Support IV Drip",
                "description": "Support glucose metabolism and nerve health with Alpha Lipoic Acid, Chromium & B-Vitamins for metabolic balance",
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
                    "name": "Alpha Lipoic Acid",
                    "activeIngredient": "Alpha Lipoic Acid 600mg"
                  },
                  {
                    "@type": "Drug",
                    "name": "Chromium",
                    "activeIngredient": "Chromium 200mcg"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can this replace diabetes medication?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. It complements standard therapy by improving insulin function and cellular energy."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Alpha Lipoic Acid safe for diabetics?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, studies confirm its safety and benefits for neuropathy and oxidative stress (PubMed, DOI:10.1016/j.metabol.2020.154547)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it prevent diabetic neuropathy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Regular infusions of ALA and B-vitamins have been shown to reduce nerve inflammation (NIH, 2019, PMID: 31564745)."
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
