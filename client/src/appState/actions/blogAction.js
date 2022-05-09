import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";

export const getAllBlog = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/blogs`,
      method: "GET",
    });
    if (result.success === true) {
      dispatch({
        type: actiontypes.GET_ALL_BLOG,
        payload: result.blogs,
      });
    }
  } catch (error) {}
};
export const getBlogByID = (payload) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/blogs/${payload._id}`,
      method: "GET",
    });
    if (result.success === true) {
      dispatch({
        type: actiontypes.UPDATE_BLOG,
        payload: result.blogs,
      });
    }
  } catch (error) {}
};

export const handleBlogState = (name, value) => ({
  type: actiontypes.ADD_BLOG,
  payload: {
    name: name,
    value: value,
  },
});

export const setBlogLoading = (name, value) => ({
  type: actiontypes.LOADING_BLOG,
  payload: {
    name: name,
    value: value,
  },
});
export const setBlogError = (value) => ({
  type: actiontypes.BLOG_ERROR,
  payload: value,
});

export const submitBlog = (payload, onClose) => async (dispatch) => {
  try {
    dispatch(setBlogLoading("loading", true));
    const result = await httpRequest({
      url: `/blog/create`,
      method: "POST",
      body: JSON.stringify({ ...payload }),
    });
    console.log(result, "wait you");
    if (result.message === "Blog created") {
      dispatch(setBlogLoading("loading", false));
      dispatch(getAllBlog());
      onClose();
      dispatch({
        type: actiontypes.RESET_BLOG_STATE,
      });
    } else {
      dispatch(setBlogLoading("loading", false));
      dispatch(setBlogError(result.error));
    }
  } catch (error) {}
};

export const updateBlog = (payload, onClose) => async (dispatch) => {
  try {
    dispatch(setBlogLoading("loading", true));
    const result = await httpRequest({
      url: `/blogs/${payload._id}`,
      method: "PUT",
      body: JSON.stringify({ ...payload }),
    });
    console.log(result, "updated");
    if (result.status === 200 ) {
      dispatch(setBlogLoading("loading", false));
      dispatch(getAllBlog());
      onClose();
      dispatch({
        type: actiontypes.RESET_BLOG_STATE
      })
    } else {
      dispatch(setBlogLoading("loading", false));
      dispatch(setBlogError(result.error));

    }
  } catch (error) {}
};
