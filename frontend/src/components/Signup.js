import React, {useContext, useState } from 'react'
import { Link } from "react-router-dom";
import Login from './Login';
import Context from '../UseContext/Context'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

function Signup() {
    const context = useContext(Context)
    const { Signuphandle } = context
    const [disable, setdisable] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => 
        {
            setdisable(true)
            let token= await Signuphandle(data.username, data.email, data.password);
            if(token.status=="true")
                {
                document.getElementById("closeclick").click();
                setTimeout(() => {
                    document.getElementById("my_modal_3").showModal();
                }, 1000);
                toast.success('Account created succesfully!');
                setdisable(false)
            }
            else{
                toast.error('Account creation failed!');
                setdisable(false)
            }
        }
        const handleClick=()=>{
            document.getElementById("closeclick").click();
            setTimeout(() => {
                document.getElementById("my_modal_3").showModal();
            }, 1000);
        }

    return (
        <div className='flex place-items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div className="modal-box w-96">
                <form method="dialog gap-3" onSubmit={handleSubmit(onSubmit)}>
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="closeclick">✕</Link>
                    <h2 className='text-xl font-semibold mx-1'>Signup</h2>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Name</span>
                        </div>
                        <input type="text" placeholder="Enter the name" className="input input-bordered w-full max-w-xs" {...register("username", { required: true })} required />
                        {errors.username && <span>This field is required</span>}
                    </label>
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
                    <div className='flex flex-row gap-11 items-center'>
                        <button className='py-2 px-3 bg-pink-500 rounded-md text-white font-semibold'  >{disable?"Loading...":"Signup"}</button>
                        <p>Not registered?<button className='text-blue-400 underline' onClick={handleClick}>login</button></p>
                        <Login />
                    </div>
                </form>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Signup