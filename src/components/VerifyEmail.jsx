/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Header from './Header/index';


const VerifyEmail = (props) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { history, match: { params: { id } } } = props;

  const verify = async () => {
    try {
      const verifyUrl = `https://vidar-ah-backend-production.herokuapp.com/api/v1/verify/${id}`;
      await axios.get(verifyUrl);
      setSuccess(true);
      history.push('/login');
    } catch (err) {
      setError(err.response.data.errors[0]);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <div className="purple-gradient-bg">
      <Container>
        <Header location={history.location.pathname} history={history} />
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
            {
            success
              ? <h3 className="verify-login">Email verified successfully. Please Login to continue.</h3>
              : <h3>{error}</h3>
          }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

VerifyEmail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default VerifyEmail;
