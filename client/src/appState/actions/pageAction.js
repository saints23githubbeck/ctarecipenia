import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";

export const getAllPage = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/pages`,
      method: "GET",
    });
      console.log("getAllPage", result)
    if (result.success === true) {
      dispatch({
        type: actiontypes.GET_ALL_PAGE,
        payload: result.pages,
      });
    }
  } catch (error) {}
};

export const addPage = (payload, onClose) => async (dispatch) => {
    let token = localStorage.getItem("auth");
    if (token) {
      try {
        dispatch(setPageLoading("loading", true));
        const result = await httpRequest({
          url: `/admin/page/add`,
          method: "POST",
          body: JSON.stringify({ ...payload }),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result, "Page added");
        if (result.message === "Page created") {
          dispatch(setPageLoading("loading", false));
          dispatch(getAllPage());
          onClose();
          dispatch({
            type: actiontypes.RESET_PAGE_STATE,
          });
        } else {
          dispatch(setPageLoading("loading", false));
          dispatch(setPageError(result.error));
        }
      } catch (error) {}
    }
  };

  export const updatePage = (payload, onClose) => async (dispatch) => {
    let token = localStorage.getItem("auth");
    if (token) {
      try {
        dispatch(setPageLoading("loading", true));
        const result = await httpRequest({
          url: `/admin/page/${payload.slug}`,
          method: "PUT",
          body: JSON.stringify({ ...payload }),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Page updated", payload);
        console.log(result, "updated Page");
        if (result.status === 200) {
          dispatch(setPageLoading("loading", false));
          dispatch(getAllPage());
          onClose();
          dispatch({
            type: actiontypes.RESET_PAGE_STATE,
          });
        } else {
          dispatch(setPageLoading("loading", false));
          dispatch(setPageError(result.error));
        }
      } catch (error) {}
    }
  };

export const handlePageState = (name, value) => ({
  type: actiontypes.ADD_PAGE,
  payload: {
    name: name,
    value: value,
  },
});

export const setPageLoading = (name, value) => ({
  type: actiontypes.LOADING_PAGE,
  payload: {
    name: name,
    value: value,
  },
});
export const setPageError = (value) => ({
  type: actiontypes.PAGE_ERROR,
  payload: value,
});

