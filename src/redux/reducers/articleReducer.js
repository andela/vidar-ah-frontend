import { SET_ARTICLE } from '../actions/actionTypes';

const initialState = {
  article: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE:
      return { ...state, article: action.payload };
    default: return state;
  }
};
