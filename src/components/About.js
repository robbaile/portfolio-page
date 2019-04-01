import React, { Component } from 'react';
import './About.css';
       
       
class About extends Component {


    render() {
      return (
        <div id="About" ref={this.props.about} className="about-me">
          <div className="about-content">
            <h2 className="about-heading">About Me</h2>
            <div className="about-divider"></div>
            <p className="about-text">My name is Rob and I'm an Apprentice Software Engineer currently working at BGL Group in Peterborough.</p>
            <p className="about-text">For the past year I have been learning to code and I have loved every second of it. I am working towards a foundation degree which is supplied by Ada college in London and The Open University. </p>
          </div>
          <div className="about-image">
            <img className="rob-image" src="./images/about.jpg" alt="rob"></img>
          </div>
        </div>
      );
    }
  }
  
  export default About;