/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Alert, Row, Col } from 'react-bootstrap';
import Button from '../button/Index';
import { createComment } from '../../redux/actions/comments';
import { getArticleRequest } from '../../redux/actions/articles';

const Comment = (props) => {
  const [state, setState] = useState({
    comment: '',
  });

  const [errors, setErrors] = useState([]);

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  const onSubmit = async (value) => {
    const response = await props.createComment(props.slug, value);

    if (response.status === 401) {
      return setErrors(['Please login and try again.']);
    }

    if (response.status !== 205) {
      return setErrors(['An error occured. Please try again later']);
    }

    if (response.status === 205) {
      props.getArticleRequest(props.slug);
      setState({ comment: '' });
    }
  };

  return (
    <div className="comment-test">
      <Row><Col md={{ span: 12 }}>{renderErrors(errors)}</Col></Row>
      <ReactQuill theme="snow" value={state.comment} onChange={(value) => { setState({ comment: value }); }} />
      <Button text="Comment" onClick={() => { onSubmit(state.comment); }} className="yellow-button-comment" />
    </div>
  );
};


Comment.propTypes = {
  slug: PropTypes.string.isRequired,
  getArticleRequest: PropTypes.func.isRequired,
  createComment: PropTypes.func.isRequired,
};
export default connect(() => ({}), { createComment, getArticleRequest })(Comment);
