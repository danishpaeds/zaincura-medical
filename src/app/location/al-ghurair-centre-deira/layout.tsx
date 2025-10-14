import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Location | Al Ghurair Centre Deira | Zain Cura Medical Center',
  description: 'Find Zain Cura Medical Center at Al Ghurair Centre, 6th Floor, Deira, Dubai. Get directions, parking information, and public transport access to our medical clinic.',
  keywords: 'Zain Cura location, Al Ghurair Centre medical center, Deira clinic Dubai, medical center directions Dubai, healthcare Al Ghurair',
  openGraph: {
    title: 'Location | Al Ghurair Centre Deira | Zain Cura Medical Center',
    description: 'Visit us at Al Ghurair Centre, 6th Floor, Deira, Dubai. Easy access by metro, car, and public transport.',
    url: 'https://www.zaincura.com/location/al-ghurair-centre-deira',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location | Al Ghurair Centre Deira',
    description: 'Visit us at Al Ghurair Centre, 6th Floor, Deira, Dubai.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/location/al-ghurair-centre-deira'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
