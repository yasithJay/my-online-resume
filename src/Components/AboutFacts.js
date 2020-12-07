import React, { Component } from 'react';
import factImage from "../Images/aboutFacts.jpg";
import WOW from 'wowjs';

export default class AboutFacts extends Component {
    render() {
        const fact = {
            maxWidth : "100%",
            padding : "10px"
        }
        return (
            <React.Fragment>
                <div className="facts-container wow fadeInUp" data-wow-delay="0.4s">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.5s">
                                <img style={fact} src={factImage} alt=""/>
                            </div>
                            <div className="col-lg-6 facts wow fadeInRight" data-wow-delay="0.5s">
                                <h2>Some facts about me.</h2>
                                <p>I am a flexible and experienced Web developer with excellent time management skills.I am always enthusiastic to learn and undertake new challenges.I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite. I am a good communicator with proven inter personal skills and I am used to working in a team whilst also being capable of using own initiative.
                                </p>
                            </div>
                        </div>
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