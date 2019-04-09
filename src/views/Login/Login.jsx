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

const Login = ({ history }) => (
  <>
    <div className="purple-gradient">
      <Container>
        <Header location={history.location.pathname} />
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
            <h3>Login</h3>
            <Form>
              <Form.Control type="email" placeholder="Email" className="dark-forms" />
              <Form.Control type="password" placeholder="Password" className="dark-forms" />
              <Button text="Login" />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

Login.propTypes = {
  history: PropTypes.string.isRequired
};
export default Login;
