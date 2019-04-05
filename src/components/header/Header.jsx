import React from 'react';
import './header.scss';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({ location }) => (
  <>
    <Navbar collapseOnSelect expand="lg">
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
                <img className="img-icon" title="share on facebook" src="https://res.cloudinary.com/djdsxql5q/image/upload/v1554929659/Authors%20Haven/iconmonstr-facebook-1.png" alt="facebook share" style={{ width: '2rem' }} />
                <img className="img-icon" title="share on twitter" src="https://res.cloudinary.com/djdsxql5q/image/upload/v1554929740/Authors%20Haven/iconmonstr-twitter-1.png" alt="twitter share" style={{ width: '2rem' }} />
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
