import React, { useEffect } from 'react'
import image from '../Images/home.jpg';

import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Intro from '../Components/homeIntro'
import Passion from '../Components/Passion';
import Projects from '../Components/HomeProjects';
import PhotoGallery from '../Components/PhotoGallery';
import Help from '../Components/Help';
import Footer from '../Components/Footer';

export default function Home() {
    

    useEffect(()=>{
        AOS.init({duration :4000});
        
        
    },[]);
    
        
        return(

            <React.Fragment>
                <div className="con">
                    <img className="con-image" src={image} alt=""/>
                    <div className="hello"><h1 className="animate__animated animate__bounce animate__slower	2s animate__flipInX animate__infinite infinite">Hello!</h1>
                    <h3 className="animate__animated animate__bounceInLeft animate__delay-1s">I'm Yasith Jayanaka</h3>
                    <p className=" skills animate__animated animate__fadeInUp animate__delay-2s"><span id="first" className="animate__animated animate__bounceInUp">{'<'}</span>full stack web-developer , Photographer<span id="slash" className="animate__animated animate__bounceInUp animate__delay-3s">{'/'}</span><span id="second" className="animate__animated animate__bounceInUp">{'>'}</span></p>
                    </div>
                </div>
                
               
                
                <div className="container-fluid about">
                <div className="container">
                    <Intro/>
                </div>
                </div>
                
               
                    <div>
                        <Passion/>
                    </div>
                    
                    <div>
                        <Projects/>
                    </div>

                    <div>
                        <PhotoGallery/>
                    </div>
                    <div>
                        <Help/>
                    </div>
                    
                    <div>
                        <Footer/>
                    </div>
                    
                
            </React.Fragment>
        )
    
}