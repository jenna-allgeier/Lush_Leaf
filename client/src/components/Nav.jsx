import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar">
      <div>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/all-plants">Plants</Link>
      </div>
    </nav>
  )
}

export default Nav