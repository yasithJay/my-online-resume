import {Route , Link, BrowserRouter as Router ,NavLink ,Switch} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
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


// const routing = (
//     <Router>
//       <div className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
//         <a class="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
  
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/" exact activeStyle={{ color: "#787672" }}>
//               Home
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/about" exact activeStyle={{ color: "#787672" }}>
//               About
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/contact" exact activeStyle={{ color: "#787672" }}>
//               Second
//             </NavLink>
//           </li>
//         </ul>
//         </div>
//       </div>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </Router>
//   );
  

        return (
            <React.Fragment>
            <Router>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark text-white ">
            <div className="container">
              <NavLink class="navbar-brand" to="/">
                Navbar
              </NavLink>
              <button
                className="navbar-toggler animate__animated animate__backInDown"
                type="button"
                onClick={this.toggleNav}

              >
                <span className="navbar-toggler-icon"></span>
              </button>
        
              <div className={(showNav ? 'show' : '') + ' collapse navbar-collapse'} id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact activeStyle={{ color: "#787672" }}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" exact activeStyle={{ color: "#787672" }}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" exact activeStyle={{ color: "#787672" }}>
                    Contact
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
            </Switch>
          </Router>
            </React.Fragment>
        )
    }
}
