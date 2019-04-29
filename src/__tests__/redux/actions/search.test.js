import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { searchArticles } from '../../../redux/actions/getArticles';

const middlewares = [thunk];
// eslint-disable-next-line import/prefer-default-export
const mockStore = configureMockStore(middlewares);

describe('Get search results action', () => {
  it('dispatches run search action', async () => {
    const mockData = {
      articles: [
        {
          id: '1adfacc2-fed7-4189-a94b-0cc1e181673d',
          title: 'Coding words',
          slug: 'coding-words-oq9rq-cq1',
          description: 'My poetry series',
          body: 'There is a girl, on the street of Lagos, wearing a tattered slippers and a pretty frayed dress, with a pale green bowl on her head, filled with orishiriri, trying to make a living out of life, while her friends sit on a bench, learning codes and numbers.',
          images: [],
          taglist: [],
          createdAt: '2019-04-12T19:13:25.342Z',
          updatedAt: '2019-04-12T19:13:25.342Z',
          userId: 62,
          categoryId: 1
        }
      ]
    };

    const expectedActions = [{
      type: 'SEARCH',
    }];

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));

    const store = mockStore();
    return store.dispatch(searchArticles('?offset=0&limit=6&term=&author=')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
