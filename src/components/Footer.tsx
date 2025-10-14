import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Mail
} from 'lucide-react'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-sm text-gray-600 leading-relaxed">
              GP, Lab & Home Health Care in Deira. Cash-friendly, same-day appointments,
              and 24/7 home & hotel visits across Dubai.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link href="/home-care" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                Home Care
              </Link>
              <Link href="/blog" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                Health Blog
              </Link>
              <Link href="/faq" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info (NAP) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Zain Cura Medical Center</p>
                  <p>Al Ghurair Centre</p>
                  <p>Al Rigga, Deira, Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+971-45703423" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  +971-45703423
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <a href="https://wa.me/971523011150" className="text-sm text-gray-600 hover:text-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +971-523011150
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Clinic:</p>
                  <p>09:00 - 21:00 Daily</p>
                  <p className="font-medium mt-2">Home Care:</p>
                  <p>24/7 Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            <div className="space-y-3">
              <Link href="/book">
                <Button className="w-full bg-primary hover:bg-primary/90 justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white justify-start md:my-[10px] md:py-[15px]">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            {/* VIP Membership Promotion - Subtle Footer */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-3 mt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">VIP Healthcare</h4>
              <p className="text-xs text-gray-600 mb-2">
                Save up to AED 2,801/year with priority care
              </p>
              <Link href="/membership">
                <Button size="sm" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-xs">
                  View Membership Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © 2025 Zain Cura Medical Center. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/medical-disclaimer" className="hover:text-primary transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
