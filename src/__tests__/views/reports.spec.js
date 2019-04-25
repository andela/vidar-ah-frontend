import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ReportsPage from '../../views/reportedArticles/Index';

describe('Reports component', () => {
  const mockStore = configureStore([thunk]);
  let component;
  it('renders correctly', () => {
    const store = mockStore({
      reportsReducer: {
        reports: [],
      },
      authReducer: {
        currentUser: {},
        isLoggedIn: true
      }
    });

    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ReportsPage />
        </BrowserRouter>
      </Provider>
    );
    expect(component.find('.reports-container').exists()).toBe(true);
  });
});
