import React from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/navbar'
import Profile from './components/Profile'


const App = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <Card />
      <Profile />
      {/* {Card()} // this is a component and as we are calling the function in js , we need to keep it in {} */}
    </div>
  )
}

export default App