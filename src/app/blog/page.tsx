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
  // Removed other icons as they are not in the JSON data
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
// ✅ IMPORT required function to load posts
import { getAllBlogPosts } from '@/lib/blog'

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

// ❌ The hardcoded 'const blogPosts = [...]' array has been REMOVED.

const categories = [
  "All Posts",
  "Nutrition",
  "Wellness",
  "Sexual Health",
  "Women's Health",
  "Laboratory",
  "Home Care",
  "Health Tips", // Added based on categories in BlogEditor/blog-posts.json
  "Preventive Care", // Added based on categories in blog-posts.json
  "Medical Technology" // Added based on categories in BlogEditor
]

// ✅ Changed to an async function to allow data fetching
export default async function BlogPage() {

  // 1. Fetch all posts from backend API
  const allPosts = await getAllBlogs();

  // Filter for published posts and sort by published_at (newest first)
  const publishedPosts = allPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

  // Define featured post as the newest one, and the rest as latest posts
  const featuredPost = publishedPosts[0] || null;
  const latestPosts = featuredPost ? publishedPosts.slice(1) : publishedPosts;

  // Helper function for display date
  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (omitted for brevity, no changes needed) */}
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
              <a href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%20read%20your%20health%20blog%20and%20I%27m%20interested%20in%20learning%20more%20about%20your%20medical%20services%20at%20Zain%20Cura.%20Can%20we%20discuss%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter (omitted for brevity, no changes needed) */}
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

      {/* Featured Post - RENDER ONLY IF featuredPost EXISTS */}
      {featuredPost && (
        <section key={featuredPost.id} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
            </div>
            {/* ✅ Wrap card in Link and use SLUG for navigation */}
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <Card className="clinical-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          {/* 💡 Using Heart as a generic icon, since the JSON doesn't provide a specific icon */}
                          <Heart className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-primary font-medium">Featured Health Article</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12">
                    <Badge className="mb-4 bg-primary/10 text-primary">{featuredPost.category}</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          {/* ✅ Use publishedAt and format the date */}
                          <span>{formatDate(featuredPost.publishedAt)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          {/* ✅ Use readingTime from JSON/lib calculation */}
                          <span>{featuredPost.readingTime} min read</span>
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
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid - Using latestPosts (all non-featured or all if none is featured) */}
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
            {/* ✅ Iterate over latestPosts array */}
            {latestPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="block"> {/* ✅ Wrap card in Link and use SLUG */}
                <Card className="clinical-card h-full hover:scale-[1.02] transition-transform duration-200 group">
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        {/* 💡 Using Stethoscope as a generic icon, since the JSON doesn't provide a specific icon */}
                        <Stethoscope className="w-6 h-6 text-primary" />
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
                        {/* ✅ Use readingTime from JSON/lib calculation */}
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* ✅ Use publishedAt and format the date */}
                      <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription (omitted for brevity, no changes needed) */}
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
            <Button className="bg-white text-[#4A9D9C] hover:bg-gray-100 hover:text-[#4A9D9C] font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section (omitted for brevity, no changes needed) */}
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
              <Button size="lg" variant="outline" className="border-[#4A9D9C] text-[#4A9D9C] hover:bg-primary hover:text-white">
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
