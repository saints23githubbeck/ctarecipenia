import * as actiontypes from "../actionTypes";
import { addRecipeApi } from "../../api/server";


export const addRecipe = (recipe) => async(dispatch) => {
  console.log(recipe, "recipe from action log")
  try {
    const { data } = await addRecipeApi(recipe);

    dispatch({
      type: actiontypes.ADD_RECIPE,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
}


