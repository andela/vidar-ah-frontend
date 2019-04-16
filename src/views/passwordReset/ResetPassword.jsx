/* eslint-disable react/jsx-no-bind */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Alert
} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';
import { resetPassword } from '../../redux/actions/passwordReset';

const ResetPassword = (props) => {
  const { match } = props;
  const [state, setState] = useState({
    password: null,
    password2: null,
    error: null,
    message: null
  });


  const updateInput = (e) => {
    setState({
      ...state,
      password: e.target.value,
      error: null,
      message: null
    });
  };
  const updateInput2 = (e) => {
    setState({
      ...state,
      password2: e.target.value,
      error: null,
      message: null
    });
  };

  const completeRequest = async (e) => {
    e.preventDefault();
    setState({ ...state, error: null, message: null });
    if (state.password !== state.password2 || !state.password) {
      setState({ ...state, error: 'Passwords do not match' });
    } else {
      const res = await props.resetPassword(match.params.key, state.password);
      if (!res.success) setState({ ...state, error: res.errors[0] });
      else {
        setState({ ...state, message: res.message });
      }
    }
  };

  return (
    <>
      <div className="purple-gradient-bg">
        <Container>
          {
            state.message ?
              (
                <Alert variant="success">
                  {state.message}
                  Please click
                  <a href="../login"> here </a>
                  to login
                </Alert>
              ) : null
          }
          {
            state.error ? <Alert variant="danger">{state.error}</Alert> : null
          }
        </Container>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
              <h3>Enter new password</h3>
              <Form>
                <Form.Control
                  type="password" placeholder="Enter new password"
                  className="dark-forms"
                  onChange={updateInput}
                />
                <Form.Control
                  type="password" placeholder="Enter password again"
                  className="dark-forms"
                  onChange={updateInput2}
                />
                <Button text="Reset password" onClick={completeRequest} />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

ResetPassword.propTypes = {
  match: PropTypes.object.isRequired,
  resetPassword: PropTypes.func.isRequired
};

export default connect(() => ({}), { resetPassword })(ResetPassword);
