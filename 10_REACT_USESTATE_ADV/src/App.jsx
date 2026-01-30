import React, { useState } from 'react'

const App = () => {
  const [num , setNum]  = useState({user: "Sana" , age: 20})

  const btnClicked = () => {
    const newNum = {...num} ;
    newNum.user = "Alika";
    setNum(newNum);

    setNum(prev => ({...prev , age:70}))

  }
  const [num2 , setNum2]  = useState([10, 20 , 30 , 40])

  const btnClicked2 = () => {
    const newNum = [...num2];
    newNum.push(33);
    setNum2(newNum); //to display the change in array ui
  }

  const [num3 , setNum3]  = useState(10)

  const btnClicked3 = () => {
    setNum3(prev => prev + 1)
    setNum3(prev => prev + 1)
    setNum3(prev => prev + 1)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Change value</button>
      <h1>{num2}</h1>
      <button onClick={btnClicked2}>Add value of array</button>

      <h1>{num3}</h1>
      <button onClick={btnClicked3}>Change value</button>
    </div>
  )
}

export default App