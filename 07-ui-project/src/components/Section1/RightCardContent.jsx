import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between ' >
            <h2 className='bg-white rounded-full h-14 w-14 flex justify-center
            items-center text-2xl font-semibold '>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nemo rerum temporibus possimus iste laborum. Deleniti eum quasi corrupti maxime reiciendis animi expedita totam culpa </p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full '>--<i className='ri-arrow-right-line'></i></button>

                </div>
            </div>
        </div>
  )
}

export default RightCardContent
