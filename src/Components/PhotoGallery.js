import React, { Component } from 'react';
import image1 from  '../Images/Image1.jpg'
import image2 from '../Images/Image2.jpg';
import image3 from '../Images/Image3.jpg';
import image4 from '../Images/Image4.jpg';
import image5 from '../Images/Image5.jpg';
import image6 from '../Images/Image6.jpg';
import image7 from '../Images/Image7.jpg';
import image8 from '../Images/Image8.jpg';
import WOW from 'wowjs';

export default class PhotoGallery extends Component {

 
    render() {
        return (
            <React.Fragment>
                <div className='galleryContainer'>
                    <div className="container">
                    <div className='gallery-title'>
                        <h1>My life as a Undergraduate Developer and a Photographer</h1>
                    </div>
                        <div className="row">
                        
                            <div className="gallery-image col-md-3 col-sm-6 col-xs-6">
                                <img src={image1} alt=""/>
                            </div>
                            <div className="gallery-image col-md-3 col-sm-6 col-xs-6"><img src={image4} alt=""/></div>
                            <div className="gallery-image col-md-3 col-sm-6 col-xs-6"><img src={image2} alt=""/></div>
                            <div className="gallery-image col-md-3 col-sm-6 col-xs-6"><img src={image6} alt=""/></div>
                            <div className="gallery-image col-md-3 col-sm-6 col-xs-6"><img src={image5} alt=""/></div>
                            <div className="gallery-image col-md-3 col-sm-6 col-xs-6"><img src={image3} alt=""/></div>
                            <div className="gallery-image col-md-3 col-sm-6 col-xs-6"><img src={image7} alt=""/></div>
                            <div className="gallery-image col-md-3 col-sm-6 col-xs-6"><img src={image8} alt=""/></div>
                           
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