import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import {
  Container, Row, Col, Form, Alert
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { loginUser } from '../../redux/actions/auth';
import Loader from '../../components/loader/Index';
import './login.scss';


const googleUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1/auth/google';
const facebookUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1/auth/facebook';

export const Login = ({ history, loginUser: handleLogin, loading }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: null,
    password: null
  });
  const [errors, setErrors] = useState([]);

  function updateLocalState(event) {
    setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
  }

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const loginRes = await handleLogin(userCredentials);
    if (!Array.isArray(loginRes)) {
      return history.push('/');
    }
    return setErrors(loginRes);
  }

  return (
    <div className="purple-gradient-bg">
      {loading && <Loader />}
      <Container>
        <Header location={history.location.pathname} />
      </Container>
      <Container>
        <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>
      </Container>
      <Container>
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
              <Button text="Login" />
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
                  url={googleUrl}
                  network="google"
                  className="social-media-icons"
                />
              <SocialIcon
                  url={facebookUrl}
                  className="social-media-icons"
                  network="facebook"
                />
            </div>
            <div className="container-directing-to-signup">
              <span>
                  Don't have an account? Sign up
                <NavLink to="/signup" className="link-to-another-page">
                    here
                </NavLink>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
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
