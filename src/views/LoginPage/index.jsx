/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import {
  Container, Row, Col, Form, Alert
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../../components/header/index';
import Button from '../../components/button/Button';
import { loginUser } from '../../redux/actions/auth';
import Loader from '../../components/loader/Loader';
import './login.scss';


export const Login = ({ history, loginUser: handleLogin, loading }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: null,
    password: null
  });
  const [errors, setErrors] = useState([]);

  function updateLocalState(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const loginRes = await handleLogin(userCredentials);
    if (!Array.isArray(loginRes)) {
      return history.push('/');
    }
    console.log(loginRes);
    return setErrors(loginRes);
  }

  return (
    <>
      <div className="purple-gradient-bg">
        {loading && <Loader />}
        <Container>
          <Header location={history.location.pathname} />
        </Container>
        <Container>
          {renderErrors(errors)}
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
              <h3>Login</h3>
              <Form onSubmit={onSubmit} className="form-login">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="dark-forms"
                  required
                  onChange={updateLocalState}
                />
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="dark-forms"
                  required
                  onChange={updateLocalState}
                />
                <Button text="Login" className="yellow-button-login" onClick={() => onSubmit} />
                <div className="container-extras">
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

const LoginPage = connect(
  mapStateToProps,
  { loginUser }
)(Login);

export default LoginPage;
