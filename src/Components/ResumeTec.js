import React, { Component } from 'react'
import WOW from 'wowjs';

export default class ResumeTec extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='row techContent wow fadeInUp' data-wow-delay="0.3s">
                    <div className="col-md-4"><h3 className="wow fadeInLeft" data-wow-delay="0.3s">Tools And Technologies</h3></div>
                    <div className="col-md-4">
                        <h4 className="wow fadeInDown" data-wow-delay="0.5s">Technologies</h4>
                        <ul className="wow fadeInRight" data-wow-delay="0.7s">
                            <li>Java</li>
                            <li>C</li>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>React</li>
                            <li>NodeJs</li>
                            <li>MongoDb</li>
                            <li>SQL</li>
                            <li>Selenium</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="wow fadeInDown" data-wow-delay="0.5s">Tools</h4>
                        <ul className="wow fadeInRight" data-wow-delay="0.7s">
                            <li>NetBeans</li>
                            <li>CodeBlocks</li>
                            <li>VS Code</li>
                            <li>MySQL workbench</li>
                            <li>IntelliJ</li>
                            <li>Mongo Atlas</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Lightroom</li>
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