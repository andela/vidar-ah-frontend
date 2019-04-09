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
  const { user } = props;
  const [articleData, setArticleData] = useState({
    title: null,
    description: null,
    body: null,
    image: null
  });
  const [state, setState] = useState({
    component: 'write',
    loading: false,
    errors: [],
    successMessage: ''
  });

  const {
    component,
    loading,
    errors,
    successMessage
  } = state;

  async function completeArticleCreation() {
    setState({ ...state, errors: [], loading: true });
    const res = await props.createArticle(articleData);
    const { errors: errorsArr } = res;
    setState({ ...state, loading: false });
    if (errors) {
      setState({ ...state, errors: [errorsArr] });
    }
    setState({ ...state, successMessage: res.message });
    props.history.push(`/articles/${res.article.slug}`);
  }

  function runValidators(e) {
    e.preventDefault();
    const validatonErrors = validateArticle(articleData);
    if (errors.length > 0) {
      return setState({ ...state, component: 'write', errors: validatonErrors });
    }
    return completeArticleCreation();
  }

  function updateInput(e) {
    if (!(e.target.name === 'image')) {
      return setArticleData({ ...articleData, [e.target.name]: e.target.value });
    }
    return setArticleData({ ...articleData, image: e.target.files[0] });
  }

  function deleteArticle() {
    window.location = '/create-article';
  }

  function renderErrors(errorsArr) {
    return errorsArr.map(error => (
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
        {renderErrors(errors)}
        {renderSuccess(successMessage)}
      </Container>
      <div>
        {
          component === 'write'
            ? (
              <Create
                onChangeText={updateInput}
                onSubmit={() => setState({ ...state, component: 'preview' })}
                onDelete={deleteArticle}
                article={articleData}
                user={user || { fullname: 'Olaiuvne' }}
              />
            )
            : (
              <Preview
                onSubmit={runValidators}
                onDelete={deleteArticle}
                article={articleData}
                continueEdit={() => setState({ ...state, component: 'write' })}
                loading={loading}
              />
            )
        }
      </div>
    </div>
  );
}


CreateArticle.propTypes = {
  createArticle: PropTypes.func.isRequired,
  history: PropTypes.object,
  user: PropTypes.object.isRequired
};

CreateArticle.defaultProps = {
  history: {}
};

const mapStateToProps = state => ({
  user: state.authReducer.currentUser
});

export default connect(() => mapStateToProps, { createArticle })(CreateArticle);
