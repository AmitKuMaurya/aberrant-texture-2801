import * as types from "./actionTypes";

const initialState = {
  cars: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case types.GET_CARS_REQUEST:
        return {
            ...oldState,
            isLoading: true
        }
        case types.GET_CARS_SUCCESS:
            return {
                ...oldState,
                isLoading: false,
                cars: payload,
                isError: false
            }
            case types.GET_CARS_FAILURE:
                return {
                    ...oldState,
                    isLoading: false,
                    cars: [],
                    isError: true

                }
    default:
      return oldState;
  }
};
export { reducer };