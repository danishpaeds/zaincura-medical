import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  as?: 'div' | 'article' | 'section'
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={`
          bg-white rounded-lg border border-gray-200 shadow-sm
          focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-50
          hover:shadow-md transition-shadow duration-200
          ${className}
        `}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

export const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`p-6 pb-0 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`text-lg font-semibold text-gray-900 ${className}`}
        {...props}
      >
        {children}
      </h3>
    )
  }
)

export const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`p-6 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardTitle.displayName = 'CardTitle'
CardContent.displayName = 'CardContent'
