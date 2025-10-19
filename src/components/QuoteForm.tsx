'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle } from 'lucide-react'

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tests: '',
    preferredDate: '',
    location: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate WhatsApp message
    const message = `Hi 👋 I'd like to request a quote for home blood collection in Dubai.

📋 My Details:
👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
🧪 Tests Needed: ${formData.tests}
📅 Preferred Date: ${formData.preferredDate}
📍 Location: ${formData.location}

Please share your most affordable pricing and available time slots. Looking for express results with smart reports.

Thank you!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/971523011150?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappURL, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-gray-300 focus:border-teal-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+971 XX XXX XXXX"
            value={formData.phone}
            onChange={handleChange}
            className="border-2 border-gray-300 focus:border-teal-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="tests" className="block text-sm font-semibold text-gray-700 mb-2">
          Tests Needed *
        </label>
        <Textarea
          id="tests"
          name="tests"
          required
          rows={3}
          placeholder="E.g., CBC, Lipid Profile, Thyroid Function, Vitamin D..."
          value={formData.tests}
          onChange={handleChange}
          className="border-2 border-gray-300 focus:border-teal-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Date
          </label>
          <Input
            id="preferredDate"
            name="preferredDate"
            type="text"
            placeholder="E.g., Tomorrow, This weekend..."
            value={formData.preferredDate}
            onChange={handleChange}
            className="border-2 border-gray-300 focus:border-teal-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Location in Dubai
          </label>
          <Input
            id="location"
            name="location"
            type="text"
            placeholder="E.g., Dubai Marina, Downtown..."
            value={formData.location}
            onChange={handleChange}
            className="border-2 border-gray-300 focus:border-teal-500"
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
      >
        <MessageCircle className="w-5 h-5 mr-3" />
        Get Instant Quote on WhatsApp
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you'll be redirected to WhatsApp with your quote request pre-filled
      </p>
    </form>
  )
}
