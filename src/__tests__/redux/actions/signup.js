/* eslint-disable import/no-unresolved */
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { signupUser } from '../../redux/actions/authActions';

const axiosMock = new MockAdapter(axios);

const newUser = {
  name: 'vidar-name',
  username: 'vidar-username',
  email: 'vidar-email',
  password: 'secret_pass'
};

describe('signupUser()', () => {
  afterEach(() => {
    jest.resetAllMocks();
    axiosMock.reset();
  });

  afterAll(() => axiosMock.restore);

  const dispatch = jest.fn();
  const successResponse = {
    success: true,
    user: newUser,
    token: 'secret_string'
  };
  const errorResponse = { success: false, errors: ['something went wrong'] };

  it('should signup user successfully', async () => {
    axiosMock.onPost().replyOnce(201, successResponse);
    await signupUser()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[1][0]).toEqual({
      payload: { newUser },
      type: 'SIGNUP'
    });
  });

  it('should fail to signup user if errors exist', async () => {
    axiosMock.onPost().replyOnce(409, errorResponse);
    await signupUser()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith({
      payload: { success: false, errors: ['something went wrong'] },
      type: 'SIGNUP_ERROR'
    });
  });
});
