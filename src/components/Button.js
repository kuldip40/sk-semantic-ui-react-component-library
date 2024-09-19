import React from 'react'

const Button = ({ children, style = {}, ...otherprops }) => {
  return (
    <button
      style={{ padding: '8px 10px', margin: '10px 0', ...style }}
      {...otherprops}
    >
      {children}
    </button>
  )
}

export default Button
