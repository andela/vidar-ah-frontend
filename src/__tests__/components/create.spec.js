import React from 'react';
import { mount } from 'enzyme';
import Create from '../../components/CreateForms';

describe('Create component', () => {
  const article = {
    title: 'Interesting day at andela',
    description: 'Interesting day at andela',
    body: 'Interesting day at andela',
  };
  it('should render the create component', () => {
    const wrapper = mount(
      <Create
        onChangeText={f => f}
        onSubmit={f => f}
        onDelete={f => f}
        article={article}
        user={{ fullname: 'Ayinla' }}
      />
    );
    expect(wrapper.find('.form-field').exists()).toBe(true);
  });
});
