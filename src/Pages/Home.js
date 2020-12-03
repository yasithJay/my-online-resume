import React, { useEffect } from 'react'
import image from '../Images/home1.jpg';
import banner from '../Images/propic.jpg';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
                <br/>
                <br/>
                <br/>
                <div className="container-fluid about">
                <div className="container">
                    <div className="row">
                        <div id="propic" className="col-sm-6">
                            <img src={banner} alt="" style={propic} data-aos="fade-up"/>
                        </div>
                        <div className="col-sm-6" >
                            <h3 data-aos="ease-in">My Passion and focus is Full stack Web Development.</h3>
                            <p>You need a website that looks amazing and actually works fine. Bottom line, That's what I do. And if you want to learn more about working with me contact me without further due.</p>
                        </div>
                    </div>
                </div>
                </div>

                
            </React.Fragment>
        )
    
}