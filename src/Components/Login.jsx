import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

export default function Login(){

    const [credentails,setCredentials] = useState({email:"",password:""})
    const { email, password } = credentails
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/auth/login',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({email, password})
        })

        const result = await response.json()
        if(response.ok){
            navigate('/')
            toast.success("User logged in successfully",{
                position : 'top-center'
            })
        }
        else{
            toast.error("Invalid Credentials",{
                position:'top-center'
            })
        }
    }

    const handleChange = async(e) => {
        setCredentials({...credentails,[e.target.name]:e.target.value})
    }

    return (
        <div className=''>
            <form action="" onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
                <h1 className='text-lg font-bold'>Login User</h1>
                <input type="email" name="email" id="email" className='bg-gray-500 text-white placeholder-white border-none px-3 py-2 rounded-md outline-none w-60' placeholder='Enter email' onChange={handleChange} value={email}/>
                <input type="password" name="password" id="password" className='bg-gray-500 text-white placeholder-white border-none px-3 py-2 rounded-md outline-none w-60' placeholder='Enter password' onChange={handleChange} value={password}/>
                <input type="submit" value="Submit" className='bg-gray-100 text-black w-28 px-3 py-1 rounded-md'/>
            </form>
        </div>
    )

}