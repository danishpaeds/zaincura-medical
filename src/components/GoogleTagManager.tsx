'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface GTMProps {
  gtmId: string
}

// Medical website event tracking functions
export const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Medical-specific event tracking functions
export const trackAppointmentBooking = (service?: string, method?: string) => {
  trackEvent('appointment_booking_attempt', {
    event_category: 'Medical Services',
    service_type: service || 'General',
    booking_method: method || 'Button Click',
    value: 1
  })
}

export const trackPhoneCall = (department?: string) => {
  trackEvent('phone_call_click', {
    event_category: 'Contact',
    department: department || 'Main',
    contact_method: 'Phone',
    value: 1
  })
}

export const trackWhatsAppClick = (context?: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    context: context || 'General',
    contact_method: 'WhatsApp',
    value: 1
  })
}

export const trackServiceView = (serviceName: string, serviceCategory?: string) => {
  trackEvent('service_view', {
    event_category: 'Medical Services',
    service_name: serviceName,
    service_category: serviceCategory || 'Healthcare',
    content_type: 'Service Page'
  })
}

export const trackVIPMembershipInterest = (planType?: string) => {
  trackEvent('vip_membership_interest', {
    event_category: 'Membership',
    plan_type: planType || 'Unknown',
    membership_tier: planType,
    value: 1
  })
}

export const trackFormSubmission = (formType: string, formLocation?: string) => {
  trackEvent('form_submission', {
    event_category: 'Forms',
    form_type: formType,
    form_location: formLocation || 'Unknown',
    conversion: true,
    value: 1
  })
}

export const trackEmergencyContact = () => {
  trackEvent('emergency_contact', {
    event_category: 'Emergency',
    contact_type: 'Emergency Call',
    priority: 'High',
    value: 5
  })
}

// Enhanced ecommerce tracking for medical services
export const trackServiceSelection = (service: {
  item_id: string
  item_name: string
  item_category: string
  price?: number
  currency?: string
}) => {
  trackEvent('select_item', {
    event_category: 'Medical Services',
    currency: service.currency || 'AED',
    value: service.price || 0,
    items: [{
      item_id: service.item_id,
      item_name: service.item_name,
      item_category: service.item_category,
      price: service.price || 0,
      quantity: 1
    }]
  })
}

// Scroll tracking for engagement
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', {
    event_category: 'Engagement',
    scroll_depth: percentage,
    engagement_type: 'Scroll'
  })
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export function GoogleTagManager({ gtmId }: GTMProps) {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []

    // Enhanced user data for medical website
    window.dataLayer.push({
      'website_type': 'medical_center',
      'business_category': 'healthcare',
      'location': 'Dubai_Deira',
      'services_offered': ['GP', 'Lab Tests', 'Home Care', 'IV Therapy', 'Wellness'],
      'payment_methods': ['Cash', 'Card'],
      'languages': ['English', 'Arabic']
    })

    // Set up scroll tracking
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100)

        // Track at 25%, 50%, 75%, 90% intervals
        if ([25, 50, 75, 90].includes(scrollPercentage)) {
          trackScrollDepth(scrollPercentage)
        }
      }, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Track page load time for medical site performance
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      trackEvent('page_load_time', {
        event_category: 'Performance',
        load_time: loadTime,
        page_type: 'medical_website'
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
    </>
  )
}

export function GTMNoscript({ gtmId }: GTMProps) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
