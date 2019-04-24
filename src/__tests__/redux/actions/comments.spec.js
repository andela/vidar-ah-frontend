import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createComment, editComment, deleteComment } from '../../../redux/actions/comments';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Create new comment action', () => {
  it('dispatches create new comment action', async () => {
    const mockData = {
      success: true,
      message: 'New article comment created successfully',
      comment: {
        id: 3,
        userId: 3,
        articleSlug: 'how-to-be-a-black-6hkoz4jf5',
        comment: 'Are you really really sure about this?',
        updatedAt: '2019-04-17T15:37:54.089Z',
        createdAt: '2019-04-17T15:37:54.089Z'
      }
    };

    const expectedActions = [{
      type: 'POST_COMMENT'
    }];

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      mockData
    }));

    const store = mockStore();
    return store.dispatch(createComment('test-slug', 'Are you really really sure about this?')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches empty array', async () => {
    const expectedActions = [];

    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    const store = mockStore();
    return store.dispatch(createComment('test-slug', 'Are you really really sure about this?')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Edit comment action', () => {
  it('dispatches edit comment action', async () => {
    const mockData = {
      success: true,
      message: 'Comment updated successfully',
      comment: {
        id: 3,
        userId: 3,
        articleSlug: 'how-to-be-a-black-6hkoz4jf5',
        comment: 'Edited comment',
        updatedAt: '2019-04-17T15:37:54.089Z',
        createdAt: '2019-04-17T15:37:54.089Z'
      }
    };

    const expectedActions = [{
      type: 'EDIT_COMMENT'
    }];

    mockAxios.patch.mockImplementationOnce(() => Promise.resolve({
      mockData
    }));

    const store = mockStore();
    return store.dispatch(editComment('test-slug', 'Edited comment', 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches empty array', async () => {
    const expectedActions = [];

    mockAxios.patch.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    const store = mockStore();
    return store.dispatch(editComment('test-slug', 'Edited comment', 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Delete comment action', () => {
  it('dispatches delete comment action', async () => {
    const mockData = {
      success: true,
      message: 'Comment deleted successfully'
    };

    const expectedActions = [{
      type: 'DELETE_COMMENT'
    }];

    mockAxios.delete.mockImplementationOnce(() => Promise.resolve({
      mockData
    }));

    const store = mockStore();
    return store.dispatch(deleteComment('test-slug', 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches empty array', async () => {
    const expectedActions = [];

    mockAxios.delete.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    const store = mockStore();
    return store.dispatch(deleteComment('test-slug', 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
