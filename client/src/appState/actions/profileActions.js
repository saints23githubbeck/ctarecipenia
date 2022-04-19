import * as actiontypes from "../actionTypes";
import { getProfileApi } from "../../api";

export const getProfile = (username) => (dispatch) => {
  const { data } = getProfileApi(username);
  try {
    dispatch({
      type: actiontypes.GET_PROFILE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
