
import React from 'react'
import Card from './components/card.jsx' 
import Navbar from './components/navbar.jsx'
const App = () => {
  const num=101
  return (
    <div>
      {/* <div className='card' >App {num}</div>   */}
      <Navbar/>
      {Card()}
      
      <Card/>
      <Card/>
    </div>
  )
}

export default App
