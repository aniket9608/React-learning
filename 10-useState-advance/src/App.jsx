
import React, { useState } from 'react'

const App = () => {
  const[num,setNum]=useState({user:'aniket',age:20})
  // useState runs asynchoronously,so in first change only show in UI not in conlole
  // in console runs one step back

  return (
    <div>
      <h1>{num.user} ,{num.age}</h1>
      <button onClick={()=>{
        // Destructuring of objects means copy of obj
        // const newNum={...num}
        // newNum.user='raghav'
        // setNum(newNum)
        // console.log(newNum.user)

        setNum({ ...num, user: 'raghav' });


        // setNum(prev=>({...prev,age:prev.age+1}))
        // setNum(prev=>({...prev,age:prev.age+1}))
      }}>Click</button>
    </div>
  )
}

export default App
