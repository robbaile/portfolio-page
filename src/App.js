import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Opinions from './components/Opinions';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Hire from './components/Hire';

class App extends Component {
  constructor() {
    super()
    this.aboutRef = React.createRef();

  }
  render() {
    return (
      <div className="App">
        <Hero about={this.aboutRef}/>
        <About about={this.aboutRef}/>
        <Skills />
        <Opinions />
        <Portfolio />
        <Hire />
        <Footer />
      </div>
    );
  }
}

export default App;
