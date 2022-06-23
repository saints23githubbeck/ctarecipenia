import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";

export const getAllAds = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/ads`,
      method: "GET",
    });
      console.log("getAllAdvert", result)
    if (result.success === true) {
      dispatch({
        type: actiontypes.GET_ALL_ADVERT,
        payload: result.ads,
      });
    }
  } catch (error) {}
};

export const addAds = (payload, onClose) => async (dispatch) => {
    let token = localStorage.getItem("auth");
    if (token) {
      try {
        dispatch(setAdsLoading("loading", true));
        const result = await httpRequest({
          url: `/ads/add`,
          method: "POST",
          body: JSON.stringify({ ...payload }),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result, "Ads added");
        if (result.message === "Ads created") {
          dispatch(setAdsLoading("loading", false));
          dispatch(getAllAds());
          onClose();
          dispatch({
            type: actiontypes.RESET_ADVERT_STATE,
          });
        } else {
          dispatch(setAdsLoading("loading", false));
          dispatch(setAdsError(result.error));
        }
      } catch (error) {}
    }
  };

  export const updateAds = (payload, onClose) => async (dispatch) => {
    let token = localStorage.getItem("auth");
    if (token) {
      try {
        dispatch(setAdsLoading("loading", true));
        const result = await httpRequest({
          url: `/ads/${payload.slug}`,
          method: "PUT",
          body: JSON.stringify({ ...payload }),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("ads updated", payload);
        console.log(result, "updated ads");
        if (result.status === 200) {
          dispatch(setAdsLoading("loading", false));
          dispatch(getAllAds());
          onClose();
          dispatch({
            type: actiontypes.RESET_ADVERT_STATE,
          });
        } else {
          dispatch(setAdsLoading("loading", false));
          dispatch(setAdsError(result.error));
        }
      } catch (error) {}
    }
  };

export const handleAdsState = (name, value) => ({
  type: actiontypes.ADD_ADVERT,
  payload: {
    name: name,
    value: value,
  },
});

export const setAdsLoading = (name, value) => ({
  type: actiontypes.LOADING_ADVERT,
  payload: {
    name: name,
    value: value,
  },
});
export const setAdsError = (value) => ({
  type: actiontypes.ADVERT_ERROR,
  payload: value,
});

