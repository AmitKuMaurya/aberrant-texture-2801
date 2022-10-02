import * as types from "./actionTypes"

const initialState = {
    isAuth: false,
    isError: false,
    isLoading: false,
};


export const reducer = (state = initialState, action) => {
    console.log(action)
    const { type } = action;
    switch (type) {
        case types.LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case types.LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true };
        case types.LOGIN_FAILURE:
            return { ...state, isLoading: false, isAuth: false, isError: true };
        case "LOGOUT":
            return { ...state, isLoading: false, isAuth: false, isError: false };
        default:
            return state;
    }
}