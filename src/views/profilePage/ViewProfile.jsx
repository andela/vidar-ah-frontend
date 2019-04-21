/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardDeck
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Index';
import likes from '../../assets/images/article-likes.png';
import dislike from '../../assets/images/dislike.png';
import followers from '../../assets/images/followers.png';
import following from '../../assets/images/following.png';
import articleWritten from '../../assets/images/articles-written.png';
import articleRead from '../../assets/images/article-read.png';
import { getProfileRequest } from '../../redux/actions/profile';
import Header from '../../components/header/Index';
import ImageUpload from '../../components/imageUpload/Index';
import './profile.scss';

const ViewProfile = (props) => {
  const { getProfileRequest: getUserProfile, profile, history } = props;

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <Header type="purple" history={history} />
      <div className="profile-container">
        <Container>
          <Row>
            <Col md={3} id="image-form">
              <ImageUpload />
            </Col>
            <Col md={9}>
              <h2 className="welcome">
                Welcome
                {' '}
                {profile.firstname}
              </h2>
              <h4>Personal Info</h4>
              <hr className="hr" />
              <Row className="name-field">
                <Col md={4}>
                  <h6 className="name">Firstname</h6>
                  <h5>{profile.firstname}</h5>
                </Col>
                <Col md={4}>
                  <h6 className="name">Lastname</h6>
                  <h5>{profile.lastname}</h5>
                </Col>
                <Col md={4}>
                  <h6 className="name">Email</h6>
                  <h5>{profile.email}</h5>
                </Col>
              </Row>
              <div className="name-field">
                <h4>Bio</h4>
                <p>{profile.bio}</p>
              </div>
              <h4>Actions</h4>
              <hr className="hr" />
              <div className="align-btn" id="action-btn">
                <Link to="/editprofile">
                  <Button type="button" className="avatar-btn">Edit Profile</Button>
                </Link>
                <Link to="/requestpasswordreset">
                  <Button type="button" className="avatar-btn">Reset Password</Button>
                </Link>
              </div>
            </Col>
          </Row>
          <h3 className="stats-title">Statistics</h3>
          <div>
            <CardDeck className="center-card">
              <Card>
                <Card.Img className="icon-size" variant="top" src={followers} />
                <Card.Body>
                  <Card.Title>0</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Followers</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img className="icon-size" variant="top" src={following} />
                <Card.Body>
                  <Card.Title>0</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Following</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img className="icon-size" variant="top" src={articleWritten} />
                <Card.Body>
                  <Card.Title>0</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Articles written</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img className="icon-size" variant="top" src={articleRead} />
                <Card.Body>
                  <Card.Title>0</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Articles read</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img className="icon-size" variant="top" src={likes} />
                <Card.Body>
                  <Card.Title>0</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Articles likes</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img className="icon-size" variant="top" src={dislike} />
                <Card.Body>
                  <Card.Title>0</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Articles dislikes</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

ViewProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileRequest: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.authReducer.profile
});

const mapDispatchToProps = dispatch => ({
  getProfileRequest: () => dispatch(getProfileRequest())
});

export default connect(() => mapStateToProps, mapDispatchToProps)(ViewProfile);
