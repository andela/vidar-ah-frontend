import React from 'react';
import './Header.scss';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({ location }) => (
  <>
    <Navbar collapseOnSelect expand="lg">
      <a href="#home" className="white-link">authorsHaven</a>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {
            (location === '/login') ? <a href="" className="white-link">Signup</a> : <span />
          }
          {
            (location === '/resetpassword' || location === '/requestpasswordreset' || location === '/signup') ? <a href="" className="white-link">Login</a> : <span />
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

Header.propTypes = {
  location: PropTypes.string.isRequired
};

export default Header;
