import * as actiontypes from "../actionTypes";


export const error = (state = "", action) => {
  switch (action.type) {
    case actiontypes.SET_ERROR:
    return action?.payload;
    break;
    case actiontypes.CLEAR_ERROR:
    return  state = "";
    break;
    default:
      return state
  }
}