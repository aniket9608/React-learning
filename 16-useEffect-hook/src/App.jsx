import React, { useEffect, useState } from 'react'

// useEffect runs multiple things side by side ,runs parallely


const App = () => {
  const[num,setNum]=useState(0)
  const[num2,setNum2]=useState(100)
  useEffect(function(){
    console.log('use effect running')
  },[num] ) //make dependencies
  return (
    <div>
      <h1>value of num:{num}</h1>
      <h1>value of num2: {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1)
      }} 
      onClick={()=>{
        setNum2(num2+10)
      }
      }>Click</button>
    </div>
  )
}

export default App
