import React from 'react'

const CardLayout = ({ children }) => {
  return (
    <div role='button' className='group'>
      <div className='p-4 border border-[#CED2D9] group-active:border-[#2670A9]'>{children}</div>
      <div className='bg-[#CED2D9] h-1 group-hover:bg-[#2670A9]' />
    </div>
  )
}

export default CardLayout
