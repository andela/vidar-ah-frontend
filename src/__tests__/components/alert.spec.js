import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../components/Alert';

describe('Alert component', () => {
  it('should render correctly', () => {
    const props = {
      errors: ['This is an error object']
    };
    const wrapper = shallow(<Alert {...props} />);

    expect(wrapper.find('.floating-alert').exists()).toBe(true);
  });
});
