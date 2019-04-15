import React from 'react';
import { shallow } from 'enzyme';
import ArticleDescription from '../../components/articleDescription/ArticleDescription';

describe('ArticleDescription component', () => {
  it('should render article description', () => {
    const wrapper = shallow(<ArticleDescription description="description" />);

    expect(wrapper.find('.description-text').exists()).toBe(true);
  });
});
