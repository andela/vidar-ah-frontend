/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/header/Header';

describe('Header shallow tests', () => {
  it('should render Header', () => {
    const wrapper = mount(
      <Header location="/create-article" />
    );
    expect(wrapper.find('.header-comp').exists()).toBe(true);
  });
});
