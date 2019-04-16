import React from 'react';
import {
  Card,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './articleSummary.scss';
import timeCalc from '../../utils/timeCalc';

const ArticleSummary = (props) => {
  const {
    src, header, time, url, name
  } = props;
  const hrs = timeCalc(time);
  const imageSource = src || 'https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg';

  return (
    <Card className="card-outline" style={{ height: '16rem' }}>
      <Card.Img style={{ height: '7rem' }} fluid variant="top" src={imageSource} />
      <div className="summary-card-body">
        <Link className="link" to={`${url}`}>
          <Card.Text className="card-pad">{header}</Card.Text>
        </Link>
      </div>
      <Card.Footer className="text-muted">
        <Row className="small">
          <Col sm={2} className="p-0"><img alt="user" src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1554891501/user-shape_1_1.png" /></Col>
          <Col sm={7} className="p-0">
            {name}
          </Col>
          <Col sm={3} className="p-0">
            <small>
              {hrs}
              {' '}
              h
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
  name: PropTypes.string,
  url: PropTypes.string.isRequired
};

ArticleSummary.defaultProps = {
  name: ''
};

export default ArticleSummary;
