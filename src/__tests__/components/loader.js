import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Loader from '../../components/Loader';

describe('Loader component', () => {
  let component;

  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <Loader />
      </BrowserRouter>
    );
    expect(component.find('.loader').exists()).toBe(true);
  });
});
