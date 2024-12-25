import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Register(){

    const[credentials,setCredentials] = useState({name:"",username:"",email:"",password:"",role:""})
    const { name,username,email,password,role } = credentials
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/auth/register',{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({name,username,email,password,role})
        })

        const result = await response.json()
        console.log(result)
        if(response.ok){
            navigate('/')
            toast.success("User registered successfully",{
                position : 'top-center'
            })
        }
        else{
            toast.error("Enter correct details",{
                position : 'top-center'
            })
        }
    }

    const handleChange = async(e) =>{
        // console.log(e)
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    return (

       <div>
            <form action="" onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
                <h1 className='text-lg font-bold'>Register User</h1>
                <input type="text" name="name" id="name" className='bg-gray-500 text-white placeholder-white border-none px-3 py-2 rounded-md outline-none w-60' placeholder='Enter Full name' onChange={handleChange} value={name}/>
                <input type="text" name="username" id="username" className='bg-gray-500 text-white placeholder-white border-none px-3 py-2 rounded-md outline-none w-60' placeholder='Enter username' onChange={handleChange} value={username}/>
                <input type="email" name="email" id="email" className='bg-gray-500 text-white placeholder-white border-none px-3 py-2 rounded-md outline-none w-60' placeholder='Enter email address' onChange={handleChange} value={email}/>
                <input type="password" name="password" id="password" className='bg-gray-500 text-white placeholder-white border-none px-3 py-2 rounded-md outline-none w-60' placeholder='Enter password' onChange={handleChange} value={password}/>
                <input type="text" name="role" id="role" className='bg-gray-500 text-white placeholder-white border-none px-3 py-2 rounded-md outline-none w-60' placeholder='Enter Role' onChange={handleChange} value={role}/>
                <input type="submit" value="Register" className='bg-gray-100 text-black font-bold w-28 px-3 py-1 rounded-md'/>
            </form>
       </div>

    )

}