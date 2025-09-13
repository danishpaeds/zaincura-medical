import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Health Blog | Medical Tips & News | Zain Cura Medical Center',
  description: 'Read the latest health tips, medical news, and wellness advice from our healthcare experts at Zain Cura Medical Center Dubai.',
  keywords: [
    'health blog Dubai', 'medical tips Dubai', 'wellness advice', 'healthcare news',
    'nutrition tips', 'preventive care', 'health education', 'medical experts Dubai'
  ],
  openGraph: {
    title: 'Health Blog | Zain Cura Medical Center Dubai',
    description: 'Expert health advice, medical tips, and wellness insights from our healthcare professionals.',
    url: 'https://zaincura.com/blog',
    siteName: 'Zain Cura Medical Center',
    images: [
      {
        url: 'https://zaincura.com/images/blog-header.jpg',
        width: 1200,
        height: 630,
        alt: 'Health Blog - Zain Cura Medical Center'
      }
    ],
    locale: 'en_AE',
    type: 'website'
  }
};

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();
  const publishedPosts = allPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert medical advice, health tips, and wellness insights from our healthcare professionals at Zain Cura Medical Center.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700">🩺 Medical Tips</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700">🥗 Nutrition Advice</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700">💪 Wellness Guides</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700">🏥 Healthcare News</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {publishedPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600">
                We're preparing valuable health content for you. Check back soon for expert medical advice and wellness tips.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                <p className="text-lg text-gray-600">
                  Stay informed with our latest health insights and medical advice
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {post.featuredImage && (
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 ml-auto">
                          {post.readingTime} min read
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500">
                            By {post.author}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>

                      <div className="mt-4">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest health advice and medical insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="https://wa.me/971523011150"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp for Updates
            </a>
            <a
              href="tel:+97145703423"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call for Health Advice
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Admin Access */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p>📍 Al Ghurair Centre, 6th Floor, Deira, Dubai</p>
                <p>📞 +971-45703423</p>
                <p>📱 +971-523011150 (WhatsApp)</p>
                <p>✉️ info@zaincura.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-300">
                <Link href="/" className="block hover:text-white">Home</Link>
                <Link href="/gp-doctor-deira-dubai" className="block hover:text-white">GP Services</Link>
                <Link href="/lab-tests-dubai" className="block hover:text-white">Lab Tests</Link>
                <Link href="/home-care-dubai" className="block hover:text-white">Home Care</Link>
              </div>
            </div>

            {/* Business Hours & Admin */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300 mb-4">
                <p>Monday - Sunday: 9:00 AM - 9:00 PM</p>
                <p>Home Care: 24/7 Available</p>
              </div>

              {/* Discrete Admin Link */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/admin"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Staff Portal
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Zain Cura Medical Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
