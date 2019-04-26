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
import Button from '../../components/button/Index';
import { requestPasswordRequest } from '../../redux/actions/passwordReset';

const RequestPasswordReset = (props) => {
  const [state, setState] = useState({
    email: null,
    error: null,
    message: null
  });

  const updateInput = event => setState({
    ...state,
    email: event.target.value,
    error: null,
    message: null
  });

  const completeRequest = async (event) => {
    event.preventDefault();
    setState({ ...state, error: null, message: null });
    const res = await props.requestPasswordRequest(state.email);
    if (!res.success) setState({ ...state, error: res.errors[0] });
    else setState({ ...state, message: res.message });
  };

  return (
    <>
      <div className="purple-gradient-bg">
        <Container>
          {
            state.message ? <Alert variant="success">{state.message}</Alert> : null
          }
          {
            state.error ? <Alert variant="danger">{state.error}</Alert> : null
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
  requestPasswordRequest: PropTypes.func.isRequired
};
export default connect(() => ({}), { requestPasswordRequest })(RequestPasswordReset);
