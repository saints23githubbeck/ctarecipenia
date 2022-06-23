import { combineReducers } from "redux";
import { user } from "./AuthReducer";
import { profile } from "./profileReducer";
import { recipe } from "./recipeReducer";
import { adminProfile } from "./AdminAuthReducer";
import { blog } from "./blogReducer";
import { category } from "./categoryReducer";
import { slider } from "./sliderReducer";
import { newsletter } from "./newsletterReducer";
import { advert } from "./advertReducer";

export const rootReducers = combineReducers({
  user,
  profile,
  recipe,
  adminProfile,
  blog,
  category,
  slider,
  newsletter,
  advert,
});
