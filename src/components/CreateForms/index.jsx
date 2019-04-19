import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import { Container, Row, Col } from 'react-bootstrap';

import Button from '../Button';
import '../../views/CreateArticle/createArticle.scss';

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
    // actionType,
  } = props;
  const updateEditor = text => onChangeText({ target: { name: 'body', value: text } });

  let image;


  if (!article.image) {
    image = 'https://via.placeholder.com/700x400';
  } else if (typeof article.image === 'string') {
    image = article.image;
  } else {
    image = URL.createObjectURL(article.image);
  }

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
          alt="image"
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
              {/* { (actionType === 'EDIT_ARTICLE')
                ? (<Button onClick={onDelete} text="Cancel" />)
                : (<Button onClick={onDelete} text="Delete" />)
              } */}
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
  // actionType: PropTypes.string,
};

// Create.defaultProps = {
//   actionType: 'CREATE_ARTICLE',
// };

export default Create;
