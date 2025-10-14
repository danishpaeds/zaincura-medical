import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/uploads/',
          '/patient-records/',
          '/internal/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/uploads/',
          '/patient-records/',
          '/internal/',
        ],
        crawlDelay: 1, // Respectful crawling for medical site
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/uploads/',
          '/patient-records/',
          '/internal/',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://www.zaincura.com/sitemap.xml',
  }
}
