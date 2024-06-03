import React, { useState, useContext } from 'react'
import Context from '../UseContext/Context'
import bookimg from '../assets/bookimage.png'
import Login from './Login';

function Banner() {
  const context = useContext(Context)
  const { theme } = context
  const [email, setemail] = useState({email:""})
  const handlecOnChange = (e) => {
    setemail({ ...email, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className={`flex md:flex-row flex-col-reverse mx-auto lg:px-24 md:px-12 px-4 w-full ${theme=== "#FFFFFF" ? "text-black" : "text-white"}`}>
        <div className={`w-full md:w-1/2 md:pt-32 pt-4 items-center ${theme === "#FFFFFF" ? "text-black" : "text-white"}`}>
               <h1 className='md:text-4xl text-2xl font-bold w-dull gap-y-3'>Hello , Welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
          <p className='py-7 text-sm md:text-md'>your gateway to a world of books! Discover a vast collection spanning every genre and interest. Whether you're looking for the latest bestsellers or timeless classics, we have something for every reader. Sign up or log in to enjoy personalized recommendations and exclusive deals. Start your literary adventure with us today!</p>
                <div className='w-full pt-4 pb-8'>
                      <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`w-4 h-4 opacity-70 ${localStorage.getItem(" theme") == "#FFFFFF" ? "text-gray-700" : "text-gray-700"}`}><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="text" className={`grow w-4 font-semibold ${theme=== "#FFFFFF" ? "text-black" : "text-black"}`} placeholder="Enter your email to login" onChange={handlecOnChange}/>
                      </label>
                </div>
          <a href="#" className='btn bg-pink-400 py-2 px-3 text-white' onClick={() => { document.getElementById("my_modal_3").showModal(); 
           <Login email={email.email}/>}}>Secondary</a>
            </div>
              <div className='w-full md:w-1/2 items-center'>
                  <img src={bookimg} />
              </div>
        </div>
    </>
  )
}

export default Banner