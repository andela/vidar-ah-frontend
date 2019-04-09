import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text }) => (
  <button className="yellow-button">{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
