import * as actiontypes from "../actionTypes";
import { httpRequest, loginApi, signupApi, updateUserApi } from "../../api";

export const setIsLoading = (value) => ({
  type: actiontypes.LOADING,
  payload: value,
});
export const setIsLoggedIn = (value) => ({
  type: actiontypes.SET_IS_LOGIN,
  payload: value,
});

export const signUp = (FormData, navigate) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: `/register`,
      method: "POST",
      body: JSON.stringify({ ...FormData }),
    });
    console.log(result);
    if (result.success === true) {
      dispatch(setIsLoading(false));
      localStorage.setItem("auth", result.token);
      dispatch({
        type: actiontypes.SIGN_UP,
        payload: {
          isLoggedIn: true,
          message: result.message,
          user: result.user,
        },
      });
      navigate("/user-dashboard");
      console.log(result);
    } else {
      dispatch(setIsLoading(false));
      dispatch({
        type: actiontypes.SIGN_UP_FAILED,
        payload: result.message || "check details",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logIn = (formData, navigate, history) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await httpRequest({
      url: history === "/admin"?"/admin/user" : `/login`,
      method: "POST",
      body: JSON.stringify({ ...formData }),
    });
    console.log(result);
    if (result.token) {
      dispatch(setIsLoading(false));
      localStorage.setItem("auth", result.token);
      dispatch({
        type: actiontypes.SIGN_IN,
        payload: {
          isLoggedIn: true,
          message: result.message,
          user: result.user,
        },
      });
      if(history === "/admin"){
        navigate("/admin/dashboard");
      } else {
        navigate("/user-dashboard");
      };
      console.log(result);
    } else {
      dispatch(setIsLoading(false));
      dispatch({
        type: actiontypes.SIGN_IN_FAILED,
        payload: result.message || "check details",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (userData) => async (dispatch) => {
  let token = localStorage.getItem("auth");
  if (token) {
    const result = await httpRequest({
      url: "/profile-update",
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...userData }),
    });
    console.log(result);
  }
};

export  const fetchProfile = () => async(dispatch)=> {
  let token =  localStorage.getItem("auth");
  if (token) {
    const result = await httpRequest({
      url: "/me",
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}` 
      },
    });
   if (result.user) {
    dispatch({
      type: actiontypes.GET_CURRENT_USER,
      payload: {
        isLoggedIn: true,
        user: result.user,
      }
   });
  }
}
}
// export const updateUser = (userData, navigate) => async (dispatch) => {
//   try {
//     const { data } = await updateUserApi(userData);
//     console.log(data, "data log action redux");
//     dispatch({
//       type: actiontypes.UPDATE_USER,
//       payload: data,
//     });
//     navigate("/user-dashboard");
//     console.log("successful", data);
//   } catch (error) {
//     console.log("errorno update action redux");
//   }
// };

export const logOutAction = (navigate) => async (dispatch) => {
  dispatch({
    type: actiontypes.LOG_OUT,
  });
  navigate("/");
};
