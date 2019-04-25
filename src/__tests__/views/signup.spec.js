/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SignUp } from '../../views/signup/Index';
import Header from '../../components/header/Index';
import ErrorAlert from '../../components/alert/Alert';
import Button from '../../components/button/Index';

const mockStore = configureStore();

const signupPage = () => {
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: '/signup'
      }
    },
    signup: jest.fn(),
  };

  const initialState = {
    authReducer: {
      currentUser: {},
      isLoggedIn: false
    }
  };

  const mountWrapper = mount(
    <Provider store={mockStore(initialState)}>
      <MemoryRouter>
        <SignUp {...props} />
      </MemoryRouter>
    </Provider>
  );
  return { mountWrapper };
};

const { mountWrapper } = signupPage();

describe('Signup component', () => {
  it('should render without failing', () => {
    expect(toJson(mountWrapper)).toMatchSnapshot();
  });
  it('should contain the header, button and erroralert components', () => {
    expect(mountWrapper.find(Header)).toHaveLength(1);
    expect(mountWrapper.find(Button)).toHaveLength(1);
    expect(mountWrapper.find(ErrorAlert)).toHaveLength(1);
  });
  it('should render social media icons', () => {
    expect(mountWrapper.find('SocialIcon')).toHaveLength(2);
  });
  it('should render form inputs, buttons and links', () => {
    expect(mountWrapper.find('Container')).toHaveLength(1);
    expect(mountWrapper.find('.dark-forms')).toHaveLength(10);
    expect(mountWrapper.find('.interest')).toHaveLength(1);
  });
});
