import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import About from './About'
import Education from './Education'
import Work from './Work'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
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
        
        
      </div>
    );
  }
}

export default App;