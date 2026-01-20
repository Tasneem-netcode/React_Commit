import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user= "Sampath" age = {18} img = "https://images.unsplash.com/photo-1768036479485-6127b351b0c5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>   
      <Card user= "Dhruv" age = {20} img = "https://images.unsplash.com/photo-1680355466468-bd0a68b11fa0?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>   
    </div>
  )
}

export default App