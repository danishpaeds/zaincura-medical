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
  Sparkles,
  BookOpen,
  TrendingUp,
  Award,
  Search,
  Zap,
  Target,
  Users,
  FileText,
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { getAllBlogPosts } from '@/lib/blog'
import Image from 'next/image'

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

const categories = [
  { name: "All Posts", count: null },
  { name: "Health Tips", count: null },
  { name: "Nutrition", count: null },
  { name: "Preventive Care", count: null },
  { name: "Medical News", count: null },
  { name: "Mental Wellness", count: null },
]

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();

  const publishedPosts = allPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const featuredPost = publishedPosts[0] || null;
  const latestPosts = featuredPost ? publishedPosts.slice(1, 7) : publishedPosts.slice(0, 6);

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Blog stats for hero section
  const totalPosts = publishedPosts.length;
  const totalReadTime = publishedPosts.reduce((acc, post) => acc + (post.readingTime || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* ULTRA PREMIUM HERO SECTION */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#4A9D9C] via-[#3A8D8C] to-[#2A7D7C] overflow-hidden">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>

        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Top Stats Bar - Glass Morphism */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-3 flex items-center gap-3 shadow-2xl hover:bg-white/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{totalPosts}+</p>
                <p className="text-xs text-white/80">Expert Articles</p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-3 flex items-center gap-3 shadow-2xl hover:bg-white/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5,000+</p>
                <p className="text-xs text-white/80">Readers</p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-3 flex items-center gap-3 shadow-2xl hover:bg-white/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{totalReadTime} min</p>
                <p className="text-xs text-white/80">Reading Time</p>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/30 text-white mb-8 animate-slide-up shadow-2xl group hover:bg-white/20 transition-all duration-300">
              <div className="relative">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <div className="absolute inset-0 blur-xl bg-yellow-400 opacity-50"></div>
              </div>
              <span className="font-semibold text-sm tracking-wide">Evidence-Based Health & Wellness Insights</span>
              <Zap className="w-4 h-4 animate-pulse" />
            </div>

            {/* Massive Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.1] animate-slide-up [animation-delay:0.1s]">
              Your Gateway to
              <span className="block mt-2 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
                Expert Health Advice
              </span>
            </h1>

            {/* Subtitle with Icons */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl text-white/90 mb-12 animate-slide-up [animation-delay:0.2s]">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-yellow-300" />
                <span>Evidence-Based</span>
              </div>
              <span className="hidden sm:inline text-white/50">•</span>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-300" />
                <span>Qualified Doctors</span>
              </div>
              <span className="hidden sm:inline text-white/50">•</span>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-yellow-300" />
                <span>Dubai-Focused</span>
              </div>
            </div>

            {/* Enhanced Search Bar with Glass Morphism */}
            <div className="max-w-3xl mx-auto mb-10 animate-slide-up [animation-delay:0.3s]">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative backdrop-blur-xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="flex items-center">
                    <div className="pl-6 pr-4">
                      <Search className="w-6 h-6 text-[#4A9D9C]" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search diabetes, nutrition, mental health, lab tests..."
                      className="flex-1 py-5 pr-6 bg-transparent border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-500 text-lg"
                    />
                    <Button className="m-2 bg-gradient-to-r from-[#4A9D9C] to-[#3A8D8C] hover:from-[#3A8D8C] hover:to-[#2A7D7C] text-white px-8 shadow-lg">
                      Search
                    </Button>
                  </div>
                </div>
              </div>

              {/* Popular Searches */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="text-white/70 text-sm">Popular:</span>
                {['Diabetes', 'Nutrition', 'Blood Tests', 'Mental Health', 'Wellness'].map((term, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm hover:bg-white/20 transition-all duration-300"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up [animation-delay:0.4s]">
              <Link href="/book">
                <Button size="lg" className="bg-white text-[#4A9D9C] hover:bg-white/95 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-10 py-7 text-lg font-bold border-2 border-white/50">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Free Consultation
                </Button>
              </Link>
              <a href="https://wa.me/971523011150?text=Hi%20I%20read%20your%20health%20blog" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white/10 backdrop-blur-md border-3 border-white text-white hover:bg-white hover:text-[#4A9D9C] shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-10 py-7 text-lg font-bold">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp Doctor Now
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm animate-slide-up [animation-delay:0.5s]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Updated Weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Medically Reviewed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Free to Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Wave Divider with Multiple Layers */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 200L60 183.333C120 166.667 240 133.333 360 116.667C480 100 600 100 720 108.333C840 116.667 960 133.333 1080 141.667C1200 150 1320 150 1380 150L1440 150V200H1380C1320 200 1200 200 1080 200C960 200 840 200 720 200C600 200 480 200 360 200C240 200 120 200 60 200H0Z" fill="white" fillOpacity="0.5"/>
            <path d="M0 200L60 191.667C120 183.333 240 166.667 360 158.333C480 150 600 150 720 158.333C840 166.667 960 183.333 1080 191.667C1200 200 1320 200 1380 200L1440 200V200H1380C1320 200 1200 200 1080 200C960 200 840 200 720 200C600 200 480 200 360 200C240 200 120 200 60 200H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Category Pills - Premium Design */}
      <section className="py-8 -mt-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  index === 0
                    ? 'bg-gradient-to-r from-[#4A9D9C] to-[#3A8D8C] text-white shadow-lg hover:shadow-xl'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#4A9D9C] hover:text-[#4A9D9C] shadow-sm hover:shadow-md'
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.name}
                  {category.count && (
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs">
                      {category.count}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post - Hero Style */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-[#4A9D9C]" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Article
              </h2>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <Card className="overflow-hidden border-2 border-gray-100 hover:border-[#4A9D9C] transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02]">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="lg:col-span-3 relative h-80 lg:h-[500px] overflow-hidden bg-gradient-to-br from-[#4A9D9C]/10 to-[#3A8D8C]/5">
                    {featuredPost.featuredImage ? (
                      <div className="relative w-full h-full">
                        <img
                          src={featuredPost.featuredImage}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-24 h-24 text-[#4A9D9C] opacity-20" />
                      </div>
                    )}
                    <Badge className="absolute top-6 left-6 bg-[#4A9D9C] text-white px-4 py-2 text-sm font-semibold shadow-lg">
                      Featured
                    </Badge>
                  </div>

                  {/* Content Section */}
                  <CardContent className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="mb-4 bg-[#4A9D9C]/10 text-[#4A9D9C] w-fit px-3 py-1">
                      {featuredPost.category}
                    </Badge>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#4A9D9C] transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-600 text-lg mb-6 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readingTime} min read</span>
                      </div>
                    </div>

                    <Button className="bg-[#4A9D9C] hover:bg-[#3A8D8C] text-white group/btn w-fit shadow-lg hover:shadow-xl transition-all">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Latest Articles Grid - Premium Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#4A9D9C]" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Latest Health Articles
              </h2>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-[#4A9D9C] hover:text-[#3A8D8C] font-medium group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
                <Card className="h-full overflow-hidden border-2 border-gray-100 hover:border-[#4A9D9C] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#4A9D9C]/10 to-[#3A8D8C]/5">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-[#4A9D9C] opacity-20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Badge className="absolute top-4 left-4 bg-white/95 text-[#4A9D9C] backdrop-blur-sm shadow-lg">
                      {post.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4A9D9C] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="truncate">{post.author.split('-')[0].trim()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime} min</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {formatDate(post.publishedAt)}
                      </span>
                      <div className="flex items-center gap-1 text-[#4A9D9C] font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* View All Button - Mobile */}
          <div className="mt-12 text-center md:hidden">
            <Button size="lg" variant="outline" className="border-2 border-[#4A9D9C] text-[#4A9D9C] hover:bg-[#4A9D9C] hover:text-white">
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Ultra Premium */}
      <section className="py-24 bg-gradient-to-br from-[#4A9D9C] via-[#3A8D8C] to-[#2A7D7C] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>

        {/* Floating Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium Badge */}
          <div className="flex justify-center mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white shadow-2xl">
              <div className="relative">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <div className="absolute inset-0 blur-xl bg-yellow-300 opacity-50"></div>
              </div>
              <span className="font-bold text-sm tracking-wide">FREE HEALTH NEWSLETTER</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12 animate-slide-up [animation-delay:0.1s]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Get Weekly Health Tips
              <span className="block mt-2 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Delivered to Your Inbox
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto leading-relaxed">
              Join 5,000+ Dubai residents receiving expert medical insights, wellness guides, and exclusive health tips from our health experts.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up [animation-delay:0.2s]">
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <span className="font-semibold">5,000+ Subscribers</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-semibold">Weekly Tips</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <span className="font-semibold">Expert Advice</span>
            </div>
          </div>

          {/* Premium Form */}
          <div className="max-w-2xl mx-auto animate-slide-up [animation-delay:0.3s]">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Form Container */}
              <div className="relative backdrop-blur-xl bg-white/95 rounded-3xl shadow-2xl p-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Email Input with Icon */}
                  <div className="flex-1 relative">
                    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-14 pr-6 py-5 rounded-2xl text-gray-900 placeholder-gray-500 bg-white border-2 border-transparent focus:border-[#4A9D9C] focus:outline-none focus:ring-4 focus:ring-[#4A9D9C]/20 transition-all text-lg"
                    />
                  </div>

                  {/* Subscribe Button */}
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-300 hover:to-yellow-400 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 px-10 py-6 font-bold text-lg rounded-2xl border-0 xl:m-[10px]"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Subscribe Free
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">No Spam, Ever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Unsubscribe Anytime</span>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="mt-10 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                What You'll Get Every Week:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✓</span>
                  </div>
                  <span className="text-sm">Expert health tips from qualified doctors</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✓</span>
                  </div>
                  <span className="text-sm">Latest medical news & research</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✓</span>
                  </div>
                  <span className="text-sm">Wellness guides & nutrition tips</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-300 text-xs">✓</span>
                  </div>
                  <span className="text-sm">Exclusive clinic offers & promotions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#4A9D9C]/20 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9D9C]/10 text-[#4A9D9C] mb-6">
                <Award className="w-4 h-4" />
                <span className="font-medium">DHA-Licensed Healthcare</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Need Professional Medical Advice?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                Book a consultation with our experienced DHA-licensed doctors for personalized health guidance and comprehensive care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book">
                  <Button size="lg" className="bg-[#4A9D9C] hover:bg-[#3A8D8C] text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
                <a href="tel:+97145703423">
                  <Button size="lg" variant="outline" className="border-2 border-[#4A9D9C] text-[#4A9D9C] hover:bg-[#4A9D9C] hover:text-white shadow-lg transition-all transform hover:scale-105">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +971 4 570 3423
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}
