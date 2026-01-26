import React from 'react'
import { MoveRight } from 'lucide-react'
const RightCards = () => {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative'>
       <img className='h-full w-full object-cover rounded-4xl' src="https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       <div className='absolute top-0 left-0 w-full h-full p-10 flex flex-col justify-between'>
        <h2 className='bg-white h-14 w-14 rounded-full flex items-center justify-center text-2xl'>1</h2>
        <div>
            <p className='text-xl font-medium text-amber-50 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab fugit laborum voluptate! Molestiae, rerum.</p>
            <div className='flex items-center gap-5 mt-5'>
                <button className='bg-blue-600 text-white px-8 py-3 rounded-full text-lg'>Satisfied</button>
                <button className='bg-blue-600 text-white px-5 py-3 rounded-full text-lg'> <MoveRight size={20}/></button>
            </div>
        </div>     
       </div>
       {/* <div className='absolute inset-0 bg-black/20 z-10'></div> */}

    </div>
  )
}

export default RightCards