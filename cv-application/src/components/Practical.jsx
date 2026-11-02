import React, { useState } from 'react'

const Practical = () => {
    const[isSubmit,setisSubmit]=useState(false)
    const[info,setInfo]=useState({
        company:'',
        position:'',
        responsibility:'',
        date:''
    })
    const handleChange=(e)=>{
        const{name,value}=e.target 
        setInfo(p=>({...p,[name]:value}))
    }
  return (
    <div>
        {(!isSubmit && <section className='h-80 w-200 bg-cyan-900'>
            <h1>Practical Info</h1> 
            <form onSubmit={(e)=>{
                e.preventDefault();
                setisSubmit(true)
            }}
            className=' flex flex-col border-2 gap-4 px-4 py-2 justify-center'>
                
                <input name='company'
                value={info.company}
                onChange={handleChange}
                type="text" placeholder='Enter company name'/>

                <input name='position'
                value={info.position}
                onChange={handleChange}
                type="text" placeholder='Enter position title'/>

                <input name='responsibility'
                value={info.responsibility}
                onChange={handleChange}
                type="text" placeholder='Enter responsibility '/>

                <input name='date'
                value={info.date}
                onChange={handleChange}
                type="date" placeholder='' />
                <button>Submit</button>
            </form>
        </section>)}
        {(isSubmit && <div className='bg-amber-900 h-80 w-200 flex flex-col gap-5'>
            <h1>Practical Info</h1> 
            <div className='px-4 py-1 bg-amber-500 m-0.5'>Company Name:          {info.company}</div>
            <div className='px-4 py-1 bg-amber-500 m-0.5'>Position Title:        {info.position}</div>
            <div className='px-4 py-1 bg-amber-500 m-0.5'>Responsibility:        {info.responsibility}</div>
            <div className='px-4 py-1 bg-amber-500 m-0.5'>Date of Join:          {info.date}</div>
            <button onClick={ ()=>{
                setisSubmit(false)
            }
                
            }>Edit</button>
        </div>)}
    </div>
  )
}

export default Practical
