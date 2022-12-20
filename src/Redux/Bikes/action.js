import axios from "axios";
import * as types from "./actionTypes";


const getBikes = (params) => (dispatch) => {
    dispatch({ type: types.GET_BIKES_REQUEST });
    return axios
      .get("https://project-api-ytxm.onrender.com/olxbikes", params)
      .then((r) => {
        dispatch({ type: types.GET_BIKES_SUCCESS, payload: r.data });
      })
      .catch((e) => {
        dispatch({ type: types.GET_BIKES_FAILURE, payload: e });
      });
  };
  
  export { getBikes };