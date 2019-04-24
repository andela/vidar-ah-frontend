/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  FormControl,
  Alert
} from 'react-bootstrap';
import { validateUserProfile } from '../../utils/validator';
import './profile.scss';
import Footer from '../../components/footer/Index';
import { editProfileRequest, uploadImage } from '../../redux/actions/profile';
import Header from '../../components/header/Header';

const EditProfile = (props) => {
  const { editProfile, profile, history } = props;
  const initialFormState = {
    firstname: profile.firstname,
    lastname: profile.lastname,
    bio: profile.bio,
  };

  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('https://res.cloudinary.com/djdsxql5q/image/upload/v1547914942/ireporter/ujz7ozprk8hkyszjju7d.jpg');

  const renderErrors = () => errors.map(error => (
    <Alert key={error} variant="danger">{error}</Alert>
  ));

  const [formData, setFormData] = useState(initialFormState);

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


  const onChangeImage = (event) => {
    setImage(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const upload = async (event) => {
    event.preventDefault();
    const response = await props.uploadImage(image);
    return response;
  };

  return (
    <div>
      <Header history={history} type="purple" />
      <div className="profile-container">
        <Container>
          <Row>
            <Col md={3}>
              <div className="previewComponent">
                <form onSubmit={handleSubmit} className="image-form">
                  <Image
                    className="profile-image"
                    src={imageUrl}
                  />
                  <input
                    className="file-input"
                    name="image"
                    type="file"
                    onChange={onChangeImage} />
                  <Button
                    className="avatar-btn"
                    type="submit"
                    onClick={upload}>
                    Upload Avatar
                  </Button>
                </form>
              </div>
            </Col>
            <Col md={9}>
              <h2 className="welcome">
                Welcome
                {' '}
                {formData.firstname}
              </h2>
              <h4>Personal Info</h4>
              <hr className="hr" />
              <div className="panel panel-default">
                {renderErrors(errors)}
              </div>
              <Form onSubmit={handleSubmit}>
                <Row className="name-field">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="name">Firstname</Form.Label>
                      <Form.Control
                        type="text"
                        className="input"
                        name="firstname"
                        autoFocus
                        value={formData.firstname}
                        onChange={event => handleChange(event)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="name">Lastname</Form.Label>
                      <Form.Control
                        type="text"
                        className="input"
                        name="lastname"
                        value={formData.lastname}
                        onChange={event => handleChange(event)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="name-field">
                  <Form.Group>
                    <Form.Label className="name">Bio</Form.Label>
                    <FormControl
                      as="textarea"
                      aria-label="With textarea"
                      name="bio"
                      cols="80"
                      rows="7"
                      className="input"
                      value={formData.bio}
                      onChange={event => handleChange(event)} />
                  </Form.Group>
                </div>
                <h4>Actions</h4>
                <hr className="hr" />
                <div className="align-btn action-btn">
                  <Button type="submit" className="avatar-btn">Save Profile</Button>
                  <Button onClick={cancelChanges} type="button" className="avatar-btn">Cancel</Button>
                </div>
              </Form>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  editProfile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.authReducer.profile
});

const mapDispatchToProps = dispatch => ({
  editProfile: updatedProfile => dispatch(editProfileRequest(updatedProfile)),
  uploadImage: updatedImage => dispatch(uploadImage(updatedImage))
});

const ConnectedEditProfile = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default ConnectedEditProfile;
