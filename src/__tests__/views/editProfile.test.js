/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import EditProfile from '../../views/profilePage/EditProfile';
import validation from '../../utils/validator';

describe('EditProfile component', () => {
  const mockStore = configureStore([thunk]);
  let component;
  const profile = {
    firstname: 'Jacinta',
    lastname: 'Alex',
    bio: 'bio',
  };
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: '/userprofile'
      }
    },
  };
  const editProfile = profile;

  const store = mockStore({
    authReducer: {
      profile,
      editProfile,
    },
  });

  afterEach(() => {
    component.unmount();
  });

  it('renders an edit profile component correctly', () => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile
            {...props}
          />
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('.profile-container').exists()).toBe(true);
  });


  it('tests for when the initial state of the profile is empty', () => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile
            {...props}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(component.find('.profile-container').exists()).toBe(true);
  });

  it('handles input changes', () => {
    const event = {
      target: {
        name: 'firstname',
        value: 'onchange'
      }
    };

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile
            {...props}
          />
        </MemoryRouter>
      </Provider>
    );

    const firstname = component.find('input[name="firstname"]');
    firstname.simulate('change', event);
    expect(component.find('input[name="firstname"]').prop('value')).toEqual('onchange');

    event.target.name = 'lastname';
    const lastname = component.find('.input').at(1).find('input');
    lastname.simulate('change', event);
    expect(component.find('input[name="lastname"]').prop('value')).toEqual('onchange');

    event.target.name = 'bio';
    const bio = component.find('textarea[name="bio"]');
    bio.simulate('change', event);
    expect(component.find('textarea[name="bio"]').prop('value')).toEqual('onchange');
  });

  it('should handle cancelChange', () => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile
            {...props}
          />
        </MemoryRouter>
      </Provider>
    );

    const cancelChangeButton = component.find('.avatar-btn').at(4);
    cancelChangeButton.simulate('click');

    expect(props.history.push).toHaveBeenCalledWith('/userprofile');
  });

  it('should handle handleSubmit', () => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile
            {...props}
          />
        </MemoryRouter>
      </Provider>
    );

    const form = component.find('.form').at(1);
    const event = {
      preventDefault: jest.fn(),
    };

    form.simulate('submit', event);
    expect(props.history.push).toHaveBeenCalledWith('/userprofile');

    jest.spyOn(validation, 'validateUserProfile').mockImplementationOnce(() => ['error', 'error two']);
    form.simulate('submit', event);
    expect(validation.validateUserProfile).toHaveBeenCalled();
  });
});
