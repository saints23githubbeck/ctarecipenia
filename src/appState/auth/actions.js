import * as actiontypes from "../actionTypes";
import { loginApi, signupApi } from "../../api/server";


export const logInUser = (FormData) => async(dispatch) => {
  console.log(FormData, "login from action log")
  try {
    const { data } = await loginApi(FormData);
    dispatch({
      type: actiontypes.SIGN_IN,
      payload: data
    })
    dispatch(setIsLoggedIn(true));
    console.log("successful", data)
  } catch (error) {
    console.log(error, "login error log");
  }
}

export const signUp = (FormData) => async(dispatch) => {
  console.log(FormData, "sign up from action log")
  try {
    const { data } = await signupApi(FormData);
    console.log(data);
  
    dispatch({
      type: actiontypes.SIGN_UP
    });
  } catch (error) {
    console.log(error);
  }
}

export const setIsLoggedIn = (data) => async(dispatch) => {
  console.log('set log from action logout')
    dispatch({
      type: actiontypes.SET_IS_LOGGED_IN,
      payload: data
    })
}


export const logOut = () => async(dispatch) =>{
  dispatch({
    type: actiontypes.LOG_OUT
  })
  dispatch(setIsLoggedIn(false));
}