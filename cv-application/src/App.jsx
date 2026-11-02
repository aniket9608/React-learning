import React, { useState } from 'react'
import Education from './components/Education';
import GenInfo from './components/GenInfo';
import Practical from './components/Practical';

const App = () => {
  
  const addDetails=(e)=>{
      console.log('form submitted');
      // console.log(e.target.value)
    }
  return (
    
    <div className='h-full w-full bg-black text-black flex justify-center flex-col items-center '>
      <h1 className='px-4 py-2 font-bold text-4xl text-green-800'>CV Application</h1>
      <GenInfo/>
      <Education/>

     <Practical/>
      
    </div>
  )
}

export default App
