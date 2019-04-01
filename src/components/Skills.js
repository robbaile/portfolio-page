import React, { Component } from 'react';
import './Skills.css';

       
       
class Skills extends Component {

    render() {
      return (
        <div id="Skills" className="skill-section">
            <div className="skills-heading-container">
                <h2 className="skills-heading">What I've learnt in my first year</h2>
                <div className="skills-divider"></div>
            </div>

            <div class="skills">
                <div className="skill">
                    <h3 className="skill-heading">Javascript</h3>
                    <div className="skills-divider--small"></div>
                    <img className="skill-image" alt="robs skill" src="./images/js.png"></img>
                    <p className="skill-text">I have learnt a range of JS skills including ES6, node, using JS with the DOM and object orientated programming. This has enabled me to create and work with end to end javascript applications. I feel pretty comfortable using javascript</p>
                </div>
                <div className="skill">
                    <h3 className="skill-heading">UI / UX</h3>
                    <div className="skills-divider--small"></div>
                    <img className="skill-image" alt="robs skill" src="./images/uiux.png"></img>
                    <p className="skill-text">Having worked in UI for over 6 months, I have learnt the important of User centred design, understanding techniques and ways of working to get the best for the user. As well as this I've had extensive hands on use of HTML5, CSS3 and JQuery.</p>   
                </div>
                <div className="skill">
                    <h3 className="skill-heading">React</h3>
                    <div className="skills-divider--small"></div>
                    <img className="skill-image" alt="robs skill" src="./images/react.png"></img>
                    <p className="skill-text">I have created several React applications (including this one) and am buidling a solid fundamental unstanding of concepts such as State, Props and Components. I find it easy to structure a front end with React. I have also followed a tutorial on Redux.</p>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Skills;