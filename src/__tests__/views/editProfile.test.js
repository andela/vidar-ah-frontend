/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import EditProfile from '../../views/profilePage/EditProfile';


describe('EditProfile component', () => {
  const mockStore = configureStore([thunk]);
  let component;
  let profile = {
    firstname: 'Jacinta',
    lastname: 'Alex',
    bio: 'bio',
  };
  const editProfile = profile;

  it('renders an edit profile component correctly', () => {
    const store = mockStore({
      authReducer: {
        profile,
        editProfile,
      },
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile
            history={{}}
          />
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('.profile-container').exists()).toBe(true);
  });


  it('tests for when the initial state of the profile is empty', () => {
    profile = editProfile;
    const store = mockStore({
      authReducer: {
        profile,
        editProfile,
      },
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile
            history={{}}
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

    const store = mockStore({
      authReducer: {
        profile,
        editProfile,
      },
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile
            history={{}}
          />
        </MemoryRouter>
      </Provider>
    );

    const firstname = component.find('.input').at(0).find('input');
    firstname.simulate('change', event);

    event.target.name = 'lastname';
    const lastname = component.find('.input').at(1);
    lastname.simulate('change', event);

    event.target.name = 'bio';
    const bio = component.find('.input').at(2);
    bio.simulate('change', event);
  });
});
