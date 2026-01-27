import React from 'react'
import RightCards from './RightCards'

const RightText = (props) => {
  return (
    <div id='right-text' className='w-[65%] flex flex-nowrap gap-9 p-6 h-full overflow-x-auto'>
       {props.cards.map((card, index) => (
        <RightCards key={index} card={card} id={index} img={card.img} intro={card.intro} tag={card.tag} color={card.color} />
       ))} 
         
    </div>
  )
}

export default RightText