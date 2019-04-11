import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ location }) => (
  <>
    <Navbar collapseOnSelect expand="lg">
      {
        (location.includes('article')) ? <Link to="/" className="purple-link">authorsHAVEN</Link> : <Link to="/" className="white-link">authorsHAVEN</Link>
      }
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {
            (location.includes('article')) ? <Link to="/signup" className="white-link">Signup</Link> : <span />
          }
          {
            (location.includes('article') || location === '/requestpasswordreset' || location === '/signup') ? <Link to="/login" className="white-link">Login</Link> : <span />
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
