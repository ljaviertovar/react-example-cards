import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imageSource, title, url, text }) => {
    return (
        <div className="card text-center bg-dark">
            <img src={imageSource} alt="" />
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {text
                    ? text
                    : 'Eu quis tempor qui officia occaecat sit cillum consequat labore. Sunt nostrud fugiat quis reprehenderit eiusmod. Quis culpa culpa velit sit do ullamco. Amet est nisi culpa tempor deserunt exercitation duis. Excepteur ex minim laborum velit consectetur culpa aliquip.'}
            </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    Go to this website
            </a>
            </div>

        </div>
    );
}

Card.propTypes = {
    imageSource: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Card;