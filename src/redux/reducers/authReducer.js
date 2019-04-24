import {
  LOGIN, LOGOUT, CURRENT_USER, SIGNUP, SIGNUP_FAILURE, VIEW_PROFILE,
} from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  profile: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload.currentUser
      };
    case CURRENT_USER:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload.currentUser
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: {}
      };
    case VIEW_PROFILE:
      return {
        ...state, profile: action.payload
      };
    case SIGNUP:
      return {
        ...state,
        currentUser: {
          ...action.payload
        }
      };

    case SIGNUP_FAILURE:
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
