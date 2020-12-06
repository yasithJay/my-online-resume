import React, { Component } from 'react';
import '../Pages/home.css';
import WOW from 'wowjs';
import { FaFacebook, FaInstagram ,FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import HomeBtn from './HomeBtn';
import AboutBtn from './ToAboutBtn';
import ContactBtn from './ContactBtn';
import ViewResume from './ViewResumeBtn';

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='footer wow bounceInUp' data-wow-delay="0.5s">
                    <div className='container'>
                        <h2>Let me build your Website you need.</h2>
                        <br/><br/>
                      

                        <div className='row'>
                            <div className='col-md-3 col-sm-3 footer-nav'>
                            
                            <HomeBtn  className="footer-btn" value="Home"/>
                            
                            </div>
                            <div className='col-md-3 col-sm-3 footer-nav'>
                                <AboutBtn className="footer-btn" value="About"/>
                            </div>
                            <div className='col-md-3 col-sm-3 footer-nav'>
                                <ContactBtn className="footer-btn" value="Contact"/>
                            </div>
                            <div className='col-md-3 col-sm-3 footer-nav'>
                                <ViewResume className="footer-btn" value="Resume"/>
                            </div>

                        </div>
                        

                        <hr className="horizontal"/>
                        <br/>

                        <p className="rights">© 2020 Yasith Ketipearachchi.All rights reserved. Web developer and Founder of <span><a className="photographyLink" href="https://www.facebook.com/YjayPhotography">YJay Photography</a></span> </p>
                    </div>
                    <div className='accountsContainer'>
                        <span><a className="AccountLink" href="https://www.facebook.com/yasith.adrien/"><FaFacebook className='accounts'/></a></span>
                        <span><a className="AccountLink" href="https://www.instagram.com/yasith_jay/"><FaInstagram className='accounts'/></a></span>
                        <span><a className="AccountLink" href="https://www.linkedin.com/in/yasith-ketipearachchi-b48938200/"><FaLinkedin className='accounts'/></a></span>
                        <span><a className="AccountLink" href="https://github.com/yasithJay"><FaGithub className='accounts'/></a></span>
                        <span><a className="AccountLink" href="mailto:yasith.mario15@gmail.com"><FaEnvelope className='accounts'/></a></span>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {  
        new WOW.WOW({
            live: false
        }).init();  
     }  
}