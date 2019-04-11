/* eslint-disable react/jsx-no-bind */
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
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { resetPassword } from '../../redux/actions/passwordReset';

const ResetPassword = (props) => {
  const { history, match } = props;
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const updateInput = e => setPassword(e.target.value);
  const updateInput2 = e => setPassword2(e.target.value);

  const completeRequest = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== password2 || !password) {
      setError('Passwords do not match');
    } else {
      const res = await props.resetPassword(match.params.key, password);
      if (!res.success) setError(res.errors[0]);
      else setMessage(res.message);
    }
  };

  return (
    <>
      <div className="purple-gradient-bg">
        <Container>
          <Header location={history.location.pathname} />
          {
            message ? <Alert variant="success">{message}</Alert> : null
          }
          {
            error ? <Alert variant="danger">{error}</Alert> : null
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
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  resetPassword: PropTypes.func.isRequired
};

export default connect(() => ({}), { resetPassword })(ResetPassword);
