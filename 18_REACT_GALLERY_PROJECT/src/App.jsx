import React from 'react'
import axios from 'axios'
import {useState , useEffect} from 'react'
const App = () => {
   const [img, setImg] = useState([])
  
  const getData = async()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=60')
    setImg(response.data);

  }

  useEffect(() => {
    getData()
    
  }, [])
  

  let printUserData = 'No user available';

  if(img.length > 0){
    printUserData = img.map((item) => {

      return <a href={item.url} target='_blank'>
        <div>
        <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
        <img className='h-full w-full object-cover' src={item.download_url} alt="" />
      </div>
      <h2>{item.author}</h2>
      </div>
      </a>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white '>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
    </div>
  )
}

export default App