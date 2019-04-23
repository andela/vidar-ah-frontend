import axios from 'axios';
import formData from 'form-data';
import { VIEW_PROFILE } from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';

export const getProfile = profile => ({
  type: VIEW_PROFILE,
  payload: profile,
});

export const getProfileRequest = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${apiUrl}/userprofile`, {
      headers: { Authorization: token }
    });
    dispatch(getProfile(response.data.body));
  } catch (error) {
    return error.response;
  }
};

export const editProfileRequest = updatedProfile => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.patch(`${apiUrl}/userprofile`, updatedProfile, {
      headers: { Authorization: token }
    });

    dispatch(getProfileRequest());
  } catch (error) {
    return error.response;
  }
};

export const uploadImage = image => async () => {
  try {
    const token = localStorage.getItem('token');
    const form = new formData();
    form.append('image', image);
    const { data } = await axios.patch(`${apiUrl}/userprofile/image`, form, {
      headers: { Authorization: token }
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
