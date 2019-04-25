import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReportModal from '../../components/ReportArticle';

describe('Report modal component', () => {
  const mockStore = configureStore([thunk]);

  const store = mockStore({
  });
  it('should render the report modal component without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ReportModal
          visible
          closeModal={f => f}
          articleSlug="sraoeisdojxkeprwoejd"
          reportArticle
        />
      </Provider>
    );
    expect(wrapper.find('.report').exists()).toBe(true);
  });
});
