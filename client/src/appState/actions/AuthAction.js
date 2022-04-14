import * as actiontypes from "../actionTypes";
import { loginApi, signupApi } from "../../api";
import { setError } from "./Error";

export const signUp = (FormData) => async (dispatch) => {
  try {
    const { data } = await signupApi(FormData);
    console.log(data);

    dispatch({
      type: actiontypes.SIGN_UP,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logIn = (formData) => async (dispatch) => {
  try {
    const { data } = await loginApi(formData);
    dispatch({
      type: actiontypes.SIGN_IN,
      payload: true,
    });
    dispatch({
      type: actiontypes.SIGN_IN,
      payload: data,
    });
    console.log("successful", data);
  } catch (error) {
    console.log(error?.response?.data.msg);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: actiontypes.LOG_OUT,
  });
};
