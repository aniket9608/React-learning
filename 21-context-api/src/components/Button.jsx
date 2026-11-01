import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
  const[theme,setTheme]=  useContext(ThemeDataContext)
  return (
    <div>
      <button onClick={()=>{
        if(theme=='light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
        
      }}>Change Theme</button>
    </div>
  )
}

export default Button
