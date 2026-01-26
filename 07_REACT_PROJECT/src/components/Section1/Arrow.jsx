import React from 'react'
import { MoveUpRight } from 'lucide-react'

 const Arrow = () => {
  return (
    <div>
        <div className='text-black px-5 py-6 m-7 uppercase  tracking-widest absolute bottom-2 left-12 text-8xl '> {/*move it to the bottom left within the left content*/}
        {/* icon */}
     <MoveUpRight size={35} />

       </div>
    </div>
  )
}

export default Arrow

