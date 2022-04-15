import { combineReducers } from "redux";
import { user } from "./AuthReducer";
import { logoutReducer } from "./AlertReducer"
export const rootReducers = combineReducers({
  user,
  logoutReducer,
});
