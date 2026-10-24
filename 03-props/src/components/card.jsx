import React from 'react'
const card = (props) => {
  return (
    <div>
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1788443816442-cccc5bf02652?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        <h1>{props.user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur  quidem nulla libero ea exercitationem cupiditate deleniti, quas doloribus? Illum, at.</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default card
