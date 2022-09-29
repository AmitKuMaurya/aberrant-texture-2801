import * as types from "./actiontypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", payload)
    .then((r) => {
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: r.data.token });
    })
    .catch((e) => dispatch({ type: types.USER_LOGIN_FAILURE, payload: e }));
};

export { login };
