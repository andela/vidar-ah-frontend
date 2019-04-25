import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/header/Index';

describe('Header component', () => {
  let component;

  const mockStore = configureStore([thunk]);
  const store = mockStore({
    authReducer: {
      isLoggedIn: false,
      currentUser: {}
    }
  });


  it('renders correctly', () => {
    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(component.find('.header-container').exists()).toBe(true);
  });
});
