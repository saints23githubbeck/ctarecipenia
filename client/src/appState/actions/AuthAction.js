import * as actiontypes from "../actionTypes";
import { loginApi, signupApi } from "../../Api/index";
import { setError } from "./Error";


export const auth = (authInfo, history) => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.AUTH,
      payload: authInfo
    })
    
    history.replace('/home');
  } catch (error) {
    console.log(error);
  }
}

export const logout = () => async(dispatch) => {
  dispatch({
    type: actiontypes.LOG_OUT,
  })

  dispatch({
    type: actiontypes.APP_CLEAR,
    payload: false
  })

}

export const logIn = (FormData, history) => async(dispatch) => {
  
  try {
    const { data } = await loginApi(FormData);
    dispatch({
      type: actiontypes.APP_SET_LOGGED_IN,
      payload: true
    })
    dispatch({
      type: actiontypes.SIGN_IN,
      payload: data
    })

    
    console.log("successful", data)

  } catch (error) {
    dispatch(setError(error?.response?.data.msg))
    console.log(error?.response?.data.msg);
  }
}

export const signUp = (FormData, history) => async(dispatch) => {
  try {
    const { data } = await signupApi(FormData);
    console.log(data);
  
    dispatch({
      type: actiontypes.SIGN_UP
    });
    history.push("/");

  } catch (error) {
    console.log(error);
  }
}

