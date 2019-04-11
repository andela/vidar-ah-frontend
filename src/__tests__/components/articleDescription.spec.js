import React from 'react';
import { shallow } from 'enzyme';
import ArticleDescription from '../../components/articleDescription/ArticleDescription';

describe('Article description shallow tests', () => {
  it('should render article description', () => {
    const wrapper = shallow(<ArticleDescription />);

    expect(wrapper.find('.description-text').exists()).toBe(true);
  });
});
