import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex px-8 py-4 bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold '>Aniket</h2>
      <div className='flex gap-8 '>
        
          <Link className='text-lg font-bold' to='/'>Home</Link>
          <Link className='text-lg font-bold' to='/about'>About</Link>
          <Link className='text-lg font-bold' to='/course'>Courses</Link>
          <Link className='text-lg font-bold' to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
