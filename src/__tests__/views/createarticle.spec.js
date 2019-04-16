import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CreateArticle from '../../views/createArticle/index';

describe('CreateArticle component', () => {
  const mockStore = configureStore([thunk]);
  let component;
  it('renders correctly', () => {
    const store = mockStore({
      articleReducer: {
        articles: [],
      },
      authReducer: {
        isLoggedIn: false,
        currentUser: {
          fullname: 'Ayinla'
        }
      }
    });

    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CreateArticle />
        </BrowserRouter>
      </Provider>
    );
    expect(component.find('.create-article-container').exists()).toBe(true);
  });
});
