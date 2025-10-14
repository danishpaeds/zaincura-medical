"use client"

import Link from 'next/link'
import { useState, useEffect, useRef, memo } from 'react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo'
import { useMedicalTracking } from '@/hooks/useMedicalTracking'

// ✅ PERFORMANCE: Import only specific icons to reduce bundle size
import {
  Menu,
  Phone,
  MessageCircle,
  Calendar,
  X
} from 'lucide-react'

const navItems = [
  { href: '/book', label: 'Book Appointment' },
  {
    href: '/services',
    label: 'Services',
    dropdown: [
      { href: '/gp-doctor-deira-dubai', label: 'GP / Family Medicine' },
      { href: '/gynecologist-dubai-female-doctor', label: 'Gynecologist' },
      { href: '/clinical-dietician-dubai', label: 'Clinical Dietician' },
      { href: '/iv-drip-therapy-dubai-clinic-home', label: 'IV Drip Therapy' },
      { href: '/wellness-health-checks-dubai', label: 'Wellness Health Checks' },
      { href: '/lab-tests-dubai-home-collection', label: 'Lab Tests' },
      { href: '/services', label: 'View All Services' }
    ]
  },
  { href: '/home-care', label: 'Home Care' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/location/al-ghurair-centre-deira', label: 'Location' },
  { href: '/contact', label: 'Contact' },
]

// ✅ PERFORMANCE: Memoized navigation component
export const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { trackBookingAttempt, trackCallClick, trackWhatsApp } = useMedicalTracking()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`
        bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'py-2 shadow-lg backdrop-blur-sm bg-white/95' : 'py-0'}
      `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          flex justify-between items-center transition-all duration-300 ease-in-out
          ${isScrolled ? 'h-14' : 'h-16'}
        `}>
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Logo size="md" showText={true} priority={true} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 font-medium text-sm group transition-all duration-300 ease-in-out hover:text-primary"
              >
                {item.label}

                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>

                {/* Hover background effect */}
                <span className="absolute inset-0 -m-2 rounded-lg bg-primary/5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 -z-10"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+97145703423" onClick={() => trackCallClick('Header Navigation')}>
              <Button
                size="sm"
                variant="outline"
                className="
                  border-primary text-primary hover:bg-primary hover:text-white
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-md
                  focus:ring-2 focus:ring-primary focus:ring-opacity-50
                "
              >
                <Phone className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Call
              </Button>
            </a>
            <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('Header Navigation')}>
              <Button
                size="sm"
                variant="outline"
                className="
                  border-green-600 text-green-600 hover:bg-green-600 hover:text-white
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-md
                  focus:ring-2 focus:ring-green-600 focus:ring-opacity-50
                "
              >
                <MessageCircle className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:bounce" />
                WhatsApp
              </Button>
            </a>
            <Link href="/book">
              <Button
                size="sm"
                className="
                  bg-[#4A9D9C] hover:bg-[#2D7D7D] text-white border-0
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-lg
                  focus:ring-2 focus:ring-[#4A9D9C] focus:ring-opacity-50
                "
                onClick={() => trackBookingAttempt(undefined, 'Header Navigation')}
              >
                <Calendar className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
              className="
                transition-all duration-300 ease-in-out
                hover:bg-gray-100 hover:scale-110
                focus:ring-2 focus:ring-primary focus:ring-opacity-50
              "
            >
              <div className="relative w-6 h-6">
                <Menu className={`
                  absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out
                  ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}
                `} aria-hidden="true" />
                <X className={`
                  absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out
                  ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}
                `} aria-hidden="true" />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    text-gray-700 hover:text-primary hover:bg-gray-50
                    transition-all duration-300 ease-in-out
                    font-medium py-3 px-4 rounded-lg
                    transform hover:translate-x-2
                  "
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-4 border-t border-gray-100 space-y-3 px-4">
                <Link href="/book" onClick={() => { setIsOpen(false); trackBookingAttempt(undefined, 'Mobile Navigation') }}>
                  <Button className="
                    w-full bg-[#4A9D9C] hover:bg-[#2D7D7D] text-white border-0
                    transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-lg
                  ">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:+97145703423" onClick={() => trackCallClick('Mobile Navigation')}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="
                        w-full border-primary text-primary hover:bg-primary hover:text-white
                        transition-all duration-300 ease-in-out hover:scale-105
                      "
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </a>
                  <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('Mobile Navigation')}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="
                        w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white
                        transition-all duration-300 ease-in-out hover:scale-105
                      "
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})
