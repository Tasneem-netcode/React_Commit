import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [data, setData] = useState([])

  // async function getData(){
  //   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //   console.log(data);

  // }

  const getData2 = async () => {
     const response2 =  await axios.get('https://jsonplaceholder.typicode.com/todos/1')
     console.log(response2.data)

  }

  const getData3 = async () => {
        const response3 = await axios.get('https://picsum.photos/v2/list');
        console.log(response3.data)
        setData(response3.data)
  }
  return (
    <div>
    {/* <button onClick={getData}>Get Data</button> */}
    <button onClick={getData2}>Get Data2</button>
    <button onClick={getData3}>Get Data3</button>
    
    <div>
      {data.map(function(elem , index){
        return <h3 key={index}>Hey, {elem.author}</h3>
      })}
    </div>
    </div>
  )
}

export default App