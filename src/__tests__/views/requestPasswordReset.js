import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import RequestPasswordReset from '../../views/passwordReset/RequestPasswordReset';
import Button from '../../components/button/Index';

describe('Request password reset', () => {
  const mockStore = configureStore([thunk]);
  let component;
  const states = {
    email: 'test@domain.com',
    error: 'No errors',
    message: 'Test message'
  };

  it('renders correctly', () => {
    const store = mockStore({
      states
    });

    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <RequestPasswordReset history={{ location: { pathname: '/requestpasswordreset' } }} />
        </BrowserRouter>
      </Provider>
    );

    expect(component.find('.yellow-button').exists()).toBe(true);
    component.find(Button).simulate('click');
  });
});
