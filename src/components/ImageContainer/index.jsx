import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

const ImageContainer = (props) => {
  const { src } = props;

  return (
    <Container className="image-container">
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <Image fluid="true" src={src} style={{ width: '80%', height: '100%' }} />
        </Col>
      </Row>
    </Container>
  );
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired
};

export default ImageContainer;
