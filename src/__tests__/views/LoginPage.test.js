/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Login } from '../../views/LoginPage';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';


const getLoginPage = () => {
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: ''
      }
    },

    loginUser: jest.fn(),
    loading: false
  };

  const mockStore = configureStore([thunk]);

  const store = mockStore({
    authReducer: {
      currentUser: {},
      isLoggedIn: true
    }
  });


  const shallowWrapper = shallow(<Login {...props} />);

  const mountWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>
    </Provider>
  );
  return { shallowWrapper, mountWrapper };
};

const { mountWrapper } = getLoginPage();

describe('Login page', () => {
  it('it render the login page without failing', () => {
    expect(toJson(mountWrapper)).toMatchSnapshot();
  });
  it('should contain the Header', () => {
    expect(mountWrapper.find(Header)).toHaveLength(1);
    expect(mountWrapper.find(Button)).toHaveLength(1);
  });
  it('it render social media icons', () => {
    expect(mountWrapper.find('SocialIcon')).toHaveLength(3);
  });
  it('it render form inputs, buttons and links', () => {
    expect(mountWrapper.find('Container')).toHaveLength(3);
  });
});
