import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Button from '../../components/button/Button';

const testFunc = () => {};

describe('Button component', () => {
  let component;
  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <Button text="Test button" onClick={testFunc} />
      </BrowserRouter>
    );
    expect(component.find('.yellow-button').exists()).toBe(true);
  });
});
