import React, { useEffect } from 'react';
import {
  Container,
  Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import ArticleTitle from '../../components/articleTitle/ArticleTitle';
import ArticleBody from '../../components/articleBody/ArticleBody';
import ImageContainer from '../../components/imageContainer/ImageContainer';
import ArticleSummary from '../../components/articleSummary/ArticleSummary';
import ArticleDescription from '../../components/articleDescription/ArticleDescription';
import { getArticleRequest } from '../../redux/actions/articles';
import history from '../../helpers/history';

const Article = (props) => {
  const { article, getArticle } = props;

  useEffect(() => {
    getArticle(`${article}/:slug`);
  }, []);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article-container">
      <Container>
        <Header location={history.location.pathname} />
      </Container>
      <Container>
        <ArticleTitle title={article.title} />
        <ArticleDescription description={article.description} />
        <ImageContainer src={article.images[0]} />
        <ArticleBody body={article.body} />
      </Container>
      <hr />
      <Container>
        <Row>
          <ArticleSummary src="https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg" title="Writing better Reducers with React and Typescript 3.4" />
        </Row>
      </Container>
    </div>
  );
};
Article.propTypes = {
  article: PropTypes.instanceOf(Object),
  getArticle: PropTypes.func.isRequired
};

Article.defaultProps = {
  article: null
};

const mapStateToProps = state => ({
  article: state.articleReducer.article,
});

const mapDispatchToProps = dispatch => ({
  getArticle: slug => dispatch(getArticleRequest(slug)),
});

const ConnectedArticle = connect(mapStateToProps, mapDispatchToProps)(Article);
export default ConnectedArticle;
