import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Center = (props) => {
  return (
    <div className='py-10 h-[90vh] px-18 flex justify-between items-center'>
        <LeftText />
        <RightText cards={props.cards}/>
    </div>
  )
}

export default Center