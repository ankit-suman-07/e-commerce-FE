import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './nav-bar.css'

const NavBar = () => {
  const navigate = useNavigate();

  const goToCartPage = () => {
    navigate('/cart');
  };

  const goToLoginPage = () => {
    navigate('/login');
  };
  return (
    <div className='nav' >
        <div className='logo' >
            e-comm.
        </div>
        <div className='links' >
            <NavLink to='/' className={({isActive}) => isActive ? 'active' : 'not-active'} >Home</NavLink>
            <button className='login-btn' onClick={goToLoginPage} >Login</button>
            <div className='cart' onClick={goToCartPage} >
              <img src='https://cdn-icons-png.flaticon.com/512/1170/1170678.png' alt='cart' className='cart-icon' />
              <span className='cart-count' >0</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar