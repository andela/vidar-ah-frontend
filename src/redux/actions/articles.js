/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import formData from 'form-data';
import { CREATE_ARTICLE } from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';

export const createArticle = articleData => async (dispatch) => {
  try {
    const form = new formData();
    for (const key in articleData) {
      form.append(key, articleData[key]);
    }
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      `${apiUrl}/articles`,
      form,
      {
        headers: {
          'x-access-token': token,
          'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
        },
      }
    );
    dispatch({
      type: CREATE_ARTICLE,
    });
    return data;
  } catch (error) {
    dispatch({
      type: CREATE_ARTICLE,
    });
    return error.response.data;
  }
};
