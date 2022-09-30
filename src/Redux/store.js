import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as MobileReducer } from "./Mobile/reducer";


const rootReducer = combineReducers({ MobileReducer});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
