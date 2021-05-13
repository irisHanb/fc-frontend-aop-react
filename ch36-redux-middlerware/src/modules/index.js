import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import posts from './posts';

const rootReducer = combineReducers({
  counter,
  posts,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
