import React from 'react'
import {useParams} from 'react-router-dom'

export const CourseDetails = () => {

  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>{params.id} CourseDetails</h1>
    </div>
  )
}
