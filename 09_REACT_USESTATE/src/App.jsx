import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(20)

  function changeCount(){
    setCount(count+1)
  }
  return (
    <div>
<h1>VALUE OF COUNT IS : {count}</h1>

{/* <button onClick={() => setCount(count + 1 )}>Change value</button> */}
<button onClick={changeCount}>Change value</button>
    </div>
  )
}

export default App