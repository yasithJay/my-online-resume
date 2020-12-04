import React, { Component } from 'react';
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Passion extends Component {

    render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
        )
    }

    componentDidMount() {  
        new WOW.WOW({
            live: false
        }).init();  
     }  
}