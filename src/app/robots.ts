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
          '/patient-records/', // Medical privacy protection
          '/internal/',       // Internal medical data protection
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/uploads/',
          '/patient-records/', // HIPAA compliance for medical privacy
          '/internal/',       // Internal medical data protection
        ],
        crawlDelay: 1, // Respectful crawling for medical content
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/uploads/',
          '/patient-records/', // HIPAA compliance for medical privacy
          '/internal/',       // Internal medical data protection
        ],
        crawlDelay: 1, // Respectful crawling for healthcare content
      },
    ],
    sitemap: 'https://www.zaincura.com/sitemap.xml',
  }
}