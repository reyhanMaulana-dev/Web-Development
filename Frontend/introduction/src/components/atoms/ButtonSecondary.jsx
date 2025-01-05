import React from 'react'

const ButtonSecondary = ({ children }) => {
  return (
    <button 
        className="bg-orange-500 p-1 min-w-20 rounded-md" type="button"
        onClick={() => console.log("4444")}
    >
        { children }
    </button>
  )
}

export default ButtonSecondary
