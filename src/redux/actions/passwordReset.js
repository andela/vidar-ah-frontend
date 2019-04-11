/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com';
export const requestPasswordRequest = email => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/api/v1/requestpasswordreset`,
      { email }
    );
    dispatch({ type: 'SEND_PASSWORD_RESET' });
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
    dispatch({ type: 'SEND_NEW_PASSWORD' });
    return data;
  } catch (error) {
    return error.response.data;
  }
};
