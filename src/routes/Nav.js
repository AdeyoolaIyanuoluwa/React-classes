import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => {
    const state = useSelector((state) => state.profile)
  return (
    <div>
       <nav>
            <ul className='d-flex bg-success text-white'>
                <li className='text'>
                    <Link className="text  mx-4 py-2 nav-link " to="/">Home</Link>
                </li>
                <li className='text'>
                    <Link className="text  mx-4 py-2 nav-link " to="/login">Login</Link>
                </li>
                <li className='text'>
                    <Link className="text  mx-4 py-2 nav-link " to="/about">About</Link>
                </li>
                <li className='text'>
                    <button className='btn btn-danger'><Link className="text  mx-4 py-2 nav-link " to="/pro">Profile Here</Link></button>
                </li>
                <span className='mx-4 py-2 '>{state.firstname}</span>
            </ul>
       </nav>

    </div>
  )
}

export default Nav