'use client'

import { useCallback } from 'react'
import {
  trackAppointmentBooking,
  trackPhoneCall,
  trackWhatsAppClick,
  trackServiceView,
  trackVIPMembershipInterest,
  trackFormSubmission,
  trackEmergencyContact,
  trackServiceSelection,
  trackEvent
} from '@/components/GoogleTagManager'

// Medical services mapping
const MEDICAL_SERVICES = {
  'gp': { name: 'GP Consultation', category: 'Primary Care', price: 200 },
  'gynecologist': { name: 'Gynecologist', category: 'Specialized Care', price: 300 },
  'dietician': { name: 'Clinical Dietician', category: 'Nutrition', price: 250 },
  'iv-therapy': { name: 'IV Drip Therapy', category: 'Wellness', price: 400 },
  'lab-tests': { name: 'Laboratory Tests', category: 'Diagnostics', price: 150 },
  'wellness-check': { name: 'Wellness Check', category: 'Preventive Care', price: 500 }
} as const

export function useMedicalTracking() {
  const trackBookingAttempt = useCallback((service?: keyof typeof MEDICAL_SERVICES, method: string = 'Button Click') => {
    const serviceData = service ? MEDICAL_SERVICES[service] : undefined
    trackAppointmentBooking(serviceData?.name || 'General Appointment', method)
  }, [])

  const trackCallClick = useCallback((department: string = 'Main Reception') => {
    trackPhoneCall(department)
  }, [])

  const trackWhatsApp = useCallback((context: string = 'General Inquiry') => {
    trackWhatsAppClick(context)
  }, [])

  const trackMembershipClick = useCallback((planType: 'Gold' | 'Silver' = 'Gold') => {
    trackVIPMembershipInterest(planType)
  }, [])

  const trackCTAClick = useCallback((ctaType: string, location: string) => {
    trackEvent('cta_click', {
      event_category: 'Call to Action',
      cta_type: ctaType,
      cta_location: location
    })
  }, [])

  return {
    trackBookingAttempt,
    trackCallClick,
    trackWhatsApp,
    trackMembershipClick,
    trackCTAClick,
    MEDICAL_SERVICES
  }
}
