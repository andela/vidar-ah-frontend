import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as actions from '../../../redux/actions/notification';
import { NOTIFICATION } from '../../../redux/actions/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('notification actions', () => {
  it('handles notifications', () => {
    const notify = [{}];
    const expectedAction = {
      type: NOTIFICATION,
      notify
    };

    expect(actions.setNotify(notify)).toEqual(expectedAction);
  });
});


describe('handles getNotificationRequest', () => {
  it('handles success case', () => {
    const mockData = {
      notifications: [{}]
    };

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));

    const expectedActions = {
      type: NOTIFICATION,
      notify: mockData.notifications
    };

    const store = mockStore({});

    return store.dispatch(actions.getNotificationRequest()).then(() => {
      expect(store.getActions()).toEqual([expectedActions]);
    });
  });
});
