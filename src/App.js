import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import About from './About'
import Education from './Education'
import Work from './Work'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <Route exact path="/" render={() => (
          <About/>
        )}/>
        <Route path="/about" render={() => (
          <About/>
        )}/>
        <Route path="/work" render={() => (
          <Work/>
        )}/>
        <Route path="/education" render={() => (
          <Education/>
        )}/>
        
        <svg className="hills" x="0" y="0" width="100%" height="auto" viewBox="0 0 1400 500" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="460" width="1400" height="40" fill="black" />
          <path d="M0 460 C 100 460, 20 430, 200 470" stroke="black" fill="black"/>
          <path d="M200 470 C 260 450, 500 450, 800 460" stroke="black" fill="black"/>
          <path d="M500 460 C 700 440, 600 450, 800 470" stroke="black" fill="black"/>
          <path d="M700 470 C 740 450, 900 450, 1000 460" stroke="black" fill="black"/>
          <path d="M1000 460 C 1200 440, 1100 450, 1400 470" stroke="black" fill="black"/>
        </svg>
      </div>
    );
  }
}

export default App;