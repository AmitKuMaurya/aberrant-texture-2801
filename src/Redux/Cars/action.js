import axios from "axios";
import * as types from "./actionTypes";


export const getCars = (params) => (dispatch) => {
  dispatch({ type: types.GET_CARS_REQUEST });
  return axios
    .get("https://project-api-ytxm.onrender.com/olxcars", params)
    .then((r) => {
      dispatch({ type: types.GET_CARS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_CARS_FAILURE, payload: e });
    });
};
