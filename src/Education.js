import React, { Component } from 'react';
import apsuLogo from'./images/apsuLogo.png';
import BULogo from './images/BU.png'

class Education extends Component {
  render() {
    return (
      <div className="education p-5 w-100 d-flex flex-column">
        <h1 className="opening mb-4">Education.</h1>
        <p>Degrees, courses, and published articles</p>
        <div className="card-deck">
        <div className="card d-flex flex-row">
                <img class="card-img" src={apsuLogo} alt="apsu logo"/>
                <div className="card-body p-4">
                    <h5 className="card-title">Bachelor of Science in Physics</h5>
                    <p className="card-subtitle m-0">Austin Peay State University</p>
                    <p className="card-text m-0">
                    2012 - Minors in mathematics and astronomy
                    </p>
                </div>
            </div>
            <div className="card d-flex flex-row">
                <img class="card-img" src={BULogo} alt="apsu logo"/>
                <div className="card-body p-4">
                    <h5 className="card-title">Identifying Short-Term Variations in Hyperion’s Light Curve</h5>
                    <p className="card-subtitle m-0">CASPER - Baylor University</p>
                    <p className="card-text m-0">
                    2011 - Astronomy research
                    </p>
                </div>
            </div>
        </div>
            
      </div>
    );
  }
}

export default Education;