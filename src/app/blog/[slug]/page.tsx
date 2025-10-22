// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogPosts, BlogPost } from '@/lib/blog';
import { Clock, User, Calendar, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin, CheckCircle, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

// Helper function to format the date
const formatDate = (isoString: string) => {
  return new Date(isoString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// 1. GENERATE STATIC PARAMS (Build-time optimization)
// This tells Next.js to build a static page for every published slug in the JSON file.
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  // Only generate pages for published posts
  return posts
    .filter(post => post.status === 'published')
    .map((post) => ({
      slug: post.slug,
    }));
}

// 2. GENERATE METADATA (SEO)
interface BlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  // Use metaTitle/metaDescription from JSON, falling back to title/excerpt
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    // Add other SEO tags like openGraph or canonical as needed
    openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: `https://www.zaincura.com/blog/${post.slug}`,
    }
  };
}


// 3. RENDER THE BLOG POST
export default async function FullBlogPostPage({ params }: BlogPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    // Show 404 page if the post is not found or is a draft
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-white to-primary/5 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-medium group transition-all">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all Articles
          </Link>

          <Badge className="mb-4 bg-primary text-white text-sm px-4 py-1.5">{post.category}</Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Written by</p>
                <p className="font-semibold text-gray-900">{post.author}</p>
              </div>
            </div>

            <div className="h-12 w-px bg-gray-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Published</p>
                <p className="font-semibold text-gray-900">{formatDate(post.publishedAt)}</p>
              </div>
            </div>

            <div className="h-12 w-px bg-gray-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Reading time</p>
                <p className="font-semibold text-gray-900">{post.readingTime} min read</p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Share:</span>
            <Button variant="outline" size="sm" className="gap-2">
              <Facebook className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline">Twitter</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Copy Link
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <MarkdownRenderer content={post.content} />
        </div>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tagged with:</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-medium"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Card */}
        <Card className="mb-12 border-2 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.author} is a healthcare professional at Zain Cura Medical Center, dedicated to providing expert medical advice and compassionate care to patients in Dubai.
                </p>
                <Link href="/book">
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section - Premium Design */}
        <div className="relative bg-gradient-to-br from-[#1A5F5F] via-[#2D7D7D] to-[#4A9D9C] rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
          </div>

          <div className="relative z-10">
            {/* Premium Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border-2 border-white/30 text-white shadow-lg">
                <Share2 className="w-4 h-4 text-yellow-300" />
                <span className="font-bold text-sm tracking-wider">GET EXPERT CARE</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center leading-tight">
              <span className="block mb-2">Ready for Personalized</span>
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-emerald-100 bg-clip-text text-transparent drop-shadow-2xl">
                Health Advice?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl mb-10 text-center text-white/95 max-w-2xl mx-auto leading-relaxed font-light">
              Book a consultation with our expert healthcare professionals today and experience world-class medical care
            </p>

            {/* Premium Buttons Container */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
                  {/* Book Consultation Button - Primary */}
                  <Link href="/book" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white text-[#2D7D7D] hover:from-gray-50 hover:to-white px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold rounded-2xl shadow-[0_15px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-all duration-300 border-2 border-white/50 hover-glow-white"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Calendar className="w-5 h-5 mr-2 relative z-10" />
                      <span className="relative z-10">Book Consultation</span>
                    </Button>
                  </Link>

                  {/* Call Now Button - Secondary */}
                  <a href="tel:+97145703423" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold rounded-2xl shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.6)] transform hover:scale-105 transition-all duration-300 border-2 border-white/30 animate-pulse-ring hover-glow"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Phone className="w-5 h-5 mr-2 relative z-10 animate-pulse" />
                      <span className="relative z-10">Call Now: +971 4 570 3423</span>
                    </Button>
                  </a>
                </div>

                {/* WhatsApp Option */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-white/70 text-xs mb-3">
                    <div className="h-px w-8 bg-white/30"></div>
                    <span className="font-medium">Or message us</span>
                    <div className="h-px w-8 bg-white/30"></div>
                  </div>
                  <a
                    href="https://wa.me/971523011150?text=Hi%20%F0%9F%91%8B%20I%20read%20your%20blog%20and%20would%20like%20to%20book%20a%20consultation%20at%20Zain%20Cura%20Medical%20Center.%20Please%20share%20available%20appointment%20slots."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-4 text-sm font-bold rounded-xl border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all hover-glow"
                    >
                      WhatsApp +971 52 301 1150
                    </Button>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-5 border-t border-white/20">
                  <div className="flex flex-wrap justify-center gap-4 text-white text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                      <span className="font-medium">Same-Day Appointments</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                      <span className="font-medium">DHA Licensed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                      <span className="font-medium">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
