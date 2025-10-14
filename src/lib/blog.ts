import fs from 'fs/promises';
import path from 'path';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  status: 'draft' | 'published';
  readingTime: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

const BLOG_DATA_PATH = path.join(process.cwd(), 'data');
const BLOG_POSTS_FILE = path.join(BLOG_DATA_PATH, 'blog-posts.json');

// Generate URL-friendly slug
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

// Calculate reading time
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Ensure data directory exists
async function ensureDataDirectory(): Promise<void> {
  try {
    await fs.access(BLOG_DATA_PATH);
  } catch {
    await fs.mkdir(BLOG_DATA_PATH, { recursive: true });
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(BLOG_POSTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.id === id) || null;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug && post.status === 'published') || null;
}

export async function createBlogPost(postData: Omit<BlogPost, 'id' | 'publishedAt' | 'updatedAt' | 'readingTime'>): Promise<BlogPost> {
  const posts = await getAllBlogPosts();

  const newPost: BlogPost = {
    ...postData,
    id: Date.now().toString(),
    slug: generateSlug(postData.title),
    readingTime: calculateReadingTime(postData.content),
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  posts.push(newPost);
  await ensureDataDirectory();
  await fs.writeFile(BLOG_POSTS_FILE, JSON.stringify(posts, null, 2));
  return newPost;
}

export async function updateBlogPost(id: string, postData: Partial<BlogPost>): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  const postIndex = posts.findIndex(post => post.id === id);

  if (postIndex === -1) {
    return null;
  }

  const updatedPost: BlogPost = {
    ...posts[postIndex],
    ...postData,
    updatedAt: new Date().toISOString(),
    readingTime: postData.content ? calculateReadingTime(postData.content) : posts[postIndex].readingTime,
    slug: postData.title ? generateSlug(postData.title) : posts[postIndex].slug,
  };

  posts[postIndex] = updatedPost;
  await ensureDataDirectory();
  await fs.writeFile(BLOG_POSTS_FILE, JSON.stringify(posts, null, 2));
  return updatedPost;
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const posts = await getAllBlogPosts();
  const filteredPosts = posts.filter(post => post.id !== id);

  if (filteredPosts.length === posts.length) {
    return false; // Post not found
  }

  await ensureDataDirectory();
  await fs.writeFile(BLOG_POSTS_FILE, JSON.stringify(filteredPosts, null, 2));
  return true;
}
