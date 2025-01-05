import React from 'react'

const Button = ({ children, variant = "primary" }) => {
  return (
    <button 
        className= { variant === 'primary' 
            ? 'bg-black p-1 min-w-20 rounded-md' 
            : 'bg-red-500 p-1 min-w-20 rounded-md'}    
    > 
        { children }
    </button>
  )
}

export default Button
