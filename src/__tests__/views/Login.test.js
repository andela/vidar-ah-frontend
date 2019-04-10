/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Login } from '../../views/Login';
import Header from '../../components/header/Header';

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

  const enzymeWrapper = shallow(<Login {...props} />);
  // console.log(enzymeWrapper.debug());
  return enzymeWrapper;
};

const LoginPage = getLoginPage();
describe('Test the Login Page', () => {
  it('it render the longin page without failing', () => {
    expect(toJson(LoginPage)).toMatchSnapshot();
  });
  it('should contain the Header', () => {
    expect(LoginPage.find(Header)).toHaveLength(1);
  });
  it('it render social media icons', () => {
    expect(LoginPage.find('SocialIcon')).toHaveLength(3);
  });
});
