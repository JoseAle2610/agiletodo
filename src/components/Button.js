import { forwardRef } from 'react'

export const Button = forwardRef(function Button ({
  onClick,
  disabled,
  children,
  ...props
},ref) {
  const colors = [
    'primary',
    'success',
    'info',
    'danger',
    'warning',
    'dark',
    'light'
  ]

  const color= colors.find(e => props.hasOwnProperty(e))
  const colorClass = color === undefined ? `is-primary` : `is-${color}`

  return (
    <button
      className={`button ${colorClass}`}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
    >
      {children}
    </button>
  )
})
