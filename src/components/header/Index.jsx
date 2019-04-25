import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from "../button/Index";
import './header.scss';
import { logOut } from '../../redux/actions/auth';


const Header = (props) => {
  let className;
  const {
    type,
    isLoggedIn,
    logOut: LogOut,
    history,
    profile,
    role
  } = props;

  type === 'purple' ? className = 'purple-link' : className = 'white-link';

  const logout = () => {
    LogOut();
    history.push('/');
  };

  return (
    <div className="header-container">
      <Navbar collapseOnSelect expand="lg">
        <Nav>
          <Link to="/" className={className}>authorsHAVEN</Link>
        </Nav>
        <Nav className="mr-auto" />
        {
          isLoggedIn ? (
            <>
              <Nav>
                <NavDropdown title={(
                  <div className="small-profile">
                    <img
                      className="thumbnail-image"
                      src={`${profile.image}`}
                      alt="user pic"
                    />
                  </div>
                )}>
                  <NavDropdown.Item><Link to="/" className={`${className}-text`}>Home</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/create-article" className={`${className}-text`}>Create post</Link></NavDropdown.Item>
                  {role === 'superadmin' && <NavDropdown.Item><Link to="/reports" className={`${className}-text`}>Reports</Link></NavDropdown.Item>}
                  <NavDropdown.Item><Link to="/userprofile" className={`${className}-text`}>My Profile</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link to="#" onClick={logout} className={`${className}-text`}>Log out</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Link to="/create-article"><Button text="CREATE POST" className="fab" /></Link>
            </>
          ) : (
            <Nav>
              <Link to="/signup" className={`${className} hide-small`}>Signup</Link>
              <Link to="/login" className={className}>Login</Link>
            </Nav>
          )
        }
      </Navbar>
    </div>
  );
};
Header.propTypes = {
  type: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired
};
Header.defaultProps = {
  type: 'white',
  isLoggedIn: false
};

const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
  user: state.authReducer.currentUser,
  profile: state.authReducer.profile
});

export default connect(() => mapStateToProps, { logOut })(Header);
