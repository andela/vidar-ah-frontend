import articleReducer from '../../../redux/reducers/articleReducer';
import * as types from '../../../redux/actions/actionTypes';

const initialState = {
  articles: [],
  article: {},
  recommendedArticles: [],
  trendingArticles: [],
  successMessage: '',
};

describe('article reducer', () => {
  it('should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_ARTICLE', () => {
    initialState.article = 'article';
    expect(articleReducer(undefined, {
      type: types.SET_ARTICLE,
      payload: 'article'
    })).toEqual(initialState);
  });
});
