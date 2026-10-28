
// import React from 'react'

// const App = () => {

//   function btnClicked(){
//     console.log("button clicked")
//   }
//   function inputchanging(aa){
//     console.log(aa)
//   }
//   return (
//     <div>

//       <input onChange={ (elem)=>{
//         inputchanging(elem.target.value)
//       }} type="text" placeholder='enter name' />


//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App



import React from 'react'

const pageScrolling =(elem)=>{
  console.log('page scrolling... at speed ',elem)
}
const App = () => {
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
