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
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <img src={src} alt="Pics" />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageContainer;

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
};
