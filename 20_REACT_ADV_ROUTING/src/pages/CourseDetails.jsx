import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const params = useParams();
    console.log(params);
  return (
    <div>
        <h1>{params.id}Course Details Page</h1>
        
    </div>
  )
}

export default CourseDetails