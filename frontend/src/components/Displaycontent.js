import React from 'react'
import { Link } from "react-router-dom";

function Displaycontent(props) {
  const handleClick=()=>{
      localStorage.removeItem("id")
  }
  return (
    <div >
      <div className='bg-gradient-to-r from-blue-950 to-cyan-900 flex-col flex lg:flex-row md:flex-row lg:px-24 md:px-12 px-4 py-12 '>

      <div>
        <img className='w-80 h-5/6 rounded-xl' src={props.item.image} alt="image" />
      </div>
        <div className='lg:px-16 md:pt-56 py-7'>
            <h2 className='text-3xl text-white font-semibold w-96'>{props.item.title}</h2>
            <p className='text-xl font-semibold text-yellow-300'>{props.item.category}</p>
            <p className='text-xl text-yellow-300'>${props.item.price}</p>
        </div>
      </div>
      <div className='w-full bg-yellow-50 h-full lg:px-24 md:px-12 px-4 flex flex-col items-center'>
        <div >
          <h2 className='text-3xl py-3 font-semibold underline'>Description</h2>
          <p className='text-black text-xl font-serif text-justify'>{props.item.content}</p>
        </div>
        <Link to="/" className='bg-red-500 text-white font-semibold px-5 py-2 rounded-md my-10' ><button onClick={handleClick}>Back</button></Link>
      </div>
    </div>
  )
}

export default Displaycontent