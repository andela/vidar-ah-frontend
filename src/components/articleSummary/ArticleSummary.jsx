import React from 'react';
import {
  Card
} from 'react-bootstrap';
import './articleSummary.scss';

const ArticleSummary = (props) => {
  const { src, header, text } = props;
  return (
    <Card style={{ width: '18rem' }} className="outline">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleSummary;
