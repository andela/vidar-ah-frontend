/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Header from './header/Header';

const CheckEmail = ({ history, data }) => (
  <div className="purple-gradient-bg">
    <Container>
      <Header location={history.location.pathname} />
    </Container>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="form-black-bg">
          {data.user && <h1>Hi {data.user.name}</h1>}
          <h3>Welcome to Authors' Haven</h3>
          <p> Check your email to verify your account</p>
        </Col>
      </Row>
    </Container>
  </div>
);

CheckEmail.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({ authReducers: { data } }) => ({ data });

export default connect(mapStateToProps)(CheckEmail);
