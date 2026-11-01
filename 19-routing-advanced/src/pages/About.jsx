import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  // use navigate
  // this is used to jump to other pages by parameter like /
  const navigate=useNavigate()

  const btnclicked=()=>{
    console.log('clicked');
    navigate('/')
  }
  return (
    <div>
      
      
      <h1>About Page</h1>

    </div>
  )
}

export default About
