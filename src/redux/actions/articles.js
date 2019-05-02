/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import formData from 'form-data';
import {
  CREATE_ARTICLE,
  SET_ARTICLE,
  SET_ARTICLE_ERROR,
  GET_RECOMMENDED_ARTICLES,
  LIKE_ARTICLE,
  DISLIKE_ARTICLE,
  EDIT_ARTICLE,
} from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';

export const setArticle = article => ({
  type: SET_ARTICLE,
  payload: article,
});

export const setArticleError = error => ({
  type: SET_ARTICLE_ERROR,
  payload: error,
});

export const setRecommendedArticles = articles => ({
  type: GET_RECOMMENDED_ARTICLES,
  payload: articles
});

export const likeArticle = () => ({
  type: LIKE_ARTICLE
});

export const dislikeArticle = () => ({
  type: DISLIKE_ARTICLE
});

// eslint-disable-next-line import/prefer-default-export
export const getArticleRequest = slug => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    if (token) {
      const response = await axios.get(
        `${apiUrl}/articles/${slug}`,
        {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          },
        }
      );
      dispatch(setArticle(response.data));
    } else {
      const response = await axios.get(`${apiUrl}/articles/${slug}`);
      dispatch(setArticle(response.data));
    }
  } catch (error) {
    dispatch(setArticleError(error.response.message));
  }
};

export const getRecommendedArticles = () => async (dispatch) => {
  const { data: { articles } } = await axios.get(`${apiUrl}/articles/order?type=latest&amount=4`);
  dispatch(setRecommendedArticles(articles));
};

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

export const likeArticleRequest = slug => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      `${apiUrl}/like_article`,
      { slug },
      {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        },
      }
    );
    dispatch(likeArticle());
    return data;
  } catch (error) {
    return error.response;
  }
};

export const dislikeArticleRequest = slug => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      `${apiUrl}/dislike_article`,
      { slug },
      {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        },
      }
    );
    dispatch(dislikeArticle());
    return data;
  } catch (error) {
    return error.response.data;
  }
};
export const editArticle = articleData => async (dispatch) => {
  try {
    const form = new formData();
    for (const key in articleData) {
      form.append(key, articleData[key]);
    }
    const token = localStorage.getItem('token');
    const { data } = await axios.put(
      `${apiUrl}/articles/${articleData.slug}`,
      form,
      {
        headers: {
          'x-access-token': token,
          'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
        },
      }
    );
    dispatch({
      type: EDIT_ARTICLE,
      payload: articleData
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};
