import React, { Component } from 'react';
import help from '../Images/help.jpg';
import WOW from 'wowjs';

export default class Help extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="help wow fadeInUp" data-wow-delay="0.4s">
                    <img className='helpImage' src={help} alt=""/>
                    <div className='ask ' >
                        <h1 className="wow backInUp" data-wow-delay="0.6s">Need Help To Begin Your Programming Journey?</h1>
                        <br/>
                        <a className='helpBtn' href="/contact">I'M HERE TO HELP!</a>
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