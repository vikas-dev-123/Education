import React from 'react'
import { IoArrowForward } from "react-icons/io5";

const Started = () => {
  return (
    <div className='relative w-full h-[20vw] bg-blue-500'>
      <img className='w-full h-full object-cover' src="https://www.udacity.com/_next/image?url=%2Fimages%2Fbackgrounds%2Fblue-shapes.png&w=828&q=75" alt="" />
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
        <h1 className='font-medium text-xl selection:bg-lime-400'>Get Started Today</h1>
        <h1 className='font-medium text-3xl selection:bg-lime-400'>Prove your potential.</h1>
        <button className='mt-4 px-8 text-black hover:bg-[#24685b] hover:text-white font-semibold text-lg gap-3 py-2 bg-[#00C5A1] rounded-md flex justify-between items-center'>
          Start For Free <IoArrowForward />
        </button>
      </div>
    </div>
  )
}

export default Started
