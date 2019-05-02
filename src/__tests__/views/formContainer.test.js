import React from 'react';
import { mount } from 'enzyme';
import FormContainer from '../../components/FormContainer';

describe('FormContainer component', () => {
  let component;
  const props = {
    formData: { firstname: undefined, lastname: undefined, bio: undefined },
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    cancelChanges: jest.fn(),
    renderErrors: jest.fn(),
    errors: [],
  };

  it('renders a form component correctly', () => {
    component = mount(
      <FormContainer {...props} />
    );
    expect(component.find('.form-container').exists()).toBe(true);
  });

  it('handles input changes', () => {
    props.formData = { firstname: 'firstname', lastname: 'lastname', bio: 'bio' };
    const event = {
      target: {
        name: 'firstname',
        value: 'onchange'
      }
    };

    component = mount(
      <FormContainer {...props} />
    );
    const firstname = component.find('input[name="firstname"]');
    firstname.simulate('change', event);
    expect(props.handleChange.mock.calls[0][0].target.name).toEqual(event.target.name);

    event.target.name = 'lastname';
    const lastname = component.find('input[name="lastname"]');
    lastname.simulate('change', event);
    expect(props.handleChange.mock.calls[1][0].target.name).toEqual(event.target.name);

    event.target.name = 'bio';
    const bio = component.find('.input').at(2);
    bio.simulate('change', event);
    expect(props.handleChange.mock.calls[2][0].target.name).toEqual(event.target.name);
  });
});
