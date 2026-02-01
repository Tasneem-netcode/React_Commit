import React from 'react'
import { useState } from 'react'
const App = () => {

  const [title, setTitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form Submitted by" , title);

    setTitle("")
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input onChange={(e) => {
          setTitle(e.target.value) // two way binding
          console.log(title)
        }} 
        type="text" 
        value= {title} 
        placeholder='Enter your name'/>
        <input type="text" placeholder='Enter your email'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App