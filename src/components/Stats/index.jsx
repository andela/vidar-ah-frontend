import React, { useEffect } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import likesImage from '../../assets/images/article-likes.png';
import dislikeImage from '../../assets/images/dislike.png';
import followersIcon from '../../assets/images/followers.png';
import followingIcon from '../../assets/images/following.png';
import articleWrittenIcon from '../../assets/images/articles-written.png';
import articleReadIcon from '../../assets/images/article-read.png';
import {
  getArticlesWrittenRequest, getArticlesReadRequest,
  getFollowersRequest, getFollowingsRequest,
  getAllArticlesByUser, getReactionsOnUserArticles,
} from '../../redux/actions/stats';

const Stats = (props) => {
  const {
    articlesWritten, articlesRead,
    followers, followings,
    likes, dislikes,
    getFollowers, getFollowings,
    getArticlesWritten, getArticlesRead,
    getUserArticles, getArticleReactions,
    authorId,
  } = props;

  const getStats = async () => {
    await getFollowers();
    await getFollowings();
    await getArticlesRead();
    await getArticlesWritten();
    await getUserArticles(authorId);
    await getArticleReactions();
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <>
      <h3 className="stats-title">Statistics</h3>
      <div>
        <CardDeck className="center-card">
          <Card>
            <Card.Img className="icon-size" variant="top" src={followersIcon} />
            <Card.Body>
              <Card.Title>{followers}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Followers</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="icon-size" variant="top" src={followingIcon} />
            <Card.Body>
              <Card.Title>{followings}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Following</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="icon-size" variant="top" src={articleWrittenIcon} />
            <Card.Body>
              <Card.Title>{articlesWritten}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Articles written</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="icon-size" variant="top" src={articleReadIcon} />
            <Card.Body>
              <Card.Title>{articlesRead}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Articles read</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="icon-size" variant="top" src={likesImage} />
            <Card.Body>
              <Card.Title>{likes}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Articles likes</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="icon-size" variant="top" src={dislikeImage} />
            <Card.Body>
              <Card.Title>{dislikes}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Articles dislikes</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </>
  );
};

const mapStateToProps = ({ statsReducer, authReducer }) => ({
  likes: statsReducer.likes,
  dislikes: statsReducer.dislikes,
  followers: statsReducer.followers,
  followings: statsReducer.followings,
  articlesRead: statsReducer.articlesRead,
  articlesWritten: statsReducer.articlesCreated,
  authorId: authReducer.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  getFollowers: () => dispatch(getFollowersRequest()),
  getFollowings: () => dispatch(getFollowingsRequest()),
  getArticlesRead: () => dispatch(getArticlesReadRequest()),
  getArticlesWritten: () => dispatch(getArticlesWrittenRequest()),
  getUserArticles: authorId => dispatch(getAllArticlesByUser(authorId)),
  getArticleReactions: () => dispatch(getReactionsOnUserArticles())
});

Stats.propTypes = {
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  authorId: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  followings: PropTypes.number.isRequired,
  articlesRead: PropTypes.number.isRequired,
  articlesWritten: PropTypes.number.isRequired,
  getFollowers: PropTypes.func.isRequired,
  getFollowings: PropTypes.func.isRequired,
  getArticlesRead: PropTypes.func.isRequired,
  getArticlesWritten: PropTypes.func.isRequired,
  getUserArticles: PropTypes.func.isRequired,
  getArticleReactions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
