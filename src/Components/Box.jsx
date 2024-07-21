import React from 'react'

const Box = () => {
  return (
     <>
     <div className='py-20 '>

      <div className=' flex h-[38vw] gap-10 px-32 py-20 w-[69vw] bg-[#F0F5FF] rounded-md'>
        <div className='h-[30vw] w-[70vw]  '>
           <h1 className='text-3xl font-semibold'>Udacity for Business</h1>
           <p className='text-xl font-regular'>Scale skills development for your organization</p>
           <ul className="list-none py-10">
             <li className="mb-4">
               <p className="mb-2">• Hands-on project-based approach</p>
               <p className="mb-2">• Top content co-developed with industry leaders</p>
               <p className="mb-2">• Global mentor network with 700+ domain experts</p>
             </li>
            </ul>
            <div className='flex gap-10 '>
                <button className='px-4 py-3  rounded-md text-white bg-blue-700'>Learn More</button>
                <button className='px-4 py-3 rounded-md bg-green-700'>Contact Us</button>

            </div>
        </div>
        <div className='h-[26vw] w-[80vw]  '>
            <img className='w-full h-full object-cover overflow-hidden' src="https://cdn.sanity.io/images/tlr8oxjg/production/b0b670bc7f3b4bad304050abb3aac3ad4531cc5f-1088x804.png?w=1200&q=100&fit=clip&auto=format" alt="" />
        </div>
      </div>
      <div className='w-[69vw]  py-7 h-[15vw]'>
        
        <div className='w-full h-[10vw] rounded-md  overflow-hidden object-cover bg-white'> 
            <h1 className='font-medium p-5'>Udacity For Government</h1>
            <p className='px-5'>Udacity creates job opportunities with GDP impact for nations embracing the global world</p>
            <a className='px-5 text-blue-700 font-medium' href="#">Learn More</a>
          <img className='w-[40vw] h-[10vw] ml-[40vw] opacity-15  overflow-hidden object-cover' src="https://www.udacity.com/_next/image?url=%2Fimages%2Fbackgrounds%2Fblue-lines.png&w=640&q=75" alt="" />  
         </div>
      </div>
     </div>
     </>
  )
}

export default Box
