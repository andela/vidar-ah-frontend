import React from 'react';
import './header.scss';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({ location }) => (
  <>
    <Navbar className="header-comp" collapseOnSelect expand="lg">
      {
        (location.includes('article')) ? <a href="#home" className="purple-link">authorsHaven</a> : <a href="#home" className="white-link">authorsHaven</a>
      }
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {
            (location.includes('article')) ? <a href="" className="white-link">Signup</a> : <span />
          }
          {
            (location.includes('article') || location === '/requestpasswordreset' || location === '/signup') ? <a href="" className="white-link">Login</a> : <span />
          }
          {
            (location.includes('article') || location === 'profile') ? (
              <div>
                <a href="" className="purple-link">Home</a>
                <a href="" className="purple-link">Create post</a>
                <a href="" className="purple-link">Trending</a>
                <img className="img-circle" alt="Pics" src="https://res.cloudinary.com/dojy8fbrj/image/upload/v1554802478/demo/image_4.png" />
              </div>
            ) : <span />
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
