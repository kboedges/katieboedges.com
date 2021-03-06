import React, { Component } from "react";
import PropTypes from "prop-types";

class CodeCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    codeLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    text: PropTypes.string.isRequired,
    tech: PropTypes.string
  };

  render() {
    const { title, subtitle, text, tech, codeLink, liveLink } = this.props;

    return (
      <div className="card d-flex flex-row mb-3">
        <div className="card-body px-4 py-3">
          <div className="card-row">
            <h5 className="card-title">{title}</h5>
            {liveLink && (
              <a href={liveLink} className="live-link" target="_blank">
                Live
              </a>
            )}
            <a href={codeLink} className="code-link" target="_blank">
              View Code
            </a>
          </div>
          <p className="card-subtitle m-0">{subtitle}</p>
          <p className="card-text m-0">{text}</p>
          {tech && <p className="card-tech mb-0 mt-2">{tech}</p>}
        </div>
      </div>
    );
  }
}

export default CodeCard;
