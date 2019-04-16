import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Header from '../header/Header';


const VerifyEmail = (props) => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const verify = async () => {
    try {
      const { match: { params: { id } } } = props;
      const verifyUrl = `https://vidar-ah-backend-production.herokuapp.com/api/v1/verify/${id}`;
      const { data } = await axios.get(verifyUrl);
      setSuccess(true);
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
        <Header />
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
            {
            success
              ? <h3>Email verified successfully. Please Login to continue.</h3>
              : <h3>{error}</h3>
          }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

VerifyEmail.propTypes = {
};

export default VerifyEmail;
