/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Alert } from 'react-bootstrap';
import Create from '../../components/createForms/Create';
import Preview from '../../components/previewArticle/Preview';
import { validateArticle } from '../../utils/validator';
import { createArticle } from '../../redux/actions/articles';
import Header from '../../components/header/Header';
import './createArticle.scss';

function CreateArticle(props) {
  const [articleData, setArticleData] = useState({
    title: null,
    description: null,
    body: null
  });
  const [component, setComponent] = useState('write');
  const [loading, setLoading] = useState(false);
  const [errorsArray, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  async function completeArticleCreation() {
    setLoading(true);
    setErrors([]);
    const res = await props.createArticle(articleData);
    const { errors } = res;
    setLoading(false);
    if (errors) {
      setErrors(errors);
    }
    setSuccessMessage(res.message);
    props.history.push(`/articles/${res.article.slug}`);
  }

  function runValidators(e) {
    e.preventDefault();
    const errors = validateArticle(articleData);
    if (errors.length > 0) {
      setComponent('write');
      return setErrors(errors);
    }
    return completeArticleCreation();
  }

  function updateInput(e) {
    if (!(e.target.name === 'images')) {
      return setArticleData({ ...articleData, [e.target.name]: e.target.value });
    }
    return setArticleData({ ...articleData, images: e.target.files[0] });
  }

  function deleteArticle() {
    window.location = '/create-article';
  }

  function renderErrors(errors) {
    return errors.map(error => (
      <Alert key={error} variant="danger">{error}</Alert>
    ));
  }

  function renderSuccess(message) {
    return message ? <Alert variant="success">{message}</Alert> : null;
  }

  return (
    <div className="create-article-container">
      <Container>
        <Header type="purple" />
        {renderErrors(errorsArray)}
        {renderSuccess(successMessage)}
      </Container>
      <div>
        {
          component === 'write'
            ? (
              <Create
                onChangeText={updateInput}
                onSubmit={() => setComponent('preview')}
                onDelete={deleteArticle}
                article={articleData}
              />
            )
            : (
              <Preview
                onSubmit={runValidators}
                onDelete={deleteArticle}
                article={articleData}
                continueEdit={() => setComponent('write')}
                loading={loading}
              />
            )
        }
      </div>
    </div>
  );
}


CreateArticle.propTypes = {
  createArticle: PropTypes.func.isRequired
};

export default connect(() => ({}), { createArticle })(CreateArticle);
