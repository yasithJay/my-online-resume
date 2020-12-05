import React, { Component } from 'react';
import '../Pages/home.css';
import WOW from 'wowjs';
import { FaFacebook, FaInstagram ,FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='footer wow bounceInUp' data-wow-delay="0.5s">
                    <div className='container'>
                        <h2>Let me build your Website you need.</h2>
                        <br/><br/>
                      

                        <div className='row'>
                            <div className='col-md-3 col-sm-3 footer-nav'><a href="/home" style={{textDecoration:'none'}}>Home</a></div>
                            <div className='col-md-3 col-sm-3 footer-nav'><a href="/about"  style={{textDecoration:'none'}}>About</a></div>
                            <div className='col-md-3 col-sm-3 footer-nav'><a href="/contact"  style={{textDecoration:'none'}}>Contact</a></div>
                            <div className='col-md-3 col-sm-3 footer-nav'><a href="/resume"  style={{textDecoration:'none'}}>Resume</a></div>

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