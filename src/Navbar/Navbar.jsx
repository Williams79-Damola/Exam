import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import gee from '../assets/Logo.png'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'


const Navbar =() => {
    const[mobile, setMobile]=useState(false)
    const handleMobile=()=>{
        setMobile(!mobile)
    }
    const handleClose=()=>{
        setMobile(false)
    }
    return(
        <div className='navdad'>
            <div className='nav'>
                <div className='nav1'><Link to='/'><img src={gee}/></Link></div>
                <div className={mobile ? 'mobile-link': 'nav-four'}>
                   <div className='nav2_1'>
                        <Link to='/blog'onClick={handleClose}>Blog</Link>
                        <Link to='/faq'onClick={handleClose}>FAQ</Link>
                        <Link to='/contact'onClick={handleClose}>Contact Us</Link>
                    </div>

                    <div className='nav2_2'>
                        <Link to='/register'onClick={handleClose}><button style={{width:'100px', height:'30px', backgroundColor:'#1178FF', color:'#FFFFFF'}}>Register</button></Link>
                        <Link to='/login'onClick={handleClose}><button style={{width:'100px', height:'30px', color:'#1178FF', backgroundColor:'#FFFFFF',border:'1px solid #1178FF'}}>Log In</button></Link>
                    </div>
                    </div>
                    <div className='Menu'>
                        {mobile? < FaTimes className='times'onClick={handleMobile}/>
                    :
                    <FaBars className='bars'onClick={handleMobile}/> 
                    }
                    </div>
                
            </div>
        </div>
    )
}

export default Navbar;