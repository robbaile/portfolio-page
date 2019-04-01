import React, { Component } from 'react';
import './Portfolio.css';

       
       
class Portfolio extends Component {

    render() {
      return (
        <div id="Portfolio" className="portfolio">
          <h2 className="portfolio-heading">My Portfolio</h2>
          <div className="portfolio-divider"></div>
            <div className="portfolio-card">
                <img className="card-image" alt="desktop icon" src="./images/desktop.svg"></img>
                <h3 className="card-heading">View my projects on GitHub</h3>
                <a className="card-link" href="https://github.com/robbaile/">https://github.com/robbaile/</a>
            </div>
        </div>
      );
    }
  }
  
  export default Portfolio;