import React from 'react'
import Navbar from './Components/Navbar'
import Section1 from './Components/Section1'
import Heading from './Components/Heading'
import Scroller from './Components/Scroller'
import Videotext from './Components/Videotext'
import Learner from './Components/Learner'
import Started from './Components/Started'
import Ending from './Components/Ending'
 

const App = () => {
  return (
    <>
    <div className='w-full h-screen'>
      <Navbar/>
      <Section1/>
      <Heading/>
      <Heading/>
      <Heading/>
      <Heading/>
      <Heading/>
      <Videotext/>
      <Learner/>
      <Started/>
      <Ending/>
       
    </div>
    </>
  )
}

export default App

 