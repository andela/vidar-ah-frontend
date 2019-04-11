import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ text, onClick, className }) => (
  <button onClick={onClick} className={`yellow-button ${className}`}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  className: 'yellow-button-login',
};

export default Button;
