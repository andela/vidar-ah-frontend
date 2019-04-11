/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { CREATE_ARTICLE, SET_ARTICLE, SET_ARTICLE_ERROR } from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTU0OTEzMzk3LCJleHAiOjE1NTQ5OTk3OTd9.cVs2NgYkHTkgGu_DSX60c2fpEXv15-3US1q6h2Rzoiw';

export const setArticle = article => ({
  type: SET_ARTICLE,
  payload: article,
});

export const setArticleError = error => ({
  type: SET_ARTICLE_ERROR,
  payload: error,
});

export const createArticle = articleData => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/articles`,
      { ...articleData },
      {
        headers: {
          'x-access-token': token
        },
      }
    );
    dispatch({
      type: CREATE_ARTICLE,
      article: {}
    });
    return data;
  } catch (error) {
    dispatch({
      type: CREATE_ARTICLE,
      article: {}
    });
    return error.response.data;
  }
};


export const getArticleRequest = slug => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/articles/${slug}`);
    const { article } = response.data;

    dispatch(setArticle(article));
  } catch (error) {
    dispatch(setArticleError(error.response.message));
  }
};
