import React from 'react';
import { shallow } from 'enzyme';
import ArticleSummary from '../../components/articleSummary/Index';

describe('ArticleSummary component', () => {
  it('should render article cards', () => {
    const props = {
      src: 'src',
      header: 'header',
      time: 'time',
      slug: 'slug',
    };
    const wrapper = shallow(<ArticleSummary {...props} />);

    expect(wrapper.find('.card-outline').exists()).toBe(true);
  });
});
