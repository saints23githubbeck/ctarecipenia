import * as actiontypes from "../actionTypes";

const initialState = {
  isLoggedIn: localStorage.getItem("user") ? true : false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).user
    : null,
  message: "",
};

// const initialState = {
//   isLoggedIn: true,
//   user: localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user")).user
//     : null,
//   message: "",
// };

export const user = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action?.payload))
      return {
        ...state,
        isLoggedIn: true,
        message: action?.payload.message,
        user: action?.payload.user,
      };
    case actiontypes.SIGN_UP:
      localStorage.setItem("user", JSON.stringify(action?.payload))
      return {
        ...state,
        isLoggedIn: true,
        message: action?.payload.message,
        user: action?.payload.user,
      };
    case actiontypes.UPDATE_USER:
     const token = JSON.parse(localStorage.getItem("user")).token
      const updated = {token, ...action.payload }
      localStorage.setItem("user", JSON.stringify(updated));
      return {
        ...state,
        message: action?.payload.message,
        user: action?.payload.user,
      };
    case actiontypes.LOG_OUT:
      localStorage.clear()
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


