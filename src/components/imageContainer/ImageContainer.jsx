import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ImageContainer = (props) => {
  const { src } = props;

  return (
    <Container className="image-container">
      <Row className="justify-content-center">
        <Col className="text-center">
          <img src={src} alt="Pics" />
        </Col>
      </Row>
    </Container>
  );
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired
};

export default ImageContainer;
