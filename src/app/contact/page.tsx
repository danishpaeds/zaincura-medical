"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  Calendar,
  CheckCircle,
  AlertCircle,
  User,
  FileText
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  serviceType: string
  message: string
  preferredContact: string
  urgency: string
}
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    serviceType: '',
    message: '',
    preferredContact: 'whatsapp',
    urgency: 'regular'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Create WhatsApp message with contact form data
      const whatsappMessage = `📞 *NEW CONTACT INQUIRY* 📞

👤 *Contact Details:*
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

📋 *Inquiry Details:*
Subject: ${formData.subject}
Service Type: ${formData.serviceType}
Urgency: ${formData.urgency.toUpperCase()}
Preferred Contact: ${formData.preferredContact.toUpperCase()}

💬 *Message:*
${formData.message}

⏰ *Submitted:* ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}

Please respond to this inquiry. Thank you! 🙏`

      // Encode message for WhatsApp URL
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappURL = `https://wa.me/971523011150?text=${encodedMessage}`

      // Track form submission for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submitted', {
          event_category: 'Contact',
          form_type: 'Contact Inquiry',
          service_type: formData.serviceType,
          urgency: formData.urgency,
          preferred_contact: formData.preferredContact,
          value: 1
        })
      }

      // Short delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Open WhatsApp with pre-filled message
      window.open(whatsappURL, '_blank')

      // Show success and reset form
      setIsSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        serviceType: '',
        message: '',
        preferredContact: 'whatsapp',
        urgency: 'regular'
      })
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Contact Us</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch with Zain Cura Medical Center
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help with your healthcare needs. Contact us for appointments,
              inquiries, or emergency medical assistance in Deira, Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+97145703423">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +971-45703423
                </Button>
              </a>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp: +971-523011150
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Location */}
            <Card className="clinical-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Our Clinic</h3>
                <p className="text-gray-600 mb-4">
                  Zain Cura Medical Center<br />
                  Al Ghurair Centre<br />
                  Al Murraqabat, Deira, Dubai, UAE
                </p>
                <Link href="/location/al-ghurair-centre-deira">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Get Directions
                  </Button>
                </Link>
              </CardContent>
            </Card>
            {/* Phone */}
            <Card className="clinical-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Main Line: +971-45703423<br />
                  Available during clinic hours<br />
                  Same-day appointments
                </p>
                <a href="tel:+97145703423">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>
            {/* Hours */}
            <Card className="clinical-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Opening Hours</h3>
                <p className="text-gray-600 mb-4">
                  Clinic: 09:00 - 21:00 Daily<br />
                  Home Care: 24/7 Available<br />
                  Emergency: Anytime
                </p>
                <Link href="/book">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Book Appointment
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. For urgent medical matters, please call us directly.
              </p>
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+971-XX-XXXXXXX"
                    />
                  </div>
                </div>
                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Inquiry
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    <option value="gp">GP / Family Medicine</option>
                    <option value="wellness">Wellness Health Checks</option>
                    <option value="lab">Laboratory Tests</option>
                    <option value="std">STD Testing (Confidential)</option>
                    <option value="gynecologist">Gynecologist</option>
                    <option value="iv-drip">IV Drip Therapy</option>
                    <option value="home-care">Home Care Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                  />
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry, symptoms, or questions..."
                  />
                </div>
                {/* Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="whatsapp">WhatsApp</option>
                      <option value="phone">Phone Call</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="regular">Regular (24-48 hours)</option>
                      <option value="urgent">Urgent (Same day)</option>
                      <option value="emergency">Emergency (Call immediately)</option>
                    </select>
                  </div>
                </div>
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
                <p className="text-sm text-gray-500">
                  * Required fields. For medical emergencies, please call +971-45703423 or visit our clinic immediately.
                </p>
              </form>
            </div>
            {/* Quick Contact Options */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact Options</h3>
              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/971523011150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="clinical-card hover:scale-[1.02] transition-transform duration-200">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                        <p className="text-gray-600 text-sm">+971-523011150</p>
                        <p className="text-green-600 text-sm">Instant response • 24/7</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
                <a href="tel:+97145703423" className="block">
                  <Card className="clinical-card hover:scale-[1.02] transition-transform duration-200">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Call Us</h4>
                        <p className="text-gray-600 text-sm">+971-45703423</p>
                        <p className="text-primary text-sm">Same-day booking • Direct line</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
                <Link href="/book" className="block">
                  <Card className="clinical-card hover:scale-[1.02] transition-transform duration-200">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Book Online</h4>
                        <p className="text-gray-600 text-sm">Schedule appointment</p>
                        <p className="text-primary text-sm">Available slots • Instant confirmation</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <a href="mailto:info@zaincura.com" className="block">
                  <Card className="clinical-card hover:scale-[1.02] transition-transform duration-200">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600 text-sm">info@zaincura.com</p>
                        <p className="text-primary text-sm">24-48 hour response</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Need Immediate Help?</h4>
                    <p className="text-blue-700 text-sm">Our medical team is available</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Clinic Hours</span>
                    <span className="text-sm text-gray-600">09:00 - 21:00 Daily</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Home Visits</span>
                    <span className="text-sm text-gray-600">24/7 Available</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Response Time</span>
                    <span className="text-sm text-gray-600">Within 30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MobileCTABar />
    </div>
  )
}
