import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeDataContext=createContext()


// export const PostDataContext=createContext()

// create context 
// data provide
// use kro
const ThemeContext = (props) => {
    const[theme,setTheme]=useState('light')
  return (
    <div>
      <ThemeDataContext.Provider value={[theme,setTheme]}>
            {props.children}
      </ThemeDataContext.Provider>
      {/* <PostDataContext.Provider value='Aniket'>
             {props.children}
      </PostDataContext.Provider> */}
    </div>
  )
}

export default ThemeContext
