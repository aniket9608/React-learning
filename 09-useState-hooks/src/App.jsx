import React, { useState } from 'react'

// useState hook is used to change the variable on some event in website by using react Usestate hooks
// [read only, write only]

// Dom rerender all page but React renders only those components

const App = () => {
  const[a,setA]=useState(10)
  const[user,setname]=useState('aniket')
  return (
    <div>
      <h1>{a}</h1>
      <h2>Previous Oerations :{user}</h2>
      <button onClick={()=>{
        setA(a+1)
        setname('Increase')
      }}>Increase</button>
      <button onClick={()=>{
        setA(a-1)
        setname('Decrease')
      }}>Decrease</button>
    </div>
  )
}

export default App
