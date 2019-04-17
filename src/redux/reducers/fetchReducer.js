import { START_FETCHING, STOP_FETCHING } from '../actions/actionTypes';

const initialState = { fetching: false, errMsg: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        fetching: true,
        errMsg: []
      };
    case STOP_FETCHING:
      return {
        ...state,
        fetching: false,
        errMsg: action.payload.error ? action.payload.message : []
      };
    default:
      return state;
  }
};
