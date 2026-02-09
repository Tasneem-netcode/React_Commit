import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(10)

  //without dependencies
  // useEffect(function() {
  //   console.log("UseeFFECT IS RUNNING")
  // })

  useEffect(() =>{
    console.log('use effect is running ')
  }, [num])

  return ( 
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
       <button onClick={() => {
            setnum(num+1)
            setnum2(num2 + 10)
       }}
       onDoubleClick={() => {
        setnum2(num + 20)
       }}
       >Click</button>
    </div>
  )
}

export default App