"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, MessageCircle, Phone, CheckCircle, User, Mail, MapPin, Clock, FileText } from 'lucide-react'
import Link from 'next/link'

const services = [
  "GP / Family Medicine Consultation",
  "Wellness Health Check (Smart Reports)",
  "Laboratory Tests",
  "STD Testing (Confidential)",
  "Semen Analysis",
  "IV Drip Therapy",
  "Doctor on Call (Home/Hotel)",
  "Nurse on Call (Home/Hotel)",
  "Home Blood Test Collection",
  "Other - Please specify in notes"
]

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
]

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
    gclid: '',
    gbraid: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message with all form data
    const whatsappMessage = `🏥 *NEW APPOINTMENT REQUEST* 🏥

👤 *Patient Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

🩺 *Appointment Details:*
Service: ${formData.service}
Location: ${formData.location}
Date: ${formData.preferredDate}
Time: ${formData.preferredTime}

📍 *Address:* ${formData.address || 'Clinic Visit'}

📝 *Notes:* ${formData.notes || 'None'}

⏰ *Submitted:* ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}

Please confirm this appointment. Thank you! 🙏`

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappURL = `https://wa.me/971523011150?text=${encodedMessage}`

    // Detect if user is on mobile or desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    // Track form submission for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'appointment_booking_submitted', {
        event_category: 'Medical Services',
        service_type: formData.service,
        location_type: formData.location,
        preferred_date: formData.preferredDate,
        device_type: isMobile ? 'mobile' : 'desktop',
        value: 1
      })
    }

    // Open WhatsApp with pre-filled message
    window.open(whatsappURL, '_blank')

    // Show success message
    setIsSubmitted(true)

    // Optional: Clear form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        location: '',
        address: '',
        preferredDate: '',
        preferredTime: '',
        notes: '',
        gclid: '',
        gbraid: ''
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="clinical-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                WhatsApp Message Sent Successfully! 📱
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Your appointment request has been sent directly to our WhatsApp. We'll confirm your appointment within 30 minutes.
                Check your WhatsApp for our response!
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  For immediate assistance, you can also:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/+971-5X-XXXXXXX" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </a>
                  <a href="tel:+971-4-XXXXXXX">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book an Appointment — Zain Cura
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your visit to our clinic or arrange a home/hotel visit.
            We'll confirm your appointment within 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            <Card className="clinical-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Appointment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Enter your full name"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="+971 XX XXX XXXX"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Location *
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Choose location</option>
                        <option value="clinic">Clinic (Al Ghurair Centre)</option>
                        <option value="home">Home Visit</option>
                        <option value="hotel">Hotel Visit</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Preferred Date *
                      </label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  {(formData.location === 'home' || formData.location === 'hotel') && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Address / Hotel + Room Number *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                        <Textarea
                          placeholder="Please provide full address or hotel name with room number"
                          className="pl-10 min-h-[80px]"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select preferred time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Additional Notes
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                      <Textarea
                        placeholder="Any specific requirements, symptoms, or questions you'd like to discuss..."
                        className="pl-10 min-h-[100px]"
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Hidden fields for tracking */}
                  <input type="hidden" name="gclid" value={formData.gclid} />
                  <input type="hidden" name="gbraid" value={formData.gbraid} />

                  {/* VIP Membership Upgrade Option */}
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="membership-interest"
                        className="mt-1 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                      />
                      <div className="flex-1">
                        <label htmlFor="membership-interest" className="text-sm font-medium text-gray-900 cursor-pointer">
                          ⭐ I'm interested in VIP Membership benefits
                        </label>
                        <p className="text-xs text-gray-600 mt-1">
                          Get priority appointments, quarterly wellness checks, complimentary home care, and save up to AED 2,801/year.{' '}
                          <Link href="/membership" className="text-yellow-600 hover:underline font-medium">
                            Learn more
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      By submitting this form, you consent to our{' '}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      {' '}and agree to be contacted regarding your appointment.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Calendar className="w-5 h-5 mr-2" />
                    Submit Appointment Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-6">
            <Card className="clinical-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Need Immediate Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <a href="https://wa.me/+971-5X-XXXXXXX" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Now
                  </Button>
                </a>

                <a href="tel:+971-4-XXXXXXX">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Direct
                  </Button>
                </a>

                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>Clinic Hours:</strong><br />
                    09:00 - 22:00 Daily
                  </p>
                  <p>
                    <strong>Home Care:</strong><br />
                    24/7 Available
                  </p>
                  <p>
                    <strong>Emergency Response:</strong><br />
                    30-60 minutes in Deira
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Quick Confirmation</p>
                      <p>We'll contact you within 30 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Transparent Pricing</p>
                      <p>Clear costs, no hidden fees</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Professional Care</p>
                      <p>DHA-licensed medical professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Complete Privacy</p>
                      <p>Confidential medical consultations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
