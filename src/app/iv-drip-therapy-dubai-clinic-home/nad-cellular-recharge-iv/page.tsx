import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dna, CheckCircle2, ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata = {
  title: 'NAD+ Cellular Recharge IV – Energy, Longevity & Brain Optimization | Zain Cura Dubai',
  description: 'Experience peak energy and mental clarity with the NAD+ Cellular Recharge IV at Zain Cura Dubai. Available in 100mg, 200mg, and 500mg strengths to restore cellular vitality and longevity.',
  keywords: 'NAD+ IV therapy Dubai, NAD infusion Dubai, anti-aging IV Dubai, longevity therapy Dubai, cellular energy IV Dubai, brain optimization Dubai, mitochondrial therapy Dubai, NAD+ Dubai clinic, NAD+ home service',
  openGraph: {
    title: 'NAD+ Cellular Recharge IV – Energy, Longevity & Brain Optimization | Zain Cura Dubai',
    description: 'Advanced longevity therapy with NAD+ (100-500mg) to restore cellular energy, enhance mental clarity, and support healthy aging.',
    url: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/nad-cellular-recharge-iv',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/nad-cellular-recharge-iv'
  }
}

export default function NADCellularRechargeIVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-violet-500/10 text-violet-700 hover:bg-violet-500/20 border-violet-500/20">
              Advanced Longevity Therapy
            </Badge>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full mb-6">
              <Dna className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              NAD+ Cellular Recharge IV
            </h1>
            <p className="text-2xl text-violet-600 font-semibold mb-6">
              Revitalize • Repair • Rejuvenate
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advanced longevity therapy designed to restore your body's natural energy systems, enhance mental clarity, and support healthy aging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20NAD%2B%20Cellular%20Recharge%20IV%20(100–500mg)%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service.">
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Book NAD+ IV via WhatsApp
                </Button>
              </Link>
              <Link href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20booking%20NAD%2B%20Cellular%20Recharge%20IV%20therapy.%20Please%20share%20available%20slots%20for%20Clinic%20%2F%20Home%20%2F%20Hotel%20service.">
                <Button size="lg" variant="outline" className="border-2 border-violet-500 text-violet-600 hover:bg-violet-50 px-8 py-6 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dosage Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">
            NAD+ Dosage Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {dose: "100 mg", duration: "60 minutes", description: "Introductory protocol for first-time clients or mild fatigue.", color: "violet"},
              {dose: "200 mg", duration: "90 minutes", description: "Intermediate performance and cognitive optimization level.", color: "purple"},
              {dose: "500 mg", duration: "120–150 minutes", description: "Advanced cellular regeneration and longevity infusion.", color: "fuchsia"}
            ].map((option, index) => (
              <Card key={index} className={`border-2 border-${option.color}-200 hover:shadow-xl transition-all`}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-violet-600 mb-2">{option.dose}</div>
                  <div className="text-sm text-gray-600 mb-4">{option.duration}</div>
                  <p className="text-gray-700">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">What is NAD+ Cellular Recharge?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The NAD+ Cellular Recharge IV is an advanced longevity therapy designed to restore your body's natural energy systems, enhance mental clarity, and support healthy aging. NAD+ (Nicotinamide Adenine Dinucleotide) is the coenzyme that powers every cell in your body, essential for metabolism, DNA repair, and brain function.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As we age or face stress, NAD+ levels drop — leading to fatigue, fog, and slower recovery. This drip replenishes NAD+ directly into your cells for profound renewal from within.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">Clinical Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Restores cellular energy and mitochondrial efficiency",
              "Enhances focus, concentration, and memory",
              "Supports longevity and DNA repair enzymes",
              "Improves mood and sleep cycles via serotonin balance",
              "Reduces inflammation and oxidative stress",
              "Boosts athletic recovery and endurance"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-violet-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Active Ingredients</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border-2 border-violet-200">
              <h3 className="text-xl font-bold text-violet-700 mb-2">NAD+</h3>
              <p className="text-gray-700">Available in 100 mg, 200 mg, or 500 mg based on patient tolerance and goals.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-violet-200">
              <h3 className="text-xl font-bold text-violet-700 mb-2">Vitamin B-Complex</h3>
              <p className="text-gray-700">Supports NAD+ metabolism and neurochemical balance.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-violet-200">
              <h3 className="text-xl font-bold text-violet-700 mb-2">Magnesium</h3>
              <p className="text-gray-700">Promotes smooth infusion and muscular relaxation.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-violet-200">
              <h3 className="text-xl font-bold text-violet-700 mb-2">Vitamin C</h3>
              <p className="text-gray-700">Provides antioxidant synergy and supports mitochondrial recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What is NAD+ and why is it important?</AccordionTrigger>
              <AccordionContent>
                NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme in every cell that powers energy production and DNA repair. Its decline contributes to aging, fatigue, and brain fog.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How soon will I feel results?</AccordionTrigger>
              <AccordionContent>
                Most clients report clearer focus and more energy within hours. Cumulative mitochondrial benefits build over several sessions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Is it safe?</AccordionTrigger>
              <AccordionContent>
                Yes, when administered by DHA-licensed professionals. The infusion is gradual and fully monitored.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">What's the difference between 100mg, 200mg, and 500mg?</AccordionTrigger>
              <AccordionContent>
                100mg is a gentle starter dose; 200mg supports performance; 500mg is for deep cellular rejuvenation and longevity programs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Can NAD+ IV help with anti-aging?</AccordionTrigger>
              <AccordionContent>
                Yes. Research shows NAD+ activates longevity-related enzymes (sirtuins) and improves DNA stability (Nature Aging, 2020).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">Does it help with brain fog or burnout?</AccordionTrigger>
              <AccordionContent>
                Absolutely. It enhances neuronal repair and neurotransmitter balance (Cell Metab 2021, DOI:10.1016/j.cmet.2021.03.004).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">Any side effects?</AccordionTrigger>
              <AccordionContent>
                Mild warmth or tightness may occur during infusion if given rapidly. Slowing the rate eliminates this.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">How often should I repeat it?</AccordionTrigger>
              <AccordionContent>
                Typically weekly for 4–6 weeks, then monthly for maintenance and anti-aging.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">Can I combine it with Glutathione or Vitamin C drips?</AccordionTrigger>
              <AccordionContent>
                Yes, they complement each other—enhancing detox, energy, and antioxidant defense.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">Is it safe for diabetics or hypertensive clients?</AccordionTrigger>
              <AccordionContent>
                Yes, under medical supervision. Dosage and speed will be adjusted for comfort and safety.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Cellular Renewal?
          </h2>
          <p className="text-xl mb-8 text-violet-100">
            Book your NAD+ Cellular Recharge IV at Clinic, Home, or Hotel
          </p>
          <Link href="https://wa.me/971523011150?text=Hi%20👋%20I'm%20interested%20in%20booking%20the%20NAD%2B%20Cellular%20Recharge%20IV%20(100–500mg)%20therapy%20at%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Clinic%20/%20Home%20/%20Hotel%20service.">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-10 py-6 text-lg">
              Book via WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 text-center">
            <strong>Medical Disclaimer:</strong> For educational use only. Administered by DHA-licensed professionals after evaluation. Not suitable for pregnancy, heart disease, or G6PD deficiency. Individual results may vary.
          </p>
        </div>
      </section>

      <MobileCTABar />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            "name": "NAD+ Cellular Recharge IV Therapy",
            "description": "Advanced longevity therapy with NAD+ (100-500mg) to restore cellular energy, enhance mental clarity, and support healthy aging.",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Zain Cura Medical Center",
              "telephone": "+971523011150",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Ghurair Centre",
                "addressLocality": "Deira",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              }
            }
          })
        }}
      />
    </div>
  )
}
