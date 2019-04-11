import React from 'react';
import {
  Card,
  Row,
  Col
} from 'react-bootstrap';
import './index.scss';
import PropTypes from 'prop-types';

const ArticleSummary = (props) => {
  const {
    src, header, name, time
  } = props;
  const date = new Date(time).getTime();
  const now = new Date().getTime();
  const hrs = Math.floor((now - date) / 1000 / 60 / 60);

  return (
    <Card className="card-outline">
      <Card.Img style={{ height: '8rem' }} variant="top" src={src} />
      <Card.Body>
        <Card.Text className="card-pad"><h4>{header}</h4></Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col md={1}><img alt="user" src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1554891501/user-shape_1_1.png" /></Col>
          <Col md={6}><small>{name}</small></Col>
          <Col md={5.5}>
            <small>
              {hrs}
              {' '}
            hours ago
              {' '}
            </small>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

ArticleSummary.propTypes = {
  src: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default ArticleSummary;
