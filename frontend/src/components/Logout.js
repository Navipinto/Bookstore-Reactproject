import React from 'react'
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

function Logout() {
    const handleLogout=()=>{
        localStorage.clear();
        toast.success(' Logged out Succesfully!');
       setTimeout(() => {
         window.location.reload()
       }, 1500);
    }
  return (
    <div>
      <Link to="/"><button className='px-3 py-2 font-semibold rounded-md text-white bg-red-500 hover:bg-red-700 duration-300 border-none cursor-pointer' onClick={handleLogout}>Logout</button></Link>
    </div>
  )
}

export default Logout