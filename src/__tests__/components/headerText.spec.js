import React from 'react';
import { mount } from 'enzyme';
import HeaderText from '../../components/headerText/Index';

describe('HeaderText component', () => {
  let component;

  it('renders correctly', () => {
    component = mount(
      <HeaderText textHeader="Test header" textBody="Test body" />
    );
    expect(component.find('.header-test').exists()).toBe(true);
  });
});
