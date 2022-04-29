import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducers } from "./reducers/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";

// export const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
export default function configurestore(preloadedState = {}) {
  const middleware = [thunkMiddleware];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middleware)
  );
  const enhancer = [middlewareEnhancer];
  const composeEnhancer = compose(...enhancer);
  const store = createStore(rootReducers, preloadedState, composeEnhancer);

  return store;
}
