import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav
      className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}
      aria-label="Breadcrumb navigation"
    >
      {/* Home link */}
      <Link
        href="/"
        className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors duration-200 group"
      >
        <Home className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
        <span className="hover:underline">Home</span>
      </Link>

      {/* Breadcrumb items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const IconComponent = item.icon

        return (
          <React.Fragment key={index}>
            {/* Separator */}
            <ChevronRight className="w-4 h-4 text-gray-400 transition-transform duration-200" />

            {/* Breadcrumb item */}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors duration-200 group"
              >
                {IconComponent && (
                  <IconComponent className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                )}
                <span className="hover:underline">{item.label}</span>
              </Link>
            ) : (
              <span
                className={`flex items-center space-x-1 ${
                  isLast
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-500'
                }`}
              >
                {IconComponent && (
                  <IconComponent className="w-4 h-4" />
                )}
                <span>{item.label}</span>
              </span>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}

// Predefined breadcrumb configurations for common pages
export const BreadcrumbConfigs = {
  services: {
    root: [{ label: 'Services', href: '/services' }],
    gp: [
      { label: 'Services', href: '/services' },
      { label: 'GP Clinic Deira' }
    ],
    wellness: [
      { label: 'Services', href: '/services' },
      { label: 'Wellness Health Checks' }
    ],
    laboratory: [
      { label: 'Services', href: '/services' },
      { label: 'Laboratory Tests' }
    ],
    std: [
      { label: 'Services', href: '/services' },
      { label: 'Lab Tests', href: '/services/laboratory' },
      { label: 'STD Testing Dubai' }
    ],
    gynecologist: [
      { label: 'Services', href: '/services' },
      { label: 'Gynecologist Dubai' }
    ]
  },
  location: {
    alGhurair: [
      { label: 'Location' },
      { label: 'Al Ghurair Centre, Deira' }
    ]
  },
  homeCare: [
    { label: 'Home Care' }
  ],
  blog: [
    { label: 'Blog' }
  ],
  faq: [
    { label: 'FAQ' }
  ],
  contact: [
    { label: 'Contact' }
  ],
  privacy: [
    { label: 'Privacy Policy' }
  ],
  terms: [
    { label: 'Terms of Service' }
  ],
  medicalDisclaimer: [
    { label: 'Medical Disclaimer' }
  ]
}

export default Breadcrumb
