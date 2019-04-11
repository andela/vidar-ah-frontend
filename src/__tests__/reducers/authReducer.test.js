import authReducer from '../../redux/reducers/authReducer';

const initialState = {
  isLoggedIn: null,
  message: null
};

const loginAction = {
  type: 'LOGIN',
  payload: {
    message: 'welcome [firstname]',
  }
};

describe('auth reducer', () => {
  it('should return correct state for login', () => {
    const state = authReducer(initialState, loginAction);
    expect(state.isLoggedIn).toEqual(true);
    expect(state.message).toEqual('welcome [firstname]');
  });
});
