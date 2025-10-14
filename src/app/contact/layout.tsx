import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Zain Cura Medical Center | Book Appointment | Dubai',
  description: 'Contact Zain Cura Medical Center in Deira, Dubai. Book appointments, get directions to Al Ghurair Centre, call for 24/7 home visits. Multiple contact options available.',
  keywords: 'contact Zain Cura, book appointment Dubai, medical center Deira, Al Ghurair Centre, doctor appointment Dubai, medical consultation',
  openGraph: {
    title: 'Contact Zain Cura Medical Center | Book Appointment | Dubai',
    description: 'Contact us for medical appointments, home visits, and healthcare services in Dubai. Located at Al Ghurair Centre, Deira.',
    url: 'https://www.zaincura.com/contact',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Zain Cura Medical Center',
    description: 'Contact us for medical appointments and healthcare services in Dubai.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/contact'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
