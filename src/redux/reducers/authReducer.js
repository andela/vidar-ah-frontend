import { LOGIN, LOGOUT, CURRENT_USER } from '../actions/actionTypes';

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
    default:
      return state;
  }
};
