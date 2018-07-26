import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired,
    img: PropTypes.string,
    link: PropTypes.string,
    tech: PropTypes.string
  };

  render() {
    const { title, subtitle, text, img, link, tech } = this.props;

    return (
      <div className="card d-flex flex-row mb-3">
        {img && <img className="card-img" src={img} alt="logo" />}
        <div className="card-body px-4 py-3">
          <div className="card-row">
            <h5 className="card-title">{title}</h5>
            {link && (
              <a href={link} className="live-link" target="_blank">
                View
              </a>
            )}
          </div>
          <p className="card-subtitle m-0">{subtitle}</p>
          <p className="card-text m-0">{text}</p>
          {tech && <p className="card-tech mb-0 mt-2">{tech}</p>}
        </div>
      </div>
    );
  }
}

export default Card;
