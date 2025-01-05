import React from 'react'

const Button = ({children, disabled}) => {
  return (
    <button
        type= 'button'
        disabled= {disabled} 
        className= 'bg-[#C5C9D0] hover:bg-[#D9DDE3] active:bg-[#61656E] active:text-[#FFFFFF] disabled:opacity-40 disabled:bg-[#C5C9D0] disabled:active:text-[#161616] text-[#161616] min-w-20 min-h-7 px-4 py-1 font-semibold'
    >
      {children}
    </button>
  )
}

export default Button
