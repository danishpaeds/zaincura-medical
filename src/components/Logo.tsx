import React, { memo } from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  priority?: boolean // For LCP optimization
}

// ✅ PERFORMANCE: Memoized component to prevent unnecessary re-renders
export const Logo = memo<LogoProps>(({
  className = '',
  size = 'md',
  showText = true,
  priority = false
}) => {
  // ✅ PERFORMANCE: Define size configurations for optimal loading
  const sizeConfig = {
    sm: { width: 32, height: 32, textSize: 'text-sm' },
    md: { width: 40, height: 40, textSize: 'text-lg' },
    lg: { width: 64, height: 64, textSize: 'text-2xl' }
  }

  const { width, height, textSize } = sizeConfig[size]

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* ✅ PERFORMANCE: Optimized Logo with Next.js Image */}
      <div className={`relative group`} style={{ width, height }}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4A9D9C]/20 to-[#7BC142]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
        <Image
          src="/brand/logo.png"
          alt="Zain Cura Medical Center Logo"
          width={width}
          height={height}
          priority={priority} // Critical for LCP if in viewport
          className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
          sizes={`${width}px`}
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Enhanced Company Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSize} font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#4A9D9C]`}>
            Zain Cura
          </span>
          <span className="text-xs text-gray-600 -mt-1 transition-colors duration-300">
            Medical Center
          </span>
        </div>
      )}
    </div>
  )
})

Logo.displayName = 'Logo'

export default Logo
