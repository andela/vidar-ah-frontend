import axios from 'axios';
import { FOLLOW, UNFOLLOW } from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';

export const followUser = userId => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');

    const { data } = await axios.post(`${apiUrl}/follow`, {
      id: userId,
    }, {
      headers: {
        'x-access-token': token,
      },
    });

    dispatch({
      type: FOLLOW

    });

    return data.message;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return "Please login and try again";
    }

    if (error.response && error.response.data.errors[0]) {
      return error.response.data.errors[0];
    }

    return "An error occured, please try later.";
  }
};

export const unFollowUser = userId => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');

    const { data } = await axios.post(`${apiUrl}/unfollow`, {
      id: userId,
    }, {
      headers: {
        'x-access-token': token,
      },
    });

    dispatch({
      type: UNFOLLOW

    });
    return data.message;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return "Please login and try again";
    }

    if (error.response && error.response.data.errors[0]) {
      return error.response.data.errors[0];
    }

    return "An error occured, please try later.";
  }
};
