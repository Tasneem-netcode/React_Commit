import React from 'react'
import { MoveRight } from 'lucide-react'
const RightCardContent = (props) => {
    console.log(props.color)
  return (
    <div>
          <div className='absolute top-0 left-0 w-full h-full p-10 flex flex-col justify-between'>
        <h2 className='bg-white h-14 w-14 rounded-full flex items-center justify-center text-2xl'>{props.id+1}</h2>
        <div>
            <p className='text-xl font-medium text-amber-50 mb-10'>{props.card.intro}</p>
                <button 
                  style={{backgroundColor: props.color}} 
                  className='text-white pl-8 pr-2 py-2 rounded-full text-lg flex items-center gap-4 transition-transform hover:scale-105 active:scale-95 cursor-pointer'
                >
                  <span>{props.card.tag}</span>
                  <div className='bg-white/20 p-3 rounded-full'>
                    <MoveRight size={20}/>
                  </div>
                </button>
        </div>     
       </div>
    </div>
  )
}

export default RightCardContent