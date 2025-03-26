import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.avif'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
                <h2>Plumbing</h2>
            </div>

            <ul className='lines'>
                <NavLink className='ul-lines' to="/"><li>HOME</li></NavLink>
                <NavLink className='ul-lines' to="/about"><li>ABOUT</li></NavLink>
                <NavLink className='ul-lines' to="/contact"><li>CONTACT</li></NavLink>
            </ul>



        </nav>
    )
}

export default Navbar
