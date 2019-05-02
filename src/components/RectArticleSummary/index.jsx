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
  const userImage = "https://res.cloudinary.com/dqyytlxwe/image/upload/v1554891501/user-shape_1_1.png";

  return (
    <Link className="link-card" to={`${url}`}>
      <Card style={{}} className="card-outline">
        <Card.Body>
          <h5>{header}</h5>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Row className="small">
            <Col className="col-2"><img alt="user" src={userImage} /></Col>
            <Col>{firstName}</Col>
            <Col>
              {hrs}
              {' '}
              h
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
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
