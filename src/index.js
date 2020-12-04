import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import {
//   Route,
 
//   BrowserRouter as Router,
//   NavLink,
//   Switch,
// } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

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

ReactDOM.render(
  <React.StrictMode><App/></React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
