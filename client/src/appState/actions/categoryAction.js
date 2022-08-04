import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";

export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/categories`,
      method: "GET",
    });
    console.log("getAllCategories", result);
    // if (result.success === true) {
    if (result?.length > 0) {
      dispatch({
        type: actiontypes.GET_ALL_CATEGORY,
        payload: result,
      });
    }
  } catch (error) {}
};

export const getCategoryBySlug = (payload) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/admin/category/${payload.slug}`,
      method: "GET",
    });
    if (result.success === true) {
      dispatch({
        type: actiontypes.UPDATE_CATEGORY,
        payload: result.categories,
      });
    }
  } catch (error) {}
};

export const addCategory = (payload, onClose) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setCategoryLoading("loading", true));
      const result = await httpRequest({
        url: `/admin/category`,
        method: "POST",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("AddCatResult", result);
      if (result.title) {
        dispatch(setCategoryLoading("loading", false));
        dispatch(getAllCategories());
        onClose();
        dispatch({
          type: actiontypes.RESET_CATEGORY_STATE,
        });
      } else {
        dispatch(setCategoryLoading("loading", false));
        dispatch(setCategoryError(result.error));
      }
    } catch (error) {}
  }
};

export const handleCategoryState = (name, value) => ({
  type: actiontypes.ADD_CATEGORY,
  payload: {
    name: name,
    value: value,
  },
});

export const setCategoryLoading = (name, value) => ({
  type: actiontypes.LOADING_CATEGORY,
  payload: {
    name: name,
    value: value,
  },
});
export const setCategoryError = (value) => ({
  type: actiontypes.CATEGORY_ERROR,
  payload: value,
});
