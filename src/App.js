import React from 'react'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import { ToastContainer } from 'react-toastify'

export default function App(){

  return (
    <>
        <div className='h-screen w-full bg-gray-900 flex justify-center items-center text-white'>
			<BrowserRouter>
				<ToastContainer/>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register/>}/>
				</Routes>
			</BrowserRouter>
        </div>
    </>
  )
}
