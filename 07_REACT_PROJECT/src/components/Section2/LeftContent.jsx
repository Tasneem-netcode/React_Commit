import React from 'react'
import {Sparkles} from 'lucide-react'
import Blue_Green_Card from './Blue_Green_Card'   
const LeftContent = () => {
  return (
    <div className='w-[50%] h-full flex flex-col justify-between bg-blue-300'>
        <div className='px-12 py-6'>
        <h1 className='text-6xl font-bold mb-7 p-5 text-shadow-black leading-18'>E-com market is expected <br /> to exceed <span className='bg-[#CCFF00] rounded-full px-2'>$300B</span> by 2027</h1>
        <div className='flex items-center gap-5'>
        <Sparkles size={50} />
        <p className='text-xl text-shadow-black'>In India, MSME contribution to eTailing sales <br /> is expected to grow between 60-70% <br /> annually to reach USD50Bn by FY 2027</p>
        </div>
        <Blue_Green_Card />
        </div>
    </div>
    
       
  )
}

export default LeftContent