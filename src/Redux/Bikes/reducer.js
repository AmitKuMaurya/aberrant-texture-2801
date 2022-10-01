import * as types from "./actionTypes";

const initialState = {
  bikes: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case types.GET_BIKES_REQUEST:
        return {
            ...oldState,
            isLoading: true
        }
        case types.GET_BIKES_SUCCESS:
            return {
                ...oldState,
                isLoading: false,
                bikes: payload,
                isError: false
            }
            case types.GET_BIKES_FAILURE:
                return {
                    ...oldState,
                    isLoading: false,
                    bikes: [],
                    isError: true

                }
    default:
      return oldState;
  }
};
export { reducer };