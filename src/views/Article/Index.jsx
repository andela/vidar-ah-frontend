/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import {
  Container,
  CardDeck,
  Row,
  Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  FacebookShareCount,
  LinkedinShareCount,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  WhatsappIcon,
  EmailShareButton
} from 'react-share';
import { connect } from 'react-redux';
import ArticleTitle from '../../components/articleTitle/Index';
import ArticleBody from '../../components/articleBody/Index';
import ImageContainer from '../../components/imageContainer/Index';
import ArticleSummary from '../../components/articleSummary/Index';
import ArticleDescription from '../../components/articleDescription/Index';
import {
  getArticleRequest,
  getRecommendedArticles
} from '../../redux/actions/articles';
import Footer from '../../components/footer/Index';
import Loader from '../../components/loader/Index';
import './article.scss';

const Article = (props) => {
  const { article, getArticle, getRecommendedArticles: getArticles } = props;
  const {
    match: {
      params: { slug }
    }
  } = props;
  const shareUrl = `https://vidar-ah-frontend-staging.herokuapp.com/articles/${slug}`;
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
        <ImageContainer
          src={
            article.images[0]
            || 'https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg'
          }
        />
        <ArticleBody body={article.body} />
      </Container>
      <Container>
        <Row>
          <Col>
            <WhatsappShareButton
              url={shareUrl}
              title={article.title}
              separator=":"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </Col>
          <Col>
            <LinkedinShareButton
              url={shareUrl}
              title={article.title}
              windowWidth={750}
              windowHeight={600}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <LinkedinShareCount url={shareUrl}>
              {count => count}
            </LinkedinShareCount>
          </Col>
          <Col>
            <FacebookShareButton url={shareUrl} quote={article.title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <FacebookShareCount url={shareUrl}>
              {count => count}
            </FacebookShareCount>
          </Col>
          <Col>
            <TwitterShareButton url={shareUrl} title={article.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </Col>
          <Col>
            <EmailShareButton
              url={shareUrl}
              subject={article.title}
              body="body"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <h3>Also recommended for you</h3>
        <CardDeck>
          {props.recommendedArticles.map(recArticle => (
            <ArticleSummary
              key={recArticle.id}
              src={recArticle.images[0]}
              header={recArticle.title}
              url={`/articles/${recArticle.slug}`}
              time={recArticle.updatedAt}
            />
          ))}
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

const ConnectedArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

export default ConnectedArticle;
