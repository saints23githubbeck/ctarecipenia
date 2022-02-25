import * as actiontypes from "../actionTypes";


const islogged = localStorage.getItem("user")? true:false;


export const recipe = (state = {}, action) => {
  switch (action.type) {
    case actiontypes.ADD_RECIPE:
      return action.payload;
    default:
      return state;
  }
};