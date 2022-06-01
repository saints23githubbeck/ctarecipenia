import * as actiontypes from "../actionTypes";

const emptyState = {
    title: "",
    slug: "",
    icon: "",
    permalink: "",   
};

  const initialState = {
    categories: [],
    ...emptyState,
    loading: false,
    error: "",
  };

  export const category = (state = initialState, action) => {
    switch (action.type) {
      case actiontypes.GET_ALL_CATEGORY:
        console.log("access2cat", action.type)
        console.log("All cat from reducer", action.payload)
        return {
          ...state,
          categories: action.payload,
        };
      case actiontypes.ADD_CATEGORY:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case actiontypes.LOADING_CATEGORY:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case actiontypes.CATEGORY_ERROR:
        return {
          ...state,
          error: action.payload,
        };
  
      case actiontypes.RESET_CATEGORY_STATE:
        return {
          ...state,
          ...emptyState,
        };
        case actiontypes.UPDATE_BLOG:
          return {
            ...state,
            [action.payload.name]: action.payload.value
          }
          
      default:
        return state;
    }
  };