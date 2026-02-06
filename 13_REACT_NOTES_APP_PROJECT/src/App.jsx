import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react'
const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler= (e) => {
    e.preventDefault();  
    console.log(title, details);

    // const taskObj = {
    //   title: title,
    //   details: details,
    // }

    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)
    console.log(copyTask);

    

    setTitle('')
    setDetails('')

  }

  const deleteNote =(index) =>{
     const copyTask = [...task] // copy the task array
     copyTask.splice(index, 1) // remove the element at the given index
     setTask(copyTask) // update the state
  }

  return (
    <div className='hide-scrollbar h-screen lg:flex bg-black text-white '>
      
      <form onSubmit={(e) => {
        submitHandler(e)
      } }className='p-10 flex lg:w-1/2 gap-4 flex-col items-start '>

        <h1 className='font-bold text-2xl '>Add Notes</h1>
        <input 
      type="text" 
      value={title}
      onChange={(e) => {
        setTitle(e.target.value)
      }}
      className='px-5 py-2 border-2 rounded w-full border-amber-200 '
      placeholder='Enter Notes Heading' />
      <textarea
      type="text"  
      value={details}
      onChange={(e) => {
        setDetails(e.target.value)
      }}
      className='px-5 h-32 border-2 rounded w-full border-amber-200 '
      placeholder='Enter Notes Description' />
    
      <button className='bg-white w-full rounded text-black px-5 py-2 active:bg-amber-200'>Add Notes</button>
    
      </form>

      <div className='hide-scrollbar lg:border-l-2 border-amber-200 p-10 lg:w-1/2'>
      <h1 className='font-bold text-2xl '>Recent Notes</h1>
      
      <div className='hide-scrollbar flex gap-5 flex-wrap items-start justify-start mt-5 overflow-scroll h-[90%]'>
         
      
          {task.map((item, index) => {
            return <div key={index} className="relative h-52 w-42 bg-cover py-7 px-4 rounded-2xl bg-amber-100">
              <h2 onClick={() =>{ 
                deleteNote(index)
              }
              } className='absolute top-2 right-2 text-2xl cursor-pointer text-black'><X color="#c41c1c" /></h2>
            <div className='flex flex-col gap-2'>
               <h3 className='font-bold text-xl leading-tight text-black'>{item.title}</h3>
             <p className='text-black'>{item.details}</p>
            </div>
            </div>
          })}
      </div>
        
      </div>
    </div>
  )
}

export default App