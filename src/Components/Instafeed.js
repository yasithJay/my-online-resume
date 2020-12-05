import React, { Component } from 'react';
import '../Pages/about.css';

import img1 from '../Images/gallery1.jpg';
import img2 from '../Images/gallery2.jpg';
import img3 from '../Images/gallery3.jpg';
import img4 from '../Images/gallery4.jpg';
import img5 from '../Images/gallery5.jpg';
import img6 from '../Images/gallery6.jpg';
import img7 from '../Images/gallery7.jpg';
import img8 from '../Images/gallery8.jpg';

export default class Instafeed extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="galleryContainer">
                    <div className="container">
                    <div>
                        <h1 className="gallery_title">My Instagram and Facebook Feed</h1>
                    </div>
                        <div className="row">
                            <div className="col-md-3 galleryimg" ><img src={img1} alt=""/></div>
                            <div className="col-md-3 galleryimg"><img src={img2} alt=""/></div>
                            <div className="col-md-3 galleryimg"><img src={img3} alt=""/></div>
                            <div className="col-md-3 galleryimg"><img src={img4} alt=""/></div>
                            <div className="col-md-3 galleryimg"><img src={img5} alt=""/></div>
                            <div className="col-md-3 galleryimg"><img src={img6} alt=""/></div>
                            <div className="col-md-3 galleryimg"><img src={img7} alt=""/></div>
                            <div className="col-md-3 galleryimg"><img src={img8} alt=""/></div>

                        </div>
                        <div className="buttons">
                        <div className="row">
                        <a className="account-links" href="https://www.instagram.com/yasith_jay/">Follow me on Instagram</a>
                        <br/>
                        </div>
                        <div className="row">
                        <a className="account-links" href="https://www.facebook.com/yasith.adrien/">Find me on Facebook</a>
                        </div>
                        </div>
                    </div>
                
                </div>
            </React.Fragment>
        )
    }
}