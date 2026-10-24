// function App(){
//   return 'hello'
// }

// export default App

import React from 'react'

const App = () => {
  return (
    // fragments (empty tag)
    <>    
      <div id='parent'>
        <h1 id='child1'>APP</h1>
        <h3 id='child2'>Hello</h3>
      </div>
      <div id="chacha">
        <h1>cousin</h1>
      </div>
    </>
  )
}

export default App


// npm create vite 
// file_name
// cd file_name
//  npm run dev

//   assets me static like fonts,emoji, svg
//  public img,videos

// eslints : use for design custom rule