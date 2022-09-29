import { legacy_createStore, combineReducers } from "redux";

const rootReducer = combineReducers({})

const store = legacy_createStore(rootReducer)

export { store }