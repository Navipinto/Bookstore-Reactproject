import React from 'react'
import { Link } from "react-router-dom";

function FreebookItem(props) {
  const clickHandler=()=>
    {
      localStorage.setItem("id",props.id)
    }
  return (
    <>
      <div className='py-5 hover:scale-105 duration-300 w-fit me-3'>
        <div className="card bg-gray-100 shadow-xl py-2">
          <figure><img src={props.image} className='w-32 h-44' alt="image" /></figure>
          <div className="card-body">
            <div className='gap-0 w-fit flex flex-col'>
              <h2 className="card-title font-bold w-fit">{props.title}</h2>
              <span className='bg-pink-400 px-3 p-1 text-sm text-white rounded-3xl font-normal w-fit my-1'>{props.category}</span>
            </div>
            <p>{props.description}</p>
            <div className="card-actions">
              <div className='items-center flex flex-row w-fit mt-4 space-x-5'>
                <p className='bg-yellow-100 py-1 px-2 rounded-lg lg:me-36 font-semibold'>${props.price}</p>
                <Link className="bg-blue-500 py-2 px-3 rounded-md text-white font-semibold" to="showContent" ><button onClick={clickHandler}>View now</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FreebookItem