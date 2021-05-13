import { getContext, select, takeEvery } from '@redux-saga/core/effects';
import * as postsApi from '../api/posts';
import {
  createPromiseSaga,
  createPromiseSagaById,
  handleAsyncActions,
  handleAsyncActionsById,
  reducerUtils,
} from '../lib/asyncUtils';

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
const CLEAR_POST = 'CLEAR_POST';

const GO_TO_HOME = 'GO_TO_HOME';
const PRINT_STATE = 'PRINT_STATE';

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
  meta: id,
});
export const clearPost = () => ({ type: CLEAR_POST });
export const goHome = () => ({ type: GO_TO_HOME });
export const printState = () => ({ type: PRINT_STATE });

//=== saga
const getPostsSaga = createPromiseSaga(GET_POSTS, postsApi.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsApi.getPostById);
function* goToHomeSage() {
  const history = yield getContext('history');
  history.push('/');
}

function* printStateSaga() {
  const state = yield select((state) => state.posts);
  console.log('print state> ', state);
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSage);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

// reducer
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);

export default function posts(state = initialState, action) {
  switch (action.type) {
    // posts
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    // post
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);

    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}
