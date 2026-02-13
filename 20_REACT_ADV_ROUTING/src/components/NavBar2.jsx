import React from 'react'
import { useNavigate } from 'react-router-dom'
const NavBar2 = () => {
     const navigate =useNavigate()

    // const btnClicked = () =>{
    //    navigate('/')
    // }
  return (
    <div className='py-3 px-5 bg-cyan-700'>
        <button className='bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer font-medium active:scale-95 transition-all duration-200'
         onClick={() => {
            navigate('/')
         }}>Click me</button>
        <button className='bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer font-medium active:scale-95 transition-all duration-200'
         onClick={() => {
            navigate(-1)
         }}>Go back</button>
        <button className='bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer font-medium active:scale-95 transition-all duration-200'
         onClick={() => {
            navigate(1)
         }}>Go forward</button>

    </div>
  )
}

export default NavBar2