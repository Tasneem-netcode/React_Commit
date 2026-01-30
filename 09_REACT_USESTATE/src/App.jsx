import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(20)
  const [username , setUsername] = useState("Jake")
  const [users, setUsers] = useState(['John ', 'Doe ', 'jane '])

  const [num, setNum] = useState(0)

  function increment(){
    setNum(num + 1);
  }

  function decrement(){
    setNum(num - 1);
  }

  function changeCount(){
    setCount(count+1)
    setUsername("Alika")
    setUsers(["Alika ", "Khan ", 'Shaad '])
    }

    function reset(){
      console.log(num)
      setNum(0);
      console.log(num)
      console.log(num)
    }

  
  return (
    <div>

      <h1>Counter: {num}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
<h1>VALUE OF COUNT IS : {count} <br />{users} <br /> User name is: {username}</h1>

{/* <button onClick={() => setCount(count + 1 )}>Change value</button> */}
<button onClick={changeCount}>Change value</button>
    </div>
  )
}

export default App