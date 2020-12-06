import React, { Component } from 'react'

export default class ResumeHire extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='hireMsgContent'>
                    <h1>Hire a Full Stack devleoper today.</h1>
                    <p>Now that you know what I've done and what I could do for you, feel free to reach out and start a conversation.</p>
                    <a className="hireMsgBtn" href="/contact">Contact Me</a>
                </div>
            </React.Fragment>
        )
    }
}