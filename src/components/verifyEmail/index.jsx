import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Header from '../header/Header';

const getVerificationId = history => history.location.pathname.split('/verify/')[1];

const verify = async (history) => {
  try {
    const id = getVerificationId(history);
    const verifyUrl = `http://vidar-ah-backend-production.herokuapp.com/api/v1/verify/${id}`;
    const { success } = await axios.get(verifyUrl);
    if (success) history.push('/profile');
  } catch (err) {
    return false;
  }
};

const VerifyEmail = ({ history }) => (
  <div className="purple-gradient-bg">
    <Container>
      <Header location={history.location.pathname} />
    </Container>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
          <h3>Welcome to Authors' Haven</h3>
          <p>{(verify(history)) ? '' : 'Error verifying user'}</p>
        </Col>
      </Row>
    </Container>
  </div>
);

VerifyEmail.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default VerifyEmail;
