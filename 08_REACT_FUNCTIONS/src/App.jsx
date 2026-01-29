import React from 'react'

const App = () => {
  const btnclick =() =>{
    console.log("clicked")
  }

  const mouseEnter =() =>{
    console.log("mouse enter")
  }

  // Passsing Arguments in event functions
  function greetUser(username){
    alert(`Hello, ${username}`)
  } 
  
  const Pagescroll = (elem) => {
    console.log("Page scrolled speed" , elem)

  }
  return (
    <div onWheel={(elem) => {
      console.log(elem)
      // console.log(elem.deltaY)
      
      Pagescroll(elem.deltaY);
     } }>
      <h1>Hello Sara</h1>
      <button onClick={btnclick}>Change user</button>
      <br />
      <button onMouseEnter={mouseEnter} onClick={btnclick}>Mouse enter</button> 
      <button onClick={() => greetUser("Sara")}>Greet User</button> 

      {/* <input onChange={() => {
        console.log("Input clicked")
      }} type="text" placeholder='Enter name'/> */}

      <input onChange={function (elem){
        console.log(elem)
        console.log(elem.target.value)
      }} 
      type="text" placeholder='Enter name'/>


      {/* mousemove function */}
      
      <div onMouseMove={function (elem){
        console.log("mouse moved")
        console.log(elem)
        console.log(elem.clientX)
        console.log(elem.clientY)
        console.log(elem.pageX)
        console.log(elem.pageY)
        console.log(elem.screenX)
        console.log(elem.screenY)
      }} className='box'>
        Move mouse here
      </div>

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App