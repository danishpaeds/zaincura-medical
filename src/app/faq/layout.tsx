import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | Zain Cura Medical Center',
  description: 'Get answers to frequently asked questions about Zain Cura Medical Center services, appointments, insurance, home visits, and medical procedures in Dubai.',
  keywords: 'medical FAQ Dubai, doctor questions Dubai, healthcare FAQ, medical center questions, Zain Cura FAQ, health services questions',
  openGraph: {
    title: 'FAQ | Frequently Asked Questions | Zain Cura Medical Center',
    description: 'Find answers to common questions about our medical services, appointments, and healthcare procedures.',
    url: 'https://www.zaincura.com/faq',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Zain Cura Medical Center',
    description: 'Find answers to common questions about our medical services and procedures.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/faq'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
