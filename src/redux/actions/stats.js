import axios from 'axios';
import {
  GET_FOLLOWERS, GET_FOLLOWING,
  GET_CREATED_ARTICLES_COUNT, GET_READ_ARTICLES_COUNT,
  GET_ARTICLE_REACTIONS, GET_USER_ARTICLES
} from './actionTypes';

const apiUrl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';

export const getFollowers = followers => ({
  type: GET_FOLLOWERS,
  payload: followers,
});

export const getFollowings = followings => ({
  type: GET_FOLLOWING,
  payload: followings,
});

export const getFollowersRequest = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data: { followers } } = await axios.get(`${apiUrl}/user/followers`, {
      headers: { Authorization: token }
    });
    dispatch(getFollowers(followers));
  } catch (error) {
    return error.response;
  }
};

export const getFollowingsRequest = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data: { followings } } = await axios.get(`${apiUrl}/user/followings`, {
      headers: { Authorization: token }
    });
    dispatch(getFollowings(followings));
  } catch (error) {
    return error.response;
  }
};

export const getArticlesWritten = count => ({
  type: GET_CREATED_ARTICLES_COUNT,
  payload: count,
});

export const getArticlesWrittenRequest = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data: { articleCount } } = await axios.get(`${apiUrl}/user/articlescount`, {
      headers: { Authorization: token }
    });
    dispatch(getArticlesWritten(articleCount));
  } catch (error) {
    return error.response;
  }
};

export const getArticlesRead = readArticles => ({
  type: GET_READ_ARTICLES_COUNT,
  payload: readArticles,
});

export const getArticlesReadRequest = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data: { numberOfArticlesRead } } = await axios.get(`${apiUrl}/user/readingstats`, {
      headers: { Authorization: token }
    });
    dispatch(getArticlesRead(numberOfArticlesRead));
  } catch (error) {
    return error.response;
  }
};

export const getUserArticles = articles => ({
  type: GET_USER_ARTICLES,
  payload: articles
});

export const getReactions = reactions => ({
  type: GET_ARTICLE_REACTIONS,
  payload: reactions,
});

export const getAllArticlesByUser = authorId => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data: { results: { rows } } } = await axios.get(`${apiUrl}/articles?authorId=${authorId}`, {
      headers: { Authorization: token }
    });
    dispatch(getUserArticles(rows));
    return rows;
  } catch (error) {
    return error.response;
  }
};

export const getReactionsOnUserArticles = async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data: { likes, dislikes } } = await axios.get(`${apiUrl}/user/reactions`, {
      headers: { Authorization: token }
    });
    dispatch(getReactions({ likes, dislikes }));
  } catch (error) {
    return error.response;
  }
};
