import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Card extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        img: PropTypes.object.isRequired,
        link: PropTypes.string.isRequired
    }

    render() {
        const { title, subtitle, text, img, link } = this.props

        return (
        <div className="card d-flex flex-row mb-3">
            <a href={link} className="card-link">
            <img class="card-img" src={img} alt="apsu logo"/>
            </a>
            <div className="card-body p-4">
                <h5 className="card-title">{title}</h5>
                <p className="card-subtitle m-0">{subtitle}</p>
                <p className="card-text m-0">
                {text}
                </p>
            </div>
        </div>
        );
  }
}

export default Card;