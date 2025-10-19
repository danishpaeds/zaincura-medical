'use client'

import { useEffect } from 'react'

interface Review {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}

interface ReviewSchemaProps {
  businessName: string
  businessUrl: string
  reviews?: Review[]
  aggregateRating?: {
    ratingValue: number
    ratingCount: number
    bestRating?: number
    worstRating?: number
  }
}

export function ReviewSchema({
  businessName,
  businessUrl,
  reviews = [],
  aggregateRating
}: ReviewSchemaProps) {
  useEffect(() => {
    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": businessName,
      "url": businessUrl
    }

    // Add aggregate rating if provided
    if (aggregateRating) {
      schema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "ratingCount": aggregateRating.ratingCount,
        "bestRating": aggregateRating.bestRating || 5,
        "worstRating": aggregateRating.worstRating || 1
      }
    }

    // Add individual reviews if provided
    if (reviews.length > 0) {
      schema.review = reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": 5,
          "worstRating": 1
        },
        "reviewBody": review.reviewBody,
        "datePublished": review.datePublished
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    script.id = 'review-schema'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('review-schema')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [businessName, businessUrl, reviews, aggregateRating])

  return null // This component only adds schema, no visual output
}

// Default reviews for Zain Cura Medical Center (example data)
export const defaultZainCuraReviews: Review[] = [
  {
    author: "Sarah Ahmed",
    rating: 5,
    reviewBody: "Excellent service! The GP was very professional and the same-day appointment was exactly what I needed. The clinic is clean and well-organized.",
    datePublished: "2024-08-15"
  },
  {
    author: "Mohammed Al-Rashid",
    rating: 5,
    reviewBody: "Great experience with their home visit service. The doctor arrived on time and provided thorough care. Very convenient for busy professionals.",
    datePublished: "2024-08-20"
  },
  {
    author: "Emily Johnson",
    rating: 4,
    reviewBody: "Fast lab results and friendly staff. The location in Al Ghurair Centre is very convenient. Will definitely come back for future medical needs.",
    datePublished: "2024-08-25"
  }
]

export const defaultAggregateRating = {
  ratingValue: 4.8,
  ratingCount: 127,
  bestRating: 5,
  worstRating: 1
}
