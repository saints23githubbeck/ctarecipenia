import * as actiontypes from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
};

export const newsletter = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_ALL_NEWSLETTER:
      return {
        ...state,
        newsletters: action.payload,
      };
    
    case actiontypes.LOADING_NEWSLETTER:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case actiontypes.NEWSLETTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
