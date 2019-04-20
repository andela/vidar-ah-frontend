/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import {
  Container,
  CardDeck
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ArticleTitle from '../../components/articleTitle/Index';
import ArticleBody from '../../components/articleBody/Index';
import ImageContainer from '../../components/imageContainer/Index';
import ArticleSummary from '../../components/articleSummary/Index';
import ArticleDescription from '../../components/articleDescription/Index';
import { getArticleRequest, getRecommendedArticles } from '../../redux/actions/articles';
import Footer from '../../components/footer/Index';
import Loader from '../../components/loader/Index';
import Button from '../../components/button/Index';
import './article.scss';

import OptionModal from '../../components/modal';


const Article = (props) => {
  const defaultImg = 'https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg';
  const {
    article, getArticle, getRecommendedArticles: getArticles, userEmail
  } = props;
  const { match: { params: { slug } } } = props;
  const [modalState, setState] = useState({
    display: false
  });
  useEffect(() => {
    async function fetchData() {
      getArticle(slug);
      getArticles();
    }
    fetchData();
  }, [slug]);
  if (!article) return <Loader />;
  const { email: authorEmail } = article.author || { author: {} };

  const openModal = () => {
    setState({ ...modalState, display: true });
  };

  const hideModal = () => {
    setState({ display: false });
  };

  return (
    <div className="article-container">
      <Container>
        <OptionModal displayModal={modalState.display} closeModal={hideModal} />
        <ArticleTitle title={article.title} />
        <ArticleDescription description={article.description} />
        <ImageContainer src={(article.images && article.images[0]) || defaultImg} />
        <ArticleBody body={article.body} />
        {(authorEmail && userEmail === authorEmail)
        && (
        <div className="edit-delete-container">
          <Link className="link link-edit" to={`/edit-article/${article.slug}`}>Edit</Link>
          <Button text="Delete" onClick={openModal} />
        </div>
        )
          }
      </Container>
      <hr />
      <Container>
        <h3>Also recommended for you</h3>
        <CardDeck>
          {
            props.recommendedArticles.map(recArticle => (
              <ArticleSummary
                key={recArticle.id}
                src={recArticle.images[0] ? recArticle.images[0] : defaultImg}
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
  match: PropTypes.object.isRequired,
  userEmail: PropTypes.string,
};

Article.defaultProps = {
  article: null,
  userEmail: ''
};

const mapStateToProps = state => ({
  userEmail: state.authReducer.currentUser.email,
  article: state.articleReducer.article,
  recommendedArticles: state.articleReducer.recommendedArticles
});

const mapDispatchToProps = dispatch => ({
  getArticle: slug => dispatch(getArticleRequest(slug)),
  getRecommendedArticles: () => dispatch(getRecommendedArticles())
});

const ConnectedArticle = connect(mapStateToProps, mapDispatchToProps)(Article);
export default ConnectedArticle;
