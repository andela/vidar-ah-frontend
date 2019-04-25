import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as actions from '../../../redux/actions/articles';
import * as types from '../../../redux/actions/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockData = {
  success: true,
  message: 'You have liked this article',
  getArticles: {
    id: 'f7741099-ea43-4da5-8110-2ff09589ddae',
    title: 'Lekan is a good software engineer',
    slug: 'lekan-is-a-good-software-engineer-ahehvsxtz',
    description: 'This is a sample article description which will show you more details.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio. Tempor id eu nisl nunc mi ipsum faucibus. Tellus elementum sagittis vitae et leo duis ut. Mi bibendum neque egestas congue quisque egestas diam in arcu. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Venenatis a condimentum vitae sapien pellentesque habitant. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Massa id neque aliquam vestibulum morbi blandit cursus.',
    images: [
      'https://res.cloudinary.com/dqyytlxwe/image/upload/v1555578063/adult-architecture-backpack-1251861.jpg'
    ],
    taglist: [],
    userId: 3,
    categoryId: 1,
    createdAt: '019-04-18T09:08:21.372Z',
    updatedAt: '2019-04-18T09:08:21.372Z'
  },
  likes: 0
};

describe('Reaction actions', () => {
  it('should handle likeArticle action', () => {
    const expectedAction = {
      type: types.LIKE_ARTICLE
    };

    expect(actions.likeArticle()).toEqual(expectedAction);
  });

  it('should handle dislikeArticle action', () => {
    const expectedAction = {
      type: types.DISLIKE_ARTICLE
    };

    expect(actions.dislikeArticle()).toEqual(expectedAction);
  });
});

describe('Like article actions', () => {
  it('handles success case', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));

    const expectedActions = [{
      type: types.LIKE_ARTICLE,
    }];

    const store = mockStore({});

    return store.dispatch(actions.likeArticleRequest('slug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Dislike article actions', () => {
  it('handles success case', () => {
    mockData.message = 'You have unliked this article';
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));

    const expectedActions = [{
      type: types.DISLIKE_ARTICLE,
    }];

    const store = mockStore({});

    return store.dispatch(actions.dislikeArticleRequest('slug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
