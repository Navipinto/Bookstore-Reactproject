import React,{useState,useEffect, useContext} from "react";
import logo from "../assets/bookstorelogo.png";
import { Link } from "react-router-dom";
import Login from "./Login";
import Context from '../UseContext/Context'
import Logout from "./Logout";

function Navbar() {
  const [sticky, setsticky] = useState(false)
  const Bookcontext = useContext(Context)
  const{themeState}=Bookcontext

  const themeHandler=()=>{
      if(localStorage.getItem("theme")=="#FFFFFF")
      {
        document.body.style.backgroundColor ="#475569";
        themeState("#475569")
      }
    if (localStorage.getItem("theme") =="#475569")
      {
      document.body.style.backgroundColor = "#FFFFFF";
      themeState("#FFFFFF")
      }
  }
  useEffect(() => {
    const scrollHandler=()=>{
      if(window.scrollY>0)
        {
          setsticky(true)
        }
        else{
          setsticky(false)
        }
    }
    <Navbar/>
    window.addEventListener("scroll",scrollHandler);
    return () => {
      window.addEventListener("scroll",scrollHandler)
    }
  }, [])
  
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={localStorage.getItem("token")?"/premium":"/signup"}>Courses</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  )

  const handleTheme=()=>{

  }

  const [logbtn, setlogbtn] = useState(localStorage.getItem("token"))
  const handleLogin=()=>{
    document.getElementById("my_modal_3").showModal();
    <Login/>
      }

  return (
    <>
      <div className="max-w-screen-2xl fixed top-0 left-0 right-0 z-50">
        <div className={`navbar md:px-12 lg:px-24 px-4  ${sticky?"shadow-md shadow-gray-100 bg-slate-700 duration-1000":"bg-slate-600 duration-700"}`}>
          <div className="navbar-start">
            <div className="dropdown text-white">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ps-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                {navItems}
              </ul>
            </div>
            <a href="#" className="text-sm cursor-pointer">
              <img className="w-52" src={logo}></img>
            </a>
          </div>
          <div className="navbar-end space-x-3">

            <div className="navbar-center hidden lg:flex text-white">
              <ul className="menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>
            <div className="hidden md:block">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-4 opacity-100 text-xl text-black"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              </label>

            </div>
            <div>
              <label className="swap swap-rotate pe-2 text-white">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="synthwave"  onClick={themeHandler}/>

                {/* sun icon */}
                <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                {/* moon icon */}
                <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

              </label>
            </div>
            <div>
              {!logbtn?
              <div>
                  <button className="px-3 py-2 font-semibold rounded-md text-white bg-black hover:bg-blue-950 duration-300 border-none cursor-pointer" onClick={handleLogin}>Login</button>
                  <Login />
              </div>
              :<Logout/>}
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
