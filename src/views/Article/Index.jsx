import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import {
  Container,
  CardDeck,
  Row,
  Col,
  Dropdown
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
  getRecommendedArticles,
  likeArticleRequest,
  dislikeArticleRequest
} from '../../redux/actions/articles';
import Footer from '../../components/footer/Index';
import Header from '../../components/header/Index';
import Loader from '../../components/loader/Index';
import './article.scss';
import Comment from '../../components/comment/Index';
import ViewComment from '../../components/viewComment/Index';
import ReportModal from '../../components/reportArticle/Index';

const Article = (props) => {
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState({
    modalIsVisible: false,
    dropDownIsVisible: false
  });

  const {
    articlePayload,
    getArticle,
    getRecommendedArticles: getArticles,
    isLoggedIn
  } = props;

  const {
    likeCount,
    dislikeCount,
    userReaction,
    article
  } = articlePayload;

  let image = 'https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg';
  if (article) {
    const { images } = article;
    if (images && images.length > 0) {
      const [url] = images;
      image = url;
    }
  }
  const {
    match: {
      params: { slug }
    }
  } = props;
  const shareUrl = `https://vidar-ah-frontend-staging.herokuapp.com/articles/${slug}`;
  const optionIcon = 'https://img.icons8.com/ios/35/000000/menu-2.png';

  const handleScroll = () => {
    const { innerHeight } = window;
    const { documentElement: { scrollTop } } = document;
    const bodyElement = document.getElementById('article-container');
    const clientDocument = bodyElement.getBoundingClientRect();
    const heightIsHtml = clientDocument.height;
    const scrollMax = Math.ceil(heightIsHtml - innerHeight);
    setProgress((scrollTop / scrollMax) * 100);
  };

  useEffect(() => {
    getArticle(slug);
    getArticles();
    window.addEventListener('scroll', handleScroll);
  }, [slug]);


  if (!article) return <Loader />;
  const sendLikeRequest = async (event) => {
    event.preventDefault();
    await props.likeArticleRequest(slug);
    getArticle(slug);
  };

  const sendDislikeRequest = async (event) => {
    event.preventDefault();
    await props.dislikeArticleRequest(slug);
    getArticle(slug);
  };

  const likeImg = (userReaction === 'like') ? 'https://res.cloudinary.com/jessam/image/upload/v1556008738/like_active.png' : 'https://res.cloudinary.com/jessam/image/upload/v1556008738/like_inactive.png';

  const disikeImg = (userReaction === 'dislike') ? 'https://res.cloudinary.com/jessam/image/upload/v1556008738/dislike_active.png' : 'https://res.cloudinary.com/jessam/image/upload/v1556008738/dislike_inactive.png';

  return (
    <div id="article-container">
      <LoadingBar
        progress={progress}
        height={5}
        color="#8932b4"
        onLoaderFinished={() => setProgress(0)}
        onRef={ref => ref}
      />
      <Header type="purple" />
      <Container>
        <ReportModal
          visible={state.modalIsVisible}
          closeModal={() => setState({ modalIsVisible: false, dropDownIsVisible: false })}
          articleSlug={article.slug}
        />
        <ArticleTitle title={article.title} />
        <ArticleDescription description={article.description} />
        {
          image ? (
            <ImageContainer
              src={image}
            />
          ) : null
        }
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
          <Col>
            <img
              alt="img"
              className="options"
              src={optionIcon}
              onClick={() => setState({ ...state, dropDownIsVisible: true })}
            />
            <Dropdown.Menu
              show={state.dropDownIsVisible}
              rootCloseEvent="click"
            >
              <Dropdown.Item
                onClick={() => setState({ modalIsVisible: true, dropDownIsVisible: false })}
              >
                Report Article
              </Dropdown.Item>
            </Dropdown.Menu>
          </Col>
          {
          (isLoggedIn) ? (
            <>
              <Col className="reactions">
                <a href="#" onClick={sendLikeRequest}>
                  <img src={likeImg} alt="like" />
                </a>
                {likeCount}
              </Col>
              <Col className="reactions">
                <a href="#" onClick={sendDislikeRequest}>
                  <img src={disikeImg} alt="dislike" />
                </a>
                {dislikeCount}
              </Col>
            </>
          ) : (
            <>
              <Col className="reactions">
                <img src={likeImg} alt="like" />
                {likeCount}
              </Col>
              <Col className="reactions">
                <img src={disikeImg} alt="dislike" />
                {dislikeCount}
              </Col>
            </>
          )
        }
        </Row>
      </Container>

      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <div><h3>Comments</h3></div>
          <Comment slug={slug} />
          { article.Comments ? (
            article.Comments.map(comment => (
              <ViewComment
                key={comment.id}
                comment={comment.comment}
                time={comment.createdAt}
                id={comment.id}
                slug={comment.articleSlug}
                userId={comment.userId} />
            ))) : null
          }
        </Col>
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
              name={recArticle.name}
            />
          ))}
        </CardDeck>
      </Container>
      <Footer />
    </div>
  );
};

Article.propTypes = {
  articlePayload: PropTypes.instanceOf(Object),
  getArticle: PropTypes.func.isRequired,
  recommendedArticles: PropTypes.array.isRequired,
  getRecommendedArticles: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  likeArticleRequest: PropTypes.func.isRequired,
  dislikeArticleRequest: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool
};

Article.defaultProps = {
  articlePayload: { article: { Comments: [] } },
  isLoggedIn: false
};

const mapStateToProps = state => ({
  articlePayload: state.articleReducer.article,
  recommendedArticles: state.articleReducer.recommendedArticles,
  isLoggedIn: state.authReducer.isLoggedIn
});
const mapDispatchToProps = dispatch => ({
  getArticle: slug => dispatch(getArticleRequest(slug)),
  getRecommendedArticles: () => dispatch(getRecommendedArticles()),
  likeArticleRequest: slug => dispatch(likeArticleRequest(slug)),
  dislikeArticleRequest: slug => dispatch(dislikeArticleRequest(slug))
});

const ConnectedArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

export default ConnectedArticle;
