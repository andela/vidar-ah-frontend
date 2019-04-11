import authReducer from '../../../redux/reducers/authReducer';
import * as types from '../../../redux/actions/actionTypes';

const initialState = {
  user: {},
};

const newState = {
  user: {
    token: 'some_fake_token'
  }
};

describe('signup reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle signup user', () => {
    initialState.user = {};
    expect(authReducer(undefined, {
      type: types.SIGNUP,
      token: 'some_fake_token'
    })).toEqual(newState);
  });
});
