import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, Clock, Sparkles, AlertCircle, Beaker, Home, Building2 } from 'lucide-react'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Hair Loss Support IV Dubai | Biotin + Vitamin D3 Infusion for Hair Growth | Zain Cura',
  description: 'Nourish your hair from within with our Hair Loss Support IV in Dubai. High-dose Biotin, Vitamin D3, MSM & Zinc for stronger follicles, reduced shedding & healthy growth. Perfect for thinning hair & post-stress hair loss. DHA-licensed.',
  keywords: 'hair loss treatment dubai, biotin iv therapy dubai, hair growth iv dubai, vitamin d3 therapy, hair thinning treatment dubai, alopecia support dubai, hair regrowth therapy, msm for hair, zinc hair loss, keratin support dubai, hair wellness dubai, scalp health treatment',
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/hair-loss-support'
  }
}

export default function HairLossSupportPage() {
  const whatsappLink = "https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20Hair%20Loss%20Support%20IV%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://ivhub.com/assets/img/blog/ar3.webp"
            alt="Hair Growth IV Therapy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-6">
              <Sparkles className="w-10 h-10 text-[#00B6AD]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Hair Loss Support IV
            </h1>
            <p className="text-2xl text-[#00B6AD] font-medium mb-8 tracking-wide">
              Nourish • Strengthen • Revitalize
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
            This IV replenishes micronutrients essential for hair follicle strength, keratin synthesis, and scalp circulation.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Improves hair texture and strength.",
              "Reduces shedding linked to nutritional deficiency.",
              "Supports keratin and collagen production."
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
                  Vitamin D3 regulates follicle cycling and scalp health.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Biotin and MSM enhance keratin structure and collagen synthesis.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#00B6AD]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  B-vitamins promote nutrient delivery and circulation to follicles.
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
                  { name: "Vitamin D3 20,000 IU", desc: "Stimulates hair follicle cycling." },
                  { name: "Biotin 5 mg", desc: "Essential for keratin production." },
                  { name: "MSM 3000 mg", desc: "Sulfur donor for collagen synthesis." },
                  { name: "B-Complex", desc: "Supports red blood cell production." },
                  { name: "Zinc 30 mg", desc: "Prevents hair thinning and breakage." }
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
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#00B6AD] mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Recommended for individuals with hair thinning or post-stress hair loss.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Duration: 40–50 min
                    </Badge>
                    <Badge variant="outline" className="border-[#00B6AD] text-[#00B6AD]">
                      Repeat every 1–2 weeks
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
              "Consult if on retinoid or D3 supplements."
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
                Will this IV therapy regrow lost hair?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                This IV therapy strengthens existing hair follicles, reduces shedding, and creates optimal conditions for healthier regrowth. While it doesn't grow new hair on completely inactive follicles, many clients see improvement in hair density and quality within 2-3 months when combined with comprehensive medical care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can I combine this with PRP or other hair restoration treatments?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes! This IV therapy works synergistically with PRP (Platelet-Rich Plasma) therapy, topical minoxidil, laser therapy, and other hair restoration treatments. The nutrients support cellular repair and collagen synthesis, enhancing results from regenerative scalp treatments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How does Biotin improve hair health?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Biotin (Vitamin B7) is essential for keratin production, the protein that makes up hair structure. High-dose IV biotin (5mg) improves hair thickness, strength, and growth rate. It's particularly effective for brittle hair and hair loss caused by nutritional deficiency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Why is Vitamin D3 important for hair growth?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Vitamin D3 receptors are present in hair follicles and play a crucial role in hair follicle cycling. Low vitamin D levels are linked to alopecia and hair thinning. Our high-dose D3 (20,000 IU) helps stimulate dormant follicles and supports healthy hair growth phases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How long before I see visible improvements in my hair?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Hair growth is a gradual process. Most clients notice reduced shedding within 2-4 weeks and improvements in hair texture, strength, and density after 8-12 weeks of regular treatments. Optimal results typically appear after 3-6 months of consistent therapy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Is this treatment suitable for both men and women?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes! Hair Loss Support IV therapy is effective for both male and female pattern hair loss, telogen effluvium (stress-related shedding), postpartum hair loss, and nutritional deficiency-related hair thinning. Our physicians will customize the formula based on your specific type of hair loss.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                Can this help with hair loss from hormonal changes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes. While this IV doesn't directly address hormonal imbalances, it provides essential nutrients that support hair follicle health during hormonal transitions (menopause, postpartum, thyroid conditions). For best results, combine with appropriate hormonal management under medical supervision.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-[#333333] hover:text-[#00B6AD]">
                How often should I receive this treatment for optimal results?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                For active hair loss, we recommend bi-weekly sessions for the first 2 months, then transitioning to monthly maintenance. The hair growth cycle takes 3-6 months, so consistency is key for visible improvements.
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
                <span className="font-semibold">1.</span> NIH — Vitamin D and Hair Follicle Cycling, Dermato-Endocrinology (2018) DOI:10.1080/19381980.2018.1425301
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
              Book Your Hair Loss Support Drip Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Nourish your hair from within with Biotin, Vitamin D3 & MSM
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
                "name": "Hair Loss Support IV",
                "description": "Nourish hair from within with high-dose Biotin, Vitamin D3, MSM & Zinc for stronger follicles and healthy growth",
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
                    "name": "Will this IV therapy regrow lost hair?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "This IV therapy strengthens existing hair follicles, reduces shedding, and creates optimal conditions for healthier regrowth. While it doesn't grow new hair on completely inactive follicles, many clients see improvement in hair density and quality within 2-3 months when combined with comprehensive medical care."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Biotin improve hair health?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Biotin (Vitamin B7) is essential for keratin production, the protein that makes up hair structure. High-dose IV biotin (5mg) improves hair thickness, strength, and growth rate. It's particularly effective for brittle hair and hair loss caused by nutritional deficiency."
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
