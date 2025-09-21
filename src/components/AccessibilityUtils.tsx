"use client"

import { useEffect } from 'react'

// Utility function for screen reader announcements
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
) {
  const elementId = priority === 'assertive' ? 'sr-alerts' : 'sr-announcements'
  const element = document.getElementById(elementId)

  if (element) {
    element.textContent = message

    // Clear the message after a short delay to allow for re-announcements
    setTimeout(() => {
      element.textContent = ''
    }, 1000)
  }
}

// Hook for managing focus
export function useFocusManagement() {
  const focusElement = (selector: string) => {
    const element = document.querySelector(selector) as HTMLElement
    if (element) {
      element.focus()
    }
  }

  const trapFocus = (containerSelector: string) => {
    const container = document.querySelector(containerSelector) as HTMLElement
    if (!container) return

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)

    return () => container.removeEventListener('keydown', handleTabKey)
  }

  return { focusElement, trapFocus }
}

// Emergency contact component with enhanced accessibility
export function EmergencyContact() {
  return (
    <div
      role="region"
      aria-labelledby="emergency-contact-title"
      className="emergency-contact"
    >
      <h2 id="emergency-contact-title" className="text-lg font-bold text-red-700 mb-2">
        Emergency Contact
      </h2>
      <p className="text-sm text-red-600 mb-3">
        For medical emergencies requiring immediate attention
      </p>
      <a
        href="tel:+97145703423"
        className="block text-xl font-bold text-red-700 hover:text-red-800 focus:outline-none focus:ring-4 focus:ring-red-500 rounded p-2"
        aria-label="Call emergency line. Phone number: +971 45 703 423. Available 24 hours, 7 days a week"
      >
        📞 +971-45703423
      </a>
      <p className="text-sm text-red-600 mt-2">
        Available 24/7 for medical emergencies in Dubai
      </p>
    </div>
  )
}

// Voice navigation hints for screen readers
export function VoiceNavigationHints() {
  return (
    <div className="sr-only">
      <h2>Voice Navigation Available</h2>
      <p>
        Voice commands available: Say "call clinic", "book appointment",
        "WhatsApp", or "emergency" for quick actions.
      </p>
      <p>
        You can also say "navigate to" followed by: services, contact,
        location, or frequently asked questions.
      </p>
    </div>
  )
}

// Accessibility announcement component for dynamic content
export function AccessibilityAnnouncer({
  message,
  priority = 'polite'
}: {
  message: string
  priority?: 'polite' | 'assertive'
}) {
  useEffect(() => {
    if (message) {
      announceToScreenReader(message, priority)
    }
  }, [message, priority])

  return null
}

// ARIA live region for page load announcements
export function PageLoadAnnouncer({ pageName }: { pageName: string }) {
  useEffect(() => {
    announceToScreenReader(`${pageName} page loaded`, 'polite')
  }, [pageName])

  return null
}

// Keyboard navigation helper
export function KeyboardNavigationHelper() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + 1: Go to main content
      if (e.altKey && e.key === '1') {
        e.preventDefault()
        const mainContent = document.getElementById('main-content')
        if (mainContent) {
          mainContent.focus()
          announceToScreenReader('Jumped to main content', 'polite')
        }
      }

      // Alt + 2: Go to navigation
      if (e.altKey && e.key === '2') {
        e.preventDefault()
        const navigation = document.getElementById('navigation')
        if (navigation) {
          const firstLink = navigation.querySelector('a, button') as HTMLElement
          if (firstLink) {
            firstLink.focus()
            announceToScreenReader('Jumped to navigation', 'polite')
          }
        }
      }

      // Alt + 3: Emergency contact
      if (e.altKey && e.key === '3') {
        e.preventDefault()
        const emergencyLink = document.querySelector('a[href^="tel:"]') as HTMLElement
        if (emergencyLink) {
          emergencyLink.focus()
          announceToScreenReader('Emergency contact focused', 'assertive')
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="sr-only">
      <h2>Keyboard Shortcuts</h2>
      <ul>
        <li>Alt + 1: Jump to main content</li>
        <li>Alt + 2: Jump to navigation</li>
        <li>Alt + 3: Focus emergency contact</li>
        <li>Escape: Close modal or menu</li>
      </ul>
    </div>
  )
}

// Mobile touch feedback component
export function TouchFeedback() {
  useEffect(() => {
    const addTouchFeedback = (e: TouchEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
        // Add visual feedback
        target.style.transform = 'scale(0.95)'
        setTimeout(() => {
          target.style.transform = ''
        }, 150)

        // Announce action for screen readers
        const ariaLabel = target.getAttribute('aria-label')
        if (ariaLabel) {
          announceToScreenReader(`Activated ${ariaLabel}`, 'polite')
        }
      }
    }

    document.addEventListener('touchstart', addTouchFeedback)
    return () => document.removeEventListener('touchstart', addTouchFeedback)
  }, [])

  return null
}
