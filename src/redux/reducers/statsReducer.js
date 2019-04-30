import {
  GET_FOLLOWERS, GET_FOLLOWING,
  GET_CREATED_ARTICLES_COUNT, GET_READ_ARTICLES_COUNT,
  GET_ARTICLE_REACTIONS, GET_USER_ARTICLES
} from '../actions/actionTypes';

const initialState = {
  followers: 0,
  followings: 0,
  articlesRead: 0,
  articlesCreated: 0,
  likes: 0,
  dislikes: 0
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload.length
      };

    case GET_FOLLOWING:
      return {
        ...state,
        followings: action.payload.length
      };

    case GET_CREATED_ARTICLES_COUNT:
      return {
        ...state,
        articlesCreated: action.payload,
      };

    case GET_READ_ARTICLES_COUNT:
      return {
        ...state,
        articlesRead: action.payload
      };

    case GET_USER_ARTICLES:
      return {
        ...state,
        userArticles: action.payload
      };

    case GET_ARTICLE_REACTIONS:
      return {
        ...state,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes
      };

    default:
      return state;
  }
};
