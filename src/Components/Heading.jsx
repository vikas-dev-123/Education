import React, { useRef } from 'react';
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import Scroller from './Scroller';


 

const Heading = () => {
  return (
    <>
    <div className='w-full '>
      <div className='px-[10vw] py-[4.5vw] flex items-center justify-between'>
         
        <h1 className='font-semibold text-xl'>Courses Recommended for You</h1>
        <div className='flex items-center space-x-4'>
          <button 
            className='h-12 w-12 rounded-full border border-blue-700 hover:border-none hover:bg-blue-950 flex justify-center items-center hover:text-white'
            onClick={() => handleScroll(-1)}
          >
            <IoArrowBack />
          </button>
          <button 
            className='h-12 w-12 rounded-full border border-blue-700 hover:border-none hover:bg-blue-950 flex justify-center items-center hover:text-white'
            onClick={() => handleScroll(1)}
          >
            <IoArrowForward />
          </button>
        </div>
      </div>
      
    </div>
    <Scroller/>
    </>
    
  );
}

export default Heading


