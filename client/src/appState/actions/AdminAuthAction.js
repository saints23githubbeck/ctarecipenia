import { httpRequest } from "../../api";
import * as actiontypes from "../actionTypes";
import { setIsLoading } from "./AuthAction";
import { getAllBlogs } from "./blogAction";
import { getAllCategories } from "./categoryAction";
import { getALLRecipes } from "./recipeAction";


export const getAllAdmin= () => async (dispatch) => {
  let token =  localStorage.getItem("auth");
  if (token) {
    try {
      dispatch(setIsLoading(true));
      const result = await httpRequest({
        url: `/admins`,
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}` 
        },
      });
      console.log("getAllAdmin", result)
      if (!result?.error) {
        dispatch({
          type: actiontypes.GET_ALL_ADMIN,
          payload: result.admins,
        });
      }
    } catch (error) {}
    }
};
  
export const registerAdmin = (payload, onClose) => async (dispatch) => {
    let token =  localStorage.getItem("auth");
    if (token) {
    try {
      dispatch(setUserLoading("loading", true));
      const result = await httpRequest({ 
        url: `/admin/add-admin`,
        method: "POST",
        body: JSON.stringify({ ...payload }),
        headers: {
          "Authorization": `Bearer ${token}` 
        },
      });
      // console.log("registerAdmin", result);
      if (result.message) {
        dispatch(setUserLoading("loading", false));
        dispatch(getAllAdmin());
        onClose();
        dispatch({
          type: actiontypes.RESET_USER_STATE,
        });
      
      } else {
        dispatch(setUserLoading("loading", false));
        dispatch(setUserError(result.error));
      }
    } catch (error) {}
  }
};

export const getAllSubscribers= () => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const result = await httpRequest({
        url: `/admin/users`,
        method: "GET",
      });
      // console.log("getAlluser", result)

      if (!result?.error) {
        dispatch({
          type: actiontypes.GET_ALL_USER,
          payload: result.subscribers,
        });
      }
    } catch (error) {}
};
  
export const registerUserByAdmin = (payload, onClose) => async (dispatch) => {
    let token =  localStorage.getItem("auth");
    if (token) {
    try {
      dispatch(setUserLoading("loading", true));
      const result = await httpRequest({
        url: `/admin/add-user`,
        method: "POST",
        body: JSON.stringify({ ...payload }),
        headers: {
          "Authorization": `Bearer ${token}` 
        },
      });
     
      console.log("registerUserByAdmin", result);
      if (result.success) {
        dispatch(setUserLoading("loading", false));
        dispatch(getAllSubscribers());
        onClose();
        dispatch({
          type: actiontypes.RESET_USER_STATE,
        });
      
      } else {
        dispatch(setUserLoading("loading", false));
        dispatch(setUserError(result.error));
      }
    } catch (error) {}
  }
};

export const adminLogin = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const result = await httpRequest({
        url: `/login`,
        method: "POST",
        body: JSON.stringify({ ...formData }),
      });
      if (result.token) {
        dispatch(setIsLoading(false));
        localStorage.setItem("auth", result.token);
          dispatch(getALLRecipes());
          dispatch(getAllSubscribers());
          dispatch(getAllAdmin());
          dispatch(getAllBlogs());
          dispatch(getAllCategories());
        dispatch({
          type: actiontypes.ADMIN_LOGIN,
          payload: {
            isLoggedIn: true,
            message: result.message,
            user: result.user,
          },
        });
          navigate("/admin/dashboard");
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

export  const getAdminProfile = () => async(dispatch)=> {
    let token =  localStorage.getItem("auth");
    if (token) {
      const result = await httpRequest({
        url: `/admin/me`,
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}` 
        },
      });
      // console.log("getAdminProfile", result)
     if (result.user) {
      dispatch({
        type: actiontypes.GET_CURRENT_ADMIN,
        payload: {
          isLoggedIn: true,
          user: result.user,
        }
     });
    }
  }
};

export const updateUserByAdmin = (payload, onClose) => async (dispatch) => {
    let token = localStorage.getItem("auth");
    if (token) {
  try {
    dispatch(setUserLoading("loading", true));
      const result = await httpRequest({
        url: "/profile/update",
        method: "PUT",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("updateUserByAdmin", result);
    if (result.status ) {
      dispatch(setUserLoading("loading", false));
      dispatch(getAllSubscribers());
      onClose();
      dispatch({
        type: actiontypes.RESET_USER_STATE
      })
    } else {
      dispatch(setUserLoading("loading", false));
      dispatch(setUserError(result.error));
    }
    } catch (error) {}
  }
};
export const updateAdminByAdmin = (payload, onClose) => async (dispatch) => {
    let token = localStorage.getItem("auth");
    if (token) {
  try {
    dispatch(setUserLoading("loading", true));
      const result = await httpRequest({
        url: "/admin/update",
        method: "PUT",
        body: JSON.stringify({ ...payload }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("updateAdminByAdmin", result);
    if (result.status ) {
      dispatch(setUserLoading("loading", false));
      dispatch(getAllAdmin());
      onClose();
      dispatch({
        type: actiontypes.RESET_USER_STATE
      })
    } else {
      dispatch(setUserLoading("loading", false));
      dispatch(setUserError(result.error));
    }
    } catch (error) {}
  }
};

export const getUserBySlugByAdmin = () => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const result = await httpRequest({
        url: `/admin/user/:slug`,
        method: "GET",
      });
      if (result.success === true) {
        dispatch({
          type: actiontypes.ADMIN_UPDATE_USERS,
          payload: result.users,
        });
      }
    } catch (error) {} 
};
  

export const adminLogoutAction = (navigate) => async (dispatch) => {
    dispatch({
      type: actiontypes.ADMIN_LOGOUT,
    });
    navigate("/admin");
};

export const setUserLoading = (name, value) => ({
    type: actiontypes.LOADING_USER,
    payload: {
      name: name,
      value: value,
    },
});

export const setUserError = (value) => ({
    type: actiontypes.USER_ERROR,
    payload: value,
});

export const handleState = (name, value) => ({
    type: actiontypes.ADD_INPUT,
    payload: {
      name: name,
      value: value,
    },
});