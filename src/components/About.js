import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class About extends Component {
  render() {
    return (
      <div className="page about p-5">
        <div className="about-info">
          <h1 className="opening mb-4">Welcome.</h1>
          <p className="about-me">
            I'm a <span>frontend software engineer</span> located in{" "}
            <span>Austin, Texas</span>. I spend a lot of my free time learning
            about web development and practicing static trapeze. When I'm not
            doing one of those two things, I might be found at Austin's famous{" "}
            <span>uncommom OBJECTS</span> looking for antique photographs to add
            to my collection. I could also be sewing or cross-stitching...I have
            a lot of hobbies.
          </p>
        </div>
        <div className="about-social">
          <a href="https://github.com/kboedges" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="https://www.linkedin.com/in/katherine-boedges-18baa339/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a href="https://codepen.io/kboedges/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "codepen"]} />
          </a>
          <a href="https://twitter.com/kboedg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
