import React, { Component } from 'react';
import './Hero.css';
import Menu from './Menu';
       
       
class Hero extends Component {

    scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    
    render() {
      return (
        <header id="Home" class="hero">
            <Menu />
            <div class="center-content">
                <h1 className="hero-title">ROB BAILE</h1>
                <div className="hero-divider"></div>
                <h3 className="hero-subtitle">I'M A SOFTWARE DEVELOPER</h3>
                <a href="#0" onClick={() => {this.scroll(this.props.about)}} class="hero-button">SEE MORE</a>
            </div>
        </header>
      );
    }
  }
  
  export default Hero;
       
       
