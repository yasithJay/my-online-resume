import React, { Component } from 'react';
import ContactBtn from './ContactBtn';
import WOW from 'wowjs';
import Contact from '../Pages/Contact';
 
export default class ResumeHire extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='hireMsgContent wow bounceInUp'>
                    <h1 className="wow fadeInUp" data-wow-delay="0.5s">Hire a Full Stack devleoper today.</h1>
                    <p className="wow fadeInUp" data-wow-delay="0.5s">Now that you know what I've done and what I could do for you, feel free to reach out and start a conversation.</p>
                    <ContactBtn className="hireMsgBtn wow flipInY" value="Contact Me"/>
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