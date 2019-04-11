import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.scss';

const Button = ({ text, link }) => (

  <Link to={link}>
    <button className="yellow-button">{text}</button>
  </Link>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Button;
