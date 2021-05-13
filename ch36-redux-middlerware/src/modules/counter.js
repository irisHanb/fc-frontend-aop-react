import { delay, put, takeEvery } from 'redux-saga/effects';

const initialState = 0;

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCRESE_ASYNC = 'INCRESE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCRESE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// saga
function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}
function* decreaseSage() {
  yield delay(1000);
  yield put(decrease());
}

// saga: watcher
export function* counterSaga() {
  yield takeEvery(INCRESE_ASYNC, increaseSaga);
  yield takeEvery(DECREASE_ASYNC, decreaseSage);
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
