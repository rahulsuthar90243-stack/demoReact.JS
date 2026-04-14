import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export const Github = () => {

    // const Data = useLoaderData();
    // console.log(Data);
    const [Data, setData] = useState([]);

    useEffect(()=>{
    fetch("https://api.github.com/users/rahulsuthar90243-stack")
    .then(Response => Response.json())
    .then(data => {
        setData(data);
    })
    },[])
    
  return (
    <div className='text-center bg-gray-500'>
        <h1 className='text-3xl text-white'>Guthub: {Data.followers}</h1>
    <div className='flex text-white p-5'>
    <img className='w-50' src={Data.avatar_url} alt="" />
    <div className='text-left ml-5 mt-5'>
    <h1>{Data.login}</h1>
    <p>{Data.bio}</p>
    <p>{Data.location}</p>
    </div>
    </div>
    </div>
  )
}


// export const githubInfoLoader = async ()=>{
//  const response = await fetch("https://api.github.com/users/rahulsuthar90243-stack");
//  return response.json();
// }