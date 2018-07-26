import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Route exact path="/" render={() => <About />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/projects" render={() => <Projects />} />
        <Route path="/education" render={() => <Education />} />

        <svg
          className="hills"
          x="0"
          y="0"
          width="1400"
          height="70"
          viewBox="0 0 1400 70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="30" width="1400" height="40" fill="black" />
          <path d="M0 30 C 100 30, 20 0, 200 40" stroke="black" fill="black" />
          <path d="M200 40 C 260 20, 500 20, 800 30" stroke="black" fill="black" />
          <path d="M500 30 C 700 10, 600 20, 800 40" stroke="black" fill="black" />
          <path d="M700 40 C 740 20, 900 20, 1000 30" stroke="black" fill="black" />
          <path d="M1000 30 C 1200 10, 1100 20, 1400 40" stroke="black" fill="black" />
        </svg>
      </div>
    );
  }
}

export default App;
