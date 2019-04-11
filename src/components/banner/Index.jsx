import React from 'react';
import './index.scss';
import {
  Col,
  Row,
  Container
} from 'react-bootstrap';
import Button from '../button';
import HeaderText from '../headerText';
import Header from '../header';


export default function Banner() {
  return (
    <section>
      <div className="cont">
        <Header />
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <HeaderText textHeader="All your thoughts in one place" textBody="This is a fertile ground for the creative mind. Plant your words as seeds and watch them blossom. Feel free to also harvest from the this garden of words and wisdom." />
            </Col>
          </Row>
          <div className="button">
            <Button text="Get Started" link="/signup" />
          </div>
        </Container>
      </div>
    </section>
  );
}
