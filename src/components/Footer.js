import React, { Component } from 'react';
import './Footer.css';

       
       
class Footer extends Component {

    render() {
      return (
        <footer className="page-footer">
           <div className="social-media">
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com"><img className="media-icon" src="./images/facebook.png" alt="facebook"></img></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com"><img className="media-icon" src="./images/instagram.png" alt="instagram"></img></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com"><img className="media-icon" src="./images/linkedin.png" alt="linkedin"></img></a>
           </div>
           <p>2019 &copy; All rights reserved</p>
        </footer>
      );
    }
  }
  
  export default Footer;