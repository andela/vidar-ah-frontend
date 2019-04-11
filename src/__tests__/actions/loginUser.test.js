import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { loginUser } from '../../redux/actions/auth';


const axiosMock = new MockAdapter(axios);

const loggedInUser = {
  name: 'vidar',
  username: 'vidar-username',
  email: 'vidar-email',
  role: 'admin'
};

describe('loginUser()', () => {
  afterEach(() => {
    jest.resetAllMocks();
    axiosMock.reset();
  });

  afterAll(() => axiosMock.restore);

  const dispatch = jest.fn();
  const successResponse = {
    success: true,
    user: loggedInUser,
    token: 'secret_string'
  };
  const errorResponse = { success: false, errors: ['something went wrong'] };

  it('should login user successfully', async () => {
    axiosMock.onPost().replyOnce(200, successResponse);
    await loginUser()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch.mock.calls[1][0]).toEqual({
      payload: { currentUser: loggedInUser },
      type: 'LOGIN'
    });
  });

  it('should fail to login user if errors exist', async () => {
    axiosMock.onPost().replyOnce(401, errorResponse);

    await loginUser()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith({
      payload: { error: true, message: ['something went wrong'] },
      type: 'STOP_FETCHING'
    });
  });
});
