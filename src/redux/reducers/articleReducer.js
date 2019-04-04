import { GET_ARTICLES } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: [...action.articles] };
    default: return state;
  }
};
