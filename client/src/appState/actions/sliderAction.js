import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";

export const getAllSlider = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/sliders`,
      method: "GET",
    });
      console.log("getAllSlider", result)
    if (result.sliders) {
      dispatch({
        type: actiontypes.GET_ALL_SLIDER,
        payload: result.sliders,
      });
    }
  } catch (error) {}
};

export const addSlider = (payload, onClose) => async (dispatch) => {
    let token = localStorage.getItem("auth");
    if (token) {
      try {
        dispatch(setSliderLoading("loading", true));
        const result = await httpRequest({
          url: `/admin/slider/add`,
          method: "POST",
          body: JSON.stringify({ ...payload }),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result, "slider added");
        if (result.message === "slide created") {
          dispatch(setSliderLoading("loading", false));
          dispatch(getAllSlider());
          onClose();
          dispatch({
            type: actiontypes.RESET_SLIDER_STATE,
          });
        } else {
          dispatch(setSliderLoading("loading", false));
          dispatch(setSliderError(result.error));
        }
      } catch (error) {}
    }
  };

  export const updateSlider = (payload, onClose) => async (dispatch) => {
    let token = localStorage.getItem("auth");
    if (token) {
      try {
        dispatch(setSliderLoading("loading", true));
        const result = await httpRequest({
          url: `/slider/${payload.slug}`,
          method: "PUT",
          body: JSON.stringify({ ...payload }),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Slider updated", payload);
        console.log(result, "updated Slider");
        if (result.status === 200) {
          dispatch(setSliderLoading("loading", false));
          dispatch(getAllSlider());
          onClose();
          dispatch({
            type: actiontypes.RESET_SLIDER_STATE,
          });
        } else {
          dispatch(setSliderLoading("loading", false));
          dispatch(setSliderError(result.error));
        }
      } catch (error) {}
    }
  };

export const handleSliderState = (name, value) => ({
  type: actiontypes.ADD_SLIDER,
  payload: {
    name: name,
    value: value,
  },
});

export const setSliderLoading = (name, value) => ({
  type: actiontypes.LOADING_SLIDER,
  payload: {
    name: name,
    value: value,
  },
});
export const setSliderError = (value) => ({
  type: actiontypes.SLIDER_ERROR,
  payload: value,
});

