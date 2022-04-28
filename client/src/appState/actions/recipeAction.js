import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";

export const getALLRecipes = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/recipes`,
      method: "GET",
    });
    if (result.success === true) {
      dispatch({
        type: actiontypes.GET_ALL_RECIPES,
        payload: result.recipes,
      });
    }
  } catch (error) {}
};
export const getRecipesByID = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/recipe/:recipeId`,
      method: "GET",
    });
    if (result.success === true) {
      dispatch({
        type: actiontypes.UPDATE_RECIPE,
        payload: result.recipes,
      });
    }
  } catch (error) {}
};

export const handleRecipeState = (name, value) => ({
  type: actiontypes.EDIT_RECIPE_STATE,
  payload: {
    name: name,
    value: value,
  },
});

export const setRecipesLoading = (name, value) => ({
  type: actiontypes.LOADING_RECIPE,
  payload: {
    name: name,
    value: value,
  },
});
export const setRecipesError = (value) => ({
  type: actiontypes.RECIPE_ERROR,
  payload: value,
});

export const submitRecipe = (payload, onClose) => async (dispatch) => {
  try {
    dispatch(setRecipesLoading("loading", true));
    const result = await httpRequest({
      url: `/add-recipe`,
      method: "POST",
      body: JSON.stringify({ ...payload }),
    });
    console.log(result, "wait you");
    if (result.message === "Recipe added") {
      dispatch(setRecipesLoading("loading", false));
      dispatch(getALLRecipes());
      onClose();
      dispatch({
        type: actiontypes.RESET_RECIPE_STATE,
      });
    } else {
      dispatch(setRecipesLoading("loading", false));
      dispatch(setRecipesError(result.error));
    }
  } catch (error) {}
};

export const updateRecipe = (payload, onClose) => async (dispatch) => {
  try {
    dispatch(setRecipesLoading("loading", true));
    const result = await httpRequest({
      url: `/recipe/:recipeId`,
      method: "PUT",
      body: JSON.stringify({ ...payload }),
    });
    console.log(result, "updated");
    if (result.status === 200 ) {
      dispatch(setRecipesLoading("loading", false));
      dispatch(getALLRecipes());
      dispatch({
        type: actiontypes.RESET_RECIPE_STATE
      })
    } else {
      dispatch(setRecipesLoading("loading", false));
      dispatch(setRecipesError(result.error));

    }
  } catch (error) {}
};
