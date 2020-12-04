import React, { Component } from "react";
import excercise from "../Images/excercise.jpg";
import photography from '../Images/photography.jpg';
import resume from '../Images/resume.jpg';
import WOW from 'wowjs';

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="project">
          <div class="container">
            <div className=" project-title">
              <h1>Some of My Project Experiences</h1>
            </div>
            <div class="row">
              <div class="col-md-4 project-card wow flipInX" data-wow-delay="0.3s">
                <img className="projectImage" src={excercise} alt="" />
                <div className="card-inner">
                  <p className="projectName">Excercise Tracker App</p>
                  <h3>Health Care</h3>
                  <br />
                  <a
                    className="cardbtn"
                    href="https://github.com/yasithJay/MERN_Excercise_tracker_app"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div class="col-md-4 project-card wow flipInY" data-wow-delay="0.3s">
                <img className="projectImage" src={photography} alt="" />
                <div className="card-inner">
                  <p className="projectName">Photography website</p>
                  <h3>Business WebPage</h3>
                  <br />
                  <a
                    className="cardbtn"
                    href="https://github.com/yasithJay/Simple-Web-Page-with-HTML-CSS-and-Bootstrap"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div class="col-md-4 project-card wow flipInX" data-wow-delay="0.3s">
              <img className="projectImage" src={resume} alt="" />
              <div className="card-inner">
                <p className="projectName">Portfolio website</p>
                <h3>Resume WebPage</h3>
                <br />
                <a
                  className="cardbtn"
                  href="https://github.com/yasithJay/Simple-Web-Page-with-HTML-CSS-and-Bootstrap"
                >
                  View Project
                </a>
              </div>
              </div>
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
