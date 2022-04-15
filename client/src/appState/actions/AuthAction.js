import * as actiontypes from "../actionTypes";
import { loginApi, signupApi } from "../../api";

export const signUp = (FormData, navigate) => async (dispatch) => {
  try {
    const { data } = await signupApi(FormData);
    console.log(data);

    dispatch({
      type: actiontypes.SIGN_UP,
    });
    navigate("/user-dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const logIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await loginApi(formData);
    dispatch({
      type: actiontypes.SIGN_IN,
      payload: data,
    });
    navigate("/user-dashboard");
    console.log("successful", data);
  } catch (error) {
    console.log(error?.response?.data.msg);
  }
};

export const ds = (navigate) => async (dispatch) => {
  console.log("logout");
  localStorage.clear();
  dispatch({
    type: actiontypes.LOG_OUT,
  });
  
  // dispatch({
  //   type: actiontypes.CLEAR_STORAGE,
  // });

  navigate("/");
};

export const logOutAction = (navigate) => {
  console.log("logout action 1");
  localStorage.clear();
  navigate("/");
  return {
    type: actiontypes.CLEAR_STORAGE,
    payload: "clear",
  };
};
