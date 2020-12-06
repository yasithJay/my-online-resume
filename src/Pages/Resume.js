import React, { Component } from 'react';
import coverImg from '../Images/resumeCover.jpg';
import './resume.css';
import "bootstrap/dist/css/bootstrap.min.css";
import cv from '../assets/Yasith Ketipearachchi.pdf';
import { FaArrowRight } from "react-icons/fa";

import ResumeTec from '../Components/ResumeTec';
import ResumeProjects from '../Components/ResumeProjects';
import ResumeActivities from '../Components/ResumeActivities';
import ResumeEdu from '../Components/ResumeEdu';
import ResumeHire from '../Components/ResumeHire';
import Footer from '../Components/Footer';
import WOW from 'wowjs';

export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="resumeCover">
            <img className="resumeCoverimg" src={coverImg} alt=""/>
            <h1 className="resumeCovertitle wow fadeInRight" data-wow-delay="0.4s">Dig little deep.</h1>
            <a className="resumeDownload wow fadeInRight" data-wow-delay="0.2s" href={cv}>Download resume   <FaArrowRight/></a>
            </div>

            <div>
                <ResumeTec/>
            </div>

            <div>
                <ResumeProjects/>
            </div>

            <div>
                <ResumeActivities/>
            </div>

            <div>
                <ResumeEdu/>
            </div>

            <div>
                <ResumeHire/>
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