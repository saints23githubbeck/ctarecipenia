import * as actiontypes from "../actionTypes";

export const profile = (state = {}, action) => {
  switch (action.type) {
    case actiontypes.GET_PROFILE:
      return {
        ...state,
        profile: action?.payload,
      };
    default:
      return state;
  }
};


