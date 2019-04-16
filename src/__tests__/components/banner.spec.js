import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Banner from '../../components/banner/Index';

describe('Banner component', () => {
  let component;

  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>
    );
    expect(component.find('.cont').exists()).toBe(true);
  });
});
