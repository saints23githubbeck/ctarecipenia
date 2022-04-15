// import * as actiontypes from "../actionTypes";
import * as actiontypes from "../actionTypes";

// export const Alert = (state = "", action) => {
//   switch (action.type) {
//     case actiontypes.UPDATE_ERROR:
//       return  action?.payload
//       break;
//     default:
//       return state
//   }
// }

export const logoutReducer = (state = true, action) => {
  switch (action.type) {
    case actiontypes.CLEAR_STORAGE:
      console.log("from reducer");
      return action?.payload;
    default:
      return state;
  }
};