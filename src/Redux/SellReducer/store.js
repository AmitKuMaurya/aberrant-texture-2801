import {legacy_createStore,applyMiddleware} from "redux";

import {postReducer} from "./reducer";

import thunk from "redux-thunk";

const store = legacy_createStore(postReducer,applyMiddleware(thunk));

export {store}