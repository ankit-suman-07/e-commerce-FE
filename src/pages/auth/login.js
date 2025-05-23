import React from 'react'
import "./auth.css";

import { useNavigate } from 'react-router-dom';

import Google from "../../assets/google.png";
import Apple from "../../assets/apple.png";
import Github from "../../assets/github.png";

const LogIn = () => {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate('/signup');
  };
  return (
    <div className='auth-page' >
        <div className='auth-box' >
            <div className='auth-title' >LOGIN</div>
            <div className='auth-form' >
                <div className='auth-form-detail' >
                    <input type="email" id='email' placeholder='Enter your email' />
                </div>
                <div className='auth-form-detail' >
                    <input type="password" id='password' placeholder='Enter your password' />
                    <button className='forgot-password' >Forgot Password</button>
                </div>
                <button className='auth-btn' >Login</button>
            </div>
            <div className='auth-footer' >
                <span className='new-existing' >New User? <button className='auth-page-change' onClick={goToSignUpPage} >Sign Up</button></span>
                <span className='auth-social-text' >Or SignIn with</span>
                <div className='auth-social' >
                    <button className='auth-social-btn' >
                      <img src={Apple} alt="Apple" />
                    </button>
                    <button className='auth-social-btn' >
                      <img src={Google} alt="Google" />
                    </button>
                    <button className='auth-social-btn' >
                      <img src={Github} alt="GitHub" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn