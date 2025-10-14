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
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Gut Support & Detox IV Dubai | L-Glutamine + MSM Infusion | Zain Cura',
  description: 'Repair gut lining, reduce inflammation & support digestive wellness with our Gut Support IV in Dubai. L-Glutamine, MSM, DMSO & Methylfolate for IBS, leaky gut & detox. DHA-licensed. Clinic & home service.',
  keywords: 'gut support iv dubai, digestive wellness dubai, l-glutamine therapy dubai, gut repair dubai, ibs treatment dubai, leaky gut dubai, detox iv therapy, gut lining repair, msm therapy, digestive health dubai, gut inflammation treatment, microbiome support dubai',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/gut-support'
  }
}

export default function GutSupportPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Gut%20Support%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://unikamed.com/wp-content/uploads/2025/06/3236.jpg"
            alt="Gut Support IV Therapy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-6">
              <Activity className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Gut Support IV
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Detox • Heal • Balance
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
            A restorative IV formulated to strengthen the gut barrier, reduce inflammation, and support detoxification.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Supports gut-lining repair and digestion.",
              "Reduces bloating and inflammation.",
              "Improves nutrient absorption and microbiome balance."
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
                  L-Glutamine repairs intestinal mucosa and supports immune barrier.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  MSM and DMSO reduce oxidative stress in gut cells.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Methylfolate and B12 aid cellular regeneration and detox enzymes.
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
                  { name: "L-Glutamine 2000 mg", desc: "Restores gut lining integrity." },
                  { name: "MSM 2000 mg", desc: "Anti-inflammatory sulfur compound." },
                  { name: "DMSO 5000 mg", desc: "Cellular detoxification agent." },
                  { name: "Methylfolate 1 mg", desc: "Promotes DNA repair and mucosal healing." },
                  { name: "Vitamin B12 1500 µg", desc: "Enhances red cell and nerve function." }
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
          <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ideal for individuals with IBS, fatigue, or toxin exposure.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Duration: 45–60 min
                    </Badge>
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Recommended: Weekly or as advised
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
              "Avoid in active infections or severe liver disease.",
              "Consult for G6PD or sulfur-sensitivity cases."
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
                Can this IV therapy help with IBS and digestive issues?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes! L-Glutamine is the primary fuel source for intestinal cells and helps repair gut lining damage common in IBS, leaky gut, and inflammatory bowel conditions. Combined with MSM's anti-inflammatory properties, many clients report reduced bloating, improved digestion, and better bowel regularity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is this treatment safe for detoxification?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Absolutely. Under medical supervision, this IV therapy supports safe, gentle cellular detoxification. DMSO and MSM help eliminate toxins at the cellular level while L-Glutamine protects and repairs the gut barrier, which is your body's first line of defense against toxins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                What is "leaky gut" and how does this help?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Leaky gut (increased intestinal permeability) occurs when the gut lining becomes damaged, allowing toxins and undigested food particles to enter the bloodstream. L-Glutamine (2000mg) is clinically proven to strengthen tight junctions between intestinal cells, restoring the gut barrier and reducing systemic inflammation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How does this treatment support the microbiome?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                By repairing the gut lining and reducing inflammation, this IV creates optimal conditions for beneficial bacteria to thrive. While it doesn't directly add probiotics, it restores the environment needed for a healthy, balanced microbiome. We recommend combining with quality probiotics for best results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How long before I notice improvements in my digestion?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Many clients notice reduced bloating and improved comfort within 24-48 hours after the first treatment. For chronic conditions like IBS or leaky gut, optimal improvements typically develop over 4-6 weeks with weekly treatments as the gut lining regenerates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can I receive this if I have food sensitivities or allergies?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes! In fact, gut barrier dysfunction often contributes to food sensitivities. By repairing the gut lining, many clients report improved tolerance to foods that previously caused reactions. However, please inform our medical team of any known allergies during consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is this treatment suitable for people with autoimmune conditions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Many autoimmune conditions have a gut-health component. While this IV doesn't cure autoimmune disease, it supports gut barrier integrity, which may help reduce systemic inflammation. Always consult with your specialist before starting any new treatment protocol.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How often should I receive this treatment for chronic gut issues?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                For active gut issues, we recommend weekly sessions for 6-8 weeks to allow proper healing. After that, monthly maintenance treatments help sustain gut health. Your physician will create a personalized protocol based on your specific condition and progress.
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
                <span className="font-semibold">1.</span> NIH — Glutamine and Intestinal Barrier Function, Curr Opin Clin Nutr Metab Care (2017) DOI:10.1097/MCO.0000000000000378
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
              Book Your Gut Support Drip Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Restore digestive wellness and cellular detoxification with L-Glutamine & MSM
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
                "name": "Gut Support & Detox IV",
                "description": "Repair gut lining, reduce inflammation & support digestive wellness with L-Glutamine, MSM, DMSO for IBS and leaky gut",
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
                    "name": "Can this IV therapy help with IBS and digestive issues?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! L-Glutamine is the primary fuel source for intestinal cells and helps repair gut lining damage common in IBS, leaky gut, and inflammatory bowel conditions. Combined with MSM's anti-inflammatory properties, many clients report reduced bloating, improved digestion, and better bowel regularity."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is leaky gut and how does this help?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Leaky gut (increased intestinal permeability) occurs when the gut lining becomes damaged, allowing toxins and undigested food particles to enter the bloodstream. L-Glutamine (2000mg) is clinically proven to strengthen tight junctions between intestinal cells, restoring the gut barrier and reducing systemic inflammation."
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
