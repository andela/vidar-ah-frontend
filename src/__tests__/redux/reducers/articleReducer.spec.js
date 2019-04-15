import articlesReducer from '../../../redux/reducers/articleReducer';
import { GET_LATEST_ARTICLES, GET_TRENDING_ARTICLES } from '../../../redux/actions/actionTypes';

describe('GET_LATEST_ARTICLES', () => {
  test('add article to state', () => {
    const initialState = {
      articles: [],
      trendingArticles: []
    };
    const action = {
      type: GET_LATEST_ARTICLES,
      data: { one: 'one' }
    };
    const expectedState = {
      articles: [{ one: 'one' }],
      trendingArticles: []
    };

    expect(articlesReducer(initialState, action)).toEqual(expectedState);
  });
});

describe('GET_TRENDING_ARTICLES', () => {
  test('add article to state', () => {
    const initialState = {
      articles: [],
      trendingArticles: []
    };
    const action = {
      type: GET_TRENDING_ARTICLES,
      data: { one: 'one' }
    };
    const expectedState = {
      articles: [],
      trendingArticles: [{ one: 'one' }]
    };

    expect(articlesReducer(initialState, action)).toEqual(expectedState);
  });
});
