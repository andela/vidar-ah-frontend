import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Notification from '../../views/Notification/index';

describe('Notification component', () => {
  const mockStore = configureStore([thunk]);
  let component;
  let notify = [{
    message: "Dubby20 liked your article"
  }];

  it('renders notifications correctly', () => {
    const store = mockStore({
      notificationReducer: {
        notify
      },

    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Notification
            notify={[]}
          />
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('.box').exists()).toBe(true);
  });


  it('tests for when the initial state of the article is null', () => {
    notify = [];

    const store = mockStore({
      notificationReducer: {
        notify
      },

    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Notification
            notify={[]}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(component.find('.box').exists()).toBe(true);
  });
});
