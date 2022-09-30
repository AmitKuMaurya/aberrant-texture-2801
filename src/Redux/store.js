import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as BikeReducer } from "./Bikes/reducer";

const rootReducer = combineReducers({ BikeReducer});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };