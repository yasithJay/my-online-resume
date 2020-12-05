import React, { Component } from 'react'
import cover from '../Images/contactCover.jpg';
import './contact.css';

import Hire from '../Components/Hire';
import HelloForm from '../Components/HelloForm';
import Footer from '../Components/Footer';
import Help from '../Components/Help';

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="contactCover">
                    <img className="contactCoverimg" src={cover} alt=""/>
                    <h1 className="contactCovertitle">Connect with me today.</h1>
                </div>
                <div>
                    <Hire/>
                </div>
                 
                <div>
                    <HelloForm/>
                </div>

                <div>
                    <Help/>
                </div>

                <div>
                    <Footer/>
                </div>
                

            </React.Fragment>
        )
    }
}