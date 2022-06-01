import * as actiontypes from "../actionTypes";
const emptyState = {
    title: "",
    permLink: "",
    prepareTime: "",
    cookTime: "",
    shortDesc: "", 
    description:"",
    postedBy: "",
    metaDescription: "",
    image:  "",
};
const initialState = {
  blogs: [],
  ...emptyState,
  loading: false,
  error: "",
};

export const blog = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_ALL_BLOG:
      return {
        ...state,
        blogs: action.payload,
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
