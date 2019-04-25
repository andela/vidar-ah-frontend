import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as actions from '../../../redux/actions/articles';
import * as types from '../../../redux/actions/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('article actions', () => {
  it('handles setArticle', () => {
    const article = 'article';
    const expectedAction = {
      type: types.SET_ARTICLE,
      payload: article,
    };

    expect(actions.setArticle(article)).toEqual(expectedAction);
  });

  it('handles setArticleError', () => {
    const error = 'error';
    const expectedAction = {
      type: types.SET_ARTICLE_ERROR,
      payload: error,
    };

    expect(actions.setArticleError(error)).toEqual(expectedAction);
  });
});

describe('handles getArticleRequest', () => {
  it('handles success case', () => {
    const mockData = {
      article: {
        title: 'An article title',
        body: 'The body of an article',
        description: 'The description of an article',
      },
      success: true,
      likeCount: 0,
      dislikeCount: 0
    };

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockData.article
    }));

    const expectedActions = [{
      type: types.SET_ARTICLE,
      payload: mockData.article,
    }];

    const store = mockStore({ article: {} });

    return store.dispatch(actions.getArticleRequest('slug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('handles error case', async () => {
    const mockData = {
      response: { message: 'this failed' }
    };

    // eslint-disable-next-line prefer-promise-reject-errors
    mockAxios.get.mockImplementationOnce(() => Promise.reject({
      ...mockData,
    }));

    const expectedActions = [{
      type: types.SET_ARTICLE_ERROR,
      payload: mockData.response.message,
    }];

    const store = mockStore({ article: {} });

    return store.dispatch(actions.getArticleRequest('slug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
