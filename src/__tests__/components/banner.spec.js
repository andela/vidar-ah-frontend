/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Banner from '../../components/banner/Index';


const getBanner = () => {
  const props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: ''
      }
    },
  };

  const mockStore = configureStore([thunk]);

  const store = mockStore({
    authReducer: {
      currentUser: {},
      isLoggedIn: true
    }
  });


  const shallowWrapper = shallow(<Banner {...props} />);

  const mountWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Banner {...props} />
      </MemoryRouter>
    </Provider>
  );
  return { shallowWrapper, mountWrapper };
};

const { mountWrapper: component } = getBanner();
describe('Banner component', () => {
  it('renders correctly', () => {
    expect(component.find('.cont').exists()).toBe(true);
    const btn = component.find('.button button');
    btn.simulate('click');
  });
});
