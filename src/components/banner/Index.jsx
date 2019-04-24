/* eslint-disable import/no-named-as-default */
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

export default function Banner({ history }) {
  return (
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
            <Button
            text="Get Started"
            onClick={() => history.push('/signup')} // eslint-disable-line react/jsx-no-bind
            />
          </div>
        </Container>
      </div>
    </section>
  );
}

Banner.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
