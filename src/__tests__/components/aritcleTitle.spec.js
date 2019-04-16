import React from 'react';
import { shallow } from 'enzyme';
import ArticleTitle from '../../components/articleTitle/ArticleTitle';

describe('ArticleTitle component', () => {
  it('should render article title', () => {
    const wrapper = shallow(<ArticleTitle title="title" />);

    expect(wrapper.find('.title').exists()).toBe(true);
  });
});
