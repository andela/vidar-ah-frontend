import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Article from '../../views/Article/Article';

describe('Article', () => {
  const mockStore = configureStore([thunk]);
  let component;
  let article = {
    title: 'test',
    description: 'description',
    images: ['image'],
    body: 'body',
  };

  it('renders correctly', () => {
    const store = mockStore({
      articleReducer: {
        article,
      },
    });

    component = mount(
      <Provider store={store}>
        <Article
          history={{ location: { pathname: '/articles/:slug' } }}
          match={{ params: { slug: 'poierwjvoejcijwoei' } }}
        />
      </Provider>
    );
    expect(component.find('.article-container').exists()).toBe(true);
  });


  it('renders spinner when article == null', () => {
    article = null;
    const store = mockStore({
      articleReducer: {
        article,
      },
    });

    component = mount(
      <Provider store={store}>
        <Article
          history={{ location: { pathname: '/articles/:slug' } }}
          match={{ params: { slug: 'poierwjvoejcijwoei' } }}
        />
      </Provider>
    );

    expect(component.find('.article-container').exists()).toBe(false);
    expect(component.find('div').text()).toEqual('Loading...');
  });
});
