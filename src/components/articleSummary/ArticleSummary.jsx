import React from 'react';
import {
  Card,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './articleSummary.scss';


const ArticleSummary = (props) => {
  const {
    src, header, time, slug
  } = props;
  const date = new Date(time).getTime();
  const now = new Date().getTime();
  const hrs = Math.floor((now - date) / 1000 / 60 / 60);
  const imageSource = src || 'https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg';

  return (
    <Card className="card-outline">
      <Card.Img className="card-image" variant="top" src={imageSource} />
      <Card.Body>
        <Link className="link" to={`/articles/${slug}`}>
          <Card.Text className="card-pad">{header}</Card.Text>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col md={1}><img alt="user" src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1554891501/user-shape_1_1.png" /></Col>
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
  time: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default ArticleSummary;
