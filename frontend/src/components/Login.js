import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import Context from '../UseContext/Context'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

function Login() {
  const context = useContext(Context)
  const { Loginhandle } = context

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>
    {
    const token= await Loginhandle(data.email, data.password);
    if(token.status=="true")
      {
        localStorage.setItem("token", token)
        toast.success(' Logged in Succesfully!');
    document.getElementById("my_modal_3").close();
    <Login/>
    window.location.reload()
      }
      else{
      toast.error('Error while logging in');
      }
  }

  const closelogin=()=>{
    document.getElementById("my_modal_3").close();
  }
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className={`modal ${localStorage.getItem("theme")=="#FFFFFF"?"text-black":"text-black"}`}>
        <div className="modal-box w-96">
          <form method="dialog gap-3" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="closeclicklogin" onClick={closelogin}>✕</button>
            <h2 className='text-xl font-semibold mx-1'>Login</h2>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">Email</span>
              </div>
              <input type="email" placeholder="Enter the email" className="input input-bordered w-full max-w-xs" {...register("email", { required: true })} required />
              {errors.email && <span>This field is required</span>}
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">Password</span>
              </div>
              <input type="password" placeholder="Enter the password" className="input input-bordered w-full max-w-xs mb-5" {...register("password", { required: true })} required />
              {errors.password && <span>This field is required</span>}
            </label>
            <div className='flex flex-row gap-16 items-center'>
              <button className='py-2 px-3 bg-pink-500 rounded-md text-white font-semibold'>Submit</button>
              <p>Not registered?<Link to="signup" className='text-blue-400 underline'>Signup</Link></p>
            </div>
          </form>
          <div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Login