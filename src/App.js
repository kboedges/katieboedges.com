import React, { Component } from 'react';
import About from './About'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <About/>
      </div>
    );
  }
}

export default App;