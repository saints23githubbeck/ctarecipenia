import { combineReducers } from "redux";
import { posts, postsId } from "./postReducer";
import { user } from "./AuthReducer";

export const rootReducers = combineReducers({
  posts,
  postsId,
  user,
});
