import { forwardRef } from 'react'

export const Button = forwardRef(function Button (props ,ref) {
  const {
    onClick,
    disabled,
    children,
  } = props
  const colors = [
    {primary: 'is-primary'},
    {success: 'is-success'},
    {info: 'is-info'},
    {danger: 'is-danger'},
    {warning: 'is-warning'},
    {dark: 'is-dark'},
    {light: 'is-light'}
  ]+
  let colorClass = 'is-primary'

  console.log(Object.entries(colors).find(([color, classname])=> props[color]))

  return (
    <button
      className={`button ${colorClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
})
