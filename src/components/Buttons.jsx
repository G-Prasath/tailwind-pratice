import React from 'react'

const Buttons = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
        {label}

        {iconURL && <img src={iconURL} alt="arrow-icons" 
            className='ml-2 rounded-full w-5 h-5'
        />}
    </button>
  )
}

export default Buttons