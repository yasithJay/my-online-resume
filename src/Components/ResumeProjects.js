import React, { Component } from 'react'

export default class ResumeProjects extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='row projectContent'>
                    <div className="col-md-4"><h3>Project Experience</h3></div>
                    <div className="col-md-8">
                       <ul>
                            <li> <h4>Stock Market Prediction</h4>
                                <h5>2020 - Present</h5>
                                <p>Machine Learning project to analyse data and use other business aspects in order to predict future stock market indexes. </p>
                                <p>Technology - Python, Google CoLab </p>
                            </li>
                            <li>
                                <h4>Excercise Tracker App</h4>
                                <h5>2020 - September</h5>
                                <p>Web Browser Application to track exercises of day to day life </p>
                                <p>Technology – Mongodb, Express, React, NodeJs , VS Code</p>
                            </li>
                            <li>
                                <h4>Portfolio Website</h4>
                                <h5>2020 - December</h5>
                                <p>Online resume website</p>
                                <p>Technology – React, Node Js, VS Code
                                 </p>
                            </li>
                            <li>
                                <h4>Hotel Hall Booking System</h4>
                                <h5>2019</h5>
                                <p>Windows Desktop application that facilitates day to day Hotel Hall  booking activities.</p>
                                <p>Technology -  JavaSE, MySQL, NetBeans</p>
                            </li>
                            <li>
                                <h4>Book Store Management System </h4>
                                <h5>2018</h5>
                                <p>Console application that facilitates day to day activities of a Book store. </p>
                                <p>Technology -  C , CodeBlocks</p>
                            </li>
                            
                       </ul>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}