import React, { Component } from 'react'
import WOW from 'wowjs';

export default class Hire extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hireItems wow bounceInUp"  data-wow-delay="0.4s">
                    <div className="container">
                        <div className="item">
                            <div className='row'>
                                <div className="col-md-6 item-div ">
                                <div className="item-inner wow fadeInLeft" data-wow-delay="0.6s">
                                    <h3>Hire me as a full Stack developer</h3>
                                    <p>Are you looking for a full stack web developer? Send an inquiry.</p>
                                    <a className="inquiryBtn" href="mailto:yasithketipearachchi97@gmail.com">SEND INQUIRY</a>
                                    </div>
                                </div>
                                <div className="col-md-6 item-div">
                                <div className="item-inner wow fadeInRight" data-wow-delay="0.6s">
                                <h3>Hire me as a Photographer</h3>
                                <p>Are you looking for a professional Photographer? Send an inquiry.</p>
                                <a className="inquiryBtn" href="mailto:yasithketipearachchi97@gmail.com">SEND INQUIRY</a>
                                </div>
                                </div>
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