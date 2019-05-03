import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import {
  Container,
  Row,
  Col,
  CardColumns
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
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
import ArticleTitle from '../../components/ArticleTitle/index';
import ArticleBody from '../../components/ArticleBody/index';
import ImageContainer from '../../components/ImageContainer/index';
import ArticleSummary from '../../components/ArticleSummary/index';
import ArticleDescription from '../../components/ArticleDescription/index';
import {
  getArticleRequest,
  getRecommendedArticles,
  likeArticleRequest,
  dislikeArticleRequest
} from '../../redux/actions/articles';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import Loader from '../../components/Loader/index';
import './article.scss';
import Comment from '../../components/Comment/index';
import ViewComment from '../../components/ViewComment/index';
import ReportModal from '../../components/ReportArticle/index';
import AlertModal from '../../components/AlertModal/index';
import { followUser, unFollowUser } from '../../redux/actions/follow';

const Article = (props) => {
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


  const [progress, setProgress] = useState(0);
  const [state, setState] = useState({
    modalIsVisible: false,
    dropDownIsVisible: false
  });
  const [alertMessage, setAlertMessage] = useState({
    message: '',
    visibility: false
  });

  let userId;
  let image = 'https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg';
  if (article) {
    const { userId: userIdToFollow } = article;
    userId = userIdToFollow;
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


  const toFollowUser = (id) => {
    props.followUser(id).then((response) => {
      setAlertMessage({ message: `${response}`, visibility: true });
    });
  };

  const toUnFollowUser = (id) => {
    props.unFollowUser(id).then((response) => {
      setAlertMessage({ message: `${response}`, visibility: true });
    });
  };

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
          className="report-test"
          visible={state.modalIsVisible}
          closeModal={() => setState({ modalIsVisible: false, dropDownIsVisible: false })}
          articleSlug={article.slug}
        />

        {(alertMessage.message) && (
          <AlertModal
            message={alertMessage.message}
            show={alertMessage.visibility}
            closeAlertModal={() => setAlertMessage({ message: '', visibility: false })}
            variant="primary"
          />
        )}

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
      <Container className="fab-likes" lg={2} sm={2}>
        <Row className="icons-width-set" lg={1} sm={1}>
          <Col lg={2} sm={2}>
            <Row className="button-margin">
              <WhatsappShareButton
                url={shareUrl}
                title={article.title}
                separator=":"
                className="icon-sizes"
              >
                <WhatsappIcon className="icon-sizes" round />
              </WhatsappShareButton>
            </Row>
            <Row className="button-margin">
              <LinkedinShareButton
                url={shareUrl}
                title={article.title}
                windowWidth={750}
                windowHeight={600}
                className="icon-sizes"
              >
                <LinkedinIcon className="icon-sizes" round />
              </LinkedinShareButton>
            </Row>
            <Row className="button-margin">
              <FacebookShareButton url={shareUrl} quote={article.title} className="icon-sizes">
                <FacebookIcon className="icon-sizes" round />
              </FacebookShareButton>
            </Row>
            <Row className="button-margin">
              <TwitterShareButton url={shareUrl} title={article.title} className="icon-sizes">
                <TwitterIcon className="icon-sizes" round />
              </TwitterShareButton>
            </Row>
            <Row className="button-margin">
              <EmailShareButton
                url={shareUrl}
                subject={article.title}
                body="body"
                className="icon-sizes"
              >
                <EmailIcon className="icon-sizes" round />
              </EmailShareButton>
            </Row>
          </Col>
          <Col lg={2} sm={2}>
            {
              (isLoggedIn) ? (
                <>
                  <Row className="button-margin">
                    <a href="#" onClick={sendLikeRequest}>
                      <img src={likeImg} alt="like" className="icon-sizes-reaction icon-sizes" />
                    </a>
                    {likeCount}
                  </Row>
                  <Row className="button-margin">
                    <a href="#" onClick={sendDislikeRequest}>
                      <img src={disikeImg} alt="dislike" className="icon-sizes-reaction icon-sizes" />
                    </a>
                    {dislikeCount}
                  </Row>
                </>
              ) : (
                <>
                  <Row className="button-margin">
                    <img src={likeImg} className="icon-sizes-reaction icon-sizes" alt="like" />
                    {likeCount}
                  </Row>
                  <Row className="button-margin">
                    <img src={disikeImg} alt="dislike" className="icon-sizes-reaction icon-sizes" />
                    {dislikeCount}
                  </Row>
                </>
              )
            }
            <Row className="button-margin">
              <img
                title="Report article"
                src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1556209281/police.png"
                alt="Report article"
                className="icon-sizes report-icon"
                url={shareUrl}
                subject={article.title}
                body="body"
                onClick={() => setState({ modalIsVisible: true })}
              />
            </Row>
            <Row className="button-margin">
              <img
                title="Follow article author"
                src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1556208670/follower_1.png"
                alt="Follow icon"
                className="icon-sizes follow-icon"
                onClick={() => toFollowUser(userId)}
              />
            </Row>
            <Row className="button-margin">
              <img
                title="Unfollow article author"
                src="https://res.cloudinary.com/dqyytlxwe/image/upload/v1556208670/follower_2.png"
                alt="Unfollow icon"
                className="icon-sizes unfollow-icon"
                onClick={() => toUnFollowUser(userId)}
              />
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <h3>Comments</h3>
          <Comment slug={slug} />
          {article.Comments ? (
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
        <CardColumns className="article-col-count">
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
        </CardColumns>
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
  isLoggedIn: PropTypes.bool,
  followUser: PropTypes.func.isRequired,
  unFollowUser: PropTypes.func.isRequired
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
  dislikeArticleRequest: slug => dispatch(dislikeArticleRequest(slug)),
  followUser: userId => dispatch(followUser(userId)),
  unFollowUser: userId => dispatch(unFollowUser(userId)),
});

const ConnectedArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

export default ConnectedArticle;
