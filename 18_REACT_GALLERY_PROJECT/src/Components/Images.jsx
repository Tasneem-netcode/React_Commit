import React from 'react'

const Images = (props) => {
  return (
    <div>
        <a href ={props.item.url} target='_blank'>
        <div>
        <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
        <img className='h-full w-full object-cover' src={props.item.download_url} alt="" />
      </div>
      <h2>{props.   item.author}</h2> 
      </div>
      </a>
    </div>
  )
}

export default Images