/* eslint-disable no-unused-vars */
import { createStore } from 'redux';
// state
const initialSate = {
  counter: 0,
  text: '',
  list: [],
};

// action type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action creator
const increase = () => ({
  type: INCREASE,
});
const decrease = () => ({
  type: DECREASE,
});
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// reducer
const reducer = (state = initialSate, action) => {
  const { counter, text, list } = state;
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: list.concat(action.item),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('hello'));
store.dispatch(addToList({ id: 1, text: 'hohoho' }));

window.store = store;
