import React from 'react';
import { shallow } from 'enzyme';
import ArticleBody from '../../components/articleBody/ArticleBody';

describe('Article body shallow tests', () => {
  it('should render article body', () => {
    const wrapper = shallow(<ArticleBody />);

    expect(wrapper.find('.body-text').exists()).toBe(true);
  });
});
