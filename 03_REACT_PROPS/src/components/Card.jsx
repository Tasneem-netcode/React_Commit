import React from 'react'

function Card(props){
    return(
        console.log(props),
        console.log(props.user),
    <div className="card">

        <img src={props.img} alt="mind flare img" />
        <h1>{props.user}</h1>
        <p>Full Stack Developer</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card