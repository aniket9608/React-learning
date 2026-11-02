import React, { useState } from 'react'

const GenInfo = () => {
  const[isSubmit,setisSubmit]=useState(false)
  const[info,setInfo]=useState({
    name:'',
    email:'',
    phone:''
  })
  const handlechange=(e)=>{
    const{ name,value}=e.target
    setInfo(p=>({...p,[name]:value}))
  }
  return (
    <div>
      {(!isSubmit && <section className='h-60 w-200 bg-cyan-900'>
        <h1>General Information</h1>

        <form onSubmit={(e)=>{
          e.preventDefault();
          setisSubmit(true)
        }}
        className='h-50 w-200 bg-cyan-900 flex flex-col border-2 gap-4 px-4 py-2 justify-center' >
      
          <input name='name' value={info.name}
          onChange={handlechange}
          type="text" placeholder='Enter name' required />

          <input name='email' value={info.email}
          onChange={handlechange}
          type='email' placeholder='Enter email' required />
          <input name='phone' value={info.phone}
          onChange={handlechange}
          type="number" placeholder='Enter phone number' required/>
          <button type='submit' >Submit</button>
        </form>
      </section>)}
      {(isSubmit && <div className='bg-amber-900 h-60 w-200 flex flex-col gap-5'>
        <h1>Practical Info</h1> 
        <div className='px-4 py-1 bg-amber-500 m-0.5'>Name:          {info.name}</div>
        <div className='px-4 py-1 bg-amber-500 m-0.5'>Email:         {info.email}</div>
        <div className='px-4 py-1 bg-amber-500 m-0.5'>Phone Number:  {info.phone}</div>
        <button onClick={(e)=>{
          e.preventDefault()
          setisSubmit(false)
        }}
        className='bg-amber-950 px-2 py-2 font-bold'>Edit</button>
      </div>)}
    </div>
    
  )
}

export default GenInfo
