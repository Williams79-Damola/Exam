import React from 'react'
import demmy from'../assets/profile 1.webp'
import damola from '../assets/profile 2.webp'
import eniola from '../assets/profile 3.svg'
import ade from '../assets/profile 4.webp'
import bolade from '../assets/profile 5.webp'
import williams from '../assets/profile 6.webp'
import bolaji from '../assets/video.mp4'
import kenny from '../assets/Group 1245.png'
import {RxDashboard} from 'react-icons/rx'
import {TbNotebook} from 'react-icons/tb'
import {TbActivityHeartbeat} from 'react-icons/tb'
import {BiDollarCircle} from 'react-icons/bi'
import {TfiWorld} from 'react-icons/tfi'
import {BsApple} from 'react-icons/bs'
import {BsPlaystation} from 'react-icons/bs'
import {SiTelegram} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'
import love from '../assets/Logo.png'
import okay from '../assets/RR.png'
import '../Styles/Home.css'
import { FaFacebook } from 'react-icons/fa'
import {RiLinkedinFill} from 'react-icons/ri'
import {GrTwitter} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'

const Home =() => {
    return(
        <div className='container'>
            <div className='B-1'>
                <div className='sub-B1'>
                    <div className='B-2'>
                        <h1>Practice</h1>
                        <img src={demmy}/>
                    </div>
                    <div className='sub-B2'>
                        <img src={damola}/>
                        <h1>Prepare</h1>
                    </div>
                    <div className='B-3'>
                        <div className='sub-B3'>
                            <h1>Excel</h1>
                        </div>
                        <div>
                            <div className='B-4'>
                            <button>JAMB-<br/> UTME</button>
                            <button>WAEC-<br/> SSCE</button>
                            <button>WAEC-<br/> GCE</button> 
                            </div>
                            <div className='sub-B4'>
                            <button>COMMON ENTRANCE <br/> Exam</button>
                            <button>NECO</button>
                            </div> 
                        </div>
                    </div>
                    <div className='B-5'>
                        <p>Welcome to the Exams.Africa, we will open the world of knowlegde for you! This is the latest online examination system you will ever need to attain success.</p>
                    </div>
                    <div className='sub-B5'>
                        <button className='one'>Get Started</button>
                        <button className='two'>Start Practising</button>
                    </div>
                </div>
                <div className='G'>
                    <img src={eniola}/>
                </div>

            </div>
            <div className='B-6'>
                <div className='sub-B6'>
                <div className='pass'>
                    <h1><RxDashboard/> Past Questions</h1>
                    <p>Thousands of Past Questions</p>
                </div>
                <div className='Exams'>
                    <h1><TbNotebook/> Mock Exams</h1>
                    <p>Mock examination Feature</p> 
                </div>
                <div className='Track'>
                    <h1><TbActivityHeartbeat/> Track activity</h1>
                    <p>Dashboard to track all activities</p>  
                </div>
                <div className='Afford'>
                    <h1><BiDollarCircle/> Affordable</h1>
                    <p>Low cost on in-app purchases</p>
                </div>
                </div>
            </div>
            <div className='B-7'>
                <h1>Why ExaLab Is Best?</h1>
             </div>

            <div className='Parent'>
                <img src={ade}/>
            <div className='Category'>
                <h1>Choose Your Category</h1>
                <p>Choose the exam category based on your subject. This helps you differentiate between subjects that are essential for studying a particular course and subjects.</p>
                <div className='line-one'></div>
            </div>   
            </div>

            <div className='Parent2'>
            <div className='Preferable'>
                <h1>Select Preferable Subject</h1>
                <p>The aim of this to help you see things more clearly and get a good impression of the possible options, whether you have your heart set on a particular career path or not.</p>
                <div className='line-two'></div>
            </div>
                <img src={bolade}/>
            </div>

            <div className='Parent3'>
                <img src={williams}/>
            <div className='Practise'>
                <h1>Attend Examination</h1>
                <p>Through our activities and technology, we are able to provide reliable data across several African products.</p>
                <div className='line-three'></div>
            </div>   
            </div>

            <div className='Parent4'>
            <div className='Select'>
                <h1>Select Preferable Subject</h1>
                <p>The aim of this to help you see things more clearly and get a good impression of the possible options whether you have your heart set on a particular career path or not.</p>
            </div>
                <img src={kenny}/>
            </div>
            
            <div className='B-8'>
                <div className='fish'>
                    <h2>Available on These platforms</h2>
                </div>

                <div className='sub-B8'>
                <div className='web'>
                    <TfiWorld/> 
                    <div className='text-icons'>
                    <h1>Web</h1>
                    <a href='#'>Get Started</a>
                    </div>
                </div>
                <div className='App'>
                    <BsApple/>
                    <div className='text-icons'>
                    <h1>App Store</h1>
                    <a href="#">Download Now</a>
                    </div>
                </div>

                <div className='Play'>
                    <BsPlaystation/>
                    <div className='text-icons'>
                    <h1>Play store</h1>
                    <a href="#">Download Now</a>
                    </div>
                </div>

                <div className='Telegram'>
                    <SiTelegram/>
                    <div className='text-icons'>
                    <h1>Telegram</h1>
                    <a href="#">Coming Soon</a>
                    </div>
                </div>

                <div className='Whatsapp'>
                    <ImWhatsapp/>
                    <div className='text-icons'>
                    <h1>Whatsapp</h1>
                    <a href="#">Coming Soon</a>
                    </div>
                </div>
                </div> 
                </div>
                <div className='H'>
                    <h1>Most Popular Subjects</h1>
                    <p>All your past questions all in one place. This is your one stop hub for through and precise <br/> exams preparations</p>
                </div>

                <div className='line-1'>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                            
                        </div>
                

                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        
                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>

                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>
                    </div>

                    

                    <div className='line-1'>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>
                

                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>

                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>

                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>
                    </div>

                    <div className='line-1'>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>
                

                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>

                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <div className='Dog'>
                            <p style={{color: '#0172DA'}}>Past Questions <img src={okay}/></p>
                            </div>
                        </div>
                    </div>

                <div className='B-9'>
                    <h3>Use the Exams Africa</h3>
                    <h3>Platform the right way</h3>
                    <p>Learn the essential ways to successfully maximize the Platform for a exam success</p>
                </div>

                <div className='B-10'>
                    <video className='sub-B-10' controls autoPlay>
                        
                    <source src={bolaji} type= "video/mp4" />
                    </video>
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

export default Home;