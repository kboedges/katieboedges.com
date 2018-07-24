import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired,
    img: PropTypes.object,
    link: PropTypes.string.isRequired,
    tech: PropTypes.string
  };

  render() {
    const { title, subtitle, text, img, link, tech } = this.props;

    return (
      <div className="card d-flex flex-row mb-3">
        {img && <img class="card-img" src={img} alt="logo" />}
        <div className="card-body p-4">
          <h5 className="card-title">{title}</h5>
          <p className="card-subtitle m-0">{subtitle}</p>
          <p className="card-text m-0">{text}</p>
          {tech && <p className="card-tech mb-0 mt-2">{tech}</p>}
        </div>
      </div>
    );
  }
}

export default Card;
