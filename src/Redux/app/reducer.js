import * as types from "./actionTypes";

const initialState = {
  mobiles: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return oldState;
  }
};
export { reducer };
