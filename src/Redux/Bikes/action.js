import axios from "axios";
import * as types from "./actionTypes";


const getBikes = (params) => (dispatch) => {
    dispatch({ type: types.GET_BIKES_REQUEST });
    return axios
      .get("  http://localhost:3004/bikes", params)
      .then((r) => {
        dispatch({ type: types.GET_BIKES_SUCCESS, payload: r.data });
      })
      .catch((e) => {
        dispatch({ type: types.GET_BIKES_FAILURE, payload: e });
      });
  };
  
  export { getBikes };