import * as actiontypes from "../actionTypes";
import { loginApi, signupApi, updateUserApi } from "../../api";

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



export const updateUser = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await updateUserApi(userData);
     console.log(data ,"data log action redux");
    dispatch({
      type: actiontypes.UPDATE_USER,
      payload: data,
    });
    navigate("/user-dashboard");
    console.log("successful", data);
  } catch (error) {
    console.log("errorno update action redux");
  }
};

export const logOutAction = (navigate) => async (dispatch) => {
  dispatch({
    type: actiontypes.LOG_OUT,
  })
  navigate("/")
};
