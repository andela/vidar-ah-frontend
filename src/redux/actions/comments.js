import axios from 'axios';
import { POST_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';

export const createComment = (slug, comments) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${apiUrl}/articles/${slug}/comments`, {
      comment: comments,
    }, {
      headers: {
        'x-access-token': token,
      },
    });

    dispatch({
      type: POST_COMMENT

    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteComment = (slug, id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.delete(`${apiUrl}/articles/${slug}/comments/${id}`, {
      headers: {
        'x-access-token': token,
      },
    });

    dispatch({
      type: DELETE_COMMENT

    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const editComment = (slug, value, id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.patch(`${apiUrl}/articles/${slug}/comments/${id}`, {
      comment: value,
    }, {
      headers: {
        'x-access-token': token,
      },
    });

    dispatch({
      type: EDIT_COMMENT

    });
    return response;
  } catch (error) {
    return error.response;
  }
};
