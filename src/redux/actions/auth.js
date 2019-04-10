import axios from 'axios';
import { toast } from 'react-toastify';
import { LOGIN, LOGOUT } from './actionTypes';
import { stopFetching, startFetching } from './fetching';
import { saveToken, removeToken } from '../../utils/localStorage';

const { log } = console;

const baseUrl = 'https://vidar-ah-backend-production.herokuapp.com';

export const loginUser = userData => async (dispatch) => {
  dispatch(startFetching());
  try {
    const { data } = await axios.post(
      `${baseUrl}/api/v1/user/login`,
      { ...userData }
    );
    log(data);
    const { success } = data;
    if (success) {
      await saveToken(data.token);
      dispatch({
        type: LOGIN,
        payload: { message: data.message }
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
      errors.map(err => toast.error(err));
      return false;
    }
    toast.error('something went wrong');
    return false;
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
