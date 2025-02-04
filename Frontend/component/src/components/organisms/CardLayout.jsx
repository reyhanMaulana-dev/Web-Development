import React from 'react'

const CardLayout = ({ children}) => {
  return (
    <div role='button' className='text-black group disabled:opacity-40'>
      <div className='p-4 border border-[#CED2D9] group-active:border-[#2670A9]'>{children}</div>
      <div className='h-1 bg-[#CED2D9] group-hover:bg-[#2670A9]'/>
    </div>
  )
}

export default CardLayout
