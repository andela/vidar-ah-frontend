import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Article from '../../views/Article/index';
import ReportArticle from '../../components/ReportArticle';


describe('Get an article by its slug', () => {
  const mockStore = configureStore([thunk]);
  let component;
  let article = {
    id: 1,
    title: 'test',
    description: 'description',
    body: 'body',
    updatedAt: 'time',
    slug: 'slug',
    images: ['https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg'],
    Comments: []
  };
  const recommendedArticles = [article];

  it('renders an article component correctly', () => {
    const store = mockStore({
      articleReducer: {
        article: {
          article
        },
        recommendedArticles
      },
      authReducer: {
        isLoggedIn: true,
        profile: {},
        currentUser: {}
      }
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Article
            history={{ location: { pathname: '/articles/:slug' } }}
            match={{ params: { slug: 'poierwjvoejcijwoei' } }}
            article={article}
          />
          , context:
          {}
          , attachTo: DOMElement
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('#article-container').exists()).toBe(true);
  });


  it('tests for when the initial state of the article is null', () => {
    article = { Comments: [] };
    const store = mockStore({
      articleReducer: {
        article: {
          article
        },
        recommendedArticles
      },
      authReducer: {
        isLoggedIn: true,
        profile: {},
        currentUser: {}
      }
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Article
            history={{ location: { pathname: '/articles/:slug' } }}
            match={{ params: { slug: 'poierwjvoejcijwoei' } }}
            article={article}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(component.find('#article-container').exists()).toBe(true);
  });
});

describe('Follow author buttons', () => {
  const mockStore = configureStore([thunk]);
  let component;
  const article = {
    id: 1,
    title: 'test',
    description: 'description',
    body: 'body',
    updatedAt: 'time',
    slug: 'slug',
    images: ['https://res.cloudinary.com/djdsxql5q/image/upload/v1554806589/Authors%20Haven/culture.jpg'],
    Comments: []
  };
  const recommendedArticles = [article];

  it('checks follow icon is available', () => {
    const store = mockStore({
      articleReducer: {
        article: {
          article
        },
        recommendedArticles
      },
      authReducer: {
        isLoggedIn: true,
        profile: {},
        currentUser: {}
      }
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Article
            history={{ location: { pathname: '/articles/:slug' } }}
            match={{ params: { slug: 'poierwjvoejcijwoei' } }}
            article={article}
          />
          , context:
          {}
          , attachTo: DOMElement
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('.follow-icon').exists()).toBe(true);
  });

  it('checks unfollow icon is available', () => {
    const store = mockStore({
      articleReducer: {
        article: {
          article
        },
        recommendedArticles
      },
      authReducer: {
        isLoggedIn: true,
        profile: {},
        currentUser: {}
      }
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Article
            history={{ location: { pathname: '/articles/:slug' } }}
            match={{ params: { slug: 'poierwjvoejcijwoei' } }}
            article={article}
          />
          , context:
          {}
          , attachTo: DOMElement
        </MemoryRouter>
      </Provider>
    );

    expect(component.find('.unfollow-icon').exists()).toBe(true);
  });

  it('reports an article', () => {
    const store = mockStore({
      articleReducer: {
        article: {
          article
        },
        recommendedArticles
      },
      authReducer: {
        isLoggedIn: true,
        profile: {},
        currentUser: {}
      }
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Article
            history={{ location: { pathname: '/articles/:slug' } }}
            match={{ params: { slug: 'poierwjvoejcijwoei' } }}
            article={article}
          />
          , context:
          {}
          , attachTo: DOMElement
        </MemoryRouter>
      </Provider>
    );

    const btn = component.find('.report-icon');
    btn.simulate('click');
    expect(component.find(ReportArticle).exists()).toBe(true);
  });
});
