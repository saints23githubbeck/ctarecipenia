import * as actiontypes from "../actionTypes";

const emptyState = {
        title:"",
        content: "",
        image: "",
        tags: [],
};
const initialState = {
  blogs: [],
  ...emptyState,
  loading: false,
  error: "",
};

export const recipe = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_ALL_BLOG:
      return {
        ...state,
        recipes: action.payload,
      };
    case actiontypes.ADD_BLOG:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.LOADING_BLOG:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.BLOG_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actiontypes.RESET_BLOG_STATE:

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
