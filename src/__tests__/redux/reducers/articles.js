import articleReducer from '../../../redux/reducers/articleReducer';
import * as types from '../../../redux/actions/actionTypes';


const initialState = {
  article: null,
  articles: [],
  trendingArticles: []
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
