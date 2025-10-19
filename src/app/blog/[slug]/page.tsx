// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogPosts, BlogPost } from '@/lib/blog';
import { Clock, User, Calendar, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react';
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

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Personalized Health Advice?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book a consultation with our expert healthcare professionals today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <a href="tel:+97145703423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Call Now: +971 4 570 3423
              </Button>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
