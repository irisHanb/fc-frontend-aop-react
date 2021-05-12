const initialState = {
  number: 0,
  diff: 1,
};

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increse = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export default function counter(state = initialState, action) {
  const { number, diff } = action;
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff,
      };
    case INCREASE:
      return {
        ...state,
        number: number + diff,
      };
    case DECREASE:
      return {
        ...state,
        number: number - diff,
      };
    default:
      return state;
  }
}
