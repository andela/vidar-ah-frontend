import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LandingPage from '../../views/landingPage/Index';

describe('LandingPage', () => {
  const mockStore = configureStore([thunk]);
  let component;
  const articles = {
    articles: [
      {
        id: '45045d2c-bafa-412b-99fb-1e2e70625a04',
        title: 'Add endpoint to join and leave challenges',
        slug: 'add-endpoint-to-join-and-leave-challenges-qe7q9pt-3',
        description: 'Add endpoint to join and leave challenges',
        body: 'react-native-material-textfieldreact-native-material-textfieldreact-native-material',
        images: [],
        taglist: [],
        createdAt: '2019-04-11T13:54:32.150Z',
        updatedAt: '2019-04-11T13:54:32.150Z',
        userId: 4,
        categoryId: 1
      }
    ],
    trendingArticles: [
      {
        id: '45045d2c-bafa-412b-99fb-1e2e70625a04',
        title: 'Add endpoint to join and leave challenges',
        slug: 'add-endpoint-to-join-and-leave-challenges-qe7q9pt-3',
        description: 'Add endpoint to join and leave challenges',
        body: 'react-native-material-textfieldreact-native-material-textfieldreact-native',
        images: [],
        taglist: [],
        createdAt: '2019-04-11T13:54:32.150Z',
        updatedAt: '2019-04-11T13:54:32.150Z',
        userId: 4,
        categoryId: 1
      }

    ]
  };

  it('renders correctly', () => {
    const store = mockStore({
      articles
    });

    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </Provider>
    );
    expect(component.find('.test-div').exists()).toBe(true);
  });
});
