import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="page about p-5">
        <div className="about-info">
          <h1 className="opening mb-4">Welcome.</h1>
          <p className="about-me">
            I'm a <span>QA technician</span> and <span>frontend developer</span> located in <span>Austin, Texas</span>.
            I spend a lot of my free time learning about web development and practicing static trapeze. When I'm not
            doing one of those two things, I might be found at Austin's famous <span>uncommom OBJECTS</span> looking for
            antique photographs to add to my collection. I could also be sewing or cross-stitching...I have a lot of
            hobbies.
          </p>
        </div>
        <div className="about-social" />
      </div>
    );
  }
}

export default About;
