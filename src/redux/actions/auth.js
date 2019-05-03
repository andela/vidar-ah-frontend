/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { LOGIN, LOGOUT } from './actionTypes';
import { stopFetching, startFetching } from './fetching';
import { saveToken, removeToken } from '../../utils/localStorage';
import { getProfileRequest } from './profile';


const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';
export const loginUser = userData => async (dispatch) => {
  try {
    dispatch(startFetching());
    const { data } = await axios.post(
      `${apiUrl}/user/login`,
      { ...userData }
    );
    const { success } = data;
    if (success) {
      saveToken(data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch({
        type: LOGIN,
        payload: {
          currentUser: data.user
        }
      });
      dispatch(getProfileRequest());
      dispatch(stopFetching());
      return true;
    }
    dispatch(stopFetching(true, ['something went wrong']));
    return false;
  } catch (error) {
    if (error.response) {
      const { response: { data: { errors } } } = error;
      dispatch(stopFetching(false, errors));
      return errors;
    }
  }
};

export const logOut = () => (
  async (dispatch) => {
    removeToken();
    localStorage.removeItem('userprofile');
    dispatch({
      type: LOGOUT,
    });
  }
);
