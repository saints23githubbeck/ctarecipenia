import * as actiontypes from "../actionTypes";

// const initialState = {
//   isLoggedIn: localStorage.getItem("user") ? true : false,
//   user: localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user")).user
//     : null,
//   message: "",
// };

// const initialState = {
//   isLoggedIn: true,
//   user: localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user")).user
//     : null,
//   message: "",
// };

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: null,
  message: "",
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    // case actiontypes.SIGN_IN:
    //   localStorage.setItem("user", JSON.stringify(action?.payload));
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //     message: action?.payload.message,
    //     user: action?.payload.user,
    //   };
    case actiontypes.SIGN_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        message: action?.payload.message,
        user: action?.payload.user,
      };
    case actiontypes.SIGN_UP:
      // localStorage.setItem("user", JSON.stringify(action?.payload))
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        message: action?.payload.message,
        user: action?.payload.user,
      };
    case actiontypes.LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actiontypes.SET_IS_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case actiontypes.GET_CURRENT_USER:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case actiontypes.SIGN_UP_FAILED:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        message: action.payload,
      };

    case actiontypes.UPDATE_USER:
      const token = JSON.parse(localStorage.getItem("user")).token;
      const updated = { token, ...action.payload };
      localStorage.setItem("user", JSON.stringify(updated));
      return {
        ...state,
        message: action?.payload.message,
        user: action?.payload.user,
      };
    case actiontypes.LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        message: "signed out",
        user: null,
      };
    default:
      return state;
  }
};
