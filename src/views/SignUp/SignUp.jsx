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

const SignUp = ({ history }) => (
  <>
    <div className="purple-gradient-bg">
      <Container>
        <Header location={history.location.pathname} />
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
            <h3>Sign up</h3>
            <Form>
              <Form.Control type="text" placeholder="Fullname" className="dark-forms" />
              <Form.Control type="text" placeholder="Username" className="dark-forms" />
              <Form.Control type="email" placeholder="Email" className="dark-forms" />
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" className="dark-forms">
                  <option>Select interests</option>
                  <option>Art</option>
                  <option>Music</option>
                  <option>Poetry</option>
                  <option>Sports</option>
                </Form.Control>
              </Form.Group>
              <Form.Control type="password" placeholder="Enter password again" className="dark-forms" />
              <Button text="Sign up" />
              <br />
              <p className="p-3">
                or sign up using
              </p>
              <p>
                <span>Already have an account? Log in </span>
                <a href="#"> here</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

SignUp.propTypes = {
  history: PropTypes.string.isRequired
};

export default SignUp;
