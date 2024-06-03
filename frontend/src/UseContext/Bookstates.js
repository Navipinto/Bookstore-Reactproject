import { useState } from 'react';
import Context from './Context'
import toast, { Toaster } from 'react-hot-toast';

const Bookstates=(props)=>{
    const host="http://localhost:4000"

    const [theme, settheme] = useState("#FFFFFF");
    localStorage.setItem("theme", theme)
    const themeState=(themecolor)=>
    {
        settheme(themecolor)
        localStorage.setItem("theme",theme)
    }

    const Signuphandle=async(username,email,password)=>
        {
            let token={}
        const response = await fetch(`${host}/api/authentication/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:await JSON.stringify({username:username,email:email,password:password})
        });
        token = await response.json();
        console.log(token)
        return token
        }


    const Loginhandle = async ( email, password) => {
        let tokenlog={}
        const response = await fetch(`${host}/api/authentication/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:await JSON.stringify({email: email, password: password })
        });
        tokenlog = await response.json();
        console.log(tokenlog)
        return tokenlog
    }

    return (
        <Context.Provider value={{ Signuphandle,Loginhandle,themeState,theme}}>
            {props.children}
        </Context.Provider>
    );
}

export default Bookstates;