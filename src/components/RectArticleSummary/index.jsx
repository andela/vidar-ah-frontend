import React from 'react';
import {
  Card,
  Row,
  Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import timeCalc from '../../utils/timeCalc';
import nameSplit from '../../utils/nameSplit';

const RectArticleSummary = (props) => {
  const {
    url, header, name, time
  } = props;
  const hrs = timeCalc(time);
  const firstName = nameSplit(name);

  return (
    <Card style={{ }} className="card-outline">
      <Card.Body>
        <Link className="link" to={`${url}`}>
          <h5>{header}</h5>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row className="small">
          <Col sm={1}><img alt="user" src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1554891501/user-shape_1_1.png" /></Col>
          <Col sm={6}>{firstName}</Col>
          <Col>
            {hrs}
            {' '}
            h
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

RectArticleSummary.propTypes = {
  header: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  url: PropTypes.string.isRequired
};

RectArticleSummary.defaultProps = {
  header: '',
  name: '',
  time: '',
};

export default RectArticleSummary;
