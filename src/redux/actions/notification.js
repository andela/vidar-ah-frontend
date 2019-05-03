import axios from 'axios';
import { NOTIFICATION } from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';


export const setNotify = notify => ({
  type: NOTIFICATION,
  notify,
});

export const getNotificationRequest = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${apiUrl}/notifications`, {
      headers: { Authorization: token },
      mode: 'cors',
    });

    dispatch({
      type: NOTIFICATION,
      notify: response.data.notifications
    });
  } catch (error) {
    return error.response;
  }
};
