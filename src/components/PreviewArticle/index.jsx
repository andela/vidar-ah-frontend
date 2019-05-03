import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ArticleTitle from '../ArticleTitle';
import ArticleBody from '../ArticleBody';
import ImageContainer from '../ImageContainer';
import '../../views/CreateArticle/createArticle.scss';
import Loader from '../Loader';
import setArticleImage from '../../utils/setArticleImage';

const Preview = (props) => {
  const {
    onSubmit, article, continueEdit, loading
  } = props;
  const image = setArticleImage(article);
  return (
    <div>
      {loading && <Loader />}
      <div className="form-field">
        <div className="form text-center">
          <ArticleTitle title={article.title || ''} />
          <ImageContainer
            src={image}
          />
          <ArticleBody body={article.body || ''} />
        </div>
        <div className="center-button center-button-preview-form">
          <Button text="Edit" onClick={continueEdit} className="center-button-btn" />
          <Button onClick={onSubmit} text="Publish" className="center-button-btn" />
        </div>
      </div>
    </div>
  );
};

Preview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  continueEdit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Preview;
