import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  MessageCircle,
  Phone,
  User,
  Clock,
  ArrowRight,
  Stethoscope,
  Heart,
  Shield,
  TestTube,
  Apple
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'

export const metadata = {
  title: 'Health Blog | Medical Tips & Wellness Advice | Zain Cura Medical',
  description: 'Read expert health advice, medical tips, and wellness guides from Zain Cura Medical Center. Stay informed about health topics, nutrition, and medical care in Dubai.',
  keywords: 'health blog Dubai, medical advice, wellness tips, healthcare blog, nutrition advice Dubai, medical tips UAE',
  openGraph: {
    title: 'Health Blog | Medical Tips & Wellness Advice | Zain Cura Medical',
    description: 'Expert health advice, medical tips, and wellness guides from Dubai healthcare professionals.',
    url: 'https://www.zaincura.com/blog',
    siteName: 'Zain Cura Medical Center',
    locale: 'en_AE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Blog | Zain Cura Medical Center',
    description: 'Expert health advice and wellness guides from Dubai healthcare professionals.'
  },
  alternates: {
    canonical: 'https://www.zaincura.com/blog'
  },
  robots: {
    index: true,
    follow: true
  }
}

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Wellness Health Checks in Dubai",
    excerpt: "Learn why regular wellness checks are essential for maintaining optimal health and preventing diseases. Our smart health reports make understanding your results easier than ever.",
    author: "Dr. Sarah Ahmed",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Wellness",
    icon: Heart,
    featured: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Understanding STD Testing: A Private and Confidential Guide",
    excerpt: "Everything you need to know about sexual health testing. We ensure 100% confidentiality and provide same-day results in a private, comfortable environment.",
    author: "Dr. Ahmed Hassan",
    date: "December 8, 2024",
    readTime: "7 min read",
    category: "Sexual Health",
    icon: Shield,
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Women's Health: When to See a Gynecologist",
    excerpt: "Our female gynecologist explains the importance of regular women's health checkups, from routine screenings to prenatal care and hormonal health.",
    author: "Dr. Fatima Al-Zahra",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Women's Health",
    icon: Heart,
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Weight Management in Dubai: A Clinical Dietician's Guide",
    excerpt: "Expert nutrition advice for healthy weight loss and management. Learn about sustainable dietary changes, meal planning, and professional nutrition support available in Dubai.",
    author: "Dr. Nourhan Saleh - Clinical Dietician",
    date: "December 12, 2024",
    readTime: "8 min read",
    category: "Nutrition",
    icon: Apple,
    featured: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Diabetes Diet Management: Foods to Eat and Avoid",
    excerpt: "Comprehensive guide to managing diabetes through nutrition. Learn about blood sugar control, carbohydrate counting, and creating a balanced diabetic meal plan.",
    author: "Dr. Nourhan Saleh - Clinical Dietician",
    date: "December 10, 2024",
    readTime: "10 min read",
    category: "Nutrition",
    icon: Apple,
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "PCOS and Nutrition: Dietary Solutions for Hormonal Balance",
    excerpt: "How proper nutrition can help manage PCOS symptoms. Discover anti-inflammatory foods, insulin-resistant meal plans, and supplements that support hormonal health.",
    author: "Dr. Nourhan Saleh - Clinical Dietician",
    date: "December 8, 2024",
    readTime: "9 min read",
    category: "Nutrition",
    icon: Apple,
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 7,
    title: "Heart-Healthy Eating: Mediterranean Diet in Dubai",
    excerpt: "Adapting the Mediterranean diet for Dubai residents. Learn about heart-healthy foods, portion control, and preventing cardiovascular disease through nutrition.",
    author: "Dr. Nourhan Saleh - Clinical Dietician",
    date: "December 6, 2024",
    readTime: "7 min read",
    category: "Nutrition",
    icon: Apple,
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 8,
    title: "Child Nutrition: Healthy Eating Habits for Growing Kids",
    excerpt: "Essential nutrition guide for children and teenagers. Address picky eating, promote healthy growth, and establish lifelong healthy eating habits in Dubai families.",
    author: "Dr. Nourhan Saleh - Clinical Dietician",
    date: "December 4, 2024",
    readTime: "6 min read",
    category: "Nutrition",
    icon: Apple,
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 9,
    title: "Laboratory Tests Explained: Blood Work and Beyond",
    excerpt: "Demystifying common lab tests and what they reveal about your health. From CBC to hormone panels, understand what your results mean.",
    author: "Dr. Omar Khalil",
    date: "December 3, 2024",
    readTime: "8 min read",
    category: "Laboratory",
    icon: TestTube,
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 10,
    title: "Nutrition During Ramadan: Healthy Fasting and Iftar Meals",
    excerpt: "Complete guide to maintaining optimal nutrition during Ramadan. Meal planning for suhoor and iftar, staying hydrated, and managing energy levels while fasting.",
    author: "Dr. Nourhan Saleh - Clinical Dietician",
    date: "December 2, 2024",
    readTime: "9 min read",
    category: "Nutrition",
    icon: Apple,
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 11,
    title: "Home Healthcare: Bringing Medical Care to Your Doorstep",
    excerpt: "Discover the convenience and benefits of home healthcare services. From doctor visits to lab collections, medical care has never been more accessible.",
    author: "Dr. Ahmed Hassan",
    date: "November 30, 2024",
    readTime: "4 min read",
    category: "Home Care",
    icon: Stethoscope,
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 12,
    title: "IV Therapy Benefits: Hydration and Vitamin Boost",
    excerpt: "Learn about the benefits of IV drip therapy for hydration, vitamin supplementation, and wellness. Available both in-clinic and at your home.",
    author: "Dr. Sarah Ahmed",
    date: "November 28, 2024",
    readTime: "5 min read",
    category: "Wellness",
    icon: Heart,
    featured: false,
    image: "/api/placeholder/400/250"
  }
]

const categories = [
  "All Posts",
  "Nutrition",
  "Wellness",
  "Sexual Health",
  "Women's Health",
  "Laboratory",
  "Home Care"
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Health & Wellness Blog</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Medical Insights & Health Tips
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay informed with expert medical advice, health tips, and insights from our
              DHA-licensed doctors and healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary text-white" : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map(post => (
        <section key={post.id} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
            </div>

            <Card className="clinical-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <post.icon className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-primary font-medium">Featured Health Article</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-primary/10 text-primary">{post.category}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 group">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Health Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert medical advice and health insights from our team of DHA-licensed healthcare professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 group">
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <post.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-primary">{post.category}</Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter for the latest medical insights, health tips, and clinic updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Medical Advice?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a consultation with our DHA-licensed doctors for personalized health guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <a href="tel:+97145703423">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Clinic
              </Button>
            </a>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
