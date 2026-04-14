import React, { useId } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

  const params = useParams();
  return (
    <div className='bg-gray-500  text-2xl text-center py-5 text-white'>User: {params.id}</div>
  )
}

export default User;