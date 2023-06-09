import React from 'react'
import book from '../assets/Rectangle 70.png'
import enemy from '../assets/Logo.png'
import { FaFacebook } from 'react-icons/fa'
import {RiLinkedinFill} from 'react-icons/ri'
import {GrTwitter} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
import gamer from '../assets/bl.png'
import '../Styles/Blog.css'

const Blog =() => {
    return(
        <div className='container 2'>
            <div className='Blog'>
            <div className='Blog-1'>
                <h2>Blog</h2>
                <h3>Get the latest Updates </h3>
                </div>
                <div className='pman'>
                <p>We Will Open The World of knowledge For You! This is the latest online examination system you will ever need!</p>
                </div>
                    
        </div>
        <div className='grand-dad'>
                <div className='girl'>
                    <div className='study'>
                        <div>
                        <img style={{width:550, height:300}}src={book}/>

                        <div className='outside'>
                            <h2>Examination Preparation</h2>
                            <p>Start your revision early There is no substitute for starting early with revision. You need to give yourself enough time to review everthing that you have studied, and make sure that.....</p>
                            <button>View This Article<img src={gamer}/></button>
                        </div>  
                        </div>
                        
                        <div>
                        <img style={{width:550, height:300}}src={book}/>
                        <div className='outside'>
                            <h2>Examination Preparation</h2>
                            <p>Start your revision early There is no substitute for starting early with revision. You need to give yourself enough time to review everthing that you have studied, and make sure that.....</p>
                            <button>View This Article<img src={gamer}/></button>
                        </div>  
                        </div>
                    </div>
                </div>
             </div>

             <div className='grand-dad'>
                <div className='girl'>
                    <div className='study'>
                        <div>
                        <img style={{width:550, height:300}}src={book}/>

                        <div className='outside'> 
                            <h2>Examination Preparation</h2> 
                            
                            <p>Start your revision early There is no substitute for starting early with revision. You need to give yourself enough time to review everthing that you have studied, and make sure that.....</p>
                            <button>View This Article<img src={gamer}/></button>
                        </div>  
                        </div>
                        
                        <div>
                        <img style={{width:550, height:300}}src={book}/>
                        <div className='outside'>
                            <h2>Examination Preparation</h2>
                            <p>Start your revision early There is no substitute for starting early with revision. You need to give yourself enough time to review everthing that you have studied, and make sure that.....</p>
                            <button>View This Article<img src={gamer}/></button>
                        </div>  
                        </div>
                    </div>
                </div>
             </div>

             <div className='grand-dad'>
                <div className='girl'>
                    <div className='study'>
                        <div>
                        <img style={{width:550, height:300}}src={book}/>

                        <div className='outside'>
                            <h2>Examination Preparation</h2>
                            <p>Start your revision early There is no substitute for starting early with revision. You need to give yourself enough time to review everthing that you have studied, and make sure that.....</p>
                            <button>View This Article<img src={gamer}/></button>
                        </div>  
                        </div>
                        
                        <div>
                        <img style={{width:550, height:300}}src={book}/>
                        <div className='outside'> 
                            <h2>Examination Preparation</h2>
                            <p>Start your revision early There is no substitute for starting early with revision. You need to give yourself enough time to review everthing that you have studied, and make sure that.....</p>
                            <button>View This Article<img src={gamer}/></button>
                        </div>  
                        </div>
                    </div>
                </div>
             </div>
             
             <div className='R10'>
                <div className='sub-R10'>
                <div className='wolf'>
                    <h1>Main</h1>
                    <p>Home</p>
                </div>

                <div className='wolf'>
                <h1>Need Help</h1>
                    <p>Contact us</p>
                    <p>FAQ</p>
                </div>

                <div className='wolf'>
                    <h1>Features</h1>
                    <p>Past Questions</p>
                </div>

                <div className='wolf'>
                    <h1>Arcticle</h1>
                    <p>Blog</p>
                </div>
                </div>
                
                <div className='cat'>
                    <img src={enemy} alt={enemy} style={{width: 200, height:100}}></img>
                    <p>Welcome to our exam preparation website, where we help you achieve your academic goals by providing comprehensive study materials and resources. We understand that preparing for exams can be stressful and overwhelming. That's why we're here to guide you through the process and make it as smooth as possible.</p>
                </div>
                
                <div className='life'>
                    <div className='linked'> <RiLinkedinFill/></div>
                    <div className='twitter'> <GrTwitter/></div>
                    <div className='insta'> <FiInstagram/></div>
                    <div className='face'> <FaFacebook/></div>
                </div>
                </div>

                <div className='finally'>
                    <p>&copy; Copyright 2023 All Rights Reserved by Exams Africa</p>
                </div>
        </div>
    )
}

export default Blog;