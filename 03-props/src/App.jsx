import React from 'react'
import Card from './components/card'

//props: we can pass diff data into multiple card with the help of props
// props is similar use as parameters

const App = () => {
  return (
    <div className='parent'>
      
      <Card user='Aniket' age={20} />
      <Card user='Raghav' age={20} />
      <Card user='Aman' age={20} />
      <Card user='Sarthak' age={20} />
      
    </div>
  )
}

export default App
