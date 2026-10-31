
import React from 'react'

// local storage means browser storage
// stores some data like id,password or theme

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()

  // localStorage.setItem('user','aniket')
  // const u=localStorage.getItem('user')
  // console.log(u)
  // localStorage.removeItem('user')

  const user={
    username:'aniket',
    age:20,
    city:'patna'
  }
  localStorage.setItem('user',JSON.stringify(user)) //convert to string format

  const u=JSON.parse(localStorage.getItem('user')) //convert back to json format

  console.log(u)
  return (
    <div>
      App
    </div>
  )
}

export default App
