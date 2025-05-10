import React from 'react'
import "./auth.css";

import Google from "../../assets/google.png";
import Apple from "../../assets/apple.png";
import Github from "../../assets/github.png";

const SignUp = () => {
  return (
    <div className='auth-page' >
        <div className='auth-box' >
            <div className='auth-title' >Sign Up</div>
            <div className='auth-form' >
                <div className='auth-form-detail' >
                    <input type="text" id='name' placeholder='Enter your name' />
                </div>
                <div className='auth-form-detail' >
                    <input type="number" id='number' placeholder='Enter your number' />
                </div>
                <div className='auth-form-detail' >
                    <input type="email" id='email' placeholder='Enter your email' />
                </div>
                <div className='auth-form-detail' >
                    <input type="password" id='password' placeholder='Enter your password' />
                </div>
                <div className='auth-form-detail' >
                    <input type="password" id='password' placeholder='Re-enter password' />
                </div>
                <button className='auth-btn' >SignUp</button>
            </div>
            <div className='auth-footer' >
                <span className='new-existing' >Existing User? <button className='auth-page-change' >Login</button></span>
                <span>Or SignIn with</span>
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
            <div className='auth-footer' >
                
            </div>
        </div>
    </div>
  )
}

export default SignUp