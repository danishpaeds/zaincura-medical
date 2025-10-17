import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Book Appointment | Zain Cura Medical Center | Same-Day Dubai',
  description: 'Book your medical appointment at Zain Cura Medical Center. Same-day GP consultations, home visits, lab tests, and specialized services. Easy online booking available.',
  keywords: 'book appointment Dubai, same day doctor Dubai, GP appointment Deira, medical booking Dubai, doctor consultation Dubai, healthcare booking',
  openGraph: {
    title: 'Book Appointment | Zain Cura Medical Center | Same-Day Dubai',
    description: 'Book your medical appointment online. Same-day consultations, home visits, and comprehensive healthcare services in Dubai.',
    url: 'https://www.zaincura.com/book',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Appointment | Zain Cura Medical Center',
    description: 'Book your medical appointment online. Same-day consultations and home visits available.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/book'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
