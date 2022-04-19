import * as actiontypes from "../actionTypes";
import { addNewRecipeApi } from "../../api";

export const addRecipe = (newRecipe) => (dispatch) => {
    const { data } = addNewRecipeApi(newRecipe);
    console.log(data, "recipe added")
  try {
    dispatch({
      type: actiontypes.ADD_NEW_RECIPE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
