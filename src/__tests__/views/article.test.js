import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Article from '../../views/Article/Index';

describe('get an article by its slug', () => {
  const mockStore = configureStore([thunk]);
  let component;
  let article = {
    id: 1,
    title: 'test',
    description: 'description',
    images: ['image'],
    body: 'body',
    updatedAt: 'time',
    slug: 'slug',
  };
  const recommendedArticles = [article];

  it('renders an article component correctly', () => {
    const store = mockStore({
      articleReducer: {
        article,
        recommendedArticles,
      },
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Article
            history={{ location: { pathname: '/articles/:slug' } }}
            match={{ params: { slug: 'poierwjvoejcijwoei' } }}
          />
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('.article-container').exists()).toBe(true);
  });


  it('tests for when the initial state of the article is null', () => {
    article = null;
    const store = mockStore({
      articleReducer: {
        article,
        recommendedArticles,
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
  });
});
