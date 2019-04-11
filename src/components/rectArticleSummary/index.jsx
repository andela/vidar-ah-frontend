import React from 'react';
import {
  Card,
  Row,
  Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const RectArticleSummary = (props) => {
  const { header, name, time } = props;
  const date = new Date(time).getTime();
  const now = new Date().getTime();
  const hrs = Math.floor((now - date) / 1000 / 60 / 60);

  return (
    <Card style={{ }} className="card-outline">
      <Card.Body>
        <Card.Text><h4>{header}</h4></Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col sm={1}><img alt="user" src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1554891501/user-shape_1_1.png" /></Col>
          <Col sm={6}><small>{name}</small></Col>
          <Col>
            <small>
              {hrs}
              {' '}
            hours ago
            </small>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

RectArticleSummary.propTypes = {
  header: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default RectArticleSummary;
