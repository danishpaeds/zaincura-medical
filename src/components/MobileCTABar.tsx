"use client"

import { Button } from '@/components/ui/button'
import { Calendar, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import { useMedicalTracking } from '@/hooks/useMedicalTracking'

export function MobileCTABar() {
  const { trackBookingAttempt, trackCallClick, trackWhatsApp } = useMedicalTracking()

  return (
    <nav
      className="sticky-mobile-cta"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 gap-2">
        <Link href="/book" className="flex-1">
          <Button
            size="sm"
            className="w-full min-h-[44px]"
            aria-label="Book medical appointment"
            onClick={() => trackBookingAttempt(undefined, 'Mobile CTA Bar')}
          >
            <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
            <span>Book</span>
          </Button>
        </Link>

        <a
          href="https://wa.me/971523011150"
          className="flex-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us via WhatsApp at +971-523-011-150"
          onClick={() => trackWhatsApp('Mobile CTA Bar')}
        >
          <Button
            size="sm"
            variant="outline"
            className="w-full min-h-[44px] border-2 border-[#117A37] text-[#117A37] hover:bg-[rgba(17,122,55,0.08)] hover:border-[#117A37] hover:text-[#117A37]"
          >
            <MessageCircle className="w-4 h-4 mr-1" aria-hidden="true" />
            <span>WhatsApp</span>
          </Button>
        </a>

        <a
          href="tel:+97145703423"
          className="flex-1"
          aria-label="Call clinic at +971-45-703-423"
          onClick={() => trackCallClick('Main Reception')}
        >
          <Button
            size="sm"
            variant="outline"
            className="w-full min-h-[44px] border-2 border-[#4A9D9C] text-[#4A9D9C] hover:bg-[rgba(74,157,156,0.08)] hover:border-[#4A9D9C] hover:text-[#4A9D9C]"
          >
            <Phone className="w-4 h-4 mr-1" aria-hidden="true" />
            <span>Call</span>
          </Button>
        </a>
      </div>
    </nav>
  )
}
