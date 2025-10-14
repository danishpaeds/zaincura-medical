import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  children: React.ReactNode
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean
  'aria-controls'?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', className = '', children, ...props }, ref) => {
    // Logo-inspired accessible color tokens
    const colors = {
      primaryBg: 'bg-[#4A9D9C]',
      primaryBgHover: 'hover:bg-[#2D7D7D]',
      primaryText: 'text-white',
      primaryRing: 'focus:ring-[#4A9D9C]',

      outlineBorder: 'border-[#4A9D9C]',
      outlineText: 'text-[#4A9D9C]',
      outlineHover: 'hover:bg-[rgba(74,157,156,0.08)]',

      ghostText: 'text-gray-800',
      ghostHover: 'hover:bg-gray-100',

      whatsappBg: 'bg-[#117A37] hover:bg-[#0E632C] text-white', // optional utility
      dangerBg: 'bg-[#B91C1C] hover:bg-[#991B1B] text-white', // optional utility
    }

    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

    const variantClasses = {
      default: `${colors.primaryBg} ${colors.primaryText} ${colors.primaryBgHover} ${colors.primaryRing}`,
      outline: `border ${colors.outlineBorder} bg-white ${colors.outlineText} ${colors.outlineHover} ${colors.primaryRing}`,
      ghost: `${colors.ghostText} ${colors.ghostHover} ${colors.primaryRing}`,
    } as const

    const sizeClasses = {
      default: 'h-11 px-5 py-2.5 text-sm',
      sm: 'h-9 px-4 py-2 text-sm',
      lg: 'h-12 px-6 py-3 text-base',
      icon: 'h-10 w-10'
    } as const

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
