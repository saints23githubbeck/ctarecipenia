import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";

export const getAllNewsletter = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/subs`,
      method: "GET",
    });
    if (result.success === true) {
      dispatch({
        type: actiontypes.GET_ALL_NEWSLETTER,
        payload: result.newsletters,
      });
    }
  } catch (error) {}
};

export const setNewsletterLoading = (name, value) => ({
  type: actiontypes.LOADING_NEWSLETTER,
  payload: {
    name: name,
    value: value,
  },
});
export const setNewsletterError = (value) => ({
  type: actiontypes.NEWSLETTER_ERROR,
  payload: value,
});


