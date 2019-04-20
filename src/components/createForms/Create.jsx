import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import { Container, Row, Col } from 'react-bootstrap';

import Button from '../button/Index';
import '../../views/createArticle/createArticle.scss';
import setArticleImage from '../../utils/setArticleImage';

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
    onCancel,
    article,
    user,
  } = props;
  const updateEditor = text => onChangeText({ target: { name: 'body', value: text } });

  const image = setArticleImage(article);

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
        <img
          alt="placeholder"
          src={image}
          className="img-placeholder"
        />
        <button className="btn btn-upload-img">Add Image</button>
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
              <Button onClick={onCancel} text="Cancel" />
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
  onCancel: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Create;
