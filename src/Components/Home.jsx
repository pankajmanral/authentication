import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){

    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col gap-3 items-center">
                <h1 className="font-extrabold text-2xl">This is home page</h1>
                <div className="flex gap-3">
                    <button className="border px-2 py-1 rounded-md cursor-pointer hover:bg-gray-400 hover:border-none" onClick={ ()=>navigate('/login') }>Login</button>
                    <button className="border px-2 py-1 rounded-md cursor-pointer hover:bg-gray-400 hover:border-none" onClick={ ()=>navigate('/register') }>Register</button>
                </div>
            </div>
        </>
        
    )

}