import React from 'react'

type SeparatorProps = React.HTMLAttributes<HTMLDivElement>

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`border-t border-gray-200 ${className}`}
        {...props}
      />
    )
  }
)

Separator.displayName = 'Separator'
