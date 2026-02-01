import React from 'react'
import { useState } from 'react'
const App = () => {
  const [title, setTitle] = useState('')

  const submitHandler= (e) => {
    e.preventDefault();
    console.log("Submitted");
    setTitle('')

  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      
      <form onSubmit={(e) => {
        submitHandler(e)
      } }className='p-10 flex lg:w-1/2 gap-4 flex-col items-start '>

        <h1 className='font-bold text-2xl '>Add Notes</h1>
        <input 
      type="text" 
      title={title}
      onChange={(e) => {
        setTitle(e.target.value)
      }}
      className='px-5 py-2 border-2 rounded w-full border-amber-200 '
      placeholder='Enter Notes Heading' />
      <textarea
      type="text"  
      className='px-5 h-32 border-2 rounded w-full border-amber-200 '
      placeholder='Enter Notes Description' />
    
      <button className='bg-white w-full rounded text-black px-5 py-2'>Add Notes</button>
    
      </form>

      <div className='lg:border-l-2 border-amber-200 p-10 lg:w-1/2'>
      <h1 className='font-bold text-2xl '>Recent Notes</h1>
      
      <div className='flex gap-5 flex-wrap mt-5 overflow-scroll h-full'>
        <div className="h-52 w-42 rounded-2xl bg-amber-100"></div>
        <div className="h-52 w-42 rounded-2xl bg-amber-100"></div>
        <div className="h-52 w-42 rounded-2xl bg-amber-100"></div>
      
          
      </div>
        
      </div>
    </div>
  )
}

export default App