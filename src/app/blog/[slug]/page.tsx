// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogBySlug, getAllBlogs, BlogPost } from '@/lib/api';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Helper function to format the date
const formatDate = (isoString: string) => {
  return new Date(isoString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// 1. GENERATE STATIC PARAMS (Build-time optimization)
// This tells Next.js to build a static page for every published slug in the JSON file.
export async function generateStaticParams() {
  const posts = await getAllBlogs();

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
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    return {};
  }

  // Use meta_title/meta_description from API, falling back to title/excerpt
  return {
    title: post.meta_title,
    description: post.meta_description,
    // Add other SEO tags like openGraph or canonical as needed
    openGraph: {
        title: post.meta_title,
        description: post.meta_description,
        url: `https://www.zaincura.com/blog/${post.slug}`,
    }
  };
}


// 3. RENDER THE BLOG POST
export default async function FullBlogPostPage({ params }: BlogPageProps) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    // Show 404 page if the post is not found or is a draft
    notFound();
  }

  // The Markdown content is in post.content. We'll render it as raw text
  // here, or you would install and use a Markdown renderer package.
  // For production quality, you should use a Markdown-to-JSX/HTML library.

  // Using a generic div and pre-wrap for better viewing of raw Markdown
  const ContentRenderer = () => (
    <div
      className="prose max-w-none text-gray-700 leading-relaxed space-y-4"
      style={{ whiteSpace: 'pre-wrap' }} // Helps display Markdown line breaks
    >
        {post.content}
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link href="/blog" className="flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all Articles
        </Link>

        {/* Post Header */}
        <Badge className="mb-4 bg-primary/10 text-primary">{post.category}</Badge>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 italic">
            {post.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <span className="text-lg">·</span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Published on {formatDate(post.published_at)}</span>
            </div>
            <span className="text-lg">·</span>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.reading_time} min read</span>
            </div>
        </div>

        <Separator className="mb-8" />

        {/* Post Featured Image (if available) */}
        {post.featured_image && (
            <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
                {/* TODO: Replace this standard HTML <img> with the project's OptimizedImage component
                  if you have it imported and available in this scope, or update the JSON to use a
                  local path. Since we don't have access to image components easily, keeping it simple.
                */}
                <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-96 object-cover"
                />
            </div>
        )}

        {/* Post Content */}
        <section className="blog-content">
            <ContentRenderer />
        </section>

        <Separator className="mt-12 mb-8" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="text-gray-700 font-medium">Tags:</span>
          {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                  {tag}
              </Badge>
          ))}
        </div>

        {/* CTA Section (You can add calls to action here) */}
        <div className="mt-12 p-8 bg-gray-50 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Personalized Health Advice?</h3>
            <Link href="/book">
              <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Book a Consultation
              </button>
            </Link>
        </div>

      </div>
    </div>
  );
}
