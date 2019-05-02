import React from 'react';
import { shallow } from 'enzyme';
import ArticleSummary from '../../components/ArticleSummary';

describe('ArticleSummary component', () => {
  it('should render article cards', () => {
    const props = {
      src: 'src',
      header: 'header',
      time: 'time',
      slug: 'slug',
      url: 'url'
    };
    const wrapper = shallow(<ArticleSummary {...props} />);

    expect(wrapper.find('.card-outline').exists()).toBe(true);
  });
});
