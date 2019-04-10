/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_RESET_KEY, SEND_NEW_PASSWORD } from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com';

export const getResetKey = () => ({
  type: GET_RESET_KEY
});

export const sendNewPassword = () => ({
  type: SEND_NEW_PASSWORD
});

export const requestPasswordRequest = email => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/api/v1/requestpasswordreset`,
      { email }
    );
    dispatch(getResetKey());
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const resetPassword = (key, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/api/v1/resetPassword/${key}`,
      { password }
    );
    dispatch(sendNewPassword());
    return data;
  } catch (error) {
    return error.response.data;
  }
};
