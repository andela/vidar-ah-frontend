import * as types from '../../../redux/actions/actionTypes';
import statsReducer from '../../../redux/reducers/statsReducer';

const payload = {
  followers: [],
  followings: [],
  articleCount: {},
  articleRead: {},
  userArticle: {},
  articleReactions: {},
};

const initialState = {
  followers: 0,
  followings: 0,
  articlesRead: 0,
  articlesCreated: 0
};

describe('Stats reducer', () => {
  test('should return the initial state', () => {
    expect(statsReducer(initialState, {})).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(statsReducer(initialState, {
      type: types.GET_FOLLOWERS,
      payload: payload.followers
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(statsReducer(initialState, {
      type: types.GET_FOLLOWING,
      payload: payload.followings
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(statsReducer(initialState, {
      type: types.GET_CREATED_ARTICLES_COUNT,
      payload: payload.articleCount
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(statsReducer(initialState, {
      type: types.GET_READ_ARTICLES_COUNT,
      payload: payload.articleRead
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(statsReducer(initialState, {
      type: types.GET_USER_ARTICLES,
      payload: payload.userArticle
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(statsReducer(initialState, {
      type: types.GET_ARTICLE_REACTIONS,
      payload: payload.articleReactions
    })).toMatchSnapshot();
  });
});
