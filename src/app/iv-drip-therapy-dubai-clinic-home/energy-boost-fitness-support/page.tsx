import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, Clock, Zap, AlertCircle, Beaker, Home, Building2 } from 'lucide-react'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Energy Boost & Fitness Support IV Dubai | NAD+ & L-Carnitine Infusion | Zain Cura',
  description: 'Maximize athletic performance & accelerate recovery with our Energy Boost IV in Dubai. NAD+, L-Carnitine, B-complex & amino acids for endurance, stamina & cellular energy. Perfect for athletes & professionals. DHA-licensed.',
  keywords: 'energy boost iv dubai, fitness support iv therapy, nad+ therapy dubai, l-carnitine infusion, athletic performance dubai, sports recovery iv, endurance training dubai, workout recovery dubai, mitochondrial support, fatigue treatment dubai, energy iv drip, pre-workout iv therapy',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/energy-boost-fitness-support'
  }
}

export default function EnergyBoostFitnessSupportPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Energy%20Boost%20%26%20Fitness%20Support%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://revolutionhealth.org/cdn/shop/articles/NAD_boost_cellular_energy_revolution_vial.png?v=1750942400&width=1100"
            alt="NAD+ Energy Boost IV Therapy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-6">
              <Zap className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Energy Boost & Fitness Support IV
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Perform • Recover • Excel
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
            Optimized for athletes and active individuals, this IV enhances mitochondrial function and metabolic performance.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Increases energy and mental clarity.",
              "Accelerates post-exercise recovery.",
              "Supports cellular metabolism and endurance."
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
                  B-vitamins and NAD+ drive ATP production, fueling cellular energy.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  L-Carnitine supports fat oxidation and stamina.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Magnesium and Taurine reduce post-workout muscle fatigue.
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
                  { name: "Ascorbic Acid 4000 mg", desc: "Antioxidant protection for energy metabolism." },
                  { name: "L-Carnitine 1000 mg", desc: "Enhances endurance and recovery." },
                  { name: "NAD 2 mg", desc: "Core molecule for mitochondrial energy." },
                  { name: "B-Complex (B1, B3, B5, B6, B12)", desc: "Key cofactors in energy generation." },
                  { name: "Magnesium 500 mg", desc: "Reduces cramps and supports ATP synthesis." }
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
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ideal for athletes, fitness enthusiasts, and professionals experiencing fatigue.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Duration: 45–60 min
                    </Badge>
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Recommended: Weekly or post-training
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
              "Avoid in uncontrolled hypertension or arrhythmia.",
              "Consult before combining with performance enhancers."
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
                Can I receive this IV therapy before a workout or competition?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Absolutely! Many professional athletes and fitness enthusiasts schedule this treatment 2-4 hours before major events or intense training sessions. The NAD+ and B-complex provide sustained cellular energy without the jitters or crash associated with stimulants.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is NAD+ therapy safe and scientifically proven?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, NAD+ (Nicotinamide Adenine Dinucleotide) is a naturally occurring coenzyme found in every cell of your body. It's essential for energy production, DNA repair, and cellular metabolism. Clinical research supports its safety and efficacy when administered by qualified medical professionals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How does L-Carnitine improve athletic performance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                L-Carnitine transports fatty acids into your mitochondria (cellular powerhouses) for energy production. This enhances fat oxidation, improves endurance, reduces muscle fatigue, and accelerates post-workout recovery. It's particularly effective for endurance athletes and those on fat-loss programs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                When is the best time to get this treatment for workout recovery?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                For optimal recovery, we recommend receiving this IV within 2-4 hours post-workout. This accelerates muscle repair, reduces inflammation, replenishes depleted nutrients, and minimizes delayed onset muscle soreness (DOMS).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Will this help with chronic fatigue not related to exercise?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes! While designed for athletes, this IV is equally effective for professionals experiencing burnout, jet lag, or chronic fatigue. The NAD+ and B-vitamins support mitochondrial function and energy metabolism at the cellular level, regardless of the cause of fatigue.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How often should athletes receive this treatment?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                For athletes in intense training, weekly sessions are ideal. During competition season or for maintenance, bi-weekly to monthly treatments work well. Your physician will design a protocol based on your training intensity, recovery needs, and performance goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Does this contain any banned substances for competitive athletes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No. All ingredients in our Energy Boost & Fitness Support IV are naturally occurring nutrients and are not on any anti-doping banned substance lists. However, if you compete professionally, please verify with your sports organization's medical team.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can I combine this with my regular supplements and protein shakes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, this IV therapy complements your existing nutrition and supplementation regimen. The advantage of IV delivery is 100% bioavailability, ensuring your body receives the full therapeutic dose without digestive breakdown.
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
                <span className="font-semibold">1.</span> PubMed — NAD+ Metabolism in Human Health, Trends Endocrinol Metab (2021) DOI:10.1016/j.tem.2020.11.007
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
              Book Your Energy Boost & Fitness Support Drip Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Unlock peak performance and accelerated recovery with NAD+ and L-Carnitine
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
                "name": "Energy Boost & Fitness Support IV",
                "description": "Maximize athletic performance & accelerate recovery with NAD+, L-Carnitine, B-complex for endurance and cellular energy",
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
                    "name": "Can I receive this IV therapy before a workout or competition?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! Many professional athletes and fitness enthusiasts schedule this treatment 2-4 hours before major events or intense training sessions. The NAD+ and B-complex provide sustained cellular energy without the jitters or crash associated with stimulants."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is NAD+ therapy safe and scientifically proven?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, NAD+ (Nicotinamide Adenine Dinucleotide) is a naturally occurring coenzyme found in every cell of your body. It's essential for energy production, DNA repair, and cellular metabolism. Clinical research supports its safety and efficacy when administered by qualified medical professionals."
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
