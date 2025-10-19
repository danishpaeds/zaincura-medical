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
const BLOG_POSTS_DIR = path.join(BLOG_DATA_PATH, 'blog-posts');
const BLOG_POSTS_FILE = path.join(BLOG_DATA_PATH, 'blog-posts.json'); // Legacy support

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

    // Try to read from individual blog post files first
    try {
      const files = await fs.readdir(BLOG_POSTS_DIR);
      const jsonFiles = files.filter(file => file.endsWith('.json'));

      const posts = await Promise.all(
        jsonFiles.map(async (file) => {
          const filePath = path.join(BLOG_POSTS_DIR, file);
          const data = await fs.readFile(filePath, 'utf-8');
          return JSON.parse(data) as BlogPost;
        })
      );

      return posts;
    } catch (dirError) {
      // Fallback to legacy single file
      try {
        const data = await fs.readFile(BLOG_POSTS_FILE, 'utf-8');
        return JSON.parse(data);
      } catch (fileError) {
        return [];
      }
    }
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
  const newPost: BlogPost = {
    ...postData,
    id: Date.now().toString(),
    slug: generateSlug(postData.title),
    readingTime: calculateReadingTime(postData.content),
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await ensureDataDirectory();

  // Create blog-posts directory if it doesn't exist
  try {
    await fs.access(BLOG_POSTS_DIR);
  } catch {
    await fs.mkdir(BLOG_POSTS_DIR, { recursive: true });
  }

  // Save as individual file
  const fileName = `${newPost.slug}.json`;
  const filePath = path.join(BLOG_POSTS_DIR, fileName);
  await fs.writeFile(filePath, JSON.stringify(newPost, null, 2));

  return newPost;
}

export async function updateBlogPost(id: string, postData: Partial<BlogPost>): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  const existingPost = posts.find(post => post.id === id);

  if (!existingPost) {
    return null;
  }

  const updatedPost: BlogPost = {
    ...existingPost,
    ...postData,
    updatedAt: new Date().toISOString(),
    readingTime: postData.content ? calculateReadingTime(postData.content) : existingPost.readingTime,
    slug: postData.title ? generateSlug(postData.title) : existingPost.slug,
  };

  await ensureDataDirectory();

  // Delete old file if slug changed
  if (existingPost.slug !== updatedPost.slug) {
    const oldFilePath = path.join(BLOG_POSTS_DIR, `${existingPost.slug}.json`);
    try {
      await fs.unlink(oldFilePath);
    } catch (error) {
      // Ignore if file doesn't exist
    }
  }

  // Save updated post as individual file
  const fileName = `${updatedPost.slug}.json`;
  const filePath = path.join(BLOG_POSTS_DIR, fileName);
  await fs.writeFile(filePath, JSON.stringify(updatedPost, null, 2));

  return updatedPost;
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const posts = await getAllBlogPosts();
  const postToDelete = posts.find(post => post.id === id);

  if (!postToDelete) {
    return false; // Post not found
  }

  await ensureDataDirectory();

  // Delete the individual file
  const fileName = `${postToDelete.slug}.json`;
  const filePath = path.join(BLOG_POSTS_DIR, fileName);

  try {
    await fs.unlink(filePath);
    return true;
  } catch (error) {
    return false;
  }
}
