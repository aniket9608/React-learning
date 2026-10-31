import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
// JSON :javascript object notation

// post : to register in backend 
// patch for update details like in profile
//lazy loading : to take data frequently 
const App = () => {
  const[userData,setUserData]=useState([])
  const[index,setIndex]=useState(1)

  const getData=async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    console.log(response)
    setUserData(response.data)
  }
  // useEffect

  useEffect(function(){
    getData()
  },[index])
  let printUserData=<h3 className='text-gray-400 absolute top-1/2 left-1/2 '>Loading ...</h3>
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      // return idxs
      return <div key={idx}>
        <Card elem={elem}/>

      </div>
    })
  }
  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>
      {/* <button onClick={getData} className='active:scale-95 bg-green-600 mb-3 px-5 py-2 rounded'>Get Data</button> */}
      
      <h1 className='fixed text-2xl bg'>{index}</h1>

      <div className='flex h-[95%] flex-wrap gap-3'>
        {printUserData}
      </div>

      <div className=' flex justify-center gap-6 items-start p-4'>
        <button  onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        style={{opacity: index ==1? 0.5:1}}
        className='bg-amber-400 text-black rounded px-4 font-semibold text-2sm cursor-pointer active:scale-95  py-2'>Prev</button>

        <h4>Page {index}</h4>

        <button onClick={()=>{
          setIndex(index+1) 
           setUserData([])
        }}
        className='bg-amber-400 text-black rounded px-4 font-semibold text-2sm cursor-pointer active:scale-95 py-2'>Next</button>
     </div>
    </div>
  )
}

export default App
