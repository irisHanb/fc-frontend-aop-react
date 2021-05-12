export const reducerUtils = {
  initial: (data = null) => ({
    data,
    loading: null,
    error: null,
  }),
  loading: (prevState = null) => ({
    data: prevState,
    loading: true,
    error: null,
  }),
  success: (data) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error) => ({
    data: null,
    loading: false,
    error,
  }),
};

export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  const thunkCreator = (param) => async (dispatch) => {
    dispatch({ type });
    try {
      const playload = await promiseCreator(param);
      dispatch({ type: SUCCESS, playload });
    } catch (e) {
      dispatch({ type: ERROR, playload: e, error: true });
    }
  };
  return thunkCreator;
};

export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  const reducer = (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.playload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.playload),
        };
      default:
        return state;
    }
  };

  return reducer;
};
