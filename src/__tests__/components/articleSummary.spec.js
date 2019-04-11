import React from 'react';
import { shallow } from 'enzyme';
import ArticleSummary from '../../components/articleSummary/ArticleSummary';

describe('Article summary shallow tests', () => {
  it('should render article cards', () => {
    const wrapper = shallow(<ArticleSummary />);

    expect(wrapper.find('.article-summary').exists()).toBe(true);
  });
});
