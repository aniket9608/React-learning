import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Button from './components/Button'


const App = () => {
  // Data centralization use to manage direct access nested child apps
  // common place to store data that any app can access
  // context
  // Provider
  // Usecontext
  // useContext

  const[theme,setTheme]=useState('light')
  return (

    <div>
        <Navbar />
        <Button/>
    </div>
  )
}

export default App
