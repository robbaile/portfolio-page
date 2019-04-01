import React, { Component } from 'react';
import './Menu.css';
       
       
class Menu extends Component {
    state = {
        open: false,
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    };

    render() {
      return (
        <div>
            <div className={`menu menu-${this.state.open}`} onClick={this.handleClick.bind(this)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div class={`display-menu-${this.state.open}`}>
                <ul>
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Skills">Learnings</a>
                    <a href="#Opinions">Opinions</a>
                    <a href="#Portfolio">Portfolio</a>
                    <a href="#Hire">Hire me</a>
                </ul>
            </div>
        </div>
      );
    }
  }
  
export default Menu;