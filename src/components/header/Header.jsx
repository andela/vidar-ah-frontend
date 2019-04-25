/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './header.scss';
import { logOut } from '../../redux/actions/auth';

const Header = (props) => {
  let className;
  const {
    type,
    isLoggedIn,
  } = props;

  type === 'purple' ? className = 'purple-link' : className = 'white-link';

  const logout = () => {
    props.logOut();
    props.history.push('/');
  };

  return (
    <div className="header-container">
      <Navbar collapseOnSelect expand="lg">
        <Link to="/" className={className}>authorsHAVEN</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            {
              isLoggedIn ? (
                <div>
                  <Link to="/" className={className}>Home</Link>
                  <Link to="/create-article" className={className}>Create post</Link>
                  <Link to="/userprofile" className={className}>My Profile</Link>
                  <Link to="#" onClick={logout} id="logOut" className={className}>Log out</Link>
                </div>
              ) : (
                <div>
                  <Link to="/signup" className={className}>Signup</Link>
                  <Link to="/login" className={className}>Login</Link>
                </div>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
Header.propTypes = {
  type: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};
Header.defaultProps = {
  type: 'white',
};

const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
  user: state.authReducer.currentUser
});

export default connect(() => mapStateToProps, { logOut })(Header);
