import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/blogs`,
      method: "GET",
    });
    console.log("getAllBlog", result);
    if (result.success === true) {
      dispatch({
        type: actiontypes.GET_ALL_BLOG,
        payload: result.blogs,
      });
    }
  } catch (error) {}
};
export const getBlogBySlug = (payload) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/blog/${payload.slug}`,
      method: "GET",
    });
    console.log("getBlogBySlug", result);
    if (result.success === true) {
      dispatch({
        type: actiontypes.GET_ALL_BLOG,
        payload: result.blogs,
      });
    }
  } catch (error) {}
};
export const getBlogByUser = (payload) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/${payload.slug}/blog`,
      method: "GET",
    });
    console.log("getBlogByUser", result);
    if (result.success === true) {
      dispatch({
        type: actiontypes.GET_ALL_BLOG,
        payload: result.blogs,
      });
    }
  } catch (error) {}
};

export const addBlogByAdmin = (payload, onClose) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setBlogLoading("loading", true));
      const result = await httpRequest({
        url: `/admin/blog/${payload.slug}`,
        method: "POST",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result, "wait you");
      if (result.message === "Blog created") {
        dispatch(setBlogLoading("loading", false));
        dispatch(getAllBlogs());
        onClose();
        dispatch({
          type: actiontypes.RESET_BLOG_STATE,
        });
      } else {
        dispatch(setBlogLoading("loading", false));
        dispatch(setBlogError(result.error));
      }
    } catch (error) {}
  }
};

export const updateBlogAdmin = (payload, onClose) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setBlogLoading("loading", true));
      const result = await httpRequest({
        url: `/admin/blog/${payload._id}`,
        method: "PUT",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("updated", payload);
      console.log(result, "updated");
      if (result.status === 200) {
        dispatch(setBlogLoading("loading", false));
        dispatch(getAllBlogs());
        onClose();
        dispatch({
          type: actiontypes.RESET_BLOG_STATE,
        });
      } else {
        dispatch(setBlogLoading("loading", false));
        dispatch(setBlogError(result.error));
      }
    } catch (error) {}
  }
};

export const addBlogByUser = (payload, onClose) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setBlogLoading("loading", true));
      const result = await httpRequest({
        url: `/user/blog/${payload.slug}`,
        method: "POST",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result, "addBlogByUser");
      if (result.message === "Blog created") {
        dispatch(setBlogLoading("loading", false));
        dispatch(getAllBlogs());
        onClose();
        dispatch({
          type: actiontypes.RESET_BLOG_STATE,
        });
      } else {
        dispatch(setBlogLoading("loading", false));
        dispatch(setBlogError(result.error));
      }
    } catch (error) {}
  }
};

export const updateBlogUser = (payload, onClose) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setBlogLoading("loading", true));
      const result = await httpRequest({
        url: `/user/blog/${payload._id}`,
        method: "PUT",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(" updateBlogUser updated", payload);
      console.log(result, "updateBlogUser updated");
      if (result.status === 200) {
        dispatch(setBlogLoading("loading", false));
        dispatch(getAllBlogs());
        onClose();
        dispatch({
          type: actiontypes.RESET_BLOG_STATE,
        });
      } else {
        dispatch(setBlogLoading("loading", false));
        dispatch(setBlogError(result.error));
      }
    } catch (error) {}
  }
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
