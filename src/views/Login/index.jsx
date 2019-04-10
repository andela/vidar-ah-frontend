import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import {
  Container, Row, Col, Form
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { loginUser } from '../../redux/actions/auth';
import Loader from '../../components/loader/Loader';
import './login.scss';

export const Login = ({ history, loginUser: handleLogin, loading }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: null,
    password: null
  });

  const updateLocalState = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const successfulLogin = await handleLogin(userCredentials);
    if (successfulLogin) {
      history.push('/');
    }
  };

  return (
    <>
      <div className="purple-gradient-bg">
        {loading && <Loader />}
        <Container>
          <Header location={history.location.pathname} />
        </Container>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
              <h3>Login</h3>
              <Form onSubmit={e => onSubmit(e)} className="form-login">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="dark-forms"
                  required
                  onChange={e => updateLocalState(e)}
                />
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="dark-forms"
                  required
                  onChange={e => updateLocalState(e)}
                />
                <Button text="Login" />
                <div className="container-extras">
                  <span>
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="checkbox"
                    />
                    Remember Me
                  </span>
                  <span>
                    <NavLink
                      to="/requestpasswordreset"
                      className="link-to-another-page"
                    >
                      Forgotten password?
                    </NavLink>
                  </span>
                </div>
              </Form>
              <div className="container-social-login">
                <span className="info">Or login using </span>
                <SocialIcon
                  url="http://twitter.com"
                  className="social-media-icons"
                />
                <SocialIcon
                  url="http://facebook.com"
                  className="social-media-icons"
                />
                <SocialIcon
                  url="http://google.com"
                  className="social-media-icons"
                />
              </div>
              <div className="container-directing-to-signup">
                <span>
                  Don't have an account? Singn up
                  <NavLink to="/signup" className="link-to-another-page">
                     here
                  </NavLink>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loading: state.fetchReducer.fetching
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
