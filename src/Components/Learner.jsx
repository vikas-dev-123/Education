import React from 'react'
import Heading from './Heading'
import Box from './Box'

const Learner = () => {
  return (

    <>
     

    <div className='w-full px-52 py-20 h-[90vw]  bg-slate-300'>
        <h1 className='text-3xl pb-5 selection:bg-lime-500'>Learners Love Udacity</h1>
         <div className='flex gap-10'>

       <div className='w-[40vw]  h-[17vw] rounded-tr-md rounded-tl-md px-5 py-10 rounded-br-[50px] rounded-bl-md bg-white  selection:bg-lime-500'>  
        <p>Udacity helped me gain on-the-job confidence, build a portfolio, and earn a microcredential to share with prospective employers.</p>
       </div>
       <div className='w-[40vw]  h-[17vw] rounded-tr-md rounded-tl-md px-5 py-10 rounded-br-[50px] rounded-bl-md bg-white selection:bg-lime-500'>
        <p>I started with the basics, completed a Nanodegree program, and gained so much experience. I'm now in a new Android job!</p>
       </div>
       <div className='w-[40vw]  h-[17vw] rounded-tr-md rounded-tl-md px-5 py-10 rounded-br-[50px] rounded-bl-md bg-white selection:bg-lime-500'>
        <p>Udacity gave me the tools to advance my career--I am now spearheading a machine learning research team at my company.</p>
       </div>
    </div>
         <Box/>
    </div>
    
    </>
  )
}

export default Learner
