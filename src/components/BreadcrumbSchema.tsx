'use client'

import { useEffect } from 'react'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(breadcrumbSchema)
    script.id = 'breadcrumb-schema'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('breadcrumb-schema')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [items])

  return null // This component only adds schema, no visual output
}

// Helper function to generate common breadcrumb patterns
export function generateServiceBreadcrumbs(serviceName: string, serviceUrl: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "https://www.zaincura.com" },
    { name: "Services", url: "https://www.zaincura.com/services" },
    { name: serviceName, url: serviceUrl }
  ]
}

export function generateLocationBreadcrumbs(locationName: string, locationUrl: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "https://www.zaincura.com" },
    { name: "Locations", url: "https://www.zaincura.com/location" },
    { name: locationName, url: locationUrl }
  ]
}

export function generateBlogBreadcrumbs(articleTitle: string, articleUrl: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "https://www.zaincura.com" },
    { name: "Blog", url: "https://www.zaincura.com/blog" },
    { name: articleTitle, url: articleUrl }
  ]
}
