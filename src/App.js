
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import React from 'react';



// import {
//   Route,
//   Link,
//   BrowserRouter as Router,
//   NavLink,
//   Switch,
// } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import "bootstrap/dist/css/bootstrap.min.css";

// const routing = (
//   <Router>
//     <div className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
//       <a class="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/" exact activeStyle={{ color: "#787672" }}>
//             Home
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/about" exact activeStyle={{ color: "#787672" }}>
//             About
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/contact" exact activeStyle={{ color: "#787672" }}>
//             Second
//           </NavLink>
//         </li>
//       </ul>
//       </div>
//     </div>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/contact" component={Contact} />
//     </Switch>
//   </Router>
// );

function App() {
  return (
     <React.Fragment>
      <Navbar/>
     </React.Fragment>
  );
}

export default App;
