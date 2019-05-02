import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ViewComment from '../../components/ViewComment';


describe('ViewComment component', () => {
  const mockStore = configureStore([thunk]);
  let component;

  it('renders correctly', () => {
    const store = mockStore({
      authReducer: {
        currentUser: {
          fullname: 'wfecw',
        }
      }
    });

    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ViewComment comment="test comment" time="2019-04-17T15:37:54.089Z" id="1" slug="test-slug" userId="5" />
        </BrowserRouter>
      </Provider>
    );
    expect(component.find('.card-outline-comment').exists()).toBe(true);
  });
});
