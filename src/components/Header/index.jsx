import React from 'react';
import { Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './header.scss';
import { logOut } from '../../redux/actions/auth';
import Notification from '../../views/notification/Index';


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
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Notification />
                </Nav.Item>
                <NavDropdown title={(
                  <div className="profile-header-img">
                    <Image
                      className="img-circle"
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
              <Fab
                  icon={(
                    <img
                    src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1556811098/fabb.png"
                    alt="fab"
                    height="60px" width="60px"
                    />
)}
                >
                <div text="New post">
                  <Link to="/create-article">
                    <img
                      src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1556810906/create.png"
                      height="40px" width="40px"
                      alt="New post"
                    />
                  </Link>
                </div>
              </Fab>
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
  profile: PropTypes.object,
  role: PropTypes.string.isRequired
};
Header.defaultProps = {
  type: 'white',
  isLoggedIn: false,
  profile: { image: "https://res.cloudinary.com/dqyytlxwe/image/upload/v1555941949/avatar.png" }
};

const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
  user: state.authReducer.currentUser,
  profile: state.authReducer.profile,
  role: state.authReducer.currentUser.role
});

export default connect(() => mapStateToProps, { logOut })(Header);
