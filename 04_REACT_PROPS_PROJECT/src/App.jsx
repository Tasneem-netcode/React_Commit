import React from 'react'
import './index.css'
import Card from './components/Card'
import User from './components/User'
const App = () => {
  return (
    <div className='parent'>
      <User />
      <Card />
      <Card />
   
    </div>
  )
}

export default App