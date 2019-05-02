/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Stats from '../../components/Stats/index';

describe('Statistic component', () => {
  const mockStore = configureStore([thunk]);
  const mockState = {
    followers: 0,
    followings: 0,
    articlesRead: 0,
    articlesWritten: 0,
    articleId: 0,
  };
  const props = {
    ...mockState,
    getFollowers: jest.fn(),
    getFollowings: jest.fn(),
    getArticlesRead: jest.fn(),
    getArticlesWritten: jest.fn(),
    getUserArticles: jest.fn(),
    getArticleReactions: jest.fn(),
  };
  const store = mockStore({
    statsReducer: {
      ...mockState
    },
    authReducer: {
      currentUser: {
        id: 0,
      }
    },
  });

  it('should render the stats component correctly', () => {
    const mountWrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Stats {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(mountWrapper.find('.stats-title').exists()).toBe(true);
  });


  it('tests for when the initial state of the profile is empty', () => {
    const mountWrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Stats {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(mountWrapper.find('.article-container').exists()).toBe(false);
  });
});
