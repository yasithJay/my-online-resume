import React, { Component } from 'react';
import WOW from 'wowjs';

export default class AboutDone extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="done wow bounceInUp" data-wow-delay="0.4s">
                <div className="container">
                    <h1>What I've done & What I can do</h1>
                    <p>Feel free to take a deeper look at what I've accomplished over the years and what I'm able to do for you.</p>
                    <a className="wow fadeInUp" data-wow-delay="0.2s" href="/resume">VIEW MY RESUME</a>
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