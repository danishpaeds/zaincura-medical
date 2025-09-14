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
  Activity,
  Target,
  Heart,
  CheckCircle,
  AlertTriangle,
  TrendingDown
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Diabetes Diet Management Dubai | Clinical Dietician Guide | Blood Sugar Control',
  description: 'Expert diabetes diet management from our clinical dietician in Dubai. Learn blood sugar control, carbohydrate counting, and diabetic meal planning at Al Ghurair Centre.',
  keywords: 'diabetes diet Dubai, diabetic nutrition Dubai, blood sugar control Dubai, clinical dietician diabetes, carbohydrate counting Dubai, diabetic meal plan',
  openGraph: {
    title: 'Diabetes Diet Management Dubai | Clinical Dietician Expert Guide',
    description: 'Professional diabetes nutrition guidance from DHA licensed clinical dietician in Dubai. Blood sugar control and diabetic meal planning.',
    url: 'https://zaincura.com/blog/diabetes-diet-management',
    siteName: 'Zain Cura Medical Center',
    type: 'article',
    publishedTime: '2024-12-10T00:00:00.000Z',
    authors: ['Dr. Nourhan Saleh - Clinical Dietician']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diabetes Diet Management Dubai | Clinical Dietician Guide',
    description: 'Expert diabetes nutrition strategies from our clinical dietician in Dubai.'
  },
  alternates: {
    canonical: 'https://zaincura.com/blog/diabetes-diet-management'
  }
}

const diabetesTips = [
  {
    icon: Target,
    title: "Carbohydrate Counting",
    description: "Learn to count carbs and manage blood sugar spikes effectively"
  },
  {
    icon: Activity,
    title: "Glycemic Index Awareness",
    description: "Choose low glycemic foods for better blood sugar control"
  },
  {
    icon: TrendingDown,
    title: "Portion Control",
    description: "Proper portion sizes help maintain steady glucose levels"
  },
  {
    icon: Heart,
    title: "Heart-Healthy Choices",
    description: "Diabetics have higher cardiovascular risk - choose wisely"
  }
]

const foodsToEat = [
  "Non-starchy vegetables (spinach, broccoli, cauliflower)",
  "Lean proteins (fish, chicken, tofu, legumes)",
  "Whole grains (brown rice, quinoa, oats)",
  "Healthy fats (olive oil, avocado, nuts)",
  "Low-fat dairy or dairy alternatives",
  "Fresh fruits in moderation (berries, apples)"
]

const foodsToLimit = [
  "Refined sugars and sweets",
  "White bread and refined grains",
  "Sugary beverages and fruit juices",
  "Processed and fried foods",
  "High-sodium foods",
  "Saturated and trans fats"
]

export default function DiabetesDietBlogPost() {
  return (
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
          <Badge className="mb-4 bg-blue-100 text-blue-800">Nutrition</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Diabetes Diet Management: Foods to Eat and Avoid
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Dr. Nourhan Saleh - Clinical Dietician</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>December 10, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive guide to managing diabetes through nutrition. Learn about blood sugar control,
            carbohydrate counting, and creating a balanced diabetic meal plan with expert guidance.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Diabetes and Nutrition</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Managing diabetes effectively requires a comprehensive understanding of how different foods affect
            blood sugar levels. As a clinical dietician in Dubai, I work with many patients to develop
            personalized nutrition strategies that help maintain stable glucose levels while enjoying a
            varied and satisfying diet.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-orange-900 mb-2">Important Note</h3>
                <p className="text-orange-800">
                  This guide provides general nutrition advice for diabetes management. Always consult with
                  your healthcare provider before making significant dietary changes, especially if you're
                  taking diabetes medications.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Principles of Diabetic Nutrition</h2>

          {/* Diabetes Tips Grid */}
          <div className="my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diabetesTips.map((tip, index) => (
                <Card key={index} className="clinical-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <tip.icon className="w-6 h-6 text-blue-600" />
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

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Foods to Include in Your Diabetic Diet</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A well-balanced diabetic diet should focus on nutrient-dense foods that provide stable energy
            without causing dramatic blood sugar spikes. Here are the best food choices for diabetes management:
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Foods to Eat Regularly
            </h3>
            <ul className="space-y-3">
              {foodsToEat.map((food, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-800">{food}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Foods to Limit or Avoid</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Certain foods can cause rapid blood sugar spikes and should be limited or avoided in a diabetic diet.
            Understanding these foods helps you make better choices for blood sugar control:
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Foods to Limit or Avoid
            </h3>
            <ul className="space-y-3">
              {foodsToLimit.map((food, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-red-800">{food}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Plate Method for Diabetics</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The plate method is a simple way to plan balanced meals without complicated counting.
            Divide your plate into sections: half non-starchy vegetables, one quarter lean protein,
            and one quarter complex carbohydrates.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Meal Timing and Blood Sugar Control</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Consistent meal timing helps maintain stable blood sugar levels throughout the day.
            Eating at regular intervals prevents dramatic glucose fluctuations and helps your
            medications work more effectively.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Diabetes Management in Dubai</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Living with diabetes in Dubai presents unique challenges, including social dining,
            traditional Middle Eastern foods, and lifestyle factors. Our clinical dietician provides
            culturally appropriate meal planning that considers local food preferences and social customs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Working with a Clinical Dietician</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Professional nutrition counseling can significantly improve diabetes management outcomes.
            A clinical dietician can help you develop personalized meal plans, teach carbohydrate
            counting, and provide ongoing support for lifestyle changes.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Professional Diabetes Nutrition Support
            </h3>
            <p className="text-gray-600 mb-6">
              Our DHA-licensed clinical dietician specializes in diabetes management and can help you
              create a personalized nutrition plan for better blood sugar control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/clinical-dietician-dubai">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Apple className="w-5 h-5 mr-2" />
                  Book Diabetes Nutrition Consultation
                </Button>
              </Link>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
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
            <Link href="/blog/weight-management-dubai-clinical-dietician">
              <Card className="clinical-card hover:scale-[1.02] transition-transform duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Apple className="w-5 h-5 text-green-600" />
                    <Badge variant="secondary" className="text-xs">Nutrition</Badge>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weight Management Guide</h4>
                  <p className="text-gray-600 text-sm">Expert nutrition advice for healthy weight loss and management in Dubai.</p>
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
  )
}
