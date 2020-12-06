import React, { Component } from 'react'
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactBtn from './ContactBtn';
import banner from '../Images/profile.jpg';


export default class Intro extends Component {
    
     render() {  
        const propic = {
            maxWidth : "100%",
            padding : "10px"
        }
        return (  
           <React.Fragment >  
           <div className="row">
           <div id="propic" className="col-sm-6  wow bounceInUp center" data-wow-delay="0.4s">
               <img src={banner} alt="" style={propic} data-aos="fade-up" className="wow slideInLeft"/>
           </div>
           <div className="col-sm-6 description wow bounceInUp center" data-wow-delay="0.5s" >
               <h3 data-aos="ease-in">My Passion and focus is Full stack Web Development.</h3>
               <p>You need a website that looks amazing and actually works fine. Bottom line, That's what I do. And if you want to learn more about working with me contact me without further due.</p>
               <div className='contactBtn1'>
               
                <ContactBtn className="contactBtn" value="Contact Me"/>
               </div>
           </div>
       </div>    
           </React.Fragment>  
        );  
     }  
  
     componentDidMount() {  
        new WOW.WOW({
            live: false
        }).init();  
     }  
    
}