import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between py-6 items-center bg-teal-700 px-10'>
        <h2 className='text-xl font-bold'>Cheese and cake</h2>
        <div className='flex gap-10 '>
          <Link className='text-lg font-medium hover:text-teal-200' to= '/'>Home</Link>
          <Link className='text-lg font-medium hover:text-teal-200' to= '/about'>About</Link>
          <Link className='text-lg font-medium hover:text-teal-200' to= '/courses'>Courses</Link>
          <Link className='text-lg font-medium hover:text-teal-200' to= '/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar