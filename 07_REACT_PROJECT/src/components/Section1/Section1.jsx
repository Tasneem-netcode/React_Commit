import React from 'react'
import Navbar from './Navbar'
import Center from './Center'
// import Images from './Images'


const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-gray-200'>
        <Navbar />
        <Center cards={props.cards}/>
    </div>
  )
}

export default Section1