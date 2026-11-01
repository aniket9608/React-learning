import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar2 = () => {
    // USE NAVIGATE
    const navigate=useNavigate()
  return (
    <div className='bg-cyan-600 gap-2 pb-2 '>
      <button 
      onClick={()=>{
        navigate('/')
      }}
      className='bg-amber-400 mt-4 px-5 py-2  rounded cursor-pointer active:scale-95'>
        Return to Home</button>

      <button onClick={()=>{
        navigate(-1)
      }}
      className='bg-amber-400 mt-4 ml-2 mr-2 px-5 py-2 rounded cursor-pointer active:scale-95'>
        Back</button>
        <button onClick={()=>{
        navigate(+1)
      }}
      className='bg-amber-400 mt-4 px-5 py-2 rounded cursor-pointer active:scale-95'>
        Next</button>
    </div>
  )
}

export default Navbar2
