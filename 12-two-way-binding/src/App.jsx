import React from 'react'
import { useState } from 'react'

const App = () => {
  // const submitHandler=(e)=>{
  //   e.preventDefault()
  //   console.log("form submitted")
  // }

  const[title,setTitle]=useState('')
  return (
    <div>
      <form onSubmit={(e)=>{
        // submitHandler(e)
        e.preventDefault()
        console.log("form submitted by",title)

        setTitle('') //after submit
      }}>
        <input type="text" placeholder='Enter name' 
        value={title} // two way binding(value,onchange)
        //write through react useState
        onChange={(e)=>{ 
          console.log(e.target.value)
          setTitle(e.target.value)
        }} />
        {/* / in this input we direct write to UI so we use two way binding that write through react */}
        <button>Submit </button>
      </form>
    </div>
  )
}

export default App
