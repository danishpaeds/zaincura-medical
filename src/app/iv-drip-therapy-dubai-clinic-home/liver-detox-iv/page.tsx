import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, Clock, Droplets, AlertCircle, Beaker, Home, Building2 } from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Liver Detox IV – Purification and Antioxidant Regeneration | Zain Cura Dubai',
  description: 'Detoxify and rejuvenate your liver with the Liver Detox IV at Zain Cura Medical Center Dubai. A blend of Glutathione, Alpha-Lipoic Acid, and essential amino acids for cellular renewal.',
  keywords: 'liver detox dubai, glutathione iv dubai, liver cleanse dubai, detoxification therapy dubai, alpha lipoic acid iv, liver regeneration dubai, hepatic wellness dubai, antioxidant therapy dubai',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/liver-detox-iv'
  }
}

export default function LiverDetoxPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Liver%20Detox%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-white py-20 overflow-hidden">
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
              <Droplets className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Liver Detox IV Drip
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Purify • Restore • Revive
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
            The Liver Detox IV is designed to restore your body's natural cleansing capacity by replenishing antioxidants and detox cofactors. This drip supports hepatic function, reduces inflammation, and promotes clearer skin, improved energy, and hormonal balance. Ideal for those exposed to stress, medications, or toxins.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Flushes toxins and supports liver enzyme balance.",
              "Improves skin tone and energy by aiding detoxification.",
              "Supports metabolism and digestion.",
              "Enhances immunity and hormonal regulation."
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
                  Glutathione acts as the body's master antioxidant, neutralizing free radicals and regenerating Vitamin C and E (NIH, 2018, PMID: 29587420).
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Alpha-Lipoic Acid supports hepatic energy metabolism and promotes detox enzyme activity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Amino acids like Methionine and Glycine help repair liver cells and support methylation cycles for optimal detox capacity.
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
                  { name: "Glutathione 1200 mg", desc: "Powerful antioxidant for liver and cellular detoxification." },
                  { name: "Alpha Lipoic Acid 300 mg", desc: "Regenerates other antioxidants and protects hepatic tissue." },
                  { name: "Methionine 200 mg", desc: "Supports liver cell repair and bile flow." },
                  { name: "Glycine 300 mg", desc: "Aids detox conjugation and gut balance." },
                  { name: "Vitamin C 3000 mg", desc: "Enhances detox capacity and immune function." },
                  { name: "B-Complex", desc: "Supports methylation and energy metabolism." }
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
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ideal for individuals exposed to pollution, alcohol, medications, or chronic fatigue.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Duration: 45–60 min
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
              "Avoid in pregnancy or severe hepatic failure.",
              "Caution in those on anticoagulant therapy.",
              "Ensure adequate hydration pre- and post-infusion."
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
                What does the Liver Detox IV do?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                It boosts the liver's ability to process and eliminate toxins, improving overall vitality and skin glow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Will it help with acne or dull skin?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, detoxifying the liver often improves skin clarity and tone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can I do this after alcohol use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, it helps replenish antioxidants depleted by alcohol metabolism.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How many sessions are recommended?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Typically 4–6 sessions spaced weekly yield optimal results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is it safe with other medications?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, but always disclose medications to your physician.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Will I feel tired after?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                You might feel light detox fatigue for a few hours, followed by improved energy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can this help fatty liver?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                It supports hepatic fat metabolism alongside lifestyle measures (PubMed, DOI:10.1016/j.clnu.2018.11.003).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is it suitable for long-term wellness?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, monthly sessions can maintain liver health and antioxidant balance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is the infusion painful?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No, it's a smooth IV administered by trained DHA nurses.
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
                  <span className="font-semibold">1.</span> NIH – Glutathione in Liver Health, Nutrients (2018) DOI:10.3390/nu10020275
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">2.</span> PubMed – Alpha Lipoic Acid and Liver Function, Clin Nutr (2018) DOI:10.1016/j.clnu.2018.11.003
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
              Book Your Liver Detox IV Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Experience scientifically-backed liver purification and cellular renewal
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
            For educational use only. Administered solely by DHA-licensed professionals following medical evaluation. Not suitable for pregnancy, severe hepatic disease, or G6PD deficiency.
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
                "name": "Liver Detox IV Drip",
                "description": "Rejuvenate your liver with Glutathione, Alpha-Lipoic Acid & essential amino acids for cellular renewal and detoxification",
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
                    "name": "Glutathione",
                    "activeIngredient": "Glutathione 1200mg"
                  },
                  {
                    "@type": "Drug",
                    "name": "Alpha Lipoic Acid",
                    "activeIngredient": "Alpha Lipoic Acid 300mg"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What does the Liver Detox IV do?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It boosts the liver's ability to process and eliminate toxins, improving overall vitality and skin glow."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will it help with acne or dull skin?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, detoxifying the liver often improves skin clarity and tone."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can this help fatty liver?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It supports hepatic fat metabolism alongside lifestyle measures (PubMed, DOI:10.1016/j.clnu.2018.11.003)."
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
