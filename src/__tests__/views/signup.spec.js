/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import Signup from '../../views/signup/Index';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';


const getSignupPage = () => {
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: ''
      }
    },
    signupUser: jest.fn(),
  };

  const shallowWrapper = shallow(<Signup {...props} />);

  const mountWrapper = mount(
    <MemoryRouter>
      <Signup {...props} />
    </MemoryRouter>
  );
  return { shallowWrapper, mountWrapper };
};

const { mountWrapper } = getSignupPage();

describe('Test the Signup Page', () => {
  it('it render the signup page without failing', () => {
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
    expect(mountWrapper.find('Container')).toHaveLength(1);
  });
});
