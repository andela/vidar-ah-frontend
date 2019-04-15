import {
  SET_ARTICLE, GET_RECOMMENDED_ARTICLES, GET_LATEST_ARTICLES, GET_TRENDING_ARTICLES
} from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE:
      return { ...state, article: action.payload };
    case GET_RECOMMENDED_ARTICLES:
      return { ...state, recommendedArticles: action.payload };
    case GET_LATEST_ARTICLES:
      return { ...state, articles: state.articles.concat(action.data) };
    case GET_TRENDING_ARTICLES:
      return { ...state, trendingArticles: state.trendingArticles.concat(action.data) };
    default: return state;
  }
};
