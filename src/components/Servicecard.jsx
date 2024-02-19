import React from 'react'

const Servicecard = ({imgURL, label, subtext}) => {
  return (
   <div className='flex-1 shadow-3xl px-10 py-10 sm:w-[350px] sm:min-w-[350px] rounded-[20px]'>
    <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24} />
    </div>
    <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
    <p className='mt-3 break-word text-md leading-normal text-slate-gray'>{subtext}</p>
   </div>
  )
}

export default Servicecard