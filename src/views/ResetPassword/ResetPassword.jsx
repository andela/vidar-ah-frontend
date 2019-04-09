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

const ResetPassword = ({ history }) => (
  <>
    <div className="purple-gradient">
      <Container>
        <Header location={history.location.pathname} />
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
            <h3>Enter new password</h3>
            <Form>
              <Form.Control type="password" placeholder="Enter new password" className="dark-forms" />
              <Form.Control type="password" placeholder="Enter password again" className="dark-forms" />
              <Button text="Reset password" />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

ResetPassword.propTypes = {
  history: PropTypes.string.isRequired
};

export default ResetPassword;
