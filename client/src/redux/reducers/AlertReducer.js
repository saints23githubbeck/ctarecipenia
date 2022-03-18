import * as actiontypes from "../actionTypes";


export const Alert = (state = "", action) => {
  switch (action.type) {
    case actiontypes.UPDATE_ERROR:
      return  action?.payload
      break;
    default:
      return state
  }
}