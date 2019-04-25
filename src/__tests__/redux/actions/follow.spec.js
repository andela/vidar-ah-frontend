import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { followUser, unFollowUser } from '../../../redux/actions/follow';
import { FOLLOW, UNFOLLOW } from '../../../redux/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Follow user action', () => {
  it('should dispatch follow user action', async () => {
    const mockData = {
      success: true,
      message: "User followed successfully."
    };

    const expectedActions = [{
      type: FOLLOW
    }];

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));

    const store = mockStore();
    return store.dispatch(followUser(2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch empty array', async () => {
    const expectedActions = [];

    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    const store = mockStore();
    return store.dispatch(followUser(2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Unfollow user action', () => {
  it('should dispatch unfollow user action', async () => {
    const mockData = {
      success: true,
      message: "User unfollowed successfully."
    };

    const expectedActions = [{
      type: UNFOLLOW
    }];

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));

    const store = mockStore();
    return store.dispatch(unFollowUser(2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch empty array', async () => {
    const expectedActions = [];

    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    const store = mockStore();
    return store.dispatch(unFollowUser(2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
