/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { mount } from 'enzyme';
import Create from '../../components/createForms/Create';

describe('Create shallow tests', () => {
  const article = {
    title: 'Interesting day at andela',
    description: 'Interesting day at andela',
    body: 'Interesting day at andela',
  };
  it('should render footer', () => {
    const wrapper = mount(
      <Create
        onChangeText={f => f}
        onSubmit={f => f}
        onDelete={f => f}
        article={article}
      />
    );
    expect(wrapper.find('.form-field').exists()).toBe(true);
  });
});
