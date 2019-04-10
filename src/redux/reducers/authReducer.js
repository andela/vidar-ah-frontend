import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  message: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
