import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Alert } from 'react-bootstrap';
import Create from '../../components/CreateForms';
import Preview from '../../components/PreviewArticle';
import { validateArticle } from '../../utils/validator';
import { editArticle } from '../../redux/actions/articles';
import Header from '../../components/Header';

const EditArticle = (props) => {
  const { user, article } = props;
  const [articleData, setArticleData] = useState({
    title: article.title,
    description: article.description,
    body: article.body,
    slug: article.slug,
    image: article.images && article.images.length > 0 ? article.images[0] : '',
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


  const completeArticleUpdate = async () => {
    setState({ ...state, errors: [], loading: true });
    const res = await props.editArticle(articleData);
    const { errors: errorsArr } = res;
    setState({ ...state, loading: false });
    if (errorsArr) {
      setState({ ...state, errors: errorsArr });
    } else {
      setState({ ...state, successMessage: res.message });
      props.history.push(`/articles/${article.slug}`);
    }
  };

  const runValidators = (event) => {
    event.preventDefault();
    const validationErrors = validateArticle(articleData);
    if (validationErrors.length > 0) {
      return setState({ ...state, component: 'write', errors: validationErrors });
    }
    return completeArticleUpdate();
  };

  const updateInput = (event) => {
    if (!(event.target.name === 'image')) {
      return setArticleData({ ...articleData, [event.target.name]: event.target.value });
    }
    return setArticleData({ ...articleData, image: event.target.files[0] });
  };

  const cancelArticle = () => {
    props.history.push(`/articles/${article.slug}`);
  };

  const renderErrors = errorsArr => errorsArr.map(error => (
    <Alert className="errorMsg" key={error} variant="danger">{error}</Alert>
  ));

  const renderSuccess = message => (message ? <Alert variant="success">{message}</Alert> : null);
  return (
    <div className="create-article-container">
      <Container>
        <Header type="purple" history={props.history} />
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
                onCancel={cancelArticle}
                article={articleData}
                user={user}
              />
            )
            : (
              <Preview
                onSubmit={runValidators}
                onDelete={cancelArticle}
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


EditArticle.propTypes = {
  editArticle: PropTypes.func.isRequired,
  history: PropTypes.object,
  user: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
};

EditArticle.defaultProps = {
  history: {},
};

const mapStateToProps = state => ({
  user: state.authReducer.currentUser,
  article: state.articleReducer.article.article,
});

export default connect(() => mapStateToProps, { editArticle })(EditArticle);
