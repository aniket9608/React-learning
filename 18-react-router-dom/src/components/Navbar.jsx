import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'> 
        <h3>Aniket</h3>
        <div>
            {/* use link to avoid render whole pages/reload */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
        </div>
      </div>
  )
}

export default Navbar
