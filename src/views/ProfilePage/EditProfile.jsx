import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Alert
} from 'react-bootstrap';
import './profile.scss';
import Footer from '../../components/Footer';
import { editProfileRequest, getProfileRequest } from '../../redux/actions/profile';
import Header from '../../components/Header';
import ImageUpload from '../../components/ImageUpload';
import FormContainer from '../../components/FormContainer';
import { validateUserProfile } from '../../utils/validator';


const EditProfile = (props) => {
  const {
    profile, history, getProfileRequest: getUserProfile, editProfile,
  } = props;

  const initialFormState = {
    firstname: profile.firstname,
    lastname: profile.lastname,
    bio: profile.bio,
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    getUserProfile();
  }, []);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setFormData({
      firstname: profile.firstname,
      lastname: profile.lastname,
      bio: profile.bio,
    });
  }, [props]);

  const renderErrors = () => errors.map(error => (
    <Alert key={error} variant="danger">{error}</Alert>
  ));


  const cancelChanges = () => props.history.push('/userprofile');

  const handleChange = (event) => {
    const { target } = event;

    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateUserProfile(formData);
    if (validationErrors.length > 0) {
      return setErrors(validationErrors);
    }
    editProfile(formData);
    props.history.push('/userprofile');
  };

  return (
    <div>
      <Header history={history} type="purple" />
      <div>
        <Container>
          <Row>
            <Col md={3}>
              <ImageUpload />
            </Col>
            <Col md={9}>
              <FormContainer
                history={history}
                formData={formData}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                cancelChanges={cancelChanges}
                renderErrors={renderErrors}
                errors={errors}
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  editProfile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getProfileRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.authReducer.profile
});

const mapDispatchToProps = dispatch => ({
  editProfile: updatedProfile => dispatch(editProfileRequest(updatedProfile)),
  getProfileRequest: () => dispatch(getProfileRequest())
});

const ConnectedEditProfile = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default ConnectedEditProfile;
