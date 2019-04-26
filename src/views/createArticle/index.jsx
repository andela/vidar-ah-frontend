/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Alert } from 'react-bootstrap';
import Create from '../../components/createForms/Create';
import Preview from '../../components/previewArticle/Preview';
import { validateArticle } from '../../utils/validator';
import { createArticle } from '../../redux/actions/articles';
import Header from '../../components/header/Index';
import './createArticle.scss';

const CreateArticle = (props) => {
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

  const completeArticleCreation = async () => {
    setState({ ...state, errors: [], loading: true });
    const res = await props.createArticle(articleData);
    const { errors: errorsArr } = res;
    setState({ ...state, loading: false });
    if (errorsArr) {
      setState({ ...state, errors: errorsArr });
    }
    setState({ ...state, successMessage: res.message });
    props.history.push(`/articles/${res.article.slug}`);
  };

  const runValidators = (event) => {
    event.preventDefault();
    const validationErrors = validateArticle(articleData);
    if (validationErrors.length > 0) {
      return setState({ ...state, component: 'write', errors: validationErrors });
    }
    return completeArticleCreation();
  };

  const updateInput = (event) => {
    if (!(event.target.name === 'image')) {
      return setArticleData({ ...articleData, [event.target.name]: event.target.value });
    }
    return setArticleData({ ...articleData, image: event.target.files[0] });
  };

  const deleteArticle = () => {
    props.history.push('/');
  };

  const renderErrors = errorsArr => errorsArr.map(error => (
    <Alert key={error} variant="danger">{error}</Alert>
  ));

  const renderSuccess = message => (message ? <Alert variant="success">{message}</Alert> : null);

  return (
    <div className="create-article-container">
      <Header type="purple" />
      <Container>
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
                user={user}
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
};


CreateArticle.propTypes = {
  createArticle: PropTypes.func.isRequired,
  history: PropTypes.object,
  user: PropTypes.object.isRequired
};

CreateArticle.defaultProps = {
  history: {},
};

const mapStateToProps = state => ({
  user: state.authReducer.currentUser
});

export default connect(() => mapStateToProps, { createArticle })(CreateArticle);
