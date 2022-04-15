import * as actiontypes from "../actionTypes";
// isLoggedIn: localStorage.getItem("user") ? true : false

const initialState = {
  isLoggedIn: true ,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).user
    : null,
  message: "",
};

// const initialState = {
//   isLoggedIn: false,
//   user:null,
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
    case actiontypes.LOG_OUT:
      console.log("from reducer");
      return {
        ...state,
        isLoggedIn: false,
        message: "signed out",
        user: null,
      };
    case actiontypes.CLEAR_STORAGE:
      console.log("from reducer");
      return {
        ...state,
        isLoggedIn: false,
        message: "signed out",
        user: null,
      };
    default:
      return state;
      break;
  }
};
