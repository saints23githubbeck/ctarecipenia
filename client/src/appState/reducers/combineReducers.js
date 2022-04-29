import { combineReducers } from "redux";
import { user } from "./AuthReducer";
import { profile } from "./profileReducer";
export const rootReducers = combineReducers({
  user,
  profile,
});
