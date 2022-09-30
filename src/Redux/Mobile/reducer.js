import * as types from "./actionTypes";

const initialState = {
  mobiles: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case types.GET_MOBILES_REQUEST:
        return {
            ...oldState,
            isLoading: true
        }
        case types.GET_MOBILES_SUCCESS:
            return {
                ...oldState,
                isLoading: false,
                mobiles: payload,
                isError: false
            }
            case types.GET_MOBILES_FAILURE:
                return {
                    ...oldState,
                    isLoading: false,
                    mobiles: [],
                    isError: true

                }
    default:
      return oldState;
  }
};
export { reducer };
