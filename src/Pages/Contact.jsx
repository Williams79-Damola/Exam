import React from 'react'
import '../Styles/Contact.css'
import {GoLocation} from 'react-icons/go'
import { FaFacebook } from 'react-icons/fa'
import {RiLinkedinFill} from 'react-icons/ri'
import {GrTwitter} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
import love from '../assets/Logo.png'
import tolu from '../assets/RT.png'

const Contact =() => {
    return(
        <div>
            <div className='Contact-top'>
                <div className='contact'>
                    <h3>Support</h3>
                    <h1>How can we help you?</h1>
                    <div className='Jah'>
                    <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                    </div>
                </div>
            </div>
            <div className='contact-text'>
                <div>
                    <div className='contact-us'>
                        <h1>Contact Us</h1>
                        <div className='Miss'>
                        <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                        </div>
                    </div>
                    <div className='location'>
                        <h4>Head Office</h4>
                        <div className='BMW'>
                        <p>17/18 Folabi Baker street <br/> Agungi, Lekki Lagos Nigeria <br/> Lagos Nigeria</p>
                        <p><a href='#'><GoLocation/>Get directions</a></p>
                        <p>+234 (0) 916 772 4945</p>
                        <p>bello@exams.africa.com</p>
                        </div>
                        <h4><RiLinkedinFill/> <GrTwitter/> <FiInstagram/> <FaFacebook/></h4>
                    </div>
                </div>
                <form className='contact-form'>
                    <div className='contact-label'>
                        <div className='contact-name'>
                            <div className='contact-name-1'>
                                <label><p>Name</p></label>
                                <input type="text" name="name" placeholder="Garba Garba"/>
                            </div>
                            <div className='contact-name-2'>
                                <label><p>Email Address</p></label>
                                <input type="email" name="email" placeholder="grababegd@gmail.com"/>
                            </div>
                        </div>

                        <div className='Rudra'>
                            <label><p>Subject</p></label>
                            <input type="text" name="subject" placeholder="Can't find a subject"/>
                        </div>

                        <div className='sisi'>
                            <label><p>How can we help?</p></label>
                            <textarea type="text" placeholder="I need to study for a hausa exam and i can't find the course"/>
                        </div>
                        <button className='contact-button'>Send Message <img src={tolu}/></button>
                    </div>
                    
                </form>
            </div>
            <div className='contact-bottom'>
                <div className='sub-bottom'>
                    <h3>Need specific help?</h3>
                    <div className='Touch'>
                    <p>Visit our frequently asked questions section here or make use our social media platforms to get in contact with us. Click on any of the social media icons to be redirected.</p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='david'>
                <div className='render'>
                    <h1>Main</h1>
                    <p>Home</p>
                </div>

                <div className='render'>
                <h1>Need Help</h1>
                    <p>Contact us</p>
                    <p>FAQ</p>
                </div>

                <div className='render'>
                    <h1>Features</h1>
                    <p>Past Questions</p>
                </div>

                <div className='render'>
                    <h1>Arcticle</h1>
                    <p>Blog</p>
                </div>
                </div>
                
                <div className='sub-david'>
                    <img src={love} alt={love} style={{width: 200, height:100}}></img>
                    <p>Welcome to our exam preparation website, where we help you achieve your academic goals by providing comprehensive study materials and resources. We understand that preparing for exams can be stressful and overwhelming. That's why we're here to guide you through the process and make it as smooth as possible.</p>
                </div>
                
                <div className='activate'>
                    <div className='linked'> <RiLinkedinFill/></div>
                    <div className='twitter'> <GrTwitter/></div>
                    <div className='insta'> <FiInstagram/></div>
                    <div className='face'> <FaFacebook/></div>
                </div>
                </div>

                <div className='dusted'>
                    <p>&copy; Copyright 2023 All Rights Reserved by Exams Africa</p>
                </div>
        </div>
    )
}

export default Contact;