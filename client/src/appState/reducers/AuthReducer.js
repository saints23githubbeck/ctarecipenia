import * as actiontypes from "../actionTypes";

// const initialState = {
//   isLoggedIn: true,
//   user:null,
//   message: "",
// };
// isLoggedIn: localStorage.getItem("user") ? true : false,

const initialState = {
  isLoggedIn: true,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).user
    : null,
  message: "",
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action?.payload));
      console.log("from auth reducer login");
      return {
        ...state,
        isLoggedIn: true,
        message: action?.payload.message,
        user: action?.payload.user,
      };
    case actiontypes.SIGN_UP:
      localStorage.setItem("user", JSON.stringify(action?.payload));
      return {
        ...state,
        isLoggedIn: true,
        message: action?.payload.message,
        user: action?.payload.user,
      }
    case actiontypes.LOG_OUT:
      console.log("from reducer logout")
      return state
    // case actiontypes.CLEAR_STORAGE:
    //   console.log("from reducer");
    //   return {
    //     ...state,
    //     isLoggedIn: false,
    //     message: "signed out",
    //     user: null,
    //   };
    default:
      return state
  }
};


