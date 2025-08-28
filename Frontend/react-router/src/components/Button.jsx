import React from 'react'

const Button = ({children, disabled, variant='primary', onClick}) => {
    const baseStyle = 'min-w-20 min-h-7 px-4 py-1 font-semibold'
    const variants = {
        primary: 'bg-[#C5C9D0] hover:bg-[#D9DDE3] active:bg-[#61656E] active:text-[#FFFFFF] disabled:opacity-40 disabled:bg-[#C5C9D0] disabled:active:text-[#161616] text-[#161616]',
        secondary: 'bg-[#3A362F] hover:bg-[#26221C] text-[#E9E9E9] active:bg-[#9E9A91] active:text-black disabled:opacity-40 disabled:text-[#E9E9E9] disabled:bg-[#9E9A91]'
    }
    

    return (
        <button
            type= 'button'
            disabled= {disabled} 
            className= {`${baseStyle} ${variants[variant]} `}
            onClick={onClick}
        >
        {children}
        </button>
    )
}

export default Button

