import * as postsApi from '../api/posts';
import {
  createPromiseThunk,
  createPromiseThunkById,
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

// thunk
export const getPosts = createPromiseThunk(GET_POSTS, postsApi.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsApi.getPostById);
export const clearPost = () => ({ type: CLEAR_POST });
export const goHome =
  () =>
  (dispatch, getState, { history }) => {
    history.push('/');
  };

// reducer
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);

// const getPostReducer = (state, action) => {
//   const id = action.meta;
//   switch (action.type) {
//     case GET_POST:
//       return {
//         ...state,
//         post: {
//           ...state.post,
//           [id]: reducerUtils.loading(state.post[id]?.data),
//         },
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: {
//           ...state,
//           [id]: reducerUtils.success(action.payload),
//         },
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: {
//           ...state,
//           [id]: reducerUtils.error(action.payload),
//         },
//       };
//     default:
//       return state;
//   }
// };

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
