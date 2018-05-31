import React, { Component } from 'react';
import Card from './Card'

class Work extends Component {
  render() {
    return (
      <div className="work p-5">
        <h1 className="opening mb-4">Work.</h1>
        <p>Development projects that I've worked on</p>
        <div className="d-flex flex-row flex-wrap">
          <Card 
            title={"Cyber Security Countdown"}
            text={"2018 - Stop a ransomware attack by entering in 6 correct passwords within 5 hours."}
            link={"https://github.com/kboedges/cybersec-timer"}
            tech={"JavaScript, React, Redux"}
          />
      </div>
      </div>
    );
  }
}

export default Work;