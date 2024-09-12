"use client"
import React from 'react'
const Button = ({ label, href }: any) => {
  const handleClick = () => {
    window.location.href = href;
  };
  return (
    <div className='flex-center lg:w-full xs:w-fit'>
      <button type="button" className="main-button flex-center" onClick={handleClick}>
        {label}
      </button>
    </div>
  )
}

export default Button