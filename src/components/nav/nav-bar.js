import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav-bar.css'

const NavBar = () => {
  return (
    <div className='nav' >
        <div className='logo' >
            e-comm.
        </div>
        <div className='links' >
            <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''} >Home</NavLink>
            <button className='login-btn' >Login</button>
        </div>
    </div>
  )
}

export default NavBar