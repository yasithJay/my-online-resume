import React, { Component } from 'react'

export default class ResumeTec extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='row techContent'>
                    <div className="col-md-4"><h3>Tools And Technologies</h3></div>
                    <div className="col-md-4">
                        <h4>Technologies</h4>
                        <ul>
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
                        <h4>Tools</h4>
                        <ul>
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
}