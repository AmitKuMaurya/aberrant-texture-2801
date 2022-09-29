import axios from "axios";
import * as types from "./actionTypes";

const getMobileRequest = () => {
    return {

    }
};

const getMobiles = () => dispatch => {
    dispatch({type: types.GET_MOBILES_REQUEST})
    return axios.get("http://localhost:8080/mobiles").then(r=> {
        dispatch({type: types.GET_MOBILES_SUCCESS, payload: r.data})
    }).catch(e=> {
        dispatch({type: types.GET_MOBILES_FAILURE, payload: e})
    })
}

export { getMobiles }