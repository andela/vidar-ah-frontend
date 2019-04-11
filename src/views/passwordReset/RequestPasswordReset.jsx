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
import { requestPasswordRequest } from '../../redux/actions/passwordReset';

const RequestPasswordReset = (props) => {
  const { history } = props;
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const updateInput = e => setEmail(e.target.value);

  const completeRequest = async (e) => {
    e.preventDefault();
    setError(null);
    const res = await props.requestPasswordRequest(email);
    if (!res.success) setError(res.errors[0]);
    else setMessage(res.message);
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
              <h3>Forgot password?</h3>
              <Form>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="dark-forms"
                  onChange={updateInput}
                />
                <Button
                  text="Request link"
                  onClick={completeRequest}
                />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
RequestPasswordReset.propTypes = {
  history: PropTypes.object.isRequired,
  requestPasswordRequest: PropTypes.func.isRequired
};
export default connect(() => ({}), { requestPasswordRequest })(RequestPasswordReset);
