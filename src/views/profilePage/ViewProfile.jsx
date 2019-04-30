import React, { useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Index';
import { getProfileRequest } from '../../redux/actions/profile';
import Header from '../../components/header/Index';
import ImageUpload from '../../components/imageUpload/Index';
import './profile.scss';
import Stats from '../../components/stats/Index';

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
          <Stats />
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
