import React from 'react';
import { shallow } from 'enzyme';
import VerifyEmail from '../../components/VerifyEmail';

const props = {
  match: {
    params: {
      id: 'id',
    }
  },
  history: {
    push: jest.fn(),
    location: {
      pathname: '/verify_email'
    }
  },
};

describe('VerifyEmail component', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<VerifyEmail {...props} />);
    expect(wrapper.find('h3').text()).toEqual('');
    expect(wrapper.find('.form-black-bg').exists()).toBe(true);
    expect(wrapper.find('.verify-login').exists()).toBe(false);
  });
});
