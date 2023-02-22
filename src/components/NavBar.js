import React from 'react'
import '../css/NavCss.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <nav className="text-white ">
            <ul className="text d-flex bg-success nav-list">
                <li className="text">
                    <Link className="text  mx-4 py-2 nav-link " to='/'>Home</Link>
                </li>
                <li className="text">
                    <Link className="text  mx-4 py-2 nav-link " to='/dashboard'>Dashboard</Link>
                </li>
                <li className="text">
                <Link className="text  mx-4 py-2 nav-link " to='/contacts'>Contact</Link>
                </li>
                <li className="text">
                <Link className="text  mx-4 py-2 nav-link " to='/faq'>Faq</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar