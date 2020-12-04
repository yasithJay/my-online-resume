import React, { Component } from 'react';
import help from '../Images/help.jpg';

export default class Help extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="help">
                    <img className='helpImage' src={help} alt=""/>
                    <div className='ask'>
                        <h1>Need Help To Begin Your Programming Journey?</h1>
                        <br/>
                        <a className='helpBtn' href="/contact">I'M HERE TO HELP!</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}