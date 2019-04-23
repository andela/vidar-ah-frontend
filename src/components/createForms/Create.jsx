/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import { Container, Row, Col } from 'react-bootstrap';

import Button from '../button/Index';
import '../../views/createArticle/createArticle.scss';

const fields = [
  {
    className: 'form-title', type: 'text', name: 'title', placeholder: 'Title'
  },
  {
    className: 'form-description', type: 'text', name: 'description', placeholder: 'Description'
  }
];

const Create = (props) => {
  const {
    onChangeText,
    onSubmit,
    onDelete,
    article,
    user
  } = props;
  const updateEditor = text => onChangeText({ target: { name: 'body', value: text } });

  return (
    <div className="form-field">
      {
        fields.map(field => (
          <input
            key={field.name}
            className={field.className}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            onChange={onChangeText}
            value={article[field.name] || ''}
          />
        ))
      }
      <div className="upload-btn-wrapper">
        <button className="btn">Add Image</button>
        <input
          type="file"
          name="image"
          onChange={onChangeText}
        />
      </div>
      <Container>
        <Row className="p-2">
          <Col>
            <span>{user.fullname}</span>
          </Col>
          <Col>{new Date(Date.now()).toLocaleDateString()}</Col>
        </Row>
      </Container>
      <ReactQuill
        value={article.body}
        theme="snow"
        onChange={updateEditor}
        className="form-body"
      />
      <div className="center-button">
        <Container>
          <Row>
            <Col md={{ span: 1, offset: 4 }}>
              <Button text="Preview" onClick={onSubmit} type="solid" />
            </Col>
            <Col md={{ span: 1, offset: 1 }}>
              <Button onClick={onDelete} text="Delete" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

Create.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Create;
