import authReducer from '../../../redux/reducers/authReducer';
import * as types from '../../../redux/actions/actionTypes';

const loggedInUser = {
  name: 'vidar',
  username: 'vidar-username',
  email: 'vidar-email',
  role: 'admin'
};

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  profile: {},
};

const loginAction = {
  type: 'LOGIN',
  payload: {
    currentUser: loggedInUser
  }
};

describe('auth reducer', () => {
  it('should return correct state for login', () => {
    const state = authReducer(initialState, loginAction);
    expect(state.isLoggedIn).toEqual(true);
    expect(state.currentUser.name).toEqual(loggedInUser.name);
    expect(state.currentUser.username).toEqual(loggedInUser.username);
    expect(state.currentUser.email).toEqual(loggedInUser.email);
    expect(state.currentUser.role).toEqual(loggedInUser.role);
  });
});


describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle VIEW_PROFILE', () => {
    initialState.profile = 'profile';
    expect(authReducer(undefined, {
      type: types.VIEW_PROFILE,
      payload: 'profile'
    })).toEqual(initialState);
  });
});
