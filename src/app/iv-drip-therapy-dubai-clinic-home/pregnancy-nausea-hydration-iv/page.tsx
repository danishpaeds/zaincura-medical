import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Baby, CheckCircle2, ArrowRight, Phone, Calendar, Shield } from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata = {
  title: 'Pregnancy Nausea & Hydration IV Therapy | Zain Cura Dubai Home Service',
  description: 'Safe IV drip therapy for morning sickness and vomiting in pregnancy. DHA-licensed doctors and nurses available at home, hotel, or clinic in Dubai. Hydration, Vitamin B6, and antiemetics for rapid relief.',
  keywords: 'pregnancy IV therapy Dubai, morning sickness IV Dubai, hyperemesis gravidarum Dubai, pregnancy hydration Dubai, IV for nausea pregnancy Dubai, pregnancy IV home service Dubai, safe IV pregnancy Dubai',
  openGraph: {
    title: 'Pregnancy Nausea & Hydration IV Therapy | Zain Cura Dubai Home Service',
    description: 'Pregnancy-safe IV therapy for morning sickness relief with Vitamin B6, electrolytes, and physician-approved antiemetics.',
    url: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/pregnancy-nausea-hydration-iv',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  alternates: {
    canonical: 'https://zaincura.com/iv-drip-therapy-dubai-clinic-home/pregnancy-nausea-hydration-iv'
  }
}

export default function PregnancyNauseaHydrationIVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-pink-500/10 text-pink-700 hover:bg-pink-500/20 border-pink-500/20">
              <Shield className="w-4 h-4 mr-2" />
              Pregnancy-Safe • DHA-Licensed
            </Badge>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full mb-6">
              <Baby className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6 xl:text-[45px]">
              Pregnancy Nausea/Vomiting - Hydration IV
            </h1>
            <p className="text-2xl text-pink-600 font-semibold mb-6">
              Hydrate • Soothe • Nourish
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Safe, gentle IV therapy for morning sickness relief. Administered by DHA-licensed doctors and nurses at home, hotel, or clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/971523011150?text=Hi%20👋%20I'm%20pregnant%20and%20experiencing%20nausea.%20I'd%20like%20to%20book%20a%20Pregnancy%20Hydration%20IV%20Therapy%20with%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Home%20or%20Clinic.">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Home/Hotel Service
                </Button>
              </Link>
              <Link href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27m%20interested%20in%20booking%20Pregnancy%20Nausea%20%26%20Hydration%20IV%20therapy.%20Please%20share%20available%20slots%20for%20Clinic%20%2F%20Home%20%2F%20Hotel%20service.">
                <Button size="lg" variant="outline" className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">Safe Relief for Expectant Mothers</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Pregnancy Nausea & Hydration IV Therapy is a gentle, pregnancy-safe infusion designed to relieve morning sickness, vomiting, and dehydration. Administered by DHA-licensed nurses and doctors, it provides essential fluids, electrolytes, Vitamin B6, and physician-approved antiemetics to restore comfort and wellbeing for expectant mothers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This therapy can be provided in the clinic or in the comfort of your home or hotel, ensuring you stay safe and hydrated during pregnancy without unnecessary hospital visits.
          </p>
        </div>
      </section>

      {/* Formulation */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Safe Pregnancy Formulation</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border-2 border-pink-200">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Normal Saline / Lactated Ringer's</h3>
              <p className="text-gray-700">Rehydrates and restores electrolytes lost through vomiting.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-pink-200">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Vitamin B6 (Pyridoxine)</h3>
              <p className="text-gray-700">Clinically proven to reduce nausea and support metabolism.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-pink-200">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Dextrose 5% (if advised)</h3>
              <p className="text-gray-700">Provides mild glucose energy and prevents ketosis.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-pink-200">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Ondansetron / Metoclopramide (as prescribed)</h3>
              <p className="text-gray-700">Pregnancy-safe antiemetics to control vomiting.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-pink-200">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Electrolytes (Na+, K+, Mg2+)</h3>
              <p className="text-gray-700">Maintain hydration and prevent muscle cramps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">Maternal Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Rehydrates and restores electrolyte balance",
              "Reduces nausea and vomiting in pregnancy",
              "Improves maternal comfort and fetal hydration",
              "Avoids unnecessary hospital admission",
              "Provides fast symptom relief within 30–60 minutes",
              "Safe, doctor-supervised, and DHA-compliant"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Is this IV therapy safe during pregnancy?</AccordionTrigger>
              <AccordionContent>
                Yes. It's formulated with pregnancy-safe fluids and vitamins, and administered by DHA-licensed professionals under obstetric guidance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How quickly does it work?</AccordionTrigger>
              <AccordionContent>
                Most patients feel relief from nausea and fatigue within 30 to 60 minutes after infusion.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Can I get it done at home?</AccordionTrigger>
              <AccordionContent>
                Yes. Our licensed home-care team can provide this IV at your residence or hotel with full medical supervision.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">What ingredients are used?</AccordionTrigger>
              <AccordionContent>
                Normal saline, Vitamin B6, and pregnancy-safe antiemetics like Ondansetron are commonly used.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Is this safe for the baby?</AccordionTrigger>
              <AccordionContent>
                Yes. All components are obstetrician-approved and pregnancy-friendly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">Do I need a doctor's prescription?</AccordionTrigger>
              <AccordionContent>
                A short medical assessment is done by our DHA team before each infusion to ensure safety.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">Can I continue my prenatal vitamins?</AccordionTrigger>
              <AccordionContent>
                Yes. This IV complements oral supplements by restoring hydration and improving absorption.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">How many sessions are recommended?</AccordionTrigger>
              <AccordionContent>
                One session is usually sufficient, but repeated weekly infusions can be prescribed for persistent nausea.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">Can this prevent hospital admission?</AccordionTrigger>
              <AccordionContent>
                Yes, it helps manage symptoms early and safely at home, avoiding emergency visits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">Are there side effects?</AccordionTrigger>
              <AccordionContent>
                Minor vein discomfort or temporary dizziness may occur rarely; allergic reactions are extremely uncommon.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Relief from Morning Sickness, Delivered to You
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Book pregnancy-safe IV therapy at Home, Hotel, or Clinic
          </p>
          <Link href="https://wa.me/971523011150?text=Hi%20👋%20I'm%20pregnant%20and%20experiencing%20nausea.%20I'd%20like%20to%20book%20a%20Pregnancy%20Hydration%20IV%20Therapy%20with%20Zain%20Cura.%20Please%20share%20available%20slots%20for%20Home%20or%20Clinic.">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-6 text-lg">
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
            <strong>Medical Disclaimer:</strong> For educational use only. Administered solely by DHA-licensed medical professionals after clinical evaluation. Not suitable for unmanaged gestational conditions or without obstetric clearance.
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
            "name": "Pregnancy Nausea & Hydration IV Therapy",
            "description": "Pregnancy-safe IV therapy for morning sickness relief with Vitamin B6, electrolytes, and physician-approved antiemetics.",
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
