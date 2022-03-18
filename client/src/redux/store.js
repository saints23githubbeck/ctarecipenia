
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./reducers/combineReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducers, composeWithDevTools(compose(applyMiddleware(thunk))));