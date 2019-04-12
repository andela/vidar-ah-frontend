/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ErrorAlert from '../../components/alert/Alert';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import './Index.scss';
import { signupUser } from '../../redux/actions/authActions';

const mapDispatchToProps = dispatch => ({
  signup: userData => dispatch(signupUser(userData)),
});


const SignUp = ({ signup, history }) => {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(null);
  const [signupData, setSignupData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    interest: ''
  });

  const updateInput = e => setSignupData({ ...signupData, [e.target.name]: e.target.value });

  const {
    name, username, email, password
  } = signupData;

  const submitForm = async () => {
    const result = await signup(signupData);
    if (result && result.errors) {
      return setErrors(result.errors);
    } return setSuccess('Registration successful. Please check your mail to verify your account.');
  };

  const validateForm = (e) => {
    e.preventDefault();
    const validationError = [];
    if (!signupData.name || signupData.name === 0) validationError.push('Fullname is required');
    if (!signupData.username || signupData.username === 0) validationError.push('Username is required');
    if (!signupData.email || signupData.email === 0) validationError.push('Email address is required');
    if (!signupData.password || signupData.password === 0) validationError.push('Password is required');
    if (validationError.length !== 0) {
      return setErrors(validationError);
    }
    return submitForm();
  };


  const renderSuccessMessage = () => (
    <Alert variant="success">{success}</Alert>
  );

  return (
    <div className="purple-gradient-bg signup">
      <Container>
        <Header location={history.location.pathname} />
        <Row>
          {
            success ? (
              <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
                {renderSuccessMessage()}
              </Col>
            ) : (
              <>
                <Col md={{ span: 6, offset: 3 }}>
                  <ErrorAlert errors={errors} />
                </Col>
                <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
                  <h3>Sign up</h3>
                  <Form onSubmit={validateForm}>
                    <Form.Control type="text" name="name" value={name} placeholder="Fullname" className="dark-forms" onChange={e => updateInput(e)} required />
                    <Form.Control type="text" name="username" value={username} placeholder="Username" className="dark-forms" onChange={e => updateInput(e)} required />
                    <Form.Control type="email" name="email" value={email} placeholder="Email" className="dark-forms" onChange={e => updateInput(e)} required />
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Control as="select" className="dark-forms">
                        <option className="interest">Select interests</option>
                        <option>Art</option>
                        <option>Music</option>
                        <option>Poetry</option>
                        <option>Sports</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Control type="password" name="password" value={password} placeholder="Password" className="dark-forms" onChange={e => updateInput(e)} required />
                    <Button text="Sign up" className="signup-form" />
                    <br />
                    <p className="p-3">
                      or sign up using
                    </p>
                    <div className="container-social-login mg-t">
                      <SocialIcon url="http://twitter.com" style={{ height: 35, width: 35 }} className="social-media-icons" />
                      {'   '}
                      <SocialIcon url="http://facebook.com" style={{ height: 35, width: 35 }} className="social-media-icons" />
                      {'   '}
                      <SocialIcon url="http://google.com" style={{ height: 35, width: 35 }} className="social-media-icons" />
                    </div>
                    <p>
                      <span>Already have an account? Log in </span>
                      <Link to="/login"> here</Link>
                    </p>
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
