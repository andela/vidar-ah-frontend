/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SIGNUP, SIGNUP_ERROR } from './actionTypes';

const signupUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1/user/signup';

export const signupUser = userData => async (dispatch) => {
  try {
    const response = await axios.post(signupUrl, userData);
    localStorage.setItem('token', response.token);
    dispatch({
      type: SIGNUP,
      payload: response.data
    });
    return response.data;
  } catch (error) {
    dispatch({
      type: SIGNUP_ERROR,
      errors: error.response.data
    });
    return error.response.data;
  }
};
