import * as postsApi from '../api/posts';
import { reducerUtils } from '../lib/asyncUtils';

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = reducerUtils.createPromiseThunk(
  GET_POSTS,
  postsApi.getPosts
);

export const getPostById = reducerUtils.createPromiseThunk(
  GET_POSTS_ERROR,
  postsApi.getPostById
);

export default function posts(state = initialState, action) {
  switch (action.type) {
    // posts
    case GET_POSTS:
      return {
        ...state,
        posts: reducerUtils.loading(),
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.payload),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.payload),
      };
    // post
    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading(),
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.payload),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.payload),
      };
    default:
      return state;
  }
}
