/* eslint-disable prefer-promise-reject-errors */
import mockAxios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginUser } from '../../../redux/actions/auth';
import * as types from '../../../redux/actions/actionTypes';

const mockStore = configureStore([thunk]);

const loggedInUser = {
  name: 'vidar',
  username: 'vidar-username',
  email: 'vidar-email',
  role: 'admin'
};

describe('loginUser()', () => {
  const dispatch = jest.fn();
  const successResponse = {
    success: true,
    user: loggedInUser,
    token: 'secret_string'
  };

  it('should login user successfully', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: { ...successResponse },
    }));
    await loginUser()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch.mock.calls[1][0]).toEqual({
      payload: { currentUser: loggedInUser },
      type: 'LOGIN'
    });
  });

  it('should fail to login user if errors exist', () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject({
      response: { data: { success: false, errors: ['something went wrong'] } }
    }));

    const expected = [
      {
        type: types.START_FETCHING
      },
      {
        type: types.STOP_FETCHING,
        payload: { error: true, message: ['something went wrong'] }
      }
    ];

    const store = mockStore({ authReducer: {}, fetchReducer: {} });
    return store.dispatch(loginUser({ email: 'wrong@email.com', password: 'incorrect' })).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
