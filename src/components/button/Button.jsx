import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ text, onClick }) => (
  <button
    className="yellow-button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: f => f,
};

export default Button;
