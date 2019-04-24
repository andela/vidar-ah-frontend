import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import { signupUser, signupSuccess } from '../../../redux/actions/authActions';

const mockStore = configureMockStore([thunk]);

const mockData = {
  name: 'vidar-name',
  username: 'vidar-username',
  email: 'vidar-email',
};
let store;

describe('Signup action creator', () => {
  store = mockStore();
  it('should dispatch a successful signup action', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));

    return store.dispatch(signupUser())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  it('should dispatch a failed signup action', () => {
    store = mockStore();
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    store.dispatch(signupUser()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('should dispatch a success signup action', () => {
    store = mockStore();
    store.dispatch(signupSuccess());
    expect(store.getActions()).toMatchSnapshot();
  });
});
