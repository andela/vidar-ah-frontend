import signupReducer from '../../../redux/reducers/authReducer';
import { SIGNUP, SIGNUP_FAILURE } from '../../../redux/actions/actionTypes';

const payload = {
  data: {}
};

describe('Signup reducer', () => {
  test('should return the initial state', () => {
    expect(signupReducer(undefined, {})).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(signupReducer(undefined, { type: SIGNUP })).toMatchSnapshot();
  });

  test('should return the correct state containing signup errors', () => {
    expect(signupReducer(payload, { type: SIGNUP_FAILURE })).toMatchSnapshot();
  });

  test('should handle the correct state containing the current user', () => {
    expect(signupReducer(undefined, {
      type: SIGNUP,
      payload
    })).toMatchSnapshot();
  });
});
