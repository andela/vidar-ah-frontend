/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
  Form, Alert
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ErrorAlert from '../../components/alert/Alert';
import Checkbox from '../../components/checkbox/Index';
import Header from '../../components/header/Index';
import Button from '../../components/button/Index';
import Loader from '../../components/loader/Index';
import { signupUser } from '../../redux/actions/authActions';
import './signup.scss';

const googleUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1/auth/google';
const facebookUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1/auth/facebook';

const mapDispatchToProps = dispatch => ({
  signup: userData => dispatch(signupUser(userData)),
});

export const SignUp = ({ signup, history }) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [signupData, setSignupData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    interests: ''
  });

  const updateInput = event => setSignupData({
    ...signupData, [event.target.name]: event.target.value
  });

  const updateInterest = (interests) => {
    setSignupData({ ...signupData, interests: interests.toString() });
  };

  const {
    name, username, email, password, interests
  } = signupData;

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    const result = await signup(signupData);
    setLoading(false);
    if (result && result.response.status !== 201) {
      if (result.response.data.errors) return setErrors(result.response.data.errors);
      return setErrors(['There was an error sending your request, please try again later.']);
    } return setSuccess('Registration successful. Please check your mail to verify your account.');
  };

  const renderSuccessMessage = () => (
    <Alert variant="success">{success}</Alert>
  );

  return (
    <div className="purple-gradient-bg">
      {loading && <Loader />}
      <Container>
        <Header location={history.location.pathname} history={history} />
        <Row>
          {
            success ? (
              <Col md={{ span: 6, offset: 3 }} className="mg-t">
                {renderSuccessMessage()}
              </Col>
            ) : (
              <>
                <Col md={{ span: 6, offset: 3 }}>
                  <ErrorAlert errors={errors} />
                </Col>
                <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
                  <h3>Sign up</h3>
                  <Form onSubmit={submitForm}>
                    <Form.Control type="text" name="name" value={name} placeholder="Fullname" minLength="2" className="dark-forms" onChange={updateInput} required />
                    <Form.Control type="text" name="username" value={username} placeholder="Username" minLength="6" className="dark-forms" onChange={updateInput} required />
                    <Form.Control type="email" name="email" value={email} placeholder="Email" className="dark-forms" onChange={updateInput} required />
                    <Checkbox updateInput={updateInterest} className="interest" interests={interests} />
                    <Form.Control type="password" name="password" value={password} placeholder="Password" className="dark-forms" onChange={event => updateInput(event)} required />
                    <Button text="Sign up" className="w-80" />
                    <div className="container-social-login">
                      <span className="info">or sign up using</span>
                      <SocialIcon
                        url={googleUrl}
                        className="social-media-icons"
                        network="google"
                        style={{ height: 35, width: 35 }}
                        fgColor="#fff"
                        />
                      <SocialIcon
                      url={facebookUrl}
                      className="social-media-icons"
                      network="facebook"
                      style={{ height: 35, width: 35 }}
                      fgColor="#fff"
                      />
                    </div>
                    <div className="container-directing-to-login">
                      <span>
                      Already have an account?
                        <NavLink to="/login" className="link-to-another-page">
                            Log in
                        </NavLink>
                      </span>
                    </div>
                  </Form>
                </Col>
              </>
            )
          }
        </Row>
      </Container>
    </div>
  );
};

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
