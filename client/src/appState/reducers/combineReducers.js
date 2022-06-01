import { combineReducers } from "redux";
import { user } from "./AuthReducer";
import { profile } from "./profileReducer";
import { recipe } from "./recipeReducer";
import {adminProfile} from "./AdminAuthReducer";
import { blog } from "./blogReducer";
import { category } from "./categoryReducer";


export const rootReducers = combineReducers({
  user,
  profile,
  recipe,
  adminProfile,
  blog,
  category,
});
