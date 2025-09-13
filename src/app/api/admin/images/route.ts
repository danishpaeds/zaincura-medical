import { NextRequest, NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { requireAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  if (!requireAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'blog');

    try {
      const files = await readdir(uploadDir);
      const imageFiles = files.filter(file => {
        const ext = file.toLowerCase();
        return ext.endsWith('.jpg') || ext.endsWith('.jpeg') ||
               ext.endsWith('.png') || ext.endsWith('.webp') ||
               ext.endsWith('.gif');
      });

      const images = await Promise.all(
        imageFiles.map(async (filename) => {
          const filePath = join(uploadDir, filename);
          const stats = await stat(filePath);

          return {
            filename,
            url: `/uploads/blog/${filename}`,
            size: stats.size,
            uploadDate: stats.mtime.toISOString(),
          };
        })
      );

      // Sort by upload date (newest first)
      images.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());

      return NextResponse.json({
        success: true,
        images,
        count: images.length
      });

    } catch (error) {
      // Directory doesn't exist or is empty
      return NextResponse.json({
        success: true,
        images: [],
        count: 0
      });
    }

  } catch (error) {
    console.error('Failed to list images:', error);
    return NextResponse.json(
      { error: 'Failed to load images' },
      { status: 500 }
    );
  }
}
