import React, { Component } from "react";
import WOW from "wowjs";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Passion extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="con2 wow slideInUp center">
          <div className="con2-content container">
            <h1 className="wow bounceInRight" data-wow-delay="0.5s">
              Understanding My Passion
            </h1>
            <br />
            <p className="wow bounceInUp" data-wow-delay="0.7">
              I am a hardworking and ambitious individual with a great passion
              towards IT industry. I have strong technical skills as well as
              excellent inter personal skills which enabling me to interact with
              a wide range of people. I am eager to be challenged in order to
              grow and further improve my IT skills. I am seeing a position in
              the industry in which I can put into practice my knowledge and
              experience, ultimately benefiting the operations of the
              organization that I work for. I am interested in the fields of Web
              application development, front-end development, back-end
              development and Software quality assurance.
            </p>
            <div className="buttonContainer">
              <a href="/about">
                <button className="linkBtn wow slideInUp" data-wow-delay="0.5s">
                  Learn More About Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
}
