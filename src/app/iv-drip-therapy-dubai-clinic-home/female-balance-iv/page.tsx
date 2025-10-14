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
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Female Balance IV Dubai | Hormonal Support & Vitality | Zain Cura',
  description: 'Restore hormonal balance & vitality with our Female Balance IV in Dubai. B-Complex, Magnesium & amino acids for PMS relief, mood stability & energy. Perfect for hormonal fluctuations. DHA-licensed.',
  keywords: 'female balance iv dubai, hormonal balance dubai, pms relief iv therapy, women wellness dubai, hormonal support dubai, menstrual health iv, mood stability treatment, female vitality dubai, hormone therapy dubai, menopause support dubai',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/female-balance-iv'
  }
}

export default function FemaleBalanceIVPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Female%20Balance%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-500"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-6">
              <Heart className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Female Balance IV
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Harmony • Vitality • Grace
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
            The Female Balance IV is a rejuvenating infusion tailored for women seeking hormonal balance, better mood stability, and improved energy. It supports endocrine function, menstrual health, and skin radiance, providing vital micronutrients often depleted by stress or hormonal fluctuations.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Eases symptoms of PMS, fatigue, and hormonal imbalance.",
              "Promotes better sleep, focus, and skin clarity.",
              "Supports thyroid and adrenal health.",
              "Enhances mood and energy stability naturally."
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
                  The infusion replenishes B-vitamins, Magnesium, and amino acids that modulate estrogen and progesterone pathways.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Magnesium reduces cramps and improves serotonin synthesis for mood stability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Taurine and Glycine aid liver conjugation of hormones and detoxification of excess estrogen (NIH, 2021, PMID: 34044527).
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
                  { name: "Magnesium 800 mg", desc: "Relieves cramps, enhances calm, supports hormonal balance." },
                  { name: "B-Complex Vitamins", desc: "Facilitate estrogen metabolism and energy regulation." },
                  { name: "Taurine 500 mg", desc: "Promotes liver detoxification and nervous system balance." },
                  { name: "L-Carnitine 300 mg", desc: "Improves energy utilization and lipid metabolism." },
                  { name: "Zinc 20 mg", desc: "Supports ovarian and thyroid function." },
                  { name: "Vitamin C 3000 mg", desc: "Powerful antioxidant promoting hormonal regulation." }
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
          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ideal for women experiencing PMS, fatigue, hormonal imbalance, or stress-related irregular cycles.
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
              "Avoid during pregnancy and lactation.",
              "Consult doctor if taking hormonal therapies or thyroid medications.",
              "Not suitable for severe renal insufficiency."
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
            {[
              {
                q: "Can the Female Balance IV regulate menstrual cycles?",
                a: "Yes. By restoring micronutrient balance, it helps regulate hormonal fluctuations impacting cycle regularity."
              },
              {
                q: "Is it suitable for PCOS or perimenopause?",
                a: "Yes, it supports ovarian function and metabolism, beneficial for PCOS and perimenopausal transitions (PubMed, DOI:10.1016/j.jsbmb.2021.105784)."
              },
              {
                q: "Will it help with mood swings?",
                a: "Magnesium and B-vitamins enhance serotonin production, promoting emotional balance."
              },
              {
                q: "Can this drip improve skin health?",
                a: "Yes, Vitamin C and Zinc boost collagen synthesis and reduce hormonal acne."
              },
              {
                q: "Is it safe to use with oral contraceptives?",
                a: "Yes, but disclose all medications to the physician to avoid overlapping nutrient interactions."
              },
              {
                q: "Can it relieve menstrual cramps?",
                a: "Absolutely. Magnesium and Taurine act as natural muscle relaxants."
              },
              {
                q: "How often should I take it?",
                a: "Weekly or around your menstrual cycle for optimal benefit."
              },
              {
                q: "Can this IV replace hormone therapy?",
                a: "No, but it supports natural hormonal pathways for better overall regulation."
              },
              {
                q: "Will I feel a difference immediately?",
                a: "Many clients report improved mood and reduced fatigue after the first session."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
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
                  <span className="font-semibold">1.</span> NIH – Magnesium in Women's Health, Nutrients (2021) DOI:10.3390/nu13092964
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">2.</span> PubMed – Taurine in Hormonal Modulation, J Steroid Biochem Mol Biol (2022) DOI:10.1016/j.jsbmb.2021.105784
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
              Book Your Female Balance IV Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Restore hormonal balance, ease PMS symptoms & enhance vitality naturally
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
                "name": "Female Balance IV",
                "description": "Restore hormonal balance and vitality with B-Complex, Magnesium and amino acids for women's health",
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
                    "name": "Can the Female Balance IV regulate menstrual cycles?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. By restoring micronutrient balance, it helps regulate hormonal fluctuations impacting cycle regularity."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it suitable for PCOS or perimenopause?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, it supports ovarian function and metabolism, beneficial for PCOS and perimenopausal transitions."
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
