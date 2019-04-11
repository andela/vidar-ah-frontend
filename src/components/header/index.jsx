import React from 'react';
import './index.scss';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({ location }) => (
  <>
    <Navbar collapseOnSelect expand="lg">
      {
        (location === '/article/2') ? <a href="#home" className="purple-link">authorsHaven</a> : <a href="#home" className="white-link">authorsHaven</a>
      }
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {
            (location === '/login' || location === '/') ? <a href="" className="white-link">Signup</a> : <span />
          }
          {
            (location === '/resetpassword' || location === '/requestpasswordreset' || location === '/signup' || location === '/') ? <a href="" className="white-link">Login</a> : <span />
          }
          {
            (location === '/article/2' || location === 'profile') ? (
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
