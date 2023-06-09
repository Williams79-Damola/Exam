import '../Styles/Login.css'
import {Link} from 'react-router-dom'
import bro from '../assets/Register.png'
import mama from '../assets/Left side.png'
import mum from '../assets/Right Side.png'
import {AiOutlineEye} from 'react-icons/ai'



const Login =() => {
    return(
        <div>
            <div className="login-top">
              <Link to='/'><div className="login-image"><img src={bro} alt={bro}/></div></Link>
              <div><p style={{color:'#00070F', fontFamily: 'Mulish', fontWeight: 600, fontSize:'14px'}}>Don't have an account? Signup <Link to='/register' style={{color:'#1178FF', fontSize: '14px', marginRight: '30px'}}>here</Link></p></div> 
            </div>

            <div className='login-parent'>
            <div className='login'>
                <div className='login-one'>
                    <h1>Login To Continue</h1>
                </div>
                <div className='login-two'>
                    
                    <div className='login-sub-one'>
                        <label>Username/Phone No</label>
                        <input type="text" />
                        <label>Password</label>
                        <input type="password" className="pi" />
                        <span className='raffle'><AiOutlineEye/></span>
                        <button type="login" style={{color:'#ffffff', background: '#1178FF', height: '50px', width: '80'}}>Login Now</button>
                    </div>
                </div>
            </div>
        </div>
            <div className='login-sub-two'>
            <img src={mama} alt="" /><img src={mum} alt="" />
            </div>
        </div>  
    )
}

















            
export default Login;