import { NOTIFICATION } from '../actions/actionTypes';

const initialState = {
  notify: []
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case NOTIFICATION:
      return {
        ...state, notify: action.notify
      };

    default:
      return state;
  }
};
