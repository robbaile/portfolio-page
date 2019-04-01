import React, { Component } from 'react';
import './Opinions.css';

let opinionText = ["He's such a dickhead. Always telling crap jokes and just simply isn't funny",
"So glad that he's leaving. Been nothing but negativity on this team", 
"Such a knobjockey especially cus he doesn't eat meat. I love brexit"]
       
class Opinions extends Component {

  state = {
    currentTab: 0
  }

  handleClick() {
    if(this.state.currentTab < opinionText.length - 1) {
      this.setState({ currentTab: this.state.currentTab + 1 });
    } else {
      this.setState({ currentTab: 0 });
    }
  }


  render() {
    return (
      <div id="Opinions" className="opinions">
        <div className="opinions-image-container">
          <img className="opinions-image" src="./images/rob-opinions.png" alt="pic of rob"></img>
        </div>
        
        <div className="opinions-content-container">
          <div className="opinions-heading-container">
            <h2 className="opinions-heading">What people say</h2>
            <div className="opinions-divider"></div>
          </div>              
          <div className="opinions-carousel">
            <div className="carousel-columns">
              <div className="tab-1">
                <p className="tab-1-text">{opinionText[this.state.currentTab]}</p>
              </div>
              <img onClick={this.handleClick.bind(this)} className="right-arrow" src="./images/right-arrow.svg" alt="right arrow"></img>
            </div>
            <div className="carousel-bubbles">
              {opinionText.map(() => <div className="bubble"></div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Opinions;