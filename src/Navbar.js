import {Route , Link, BrowserRouter as Router ,NavLink ,Switch} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

import logo from './Images/yasith.png';
import { Component} from 'react';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { showNav: false };
        this.toggleNav = this.toggleNav.bind(this);
    }
    
    toggleNav() {
        this.setState({ 
            showNav: !this.state.showNav
        })
    }
    
    render() {
        const { showNav } = this.state;
                                 

        return (
            <React.Fragment>
            <Router>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark text-white ">
            <div className="container">
              <NavLink class="navbar-brand" to="/">
                <img className="logo" src={logo} alt=""/>
              </NavLink>
              <button
                className="navbar-toggler animate__animated animate__backInDown"
                type="button"
                onClick={this.toggleNav}
                style={{borderColor:"tomato"}}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
        
              <div className={(showNav ? 'show' : '') + ' collapse navbar-collapse'} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact activeStyle={{ color: "white" }}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" exact activeStyle={{ color: "white" }}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" exact activeStyle={{ color: "white" }}>
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/resume" exact activeStyle={{ color: "white" }}>
                    Resume
                  </NavLink>
                </li>
              </ul>
              </div>
              </div>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
          </Router>
            </React.Fragment>
        )
    }
}
