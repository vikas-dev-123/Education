import React from 'react'

const Videotext = () => {
  return (
    <div className='w-full bg-white  flex justify-between py-20 px-32'>
       
      <div className='w-[70vw] h-[30vw] px-20  justify-center items-center  selection:bg-lime-500'>
        <h1 className='text-3xl font-semibold px-10 '>The Udacity Difference</h1>
        <h1 className='text-3xl font-semibold px-10  py-5'>Prove Mastery Through Hands-On Projects</h1>
        <p className='text-xl font-regular px-10 '>Our open-ended projects are modeled after real-world workplace scenarios, and require in-depth critical thinking and creative solutions</p>
        <h1 className='text-3xl font-semibold px-10 py-5'>Succeed with Personalized Feedback</h1>
        <p className='text-xl font-regular px-10 '>Every project receives personalized feedback from industry experts, and our mentors are available to answer questions whenever you're feeling stuck.</p>
      </div>
    </div>
  )
}

export default Videotext