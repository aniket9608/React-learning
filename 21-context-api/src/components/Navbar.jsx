import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
// import { PostDataContext} from '../context/ThemeContext'

const Navbar = () => {
//    const data= useContext(PostDataContext)
//    console.log(data)
  const [theme]= useContext(ThemeDataContext)
  return (
    <div className={theme}>
      <h2>Aniket</h2>
      <Navbar2 />
    </div>
  )
}

export default Navbar
