import React, { useEffect } from 'react'
import image from '../Images/home.jpg';
import banner from '../Images/profile.jpg';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WOW from 'wowjs';
import Intro from '../Components/homeIntro'




export default function Home() {
    

    useEffect(()=>{
        AOS.init({duration :4000});
        
        
    },[]);
    
        const propic = {
            maxWidth : "100%",
            padding : "10px"
        }
        return(

            <React.Fragment>
                <div className="con">
                    <img className="container-fluid" src={image} alt=""/>
                    <div className="hello"><h1 className="animate__animated animate__bounce animate__slower	2s animate__flipInX animate__infinite infinite">Hello!</h1>
                    <h3 className="animate__animated animate__bounceInLeft animate__delay-1s">I'm Yasith Jayanaka</h3>
                    <p className="animate__animated animate__fadeInUp animate__delay-2s"><span id="first" className="animate__animated animate__bounceInUp">{'<'}</span>full stack web-developer , Photographer<span id="slash" className="animate__animated animate__bounceInUp animate__delay-3s">{'/'}</span><span id="second" className="animate__animated animate__bounceInUp">{'>'}</span></p>
                    </div>
                </div>
                
               
                
                <div className="container-fluid about">
                <div className="container">
                    <Intro/>
                </div>
                </div>
                
                <div className="con2">
                    <div className="con2-content container">
                        <h1>Understanding My Passion</h1>
                        <br/>
                        <p>I am a hardworking and ambitious
                        individual with a great passion towards IT
                        industry. I have strong technical skills as
                        well as excellent inter personal skills which
                        enabling me to interact with a wide range
                        of people. I am eager to be challenged in
                        order to grow and further improve my IT
                        skills. I am seeing a position in the industry
                        in which I can put into practice my
                        knowledge and experience, ultimately
                        benefiting the operations of the
                        organization that I work for. I am
                        interested in the fields of Web application
                        development, front-end development,
                        back-end development and Software
                        quality assurance.</p>
                        <div className='buttonContainer'>
                        <a href='/about'><button className='linkBtn'>
                           Learn More About Me</button></a>
                            
                        </div>
                    </div>
                    
                </div>
                
            </React.Fragment>
        )
    
}