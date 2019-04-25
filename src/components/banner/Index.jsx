/* eslint-disable import/no-named-as-default */
import { connect } from 'react-redux';
import React from 'react';
import './banner.scss';
import {
  Col,
  Row,
  Container
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from '../button/Index';
import HeaderText from '../headerText/Index';
import Header from '../header/Index';

const Banner = ({ history, showButton, authStatus }) => (
  <section>
    <div className="cont">
      <Header history={history} />
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <HeaderText textHeader="All your thoughts in one place" textBody="This is a fertile ground for the creative mind. Plant your words as seeds and watch them blossom. Feel free to also harvest from the this garden of words and wisdom." />
          </Col>
        </Row>
        <div className="button">
          {showButton && authStatus ? (
            <Button
              text="Create post"
              onClick={() => history.push('/create-article')}
            />
          ) : (
            <Button
              text="Get Started"
              onClick={() => history.push('/signup')}
            />
          )}
        </div>
      </Container>
    </div>
  </section>
);

Banner.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  authStatus: PropTypes.bool.isRequired,
  showButton: PropTypes.bool
};

Banner.defaultProps = {
  showButton: true
};

const mapStateToProps = state => ({
  authStatus: state.authReducer.isLoggedIn
});

export default connect(() => mapStateToProps, {})(Banner);
