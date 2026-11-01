import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  // passing read and write props u can manage to change parents jsx file
  
  const[theme,setTheme]=useState('light')
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <h1>Theme is {theme}</h1>
    </div>
  )
}

export default App
