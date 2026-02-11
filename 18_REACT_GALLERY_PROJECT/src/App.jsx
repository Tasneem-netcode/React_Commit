import React from 'react'
import axios from 'axios'
import {useState , useEffect} from 'react'
import Images from './Components/Images'
import Button from './Components/Button'
const App = () => {
   const [img, setImg] = useState([])
   const [index, setIndex] = useState(1) //
  
  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=60`)
    setImg(response.data);

  }

  useEffect(() => {
    getData()
  }, [index])
  

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold' >Loading...</h3>;

  if(img.length > 0){
    printUserData = img.map((item) => {

      return <div key={item.id}>
        <Images item = {item}/>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white '>
      <h1 className='fixed text-6xl bg-amber-500'>{index}</h1>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

     <Button index={index} setIndex={setIndex} setImg={setImg} />
    </div>
  )
}

export default App