import { SET_ARTICLE, GET_RECOMMENDED_ARTICLES } from '../actions/actionTypes';

const initialState = {
  article: null,
  recommendedArticles: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE:
      return { ...state, article: action.payload };
    case GET_RECOMMENDED_ARTICLES:
      return { ...state, recommendedArticles: action.payload };
    default: return state;
  }
};
