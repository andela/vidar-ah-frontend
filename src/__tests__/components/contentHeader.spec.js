import React from 'react';
import { mount } from 'enzyme';
import ContentHeader from '../../components/contentHeader/Index';

describe('ContentHeader component', () => {
  let component;

  it('renders correctly', () => {
    component = mount(
      <ContentHeader textHeader="Test header" />
    );
    expect(component.find('.content-header-test').exists()).toBe(true);
  });
});
