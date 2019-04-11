import { GET_LATEST_ARTICLES, GET_TRENDING_ARTICLES, SET_ARTICLE } from '../actions/actionTypes';

const initialState = {
  article: null,
  articles: [],
  trendingArticles: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_ARTICLES:
      return { ...state, articles: state.articles.concat(action.data) };
    case GET_TRENDING_ARTICLES:
      return { ...state, trendingArticles: state.trendingArticles.concat(action.data) };
    case SET_ARTICLE:
      return { ...state, article: action.payload };
    default: return state;
  }
};
