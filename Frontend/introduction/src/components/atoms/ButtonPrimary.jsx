import React from 'react'

const ButtonPrimary = ({ text }) => {
  const printMessage = (message)=>{
    console.log(message);
    
  }
  return (
      <button 
        className="bg-gray-500 p-1 min-w-20 rounded-md" type="button"
        onClick={ ()=> printMessage("333")}
      > 
        { text }
      </button>
  )
}

export default ButtonPrimary
