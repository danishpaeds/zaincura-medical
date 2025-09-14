import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helpText, id, className = "", required, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    const errorId = error ? `${inputId}-error` : undefined
    const helpId = helpText ? `${inputId}-help` : undefined

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-label="required">*</span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[helpId, errorId].filter(Boolean).join(' ') || undefined}
          aria-required={required}
          className={`
            w-full px-3 py-2 border rounded-lg min-h-[44px]
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />

        {helpText && (
          <p id={helpId} className="text-sm text-gray-600">
            {helpText}
          </p>
        )}

        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-sm text-red-600"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"
