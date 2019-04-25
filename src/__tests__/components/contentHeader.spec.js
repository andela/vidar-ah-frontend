import React from 'react';
import { mount } from 'enzyme';
import ContentHeader from '../../components/ContentHeader';

describe('ContentHeader component', () => {
  let component;

  it('renders correctly', () => {
    component = mount(
      <ContentHeader textHeader="Test header" />
    );
    expect(component.find('.content-header-test').exists()).toBe(true);
  });
});
