import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Comment from '../../components/Comment';


describe('Comment component', () => {
  const mockStore = configureStore([thunk]);
  let component;

  it('renders correctly', () => {
    const store = mockStore({});

    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Comment slug="test-slug" />
        </BrowserRouter>
      </Provider>
    );
    expect(component.find('.comment-test').exists()).toBe(true);
  });
});
