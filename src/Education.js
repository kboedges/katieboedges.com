import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="education p-5 w-100">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                Some quick example text to build on the card title
                and make up the bulk of the card's content.
                </p>
                <a href="#!" className="card-link">Card link</a>
                <a href="#!" className="card-link">Another link</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Education;