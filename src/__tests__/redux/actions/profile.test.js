import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as actions from '../../../redux/actions/profile';
import * as types from '../../../redux/actions/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('get view profile actions', () => {
  it('handles viewProfile', () => {
    const profile = 'profile';
    const expectedAction = {
      type: types.VIEW_PROFILE,
      payload: profile,
    };

    expect(actions.getProfile(profile)).toEqual(expectedAction);
  });
});


describe('get ProfileRequest actions', () => {
  it('handles success case', () => {
    const mockData = {
      data: {
        body: {
          firstname: 'Jacinta',
          lastname: 'Nnadi',
          email: 'jacy@gmail.com',
          bio: 'bio'
        }
      }
    };

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: { ...mockData },
    }));

    const expectedActions = [{
      type: types.VIEW_PROFILE,
      payload: mockData.profile,
    }];
    const store = mockStore({ profile: {} });

    return store.dispatch(actions.getProfileRequest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


describe('get editProfileRequest actions', () => {
  it('handles success case', () => {
    const mockData = {
      data: {
        body: {
          firstname: 'Jacinta',
          lastname: 'Nnadi',
          bio: 'bio'
        }
      }
    };

    mockAxios.patch.mockImplementationOnce(() => Promise.resolve({
      data: { ...mockData },
    }));

    const expectedActions = [{
      type: types.VIEW_PROFILE,
      payload: mockData.profile,
    }];
    const store = mockStore({ profile: {} });

    return store.dispatch(actions.editProfileRequest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
