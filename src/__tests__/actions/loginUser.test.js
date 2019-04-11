import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { loginUser } from '../../redux/actions/auth';


const axiosMock = new MockAdapter(axios);

describe('loginUser()', () => {
  afterEach(() => {
    jest.resetAllMocks();
    axiosMock.reset();
  });

  afterAll(() => axiosMock.restore);

  const dispatch = jest.fn();
  const successResponse = { success: true, message: 'welcome user', token: 'secret_string' };
  const errorResponse = { success: false, errors: ['something went wrong'] };

  it('should login user successfully', async () => {
    axiosMock.onPost().replyOnce(200, successResponse);
    await loginUser()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch.mock.calls[1][0]).toEqual({
      payload: { message: 'welcome user' },
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
