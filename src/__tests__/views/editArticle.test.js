import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import EditArticle from '../../views/editArticle/Index';
import Header from '../../components/header/Header';
import Create from '../../components/createForms/Create';


const props = {
  history: {
    push: jest.fn(),
    location: {
      pathname: ''
    }
  },

  editArticle: jest.fn(),
  article: {},
  user: {},
};

const article = {
  id: 1,
  title: 'test',
  description: 'description',
  images: ['image'],
  body: 'body',
  updatedAt: 'time',
  slug: 'slug',
};

const currentUser = {
  username: 'testUsername',
  email: 'test@email.com',
  name: 'testName',
  role: 'admin',
};

const mockStore = configureStore([thunk]);

const store = mockStore({
  authReducer: {
    currentUser,
    isLoggedIn: true
  },
  articleReducer: {
    article,
  },
  component: 'Write'
});

const mountWrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <EditArticle {...props} />
    </MemoryRouter>
  </Provider>
);

describe('Article editing page', () => {
  it('should render without crashing', () => {
    expect(toJson(mountWrapper)).toMatchSnapshot();
  });

  it('should have a header element ', () => {
    expect(mountWrapper.find(Header)).toHaveLength(1);
  });
  it('should have a form creating element', () => {
    expect(mountWrapper.find(Create)).toHaveLength(1);
  });
});
