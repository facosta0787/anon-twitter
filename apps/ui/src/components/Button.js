import React, { Children } from 'react'

function Button(props) {
  const {children, type, onClick} = props
  return (
    <button
      style={{
        minWidth: 120,
      }}
      className="button"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
