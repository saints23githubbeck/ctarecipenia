import * as actiontypes from "../actionTypes";


const islogged = localStorage.getItem("user")? true:false;

export const loggedIn = (state = islogged, action) => {
  switch (action.type) {
    case actiontypes.SET_IS_LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case actiontypes.SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action?.payload))
      return action.payload;
    case actiontypes.LOG_OUT:
       localStorage.clear();
      return {};
    default:
      return state;
  }
};

// export const auth = (state = {}, action) => {
//   switch (action.type) {
//     case actiontypes.AUTH :
//       localStorage.setItem("auth", JSON.stringify(action?.payload));
//       return { ...state, athdata: "loggedIn"}
//       break;
//       case actiontypes.LOG_OUT:
//         localStorage.clear();
//       return {...state, authdata: null}
//       ;
//       break;
//       case actiontypes.SIGN_IN:
//         localStorage.setItem("auth", JSON.stringify(action?.payload));
//       return {...state, authdata: action?.payload}
//       ;
//       case actiontypes.SIGN_UP:
//       return {...state, athdata: "signedUp"}
//       ;  
//     default:
//       return state
//       break;
//   }
// }