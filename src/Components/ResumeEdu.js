import React, { Component } from 'react'
import WOW from 'wowjs';


export default class ResumeEdu extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='row eduContent wow fadeInUp'>
                    <div className="col-md-4"><h3 className="wow fadeInLeft" data-wow-delay="0.3s">Education</h3></div>
                    <div className="col-md-8">
                        <ul>
                            <li className="wow fadeInRight" data-wow-delay="0.5s">
                                <h4>Bachelor Of Science</h4>
                                <h5>University Of Sri Jayewardanepura</h5>
                                <p>2018 – Present </p>
                                <p>Followed Computer Science, Mathematics and Physics for three years. </p>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="0.5s">
                                <h4>G.C.E  Advanced Level</h4>
                                <h5>Nalanda College Colombo 10</h5>
                                <p>2016</p>
                                <p>Combined Mathematics – C | Physics – B | Chemistry - C</p>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="0.5s">
                                <h4>Certificate in Computer Science</h4>
                                <h5>National Institute Of Business Management{"("}NIBM{")"}</h5>
                                <p></p>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay="0.5s">
                                <h4>Diploma in English</h4>
                                <h5>Esoft Metro Campus</h5>
                                <p>2017</p>
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