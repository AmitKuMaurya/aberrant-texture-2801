import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as BikeReducer } from "./Bikes/reducer";
import { reducer as MobileReducer } from "./Mobiles/reducer";
import { reducer as CarReducer } from "./Cars/reducer";

const rootReducer = combineReducers({ BikeReducer, MobileReducer, CarReducer});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };