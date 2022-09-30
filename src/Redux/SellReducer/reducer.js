import * as types from "./actionTypes";

const initialState = {
        aidDetails : [],
        isLoading : false,
        isError : false
}

const postReducer = (oldState = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.POST_REQUEST_FORM:
        return { ...oldState, isLoading: true };
  
      case types.POST_SUCCESS_FORM:
        return { ...oldState, isLoading: false, aidDetails: payload };
  
      case types.POST_FAILURE_FORM:
        return {
          ...oldState,
          isLoading: false,
          isError: true,
          aidDetails: [],
        };
  
      default:
        return oldState;
    }
  };

  export {postReducer}