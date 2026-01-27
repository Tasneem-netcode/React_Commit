import React from 'react'

import RightCardContent from './RightCardContent'
const RightCards = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl shrink-0 overflow-hidden relative'>
       <img className='h-full w-full object-cover rounded-4xl' src={props.card.img} alt="" />
     <RightCardContent card={props.card} id={props.id} color={props.color} />
       {/* <div className='absolute inset-0 bg-black/20 z-10'></div> */}

    </div>
  )
}

export default RightCards