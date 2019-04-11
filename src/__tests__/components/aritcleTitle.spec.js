import React from 'react';
import { shallow } from 'enzyme';
import ArticleTitle from '../../components/articleTitle/ArticleTitle';

describe('Article title shallow tests', () => {
  it('should render article title', () => {
    const wrapper = shallow(<ArticleTitle />);

    expect(wrapper.find('.title').exists()).toBe(true);
  });
});
