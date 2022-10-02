import axios from "axios";
import * as types from "./actionTypes";

export const login = (payload) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    return axios.post("https://reqres.in/api/login", payload).then((res) => {
        // console.log(res);
        return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
    }).catch((err) => {
        return dispatch({ type: types.LOGIN_FAILURE })
    })
}


