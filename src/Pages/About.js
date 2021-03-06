import React, { Component } from 'react';
import cover from '../Images/aboutCover.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import AboutFacts from '../Components/AboutFacts';
import Instafeed from '../Components/Instafeed';
import AboutDone from '../Components/AboutDone';
import Footer from '../Components/Footer';

import WOW from 'wowjs';


export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="cover">
                <img className="coverImage" src={cover} alt=""/>
                    <h1 className="cover-title wow fadeInLeft" data-wow-delay="0.4s">My Passions and Personality</h1>
                </div>

                <div>
                    <AboutFacts/>
                </div>

                <div>
                    <Instafeed/>
                </div>

                <div>
                    <AboutDone/>
                </div>

                <div>
                    <Footer/>
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