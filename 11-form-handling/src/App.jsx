import React from 'react'

const App = () => {
  // const submitHandler=(e)=>{
  //   e.preventDefault()
  //   console.log("form submitted")
  // }
  return (
    <div>
      <form onSubmit={(e)=>{
        // submitHandler(e)
        e.preventDefault()
        console.log("form submitted")
      }}>
        <input type="text" placeholder='Enter name' />
        {/* / in this input we direct write to UI so we use two way binding that write through react */}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
