import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <div className="nav">
        <h2>Soft Tech</h2>
        <div>
          <Link className='navLink' to='/'>Home</Link>
          <Link className='navLink' to='/about'>About</Link>
          <Link className='navLink' to='/course'>Course</Link>
          <Link className='navLink' to='/contact'>Contact</Link>
          <Link className='navLink' to='/project'>Project</Link>

        </div>
      </div>
    </div>
  )
}


export default Navbar