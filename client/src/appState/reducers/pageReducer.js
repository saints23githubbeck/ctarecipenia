import * as actiontypes from "../actionTypes";
const emptyState = {
  title: "",
  permalink: "",
  content: "",
};
const initialState = {
  pages: [],
  ...emptyState,
  loading: false,
  error: "",
};

export const page = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_ALL_PAGE:
      return {
        ...state,
        pages: action.payload,
      };
    case actiontypes.ADD_PAGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.LOADING_PAGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.PAGE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actiontypes.RESET_PAGE_STATE:
      return {
        ...state,
        ...emptyState,
      };
    case actiontypes.UPDATE_PAGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
