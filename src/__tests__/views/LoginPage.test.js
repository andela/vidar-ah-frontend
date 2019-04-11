/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { Login } from '../../views/LoginPage';
import Header from '../../components/header/index';
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


  const shallowWrapper = shallow(<Login {...props} />);

  const mountWrapper = mount(
    <MemoryRouter>
      <Login {...props} />
    </MemoryRouter>
  );
  return { shallowWrapper, mountWrapper };
};

const { mountWrapper } = getLoginPage();

describe('Test the Login Page', () => {
  it('it render the longin page without failing', () => {
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
    expect(mountWrapper.find('Container')).toHaveLength(2);
  });
});
