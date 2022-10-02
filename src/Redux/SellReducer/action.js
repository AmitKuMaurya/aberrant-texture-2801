import * as types from "./actionTypes";
import axios from "axios";

const postProduct = (payload) => (dispatch) => {

    dispatch({ type: types.POST_REQUEST_FORM });
    return axios.post(`https://dry-forester-heroku.herokuapp.com/posts`, payload).then((res) => {
        return dispatch({ type: types.POST_SUCCESS_FORM })
    }).catch((err) => {
        dispatch({ type: types.POST_FAILURE_FORM })
    })
}

const getProducts = (params) => (dispatch) => {

    dispatch({ type: types.GET_REQUEST_FORM })
    axios.get("https://dry-forester-heroku.herokuapp.com/posts", params).then((res) => {
        dispatch({ type: types.GET_SUCCESS_FORM, payload: res.data })
    }).catch((err) => {
        dispatch({ type: types.GET_FAILURE_FORM, payload: err })
    })
}

export { postProduct, getProducts }

