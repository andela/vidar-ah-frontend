import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ResetPassword from '../../views/passwordReset/ResetPassword';
import Button from '../../components/button/Index';

describe('Reset password', () => {
  const mockStore = configureStore([thunk]);
  let component;
  const states = {
    password: 'abcdef',
    password2: 'abcdef',
    error: 'No errors',
    message: 'Test message',
  };
  const match = {
    params: {
      key: 'avdn2f2'
    }
  };


  it('renders correctly', () => {
    const store = mockStore({
      states
    });

    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ResetPassword history={{ location: { pathname: '/requestpasswordreset' } }} match={match} />
        </BrowserRouter>
      </Provider>
    );

    expect(component.find('.yellow-button').exists()).toBe(true);
    component.find(Button).simulate('click');
  });
});
