import React, { Component } from "react";
import Card from "./Card";
import apsuLogo from "../images/apsuLogo.png";
import BULogo from "../images/BU.png";
import fitLogo from "../images/fitLogo.png";
import UdacityLogo from "../images/Udacity_logo.png";
import gdi from "../images/gdi.png";
import HackReactorLogo from "../images/HackReactorLogo.png";

class Education extends Component {
  render() {
    return (
      <div className="page education p-5">
        <h1 className="opening mb-4">Education.</h1>
        <p>Degrees, courses, and published articles</p>
        <div className="d-flex flex-row flex-wrap">
          <Card
            title={"Bachelor of Science in Physics"}
            subtitle={"Austin Peay State University"}
            text={"2012 - Minors in mathematics and astronomy"}
            img={apsuLogo}
          />
          <Card
            title={"React Nanodegree Program"}
            subtitle={"Udacity"}
            text={"July 2018"}
            img={UdacityLogo}
            link={"https://www.udacity.com/course/react-nanodegree--nd019"}
          />
          <Card
            title={
              "Intro to JavaScript, Advanced JS: Intro to Object-Oriented JavaScript and MVC, Intro to Web Servers with Node.js"
            }
            subtitle={"Girl Develop It"}
            text={"February 2015"}
            img={gdi}
            link={"https://www.girldevelopit.com/chapters/austin"}
          />
          <Card
            title={"JavaScript Mini Bootcamp: Fundamentals I"}
            subtitle={"Hack Reactor"}
            text={"June 2017"}
            img={HackReactorLogo}
          />
          <Card
            title={"Identifying Short-Term Variations in Hyperion’s Light Curve"}
            subtitle={"CASPER - Baylor University"}
            text={"2011 - Astronomy research"}
            img={BULogo}
            link={"https://www.baylor.edu/content/services/document.php/161590.pdf"}
          />
          <Card
            title={"Resolved Mid-IR Observations and Modeling of AGN and Their Hosts (ARRA)"}
            subtitle={"Florida Institute of Technology"}
            text={"2012 - Graduate assistant"}
            img={fitLogo}
            link={
              "http://web2.fit.edu/research/portal/project/33/collaborative-proposal-resolved-mid-ir-observations-and-modeling-of-agn-and-their-hosts-arra-"
            }
          />
        </div>
      </div>
    );
  }
}

export default Education;
