// Backend API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://zaincura-backend.vercel.app';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  category: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  author: string;
  published_at: string;
  updated_at: string;
  status: 'draft' | 'published';
  reading_time: number;
  created_at?: string;
}

export interface BlogApiResponse {
  success: boolean;
  data: BlogPost[];
  count: number;
}

export interface SingleBlogApiResponse {
  success: boolean;
  data: BlogPost;
}

// Fetch all published blog posts
export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.error('Failed to fetch blogs:', response.statusText);
      return [];
    }

    const data: BlogApiResponse = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Fetch single blog post by slug
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${slug}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.error('Failed to fetch blog:', response.statusText);
      return null;
    }

    const data: SingleBlogApiResponse = await response.json();
    return data.data || null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

// Client-side fetch (for use in Client Components)
export async function getAllBlogsClient(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs`);

    if (!response.ok) {
      console.error('Failed to fetch blogs:', response.statusText);
      return [];
    }

    const data: BlogApiResponse = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Get blogs by category
export async function getBlogsByCategory(category: string): Promise<BlogPost[]> {
  const allBlogs = await getAllBlogs();
  return allBlogs.filter(blog => blog.category === category);
}

// Get recent blogs (limit)
export async function getRecentBlogs(limit: number = 5): Promise<BlogPost[]> {
  const allBlogs = await getAllBlogs();
  return allBlogs.slice(0, limit);
}

// Search blogs by query
export async function searchBlogs(query: string): Promise<BlogPost[]> {
  const allBlogs = await getAllBlogs();
  const lowerQuery = query.toLowerCase();

  return allBlogs.filter(blog =>
    blog.title.toLowerCase().includes(lowerQuery) ||
    blog.excerpt.toLowerCase().includes(lowerQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
