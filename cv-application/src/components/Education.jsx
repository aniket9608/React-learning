import React, { useState } from 'react'

const Education = () => {
    const[isSubmit,setisSubmit]=useState(false)
    const[info,setInfo]=useState({
        school:'',
        title:'',
        date:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setInfo(p=>({...p,[name]:value}))
    }
  return (
    <div>
        {(!isSubmit && <section className='h-60 w-200 bg-cyan-900'>
            <h1>Educational Info</h1>

            <form onSubmit={(e)=>{
            e.preventDefault();
            setisSubmit(true)
            }}
            className=' flex flex-col border-2 gap-4 px-4 py-2 justify-center'>
            
                <input name='school' value={info.school}
                onChange={handleChange}
                type="text" placeholder='Enter School' required/>

                <input name='title' value={info.title}
                onChange={handleChange}
                type="text" placeholder='Enter title' required />

                <input name='date' value={info.date}
                onChange={handleChange}
                type="date" placeholder='Enter Date' required />
                <button>Submit</button>
            </form>
        </section>)}
        {(isSubmit&&<div className='bg-amber-900 h-60 w-200 flex flex-col gap-5'>
            <h1>Practical Info</h1> 
            <div className='px-4 py-1 bg-amber-500 m-0.5'>School:        {info.school}</div>
            <div className='px-4 py-1 bg-amber-500 m-0.5'>Title:         {info.title}</div>
            <div className='px-4 py-1 bg-amber-500 m-0.5'>Date:          {info.date}</div>
            <button className='bg-amber-950 px-2 py-2 font-bold' onClick={()=>{
                setisSubmit(false)
            }}>Edit</button>
        </div>)}
       

    </div>
  )
}

export default Education
