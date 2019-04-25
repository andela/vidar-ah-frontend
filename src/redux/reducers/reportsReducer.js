import { GET_REPORTS } from '../actions/actionTypes';

const initialState = {
  reports: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REPORTS:
      return { ...state, reports: action.data };
    default: return state;
  }
};
