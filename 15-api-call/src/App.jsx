
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
// API : interface btw frontend and backend

const App = () => {

      
    // const getData=async ()=>{
    //   const a=await fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   // .then(response => response.json())
    //   // .then(json => console.log(json))
    //   console.log(a)
    // }

    // because easily manage errors, interceptor or loading

    const [data,setData]=useState([])
    const getData=async ()=>{
      const res=await axios.get('https://picsum.photos/v2/list')

      // const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts/1') //destructuring 
      setData(res.data)

      console.log(res.data)
    }


  return (
    <div>

      <button onClick={getData}>Get Data</button>
      {data.map(function(elem,idx){
        return <h3>hello,{elem.author}{idx}</h3>
      })}
    </div>
  )
}

export default App
