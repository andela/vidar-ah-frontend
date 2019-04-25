import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../../components/Checkbox';

describe('Alert component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Checkbox />);

    expect(wrapper.find('.p-2').exists()).toBe(true);
    expect(wrapper.find('#example-collapse-text').exists()).toBe(true);
  });
});
