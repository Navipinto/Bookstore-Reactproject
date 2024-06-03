import React ,{useContext}from 'react'
import Context from '../UseContext/Context'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
    const context = useContext(Context)
    const { theme } = context
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center py-32 sw-full h-screen'>
              <form className='gap-3 flex flex-col items-center'>
                  <label className="form-control w-full max-w-xs">
                      <div className="label">
                          <span className={`label-text font-semibold ${theme=== "#FFFFFF" ? "text-black" : "text-white"}`}>Name</span>
                      </div>
                      <input type="text" placeholder="Enter the name" className="input input-bordered w-96 max-w-xs" />
                  </label>
                  <label className="form-control w-full max-w-xs">
                      <div className="label">
                          <span className={`label-text font-semibold ${theme === "#FFFFFF" ? "text-black" : "text-white"}`}>question</span>
                      </div>
                      <input type="text" placeholder="Enter the question" className="input input-bordered  w-96 max-w-xs" />
                  </label>
                  <label className="form-control w-full max-w-xs">
                      <div className="label">
                          <span className={`label-text font-semibold ${theme === "#FFFFFF" ? "text-black" : "text-white"}`}>description</span>
                      </div>
                      <input type="password" placeholder="Enter the description" className="input input-bordered  w-96 max-w-xs mb-5" />
                  </label>
                  <button className='py-2 px-3 bg-blue-500 rounded-md text-white font-semibold'>Submit</button>
                  </form>
        </div>
        <div className='bottom-0 left-0 right-0 fixed'>
        <Footer/>
        </div>
    </div>
  )
}

export default Contact