import React, { useState } from 'react'
import bro from '../assets/Register.png'
import '../Styles/Register.css'
import mum from '../assets/Left side.png'
import mama from '../assets/Right Side.png'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'

const Register =() => {
    return(
        <div>
            <div className="login-top">
              <Link to='/'><div className="login-image"><img src={bro} alt={bro}/></div></Link>
              <div><p style={{color: '#00070F', fontSize:16}} >Already have an account? Signup <Link to='/logIn' style={{color:'#1178FF', fontSize: 14}}>Login here</Link></p></div> 
            </div>

        <div className='sign-parent'>
            <div className='sign'>
                <div className='sign-one'>
                    <h1>Create An Account</h1>
                </div>
                <div className='sign-two'>
                    
                    <div className='sign-sub-one'>
                        <div className='name'>
                            <div className='log-one'>
                                <label>First Name</label>
                                <input type='text' />
                            </div>
                            <div className='log-one'>
                                <label>Last Name</label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='log-one'>
                            <label>Username</label>
                            <input type='text' />
                        </div>
                        <div className='log-one'>
                            <label>Email Address</label>
                            <input type='email' />
                        </div>
                        <div className='log-one'>
                            <label>Mobile Number</label>
                                <div className="number">
                                <select>
                                    <option>+234</option>
                                </select>
                                <input type='phone number'  />
                                </div>
                        </div>

                        <div className='password'>
                            <div className='log-one'>
                                <label>Password</label>
                                <input type='password' className="pa" />
                                <span className="Yes"><AiOutlineEye/></span>
                            </div>
                            <div className='log-one'>
                                <label>Confirm Password</label>
                                <input type='password' className="con"  />
                                <span className='lagos'><AiOutlineEye/></span>
                            </div>
                        </div>
                        <button type="submit" style={{color: '#ffffff', fontFamily: 'Mulish', fontWeight: 800, fontSize: '16px',  Lineheight: '20.08px', background:'#1178FF', border: 'none'}}>Register Now</button>
                    </div>

                    <div className='sign-sub-two'>
                    <img src={mum} alt="" /><img src={mama} alt="" />
                    </div>
                </div>
            </div> 
        </div>
        </div>
    )
}

export default Register;