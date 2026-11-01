import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <button onClick={()=>{
        props.setTheme('Dark')
      }}>Change Theme</button>
    </div>
  )
}

export default Navbar
