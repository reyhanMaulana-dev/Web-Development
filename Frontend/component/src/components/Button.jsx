import React from 'react'

const Button = ({ children, variant = 'primary' }) => {
    const buttonStyle = {
        primary: 'bg-[#C5C9D0] hover:bg-[#D9DDE3] active:bg-[#61656E] active:text-white',
        secondary : 'bg-[#3A362F] hover:bg-[#26221C] active:bg-[#9E9A91] active:text-black text-white'
    };

    const renderButton = (variant) => {
        return buttonStyle[variant]
    };

    return (
        <button className={`min-w-20 px-6 py-2 font-semibold rounded-md ${renderButton(variant)}`}>
        {children}
        </button>
    )
}

export default Button
