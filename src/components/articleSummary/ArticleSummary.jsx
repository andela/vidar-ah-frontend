import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardDeck
} from 'react-bootstrap';
import './articleSummary.scss';

const ArticleSummary = (props) => {
  const { src, title } = props;
  return (
    <>
      <h3>Also recommended for you</h3>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">March 30 . 5 mins read</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Oct 5, 2018 . 8 mins read</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Feb 24 . 7 mins read</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </>
  );
};

ArticleSummary.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ArticleSummary;
