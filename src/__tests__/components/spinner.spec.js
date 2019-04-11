/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { mount } from 'enzyme';
import Spinner from '../../components/spinner/Spinner';

describe('Spinner shallow tests', () => {
  it('should render spinner', () => {
    const wrapper = mount(
      <Spinner />
    );
    expect(wrapper.find('.loader-spin').exists()).toBe(true);
  });
});
