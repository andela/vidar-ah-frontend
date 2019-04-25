import React from 'react';
import { mount } from 'enzyme';
import ImageContainer from '../../components/ImageContainer';

describe('imageContainer component', () => {
  it('should render image container', () => {
    const wrapper = mount(
      <ImageContainer
        src="https://via.placeholder.com/700x400"
      />
    );
    expect(wrapper.find('.image-container').exists()).toBe(true);
  });
});
