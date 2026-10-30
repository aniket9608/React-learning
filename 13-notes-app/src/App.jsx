
import React, { useState } from 'react'

const App = () => {
  const[title,setTitle]=useState('')
  const[detail,setDetail]=useState('')

  const[task,setTask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form submitted")

    const copyTask=[...task]
    copyTask.push({title,detail})
    setTask(copyTask)
    console.log(copyTask)


    setTitle('')
    setDetail('')
  }

  const deleteNotes=(idx)=>{
    const ct=[...task]
    console.log(ct[idx])
    ct.splice(idx,1)

    setTask(ct)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
              submitHandler(e)
           }} className='flex  items-start lg:w-1/2 p-10  '>

        <div className='flex font-medium  w-1/2 items-start flex-col gap-4'>
            <h1 className='text-xl font-bold p-'>Add Notes</h1>

           {/* pehla input */}
            <input type="text" 
            value={title}
            onChange={(e) =>{
              setTitle(e.target.value)
              console.log(e.target.value)
            }}
            className='px-5 w-full py-2 border-2 rounded'
            placeholder='Enter notes heading:' />


           {/* detail input */}
            <textarea type="text" 
            value={detail}
            onChange={(e)=>{
              setDetail(e.target.value)
              console.log(e.target.value)
            }}
            className='px-5 h-32 font-medium w-full h-20 py-2 border-2 rounded' 
            placeholder='Write Details: '/>
        
            <button 
            className='bg-white active:scale-95 active:bg-gray-400 font-medium w-full text-black px-5 py-2 rounded
            '>ADD NOTE</button>

          </div>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiopYAl8retiftTY-xs266G0F1rL2a8kM5SNse-pTSAg&s=10" alt="" /> */}
      </form>

      <div className=' lg:w-1/2 gap-5 lg:border-l-2 f p-10'>

          <h1 className='text-xl font-bold p-'>Recent Notes</h1>
          <div className='flex flex-wrap items-start gap-5 mt-5 h-[90%] overflow-autos'>

              {task.map(function(elem,idx){
                return <div key={idx} className='relative h-52 w-40 rounded-2xl text-black p-4 bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalF8sGzepB4L8FxAbMrexd_bmz-KGLPeSOB7vWc_Rhg&s=10)]'>
                  <h2 onClick={()=>{
                    deleteNotes(idx)
                  }} className='absolute active:scale-90 top-5 right-5 bg-red-500 p-2 rounded-full text-xs'> X </h2>
                  <h3 className='p-5 leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.detail}</p>

                </div>

              })}
              {/* <div className='h-52 w-40 rounded-2xl bg-white'></div> */}
          </div>
      </div>


    </div>
  )
}

export default App
