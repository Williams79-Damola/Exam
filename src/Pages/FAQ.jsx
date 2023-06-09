import React, { useState } from 'react'
import '../Styles/FAQ.css'
import book from '../assets/Rectangle 70.png'
import love from '../assets/Logo.png'
import { FaFacebook } from 'react-icons/fa'
import {RiLinkedinFill} from 'react-icons/ri'
import {GrTwitter} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
import stroke from '../assets/Stroke-1.png'
import {IoIosArrowDown} from 'react-icons/io'
import bimbo from '../assets/bl.png'
const FAQ =() => {
    const [drop, setDrop] =useState(false)
    const dropDown=()=>{
        setDrop(!drop)
    }
    const [drop1, setDrop1] =useState(false)
    const dropDown1=()=>{
        setDrop1(!drop1)
    }

    const [drop2, setDrop2] =useState(false)
    const dropDown2=()=>{
        setDrop2(!drop2)
    }

    const [drop3, setDrop3] =useState(false)
    const dropDown3=()=>{
        setDrop3(!drop3)
    }

    const [drop4, setDrop4] =useState(false)
    const dropDown4=()=>{
        setDrop4(!drop4)
    }

    const [drop5, setDrop5] =useState(false)
    const dropDown5=()=>{
        setDrop5(!drop5)
    }

    const [drop6, setDrop6] =useState(false)
    const dropDown6=()=>{
        setDrop6(!drop6)
    }



    return(
        <div className='container 3'>
            <div className='FAQ'>
                <div className='sub-FAQ'>
                    <h2>FAQ</h2>
                    <h3>What do people usually ask?</h3>
                </div>
                <div className='peter'>
                <p>We Will Open The World of knowledge For You! This is the latest online examination system you will never need</p>
                </div>
            </div>

            <div className='faq-two-grand'>
                <div className='faq-two-parent'>
                    <div className='faq-two'>
                        <div className='faq-two-sub' onClick={dropDown}>
                            <div className='f-one'>
                                <p>What is Exams Africa</p><IoIosArrowDown/>
                            </div>
                            {drop && <div className='f-one-sub'>
                                <p>Exams Africa is a platform designed to help Africans prepare</p>
                                </div>}
                        </div>
                        
                        <div className='faq-two-sub' onClick={dropDown1}>
                            <div className='f-one'>
                                <p>Who can use Exam Africa?</p><IoIosArrowDown/>
                            </div>
                            {drop1 && <div className='f-one-sub'>
                                <p>Exams Africa is designed for anyone who is looking to practice for upcoming exams.</p>
                                </div>}
                        </div>
                    </div>

                    <div className='faq-two'>
                        <div className='faq-two-sub' onClick={dropDown2}>
                            <div className='f-ones'>
                                <p>What subjects are covered on Exams Africa?</p><IoIosArrowDown/>
                            </div>
                            {drop2 && <div className='f-one-sub'>
                                <p>Our platforms offers exam questions from a variety of subjects, including math, science and so on....</p>
                                </div>}
                        </div>
                        <div className='faq-two-sub' onClick={dropDown3}>
                            <div className='f-ones'>
                                <p>Is Exams Africa free to use?</p><IoIosArrowDown/>
                            </div>
                            {drop3 && <div className='f-one-sub'>
                                <p>Exams, Africa isn't free but comes with a reasonable subscription module.</p>
                                </div>}
                        </div>
                    </div>
                    <div className='faq-two'>
                    <div className='faq-two-sub' onClick={dropDown4}>
                        <div className='f-one1'>
                            <p>Can I track my progress on Exams Africa</p><IoIosArrowDown/>
                        </div>
                        {drop4 && <div className='f-one-sub'>
                            <p>Yes, our platform includes a tracking system that allows users to monitor their progress</p>
                            </div>}
                    </div>
                    <div className='faq-two-sub'onClick={dropDown5}>
                        <div className='f-one1'>
                            <p>Is Exams Africa available on mobile device</p><IoIosArrowDown/>
                        </div>
                        {drop5 && <div className='f-one-sub'>
                            <p>Yse, our platform is fully mobile-responsive and you can also download our mobile app</p>
                            </div>}
                    </div>
                </div>
                </div>
            </div>

            <div className='G-1'>
                <h1>Get Every Latest News Feed</h1>
                <div className='line-four'></div>
             </div>

             <div className='grand-dad'>
                <div className='boy'>
                    <div className='book'>
                        <div>
                        <img style={{width:550, height:300}}src={book}/>

                        <div className='text'>
                            <h2>Examination Preparation</h2>
                            <p>Start your revision early There is no substitute for starting early with revision. You need to give yourself enough time to review everthing that you have studied, and make sure that.....</p>
                            <button>View This Article<img src={bimbo}/></button>
                        </div>  
                        </div>

                        <div>
                        <img style={{width:550, height:300}}src={book}/>
                        <div className='text'>
                            <h2>Examination Preparation</h2>
                            <p>Start your revision early There is no substitute for starting early with revision. You need to give yourself enough time to review everthing that you have studied, and make sure that.....</p>
                            <button>View This Article<img src={bimbo}/></button>
                        </div>  
                        </div>
                    </div>
                </div>
             </div>

             <div className='foot'>
                <div className='footer-text'>
                <div className='help'>
                    <h1>Main</h1>
                    <p>Home</p>
                </div>

                <div className='help'>
                <h1>Need Help</h1>
                    <p>Contact us</p>
                    <p>FAQ</p>
                </div>

                <div className='help'>
                    <h1>Features</h1>
                    <p>Past Questions</p>
                </div>

                <div className='help'>
                    <h1>Arcticle</h1>
                    <p>Blog</p>
                </div>
                </div>
                
                <div className='logo-text'>
                    <img src={love} alt={love} style={{width: 200, height:100}}></img>
                    <p>Welcome to our exam preparation website, where we help you achieve your academic goals by providing comprehensive study materials and resources. We understand that preparing for exams can be stressful and overwhelming. That's why we're here to guide you through the process and make it as smooth as possible.</p>
                </div>
                
                <div className='socials'>
                    <div className='linked'> <RiLinkedinFill/></div>
                    <div className='twitter'> <GrTwitter/></div>
                    <div className='insta'> <FiInstagram/></div>
                    <div className='face'> <FaFacebook/></div>
                </div>
                </div>

                <div className='copyright'>
                    <p>&copy; Copyright 2023 All Rights Reserved by Exams Africa</p>
                </div>
        </div>
    )
}

export default FAQ;