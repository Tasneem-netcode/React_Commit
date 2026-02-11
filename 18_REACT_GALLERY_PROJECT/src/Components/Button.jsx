import React from 'react'

const Button = ({index, setIndex, setImg}) => {
  return (
    <div>
         <div className='flex justify-center gap-5 items-center p-4'>
        <button
        className='bg-amber-200 text-sm cursor-pointer active:scale-90 text-black px-4 py-2 rounded-lg'
          onClick = {() => {
            if(index > 1){
              setIndex(index - 1)
             setImg([])
            }
          }}>
            Previous</button>

            <h3>Page{index}</h3>
        <button
         className='bg-amber-200 text-sm cursor-pointer active:scale-90 text-black px-4 py-2 rounded-lg'
         onClick = {() => {
           setIndex(index + 1)
           setImg([])
          
        }}
         >Next</button>
         
      </div>
    </div>
  )
}

export default Button