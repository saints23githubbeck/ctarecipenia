import * as actiontypes from "../actionTypes";

const initialState = {
  isLoggedIn: localStorage.getItem("user") ? true : false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).user
    : null,
  message: "",
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        message: "signed out",
        user: null,
      };
      break;
    case actiontypes.SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action?.payload));
      return {
        ...state,
        isLoggedIn: true,
        message: action?.payload.message,
        user: action?.payload.user,
      };
      break;
    case actiontypes.SIGN_UP:
      localStorage.setItem("user", JSON.stringify(action?.payload));
      return {
        ...state,
        isLoggedIn: true,
        message: action?.payload.message,
        user: action?.payload.user,
      };

    default:
      return state;
      break;
  }
};
