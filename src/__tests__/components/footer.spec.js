import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/footer/Footer';

describe('Footer component', () => {
  it('should render footer', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('.footer').exists()).toBe(true);
    expect(wrapper.find('.footer').text()).toEqual('Copyright © AuthorsHaven App 2019. All Rights Reserved.');
  });
});
