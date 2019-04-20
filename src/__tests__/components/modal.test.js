import React from 'react';
import Modal from 'react-modal';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import DeleteModal from '../../components/DeleteModal';

const props = {
  article: {},
  closeModal: jest.fn(),
  deleteArticle: jest.fn(),
  displayModal: jest.bool,
  history: {
    push: jest.fn(),
    location: {
      pathname: ''
    }
  },
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

const mockStore = configureStore([thunk]);

const store = mockStore({
  articleReducer: {
    article,
  }
});

const mountWrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <DeleteModal {...props} />
    </MemoryRouter>
  </Provider>
);

describe('DeleteModal component', () => {
  it('should contain react modal', () => {
    expect(mountWrapper.find(Modal)).toHaveLength(1);
  });
  it('should render the modal contents', () => {
    expect(mountWrapper.find(Modal).children.length).toBe(1);
  });
});
