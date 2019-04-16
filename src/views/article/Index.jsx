/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import {
  Container,
  CardDeck
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleTitle from '../../components/articleTitle/Index';
import ArticleBody from '../../components/articleBody/Index';
import ImageContainer from '../../components/imageContainer/Index';
import ArticleSummary from '../../components/articleSummary/Index';
import ArticleDescription from '../../components/articleDescription/Index';
import { getArticleRequest, getRecommendedArticles } from '../../redux/actions/articles';
import Footer from '../../components/footer/Index';
import Loader from '../../components/loader/Index';


const Article = (props) => {
  const { article, getArticle, getRecommendedArticles: getArticles } = props;
  const { match: { params: { slug } } } = props;
  useEffect(() => {
    getArticle(slug);
    getArticles();
  }, [slug]);

  if (!article) return <Loader />;

  return (
    <div className="article-container">
      <Container>
        <ArticleTitle title={article.title} />
        <ArticleDescription description={article.description} />
        <ImageContainer src={article.images[0] || 'https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg'} />
        <ArticleBody body={article.body} />
      </Container>
      <hr />
      <Container>
        <h3>Also recommended for you</h3>
        <CardDeck>
          {
            props.recommendedArticles.map(recArticle => (
              <ArticleSummary
                key={recArticle.id}
                src={recArticle.images[0]}
                header={recArticle.title}
                url={`/articles/${recArticle.slug}`}
                time={recArticle.updatedAt}
              />
            ))
          }
        </CardDeck>
      </Container>
      <Footer />
    </div>
  );
};
Article.propTypes = {
  article: PropTypes.instanceOf(Object),
  getArticle: PropTypes.func.isRequired,
  recommendedArticles: PropTypes.array.isRequired,
  getRecommendedArticles: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

Article.defaultProps = {
  article: null
};

const mapStateToProps = state => ({
  article: state.articleReducer.article,
  recommendedArticles: state.articleReducer.recommendedArticles
});

const mapDispatchToProps = dispatch => ({
  getArticle: slug => dispatch(getArticleRequest(slug)),
  getRecommendedArticles: () => dispatch(getRecommendedArticles())
});

const ConnectedArticle = connect(mapStateToProps, mapDispatchToProps)(Article);
export default ConnectedArticle;
