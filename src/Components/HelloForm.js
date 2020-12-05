import React, { Component } from 'react';
import { FaFacebook, FaInstagram ,FaLinkedin, FaEnvelope} from "react-icons/fa";
export default class HelloForm extends Component {
     render() {
         return (
             <React.Fragment>
                 <div className="social">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                            <div className="social-link">
                                <a className="social-icon" href="https://www.facebook.com/yasith.adrien/"><FaFacebook className="icon-img"/><p>Connect me with Facebook</p></a>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="social-link">
                            <a className="social-icon" href="https://www.instagram.com/yasith_jay/"><FaInstagram className="icon-img"/><p>Connect me with Instagram</p></a></div></div>
                            <div className="col-md-3">
                            <div className="social-link">
                            <a className="social-icon" href="https://www.linkedin.com/in/yasith-ketipearachchi-b48938200/"><FaLinkedin className="icon-img"/><p>Connect me with LinkedIn</p></a></div></div>
                            <div className="col-md-3">
                            <div className="social-link">
                            <a className="social-icon" href="mailto:yasith.mario15@gmail.com"><FaEnvelope className="icon-img"/><p>Connect me with Gmail</p></a></div></div>
                        </div>
                    </div>
                 </div>
             </React.Fragment>
         )
     }
}