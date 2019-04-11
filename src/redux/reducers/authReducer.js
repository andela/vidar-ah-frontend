import {
  LOGIN,
  LOGOUT,
  CURRENT_USER,
  SIGNUP,
  SIGNUP_ERROR
} from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  currentUser: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload.currentUser,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: {}
      };
    case CURRENT_USER:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload.currentUser,
      };
    case SIGNUP:
      return {
        ...state,
        data: {
          ...action.payload
        },
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        errors: {
          ...action.errors
        }
      };
    default:
      return state;
  }
};
