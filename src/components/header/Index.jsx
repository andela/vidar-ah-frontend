/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import PropTypes from 'prop-types';
import './header.scss';

const Header = (props) => {
  let className;
  const {
    type
  } = props;

  type === 'purple' ? className = 'purple-link' : className = 'white-link';

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Link to="/" className={className}>authorsHAVEN</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            {
              (
                <div>
                  <Link to="/signup" className={className}>Signup</Link>
                  <Link to="/login" className={className}>Login</Link>
                </div>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
Header.propTypes = {
  type: PropTypes.string,
};
Header.defaultProps = {
  type: 'white'
};

export default Header;
