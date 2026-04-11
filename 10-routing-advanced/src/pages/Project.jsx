import React from 'react'
import { Link , Outlet} from 'react-router-dom'

export const Project = () => {
  return (
    <div>
       <div className='collection'>
         <Link  className='link' to='/project/mens'>Man</Link>
         <Link className='link' to='/project/Womens'>Women</Link>
       </div>
       <Outlet />
    </div>
  )
}



