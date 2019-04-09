/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { mount } from 'enzyme';
import ImageContainer from '../../components/imageContainer/ImageContainer';

describe('image container shallow tests', () => {
  it('should render image container', () => {
    const wrapper = mount(
      <ImageContainer
        src="https://via.placeholder.com/700x400"
      />
    );
    expect(wrapper.find('.image-container').exists()).toBe(true);
  });
});
