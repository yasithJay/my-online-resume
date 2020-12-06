import React, { Component } from 'react';
import WOW from 'wowjs';


export default class ResumeActivities extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='row activityContent wow fadeInUp' data-wow-delay="0.3s">
                    <div className="col-md-4">
                        <h3 className="wow fadeInLeft" data-wow-delay="0.3s">Extra Curricular Activities</h3>
                    </div>
                    <div className="col-md-8">
                        <ul>
                            <li className="wow fadeInRight" data-wow-delay="0.5s"> 
                                <h4>Board Member</h4>
                                <h5>Society Of Computer Science</h5>
                                <p>University Of Sri Jayewardenepura</p>
                                <p>2019 - 2020</p>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="0.5s"> 
                                <h4>Committee Member</h4>
                                <h5>Aurora 2K18</h5>
                                <p>Technical Committee | Technology Committee | Designing Committee </p>
                                <p>Society of Computer Science </p>
                                <p>University Of Sri Jayewardenepura</p>
                                <p>2018</p>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="0.5s"> 
                                <h4>YJay Photography</h4>
                                <h5>Founder</h5>
                                <p>2019 - Present </p>
                                
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="0.5s"> 
                                <h4>Assistant Treasurer</h4>
                                <h5>Nalanda Photographic Art Society</h5>
                                <p>Nalanda College Colombo 10 </p>
                                <p>2014 - 2015</p>
                            </li>
                        </ul>
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