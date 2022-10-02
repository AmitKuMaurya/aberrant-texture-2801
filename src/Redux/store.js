import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as BikeReducer } from "./Bikes/reducer";
import { reducer as MobileReducer } from "./Mobiles/reducer";
import { reducer as CarReducer } from "./Cars/reducer";
import { postReducer as PostReducer } from "./SellReducer/reducer";
import { reducer as AuthReducer } from "./Auth/reducer"

const rootReducer = combineReducers({ BikeReducer, MobileReducer, CarReducer, PostReducer, AuthReducer });
console.log(rootReducer);
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };