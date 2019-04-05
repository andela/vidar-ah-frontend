// /* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SET_ARTICLE, SET_ARTICLE_ERROR } from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';

export const setArticle = article => ({
  type: SET_ARTICLE,
  payload: article,
});

export const setArticleError = error => ({
  type: SET_ARTICLE_ERROR,
  payload: error,
});

// eslint-disable-next-line import/prefer-default-export
export const getArticleRequest = slug => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/articles/${slug}`);
    const { article } = response.data;

    dispatch(setArticle(article));
  } catch (error) {
    dispatch(setArticleError(error.response.message));
  }
};
