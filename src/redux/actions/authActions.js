/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SIGNUP, SIGNUP_FAILURE } from './actionTypes';

const signupUrl = 'http://vidar-ah-backend-production.herokuapp.com/api/v1/user/signup';

export const signupSuccess = user => ({
  type: SIGNUP,
  payload: user,
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  errors: error,
});

export const signupUser = userData => async (dispatch) => {
  try {
    const response = await axios.post(signupUrl, userData);
    dispatch(signupSuccess(response.data.user));
  } catch (error) {
    dispatch(signupFailure(error));
    return error;
  }
};
