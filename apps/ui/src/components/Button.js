import React from 'react'

function Button(props) {
  const {children, type, onClick} = props
  return (
    <button
      style={{
        minWidth: 120,
      }}
      className="button link-button"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
