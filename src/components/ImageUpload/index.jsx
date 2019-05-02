/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Button,
  Form
} from 'react-bootstrap';
import { uploadImage, getProfileRequest } from '../../redux/actions/profile';
import spinner from '../../assets/images/spinner.gif';
import './imageUpload.scss';


const ImageUpload = (props) => {
  const { profile, uploadImageRequest } = props;

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(profile.image);
  const [imageErrors, setImageErrors] = useState('');
  const [imageChange, setImageChange] = useState(false);

  useEffect(() => {
    setImageUrl(profile.image);
  }, [profile]);

  const onChangeImage = (event) => {
    setImage(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
    setImageChange(true);
  };

  const upload = async (event) => {
    event.preventDefault();
    try {
      setUploading(true);
      const response = await uploadImageRequest(image);
      setImageChange(false);
      props.getProfileRequest();
      return response.result.image;
    } catch (error) {
      setImageErrors(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="profile-container">
      <div className="previewComponent">
        <Form id="image-form">
          <Image
            className="profile-image"
            src={imageUrl}
          />
          <input
            className="file-input"
            name="image"
            type="file"
            onChange={onChangeImage} />
          {imageErrors ? <span className="img-errors">{imageErrors}</span> : ''}
          <Button
            className="avatar-btn"
            type="submit"
            disabled={!imageChange}
            onClick={upload}>
            {uploading ? <Image src={spinner} /> : ''}
            Change Avatar
          </Button>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.authReducer.profile
});

const mapDispatchToProps = dispatch => ({
  uploadImageRequest: updatedImage => dispatch(uploadImage(updatedImage)),
  getProfileRequest: () => dispatch(getProfileRequest())
});

export default connect(() => mapStateToProps, mapDispatchToProps)(ImageUpload);
