import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./reducers";

export default createStore(rootReducers, applyMiddleware(thunkMiddleware));
