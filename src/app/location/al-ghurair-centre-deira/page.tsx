"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Navigation,
  Clock,
  Car,
  Train,
  Phone,
  MessageCircle,
  Calendar,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb, BreadcrumbConfigs } from '@/components/Breadcrumb'

export default function LocationPage() {
  const [showLiveMap, setShowLiveMap] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Al Ghurair Centre</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit Our Medical Center in Deira
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Conveniently located at Al Ghurair Centre in the heart of Deira, Dubai.
              Easily accessible by metro, bus, and car with ample parking available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://maps.app.goo.gl/GKS5hVEt9unyhGcW7" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Navigation className="w-5 h-5 mr-2" />
                  Open in Google Maps
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20visit%20your%20clinic%20at%20Al%20Ghurair%20Centre.%20Can%20you%20share%20directions%20and%20parking%20information%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-[#117A37] text-[#117A37] hover:bg-[rgba(17,122,55,0.08)]">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={BreadcrumbConfigs.location.alGhurair} />
        </div>
      </section>

      {/* Address & Directions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How to Find Us
              </h2>

              <Card className="clinical-card border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Our Address</h3>
                      <p className="text-gray-600">
                        Zain Cura Medical Center<br />
                        Al Ghurair Centre<br />
                        Al Rigga, Deira, Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Entrance Instructions</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Find Entrance number 3 of Ghurair Center, next to it is the office building lift, and find your way to 6th floor
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="clinical-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Train className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">By Metro</h4>
                        <p className="text-gray-600 text-sm">
                          Union Station: 5 min walk<br />
                          Al Rigga Station: 8 min walk
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="clinical-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Car className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">By Car</h4>
                        <p className="text-gray-600 text-sm">
                          Free parking available<br />
                          Al Ghurair Centre parking
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="clinical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Opening Hours</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>Monday - Friday: 09:00 - 21:00</p>
                        <p>Saturday - Sunday: 10:00 - 20:00</p>
                        <p className="text-primary font-medium">Home Care: 24/7 Available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Location Map</h3>

              <Card className="clinical-card overflow-hidden">
                <CardContent className="p-0">
                  {!showLiveMap ? (
                    // Static Map Preview
                    <div className="relative h-96 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <MapPin className="w-10 h-10 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Al Ghurair Centre, Deira</h4>
                        <p className="text-gray-600 mb-6">Click to load interactive map</p>
                        <Button
                          onClick={() => setShowLiveMap(true)}
                          className="bg-primary hover:bg-primary/90 text-white"
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          Load Live Map
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // Live Interactive Map
                    <div className="h-96">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3962433453867!2d55.31866831501284!3d25.26919438386954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sAl%20Ghurair%20Centre!5e0!3m2!1sen!2sae!4v1644947123456!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Zain Cura Medical Center Location"
                        className="rounded-b-xl"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="text-center">
                <a href="https://maps.app.goo.gl/GKS5hVEt9unyhGcW7" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Open in Google Maps App
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Visit Us?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your appointment or contact us for directions and parking information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C]">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+97145703423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C]">
                <Phone className="w-5 h-5 mr-2" />
                Call Clinic
              </Button>
            </a>
            <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%27d%20like%20to%20visit%20your%20clinic%20at%20Al%20Ghurair%20Centre.%20Can%20you%20share%20directions%20and%20parking%20information%3F" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A9D9C]">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <p>Al Ghurair Centre, Deira • Entrance 3, 6th Floor • Free Parking Available</p>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
