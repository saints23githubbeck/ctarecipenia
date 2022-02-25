import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { loggedIn, user } from "./auth/reducer";

export const history = createBrowserHistory();


export const rootReducers = combineReducers({
  router: connectRouter(history),
  loggedIn,
  user
});