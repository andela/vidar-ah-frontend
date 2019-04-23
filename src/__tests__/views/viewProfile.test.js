import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ViewProfile from '../../views/profilePage/ViewProfile';

describe('ViewProfile component', () => {
  const mockStore = configureStore([thunk]);
  let component;
  let profile = {
    firstname: 'Jacinta',
    lastname: 'Alex',
    email: 'jacy@gmail.com',
    bio: 'bio',
  };
  const userProfile = [profile];

  it('renders a view profile component correctly', () => {
    const store = mockStore({
      authReducer: {
        profile,
        userProfile,
        currentUser: {
          id: 0,
        }
      },
      statsReducer: {
        followers: 0,
        followings: 0,
        articlesRead: 0,
        articlesWritten: 0,
        authorId: 0,
      }
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ViewProfile
            profile={{}}
            getProfileRequest={f => f}
            history={{}}
          />
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('.profile-container').exists()).toBe(true);
  });


  it('tests for when the initial state of the profile is empty', () => {
    profile = {};
    const store = mockStore({
      authReducer: {
        profile,
        userProfile,
        currentUser: {
          id: 0,
        }
      },
      statsReducer: {
        followers: 0,
        followings: 0,
        articlesRead: 0,
        articlesWritten: 0,
        authorId: 0,
      }
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ViewProfile
            profile={{}}
            getProfileRequest={f => f}
            history={{}}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(component.find('.article-container').exists()).toBe(false);
  });
});
