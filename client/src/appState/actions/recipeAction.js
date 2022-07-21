import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";

export const getAllRecipes = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/recipes`,
      method: "GET",
    });
    if (result.length) {
      dispatch({
        type: actiontypes.GET_ALL_RECIPES,
        payload: result,
      });
    }
  } catch (error) {}
};
export const getRecipesBySlug = (payload) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/recipe/${payload.slug}`,
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
export const getRecipesByUser = (payload) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/${payload.username}/recipes`,
      method: "GET",
    });
    if (result.success === true) {
      dispatch({
        type: actiontypes.USER_RECIPE,
        payload: result.recipes,
      });
    }
  } catch (error) {}
};

export const addRecipeByAdmin = (payload, onClose) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setRecipesLoading("loading", true));
      const result = await httpRequest({
        url: `/admin/recipe`,
        method: "POST",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result, "wait you");
      if (result.message === "Recipe added") {
        dispatch(setRecipesLoading("loading", false));
        dispatch(getAllRecipes());
        onClose();
        dispatch({
          type: actiontypes.RESET_RECIPE_STATE,
        });
      } else {
        dispatch(setRecipesLoading("loading", false));
        dispatch(setRecipesError(result.error));
      }
    } catch (error) {}
  }
};

export const updateRecipeByAdmin = (payload, onClose) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setRecipesLoading("loading", true));
      const result = await httpRequest({
        url: `/admin/recipe/${payload.slug}`,
        method: "PUT",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("updated", payload);
      console.log(result, "updated");
      if (result.status === 200) {
        dispatch(setRecipesLoading("loading", false));
        dispatch(getAllRecipes());
        onClose();
        dispatch({
          type: actiontypes.RESET_RECIPE_STATE,
        });
      } else {
        dispatch(setRecipesLoading("loading", false));
        dispatch(setRecipesError(result.error));
      }
    } catch (error) {}
  }
};

export const addRecipeByUser = (payload, onClose) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setRecipesLoading("loading", true));
      const result = await httpRequest({
        url: `/recipe`,
        method: "POST",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result, "wait you");
      if (result.message === "Recipe added") {
        dispatch(setRecipesLoading("loading", false));
        dispatch(getAllRecipes());
        onClose();
        dispatch({
          type: actiontypes.RESET_RECIPE_STATE,
        });
      } else {
        dispatch(setRecipesLoading("loading", false));
        dispatch(setRecipesError(result.error));
      }
    } catch (error) {}
  }
};

export const updateRecipeByUser = (payload, onClose) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setRecipesLoading("loading", true));
      const result = await httpRequest({
        url: `/recipe/${payload.slug}`,
        method: "PUT",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("updated", payload);
      console.log(result, "updated");
      if (result.status === 200) {
        dispatch(setRecipesLoading("loading", false));
        dispatch(getAllRecipes());
        onClose();
        dispatch({
          type: actiontypes.RESET_RECIPE_STATE,
        });
      } else {
        dispatch(setRecipesLoading("loading", false));
        dispatch(setRecipesError(result.error));
      }
    } catch (error) {}
  }
};

export const handleRecipeState = (name, value) => ({
  type: actiontypes.ADD_RECIPE,
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
