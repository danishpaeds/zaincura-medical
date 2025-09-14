import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  MessageCircle,
  Phone,
  User,
  Clock,
  ArrowLeft,
  Apple,
  Scale,
  Target,
  Heart,
  CheckCircle,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Weight Management Dubai | Clinical Dietician Guide | Healthy Weight Loss',
  description: 'Expert weight management guide from our clinical dietician in Dubai. Learn sustainable weight loss strategies, meal planning, and professional nutrition support at Al Ghurair Centre.',
  keywords: 'weight management Dubai, weight loss Dubai, clinical dietician Dubai, nutrition consultation Dubai, meal planning Dubai, healthy weight loss',
  openGraph: {
    title: 'Weight Management Dubai | Clinical Dietician Expert Guide',
    description: 'Professional weight management guidance from DHA licensed clinical dietician in Dubai. Sustainable weight loss strategies and meal planning.',
    url: 'https://zaincura.com/blog/weight-management-dubai-clinical-dietician',
    siteName: 'Zain Cura Medical Center',
    type: 'article',
    publishedTime: '2024-12-12T00:00:00.000Z',
    authors: ['Dr. Nourhan Saleh - Clinical Dietician']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weight Management Dubai | Clinical Dietician Guide',
    description: 'Expert weight management strategies from our clinical dietician in Dubai.'
  },
  alternates: {
    canonical: 'https://zaincura.com/blog/weight-management-dubai-clinical-dietician'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Weight Management in Dubai: A Clinical Dietician\'s Guide',
  description: 'Expert nutrition advice for healthy weight loss and management. Learn about sustainable dietary changes, meal planning, and professional nutrition support available in Dubai.',
  author: {
    '@type': 'Person',
    name: 'Dr. Nourhan Saleh',
    jobTitle: 'Clinical Dietician'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Zain Cura Medical Center',
    logo: {
      '@type': 'ImageObject',
      url: 'https://zaincura.com/logo.png'
    }
  },
  datePublished: '2024-12-12T00:00:00.000Z',
  dateModified: '2024-12-12T00:00:00.000Z',
  url: 'https://zaincura.com/blog/weight-management-dubai-clinical-dietician',
  image: 'https://zaincura.com/images/weight-management-dubai.jpg',
  articleSection: 'Nutrition',
  wordCount: 1200
}

const weightLossTips = [
  {
    icon: Target,
    title: "Set Realistic Goals",
    description: "Aim for 1-2 pounds per week weight loss for sustainable results"
  },
  {
    icon: Apple,
    title: "Focus on Whole Foods",
    description: "Prioritize vegetables, lean proteins, and complex carbohydrates"
  },
  {
    icon: Scale,
    title: "Monitor Portions",
    description: "Use portion control techniques and mindful eating practices"
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Regular monitoring helps maintain motivation and adjust plans"
  }
]

const mealPlanTips = [
  "Start with a protein-rich breakfast to control hunger throughout the day",
  "Include vegetables in every meal to increase fiber and nutrients",
  "Choose complex carbohydrates over simple sugars for sustained energy",
  "Stay hydrated with at least 8 glasses of water daily",
  "Plan meals in advance to avoid impulsive food choices",
  "Practice portion control using smaller plates and bowls"
]

export default function WeightManagementBlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-8">
            <Badge className="mb-4 bg-green-100 text-green-800">Nutrition</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Weight Management in Dubai: A Clinical Dietician's Guide
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Dr. Nourhan Saleh - Clinical Dietician</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 12, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Expert nutrition advice for healthy weight loss and management. Learn about sustainable
              dietary changes, meal planning, and professional nutrition support available in Dubai.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Healthy Weight Management</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Weight management is not just about losing weight quickly; it's about adopting sustainable lifestyle
              changes that promote long-term health and wellbeing. As a clinical dietician practicing in Dubai,
              I've seen countless patients achieve their weight goals through evidence-based nutrition strategies
              rather than restrictive fad diets.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science Behind Sustainable Weight Loss</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Successful weight management involves creating a moderate caloric deficit while ensuring adequate
              nutrition. This means consuming fewer calories than you burn, but doing so in a way that maintains
              muscle mass, supports metabolism, and provides essential nutrients your body needs to function optimally.
            </p>

            {/* Weight Loss Tips Grid */}
            <div className="my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Principles for Successful Weight Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {weightLossTips.map((tip, index) => (
                  <Card key={index} className="clinical-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <tip.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                          <p className="text-gray-600 text-sm">{tip.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Meal Planning for Weight Management</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Effective meal planning is crucial for weight management success. It helps you make healthier food
              choices, control portions, and avoid impulsive eating decisions that can derail your progress.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-green-900 mb-4">Meal Planning Tips for Success</h3>
              <ul className="space-y-3">
                {mealPlanTips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Weight Management Challenges in Dubai</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Living in Dubai presents unique challenges for weight management, including dining out frequently,
              limited outdoor exercise during summer months, and busy lifestyles that can lead to stress eating.
              Our <Link href="/clinical-dietician-dubai" className="text-primary hover:underline font-medium">clinical dietician services</Link> address these specific challenges with practical solutions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Seek Professional Help</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              While many people can manage their weight independently, working with a clinical dietician can
              significantly improve your success rate. Professional guidance is especially beneficial if you have
              underlying health conditions, have struggled with yo-yo dieting, or need accountability and support.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Weight Management Services</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Zain Cura Medical Center, our DHA-licensed clinical dietician provides comprehensive weight
              management services including personalized meal plans, nutritional counseling, and ongoing support.
              We focus on creating sustainable lifestyle changes rather than quick fixes.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Weight Management Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a consultation with our clinical dietician at Al Ghurair Centre, Deira
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/clinical-dietician-dubai">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <Apple className="w-5 h-5 mr-2" />
                    Book Nutrition Consultation
                  </Button>
                </Link>
                <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Dietician
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/diabetes-diet-management">
                <Card className="clinical-card hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Apple className="w-5 h-5 text-green-600" />
                      <Badge variant="secondary" className="text-xs">Nutrition</Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Diabetes Diet Management</h4>
                    <p className="text-gray-600 text-sm">Comprehensive guide to managing diabetes through nutrition and meal planning.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog/heart-healthy-eating-mediterranean-diet">
                <Card className="clinical-card hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Heart className="w-5 h-5 text-red-600" />
                      <Badge variant="secondary" className="text-xs">Nutrition</Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Heart-Healthy Mediterranean Diet</h4>
                    <p className="text-gray-600 text-sm">Learn how to adapt the Mediterranean diet for Dubai residents.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </article>

        <MobileCTABar />
      </div>
    </>
  )
}
