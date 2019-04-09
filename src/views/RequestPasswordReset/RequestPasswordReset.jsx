import React from 'react';
import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';

const RequestPasswordReset = ({ history }) => (
  <>
    <div className="purple-gradient-bg">
      <Container>
        <Header location={history.location.pathname} />
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
            <h3>Forgot password?</h3>
            <Form>
              <Form.Control type="email" placeholder="Enter email" className="dark-forms" />
              <Button text="Request link" />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

RequestPasswordReset.propTypes = {
  history: PropTypes.string.isRequired
};

export default RequestPasswordReset;
