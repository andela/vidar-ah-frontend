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
import nameSplit from '../../utils/nameSplit';

const ArticleSummary = (props) => {
  const {
    src, header, time, url, name
  } = props;
  const hrs = timeCalc(time);
  const firstName = nameSplit(name);
  const imageSource = src || 'https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg';

  return (
    <Link className="link-card" to={`${url}`}>
      <Card className="card-outline" style={{ height: '16rem' }}>
        <Card.Img style={{ height: '7rem' }} fluid="true" variant="top" src={imageSource} />
        <div className="summary-card-body">
          <Card.Text className="card-pad">{header}</Card.Text>
        </div>
        <Card.Footer className="text-muted">
          <Row className="small">
            <Col className="p-0"><img alt="user" src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1554891501/user-shape_1_1.png" /></Col>
            <Col className="p-0 col-6">
              {firstName}
            </Col>
            <Col className="p-0">
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
    </Link>
  );
};

ArticleSummary.propTypes = {
  src: PropTypes.string,
  header: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  name: PropTypes.string,
  url: PropTypes.string.isRequired
};

ArticleSummary.defaultProps = {
  name: '',
  src: 'https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg'
};

export default ArticleSummary;
