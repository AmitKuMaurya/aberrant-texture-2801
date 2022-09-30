import * as types from "./actionTypes";
import axios from "axios";

const postProduct = (payload) => (dispatch)=>{

    dispatch({type : types.POST_REQUEST_FORM});

    return axios.post(`https://dry-forester-heroku.herokuapp.com/posts`,payload).then((res)=>{
        return dispatch({type : types.POST_SUCCESS_FORM, payload : res.aidDetails})
    }).catch((err)=>{
        dispatch({ type : types.POST_FAILURE_FORM , payload : err })
    })
}

export {postProduct}

