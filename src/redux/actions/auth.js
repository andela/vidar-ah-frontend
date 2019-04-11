import axios from 'axios';
import { LOGIN, LOGOUT } from './actionTypes';
import { stopFetching, startFetching } from './fetching';
import { saveToken, removeToken } from '../../utils/localStorage';


const baseUrl = 'https://vidar-ah-backend-production.herokuapp.com';

export const loginUser = userData => async (dispatch) => {
  try {
    dispatch(startFetching());
    const { data } = await axios.post(
      `${baseUrl}/api/v1/user/login`,
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
    dispatch({
      type: LOGOUT,
      payload: {}
    });
  }
);
