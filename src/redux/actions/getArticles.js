import axios from 'axios';
import { GET_LATEST_ARTICLES, GET_TRENDING_ARTICLES } from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api';

export const getArticles = params => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiUrl}/articles/order?type=latest&amount=${params}`);
    dispatch({
      type: GET_LATEST_ARTICLES,
      data: data.articles
    });
    return data;
  } catch (error) {
    return error.response;
  }
};


export const getTrendingArticles = params => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiUrl}/articles/order?type=latest&amount=${params}`);
    dispatch({
      type: GET_TRENDING_ARTICLES,
      data: data.articles
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
